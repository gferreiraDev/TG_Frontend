import React from "react"
import { ToastAndroid as Toast } from "react-native"
import { Button, Container, Row, Text, Title } from "./styles"
import UserForm from "../../components/Forms/UserForm"
import Loader from "../../components/Loader"
import { Formik } from "formik"
import * as yup from "yup"
import { useDispatch } from "react-redux"
import userThunk from "../../thunks/user.thunks"


export default ({navigation, route}) => {
  const dispatch = useDispatch()
  const validations = yup.object().shape({
    name: yup.string().required('Campo obrigatório'),
    // corporateName: yup.string().required('Campo obrigatório'),
    // tradingName: yup.string().required('Campo obrigatório'),
    email: yup.string().email('Formato inválido').required('Campo obrigatório'),
    cpf: yup.string().required('Campo obrigatório'),
    // cnpj: yup.string().required('Campo obrigatório'),
    phone: yup.string().required('Campo obrigatório'),
    website: yup.string()
  })

  return (
    <Formik
      initialValues={{...route.params}}
      validationSchema={validations}
      onSubmit={(values, {resetForm, setSubmitting}) => {
        setSubmitting(true)
        dispatch(userThunk.update(values)).then(result => {
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
          <Title>User Update Form</Title>
          
          <UserForm
            state={values}
            setState={handleChange}
            errors={errors}
            touched={touched}
            handleBlur={handleBlur}
          />

          <Row>
            <Button onPress={() => navigation.goBack()}>
              <Text>Cancelar</Text>
            </Button>

            <Button onPress={handleSubmit}>
              <Text>Salvar</Text>
            </Button>
          </Row>

          {isSubmitting && <Loader/>}
        </Container>
      )}
    </Formik>
  )
}