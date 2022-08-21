import React, {useEffect, useState} from "react"
import { Keyboard, ToastAndroid as Toast } from "react-native"
import { Button, Container, Row, Text, Title } from "./styles"
import AddressForm from "../../components/Forms/AddressForm"
import Loader from "../../components/Loader"
import { Formik } from "formik"
import * as yup from "yup"
import { useDispatch } from "react-redux"
import userThunk from "../../thunks/user.thunks"


export default ({navigation, route}) => {
  const [keyboardShow, setKeyboardShow] = useState(false)
  const [initialValues, setInitialValues] = useState({})
  const [isEditing, setIsEditing] = useState(false)
  const dispatch = useDispatch()
  const validations = yup.object().shape({
    address: yup.object({
      zipcode: yup.string().required('Campo obrigatório'),
      streetName: yup.string().required('Campo obrigatório'),
      number: yup.string().required('Campo obrigatório'),
      complement: yup.string(),
      district: yup.string().required('Campo obrigatório'),
      city: yup.string().required('Campo obrigatório'),
      state: yup.string().required('Campo obrigatório')
    })
  })

  useEffect(() => {
    const keyboardShowListener = Keyboard.addListener('keyboardDidShow', () => setKeyboardShow(true))
    const keyboardHideListener = Keyboard.addListener('keyboardDidHide', () => setKeyboardShow(false))
    return () => {
      keyboardShowListener.remove()
      keyboardHideListener.remove()
    }
  }, [])

  useEffect(() => {
    if (route.params) {
      setInitialValues({ address: route.params })
      setIsEditing(true)
    } else {
      setInitialValues({})
      setIsEditing(false)
    }
  }, [])

  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize={true}
      validationSchema={validations}
      onSubmit={(values, {resetForm, setSubmitting}) => {
        setSubmitting(true)

        // console.log('VALUES', values);

        isEditing ?
        dispatch(userThunk.updateAddress(values.address)).then(result => {
          setSubmitting(false)
          if (result.error)
            return Toast.show(result.message, Toast.LONG)
          resetForm()
          return navigation.goBack()
        })
        :
        dispatch(userThunk.includeAddress(values)).then(result => {
          setSubmitting(false)
          if(result.error)
            return Toast.show(result.message, Toast.LONG)
          resetForm()
          return navigation.goBack()
        })
      }}
    >
      {({values, errors, touched, handleChange, handleBlur, handleSubmit, setFieldValue, isSubmitting}) => (
        <Container>
          <Title>Address Form</Title>
          
          <AddressForm
            state={values}
            setState={handleChange}
            errors={errors}
            touched={touched}
            handleBlur={handleBlur}
            setFieldValue={setFieldValue}
          />

          {!keyboardShow &&
            <Row>
              <Button onPress={() => navigation.goBack()}>
                <Text>Cancelar</Text>
              </Button>

              <Button onPress={handleSubmit}>
                <Text>Salvar</Text>
              </Button>
            </Row>
          }

          {isSubmitting && <Loader/>}
        </Container>
      )}
    </Formik>
  )
}