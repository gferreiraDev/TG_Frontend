import React, {useEffect, useState} from "react"
import { Keyboard, ToastAndroid as Toast } from "react-native"
import { Button, Container, Row, Scroll, Text, Title } from "./styles"
import ProductForm from "../../components/Forms/ProductForm"
import Loader from "../../components/Loader"
import { Formik } from "formik"
import * as yup from "yup"
import api from "../../services/api"

export default ({navigation, route}) => {
  const [keyboardShow, setKeyboardShow] = useState(false)
  const [initialValues, setInitialValues] = useState({})
  const [isEditing, setIsEditing] = useState(false)
  const validations = yup.object().shape({
    sku: yup.string().required('Campo obrigatório'),
    category: yup.string().required('Campo obrigatório'),
    productName: yup.string().required('Campo obrigatório'),
    trend: yup.string().required('Campo obrigatório'),
    barcode: yup.string(),
    measureUnit: yup.string().required('Campo obrigatório'),
    perishable: yup.boolean().required('Campo obrigatório'),
    image: yup.string(),
    minStock: yup.string().required('Campo obrigatório'),
    currentStock: yup.string().required('Campo obrigatório'),
    price: yup.string().required('Campo obrigatório'),
    promotion: yup.boolean(),
    promotionPrice: yup.string().when("promotion", {
      is: (promotion) => promotion === true,
      then: yup.string().required('Campo obrigatório')
    }),
    promotionQty: yup.string().when("promotion", {
      is: (promotion) => promotion === true,
      then: yup.string().required('Campo obrigatório')
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
      setInitialValues(route.params)
      setIsEditing(true)
    } else {
      setInitialValues({})
      setIsEditing(false)
    }
  }, [])

  return (
    <Scroll>
      <Formik
        initialValues={initialValues}
        enableReinitialize={true}
        validationSchema={validations}
        onSubmit={(values, {resetForm, setSubmitting}) => {
          setSubmitting(true)

          isEditing ? 
          api.updateProduct(values).then(result => {
            setSubmitting(false)
            if (result.error) {
              return Toast.show(result.message, Toast.LONG)
            }
            resetForm()
            return navigation.goBack()
          })
          :
          api.includeProduct(values).then(result => {
            setSubmitting(false)
            if (result.error) {
              return Toast.show(result.message, Toast.LONG)
            }
            resetForm()
            return navigation.goBack()
          })
        }}
      >
        {({values, errors, touched, handleChange, handleBlur, handleSubmit, setFieldValue, isSubmitting}) => (
          <Container>
            <Title>Product Form</Title>
            
            <ProductForm
              state={values}
              setState={handleChange}
              errors={errors}
              touched={touched}
              handleBlur={handleBlur}
              setFieldValue={setFieldValue}
            />

            {!keyboardShow &&
              <Row mV='20'>
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
    </Scroll>
  )
}