import React, {useEffect, useState} from "react"
import { Keyboard, ToastAndroid as Toast } from "react-native"
import { Button, Container, Row, Text, Title } from "./styles"
import HoursForm from "../../components/Forms/HoursForm"
import Loader from "../../components/Loader"
import { Formik } from "formik"
import * as yup from "yup"
import { useDispatch } from "react-redux"
import userThunk from "../../thunks/user.thunks"


export default ({navigation, route}) => {
  const [keyboardShow, setKeyboardShow] = useState(false)
  const dispatch = useDispatch()
  const validations = yup.object().shape({
    mon: yup.object({
      label: yup.string().required('Campo obrigatório'),
      from: yup.string().required('Campo obrigatório'),
      to: yup.string().required('Campo obrigatório'),
    }),
    tue: yup.object({
      label: yup.string().required('Campo obrigatório'),
      from: yup.string().required('Campo obrigatório'),
      to: yup.string().required('Campo obrigatório'),
    }),
    wed: yup.object({
      label: yup.string().required('Campo obrigatório'),
      from: yup.string().required('Campo obrigatório'),
      to: yup.string().required('Campo obrigatório'),
    }),
    thu: yup.object({
      label: yup.string().required('Campo obrigatório'),
      from: yup.string().required('Campo obrigatório'),
      to: yup.string().required('Campo obrigatório'),
    }),
    fri: yup.object({
      label: yup.string().required('Campo obrigatório'),
      from: yup.string().required('Campo obrigatório'),
      to: yup.string().required('Campo obrigatório'),
    }),
    sat: yup.object({
      label: yup.string().required('Campo obrigatório'),
      from: yup.string().required('Campo obrigatório'),
      to: yup.string().required('Campo obrigatório'),
    }),
    sun: yup.object({
      label: yup.string().required('Campo obrigatório'),
      from: yup.string().required('Campo obrigatório'),
      to: yup.string().required('Campo obrigatório'),
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

  return (
    <Formik
      initialValues={route.params}
      enableReinitialize={true}
      validationSchema={validations}
      onSubmit={(values, {resetForm, setSubmitting}) => {
        setSubmitting(true)

        dispatch(userThunk.update({openingHours: values})).then(result => {
          setSubmitting(false)
          if (result.error)
            return Toast.show(result.message, Toast.LONG)
          resetForm()
          return navigation.goBack()
        })
      }}
    >
      {({values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting}) => (
        <Container>
          <Title>Opening Hours Form</Title>
          
          <HoursForm
            state={values}
            setState={handleChange}
            errors={errors}
            touched={touched}
            handleBlur={handleBlur}
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