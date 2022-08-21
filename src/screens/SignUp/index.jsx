import React, {useEffect, useState} from "react"
import { Keyboard, ToastAndroid as Toast } from "react-native"
import {Container, Link, Title, Text, Button, Row, ProgressBar } from "./styles"
import { Formik } from "formik"
import * as yup from "yup"
import Loader from "../../components/Loader"
import { useDispatch } from "react-redux"
import userThunk from "../../thunks/user.thunks"

import ProfileForm from "../../components/Forms/ProfileForm"
import UserForm from "../../components/Forms/UserForm"
import AddressForm from "../../components/Forms/AddressForm"
import PasswordForm from "../../components/Forms/PasswordForm"

export default ({ navigation, route }) => {
  const [step, setStep] = useState(0)
  const [progress, setProgress] = useState(0);
  const [keyboardShow, setKeyboardShow] = useState(false)
  const dispatch = useDispatch()
  const validations = yup.object().shape({
    profile: yup.string().required('Selecione um perfil'),
    name: yup.string().when("profile", {
      is: (profile) => profile === 'Consumidor',
      then: yup.string().required('Campo obrigatório')
    }),
    email: yup.string().email('Formato inválido').required('Campo obrigatório'),
    cpf: yup.string().when("profile", {
      is: (profile) => profile === 'Consumidor',
      then: yup.string().required('Campo obrigatório')
    }),
    phone: yup.string().required('Campo obrigatório'),
    corporateName: yup.string().when("profile", {
      is: (profile) => profile === 'Vendedor',
      then: yup.string().required('Campo obrigatório')
    }),
    tradingName: yup.string().when("profile", {
      is: (profile) => profile === 'Vendedor',
      then: yup.string().required('Campo obrigatório')
    }),
    cnpj: yup.string().when("profile", {
      is: (profile) => profile === 'Vendedor',
      then: yup.string().required('Campo obrigatório')
    }),
    website: yup.string(),
    address: yup.object({
      zipcode: yup.string().required('Campo obrigatório'),
      streetName: yup.string().required('Campo obrigatório'),
      number: yup.string().required('Campo obrigatório'),
      complement: yup.string(),
      district: yup.string().required('Campo obrigatório'),
      city: yup.string().required('Campo obrigatório'),
      state: yup.string().required('Campo obrigatório')
    }),
    password: yup.string().required('Campo obrigatório'),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Senhas não conferem').required('Campo obrigatório'),
    termsAccepted: yup.boolean().isTrue('É necessário ler e aceitar os termos de uso e a política de privacidade')
  })
  
  const stepBack = () => {
    if (step === 0)
      return console.log('CANNOT GO BACK')

    setStep(step - 1)
    setProgress(progress - 0.25)
  }

  const goNext = (setFieldTouched, errors, values) => {
    // console.log(step, errors);

    switch(step) {
      case 0:
        setFieldTouched('profile', true)
        if (errors.profile)
          return console.log('CANNOT GO FORWARD')
        setStep(step + 1);
        setProgress(progress + 0.25)
        break
      
      case 1:
        ['name', 'corporateName', 'tradingName', 'email', 'phone', 'cpf', 'cnpj'].map(field => setFieldTouched(field))
        if (values.profile === 'Consumidor' && (errors.name || errors.email || errors.phone || errors.cpf) ||
            values.profile === 'Vendedor' && (errors.corporateName || errors.tradingName || errors.email || errors.cnpj))
          return console.log('CANNOT GO FORWARD')
        setStep(step + 1);
        setProgress(progress + 0.25)
        break

      case 2:
        ['address.zipcode', 'address.streetName', 'address.number', 'address.district', 'address.city', 'address.state']
        .map(field => setFieldTouched(field))
        if(errors?.address?.zipcode || errors?.address?.streetName || errors?.address?.number)
          return console.log('CANNOT GO FORWARD')
        setStep(step + 1)
        setProgress(progress + 0.25)
        break

      case 3:
        ['password', 'confirmPassword'].map(field => setFieldTouched(field))
        if(errors.password || errors.confirmPassword || errors.termsAccepted)
          return console.log('CANNOT GO FORWARD')
        setStep(step + 1)
        setProgress(progress + 0.25)
        break

      default:
        break
    }
  }

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
      initialValues={{ profile: '' }}
      enableReinitialize={true}
      validationSchema={validations}
      onSubmit={(values, {resetForm, setSubmitting}) => {
        setProgress(progress + 0.25)
        setSubmitting(true)

        dispatch(userThunk.register(values)).then(result => {
          setSubmitting(false)
          if (result.error)
            return Toast.show(result.message, Toast.LONG)
          
          resetForm()
          return navigation.goBack()
        })
      }}
    >
      {({ values, errors, touched, isSubmitting, handleChange, handleBlur, handleSubmit, setFieldValue, setFieldTouched }) => (
        <Container>
          <Row mV='20' justify='center'>
            <ProgressBar progress={progress}/>
          </Row>

          {step === 0 ?
            <ProfileForm
              state={values}
              setState={setFieldValue}
              errors={errors}
              touched={touched}
            />
            : step === 1 ?
            <UserForm
              state={values}
              setState={handleChange}
              errors={errors}
              handleBlur={handleBlur}
              touched={touched}
            />
            : step === 2 ?
            <AddressForm
              state={values}
              setState={handleChange}
              errors={errors}
              handleBlur={handleBlur}
              touched={touched}
              setFieldValue={setFieldValue}
            />
            :
            <PasswordForm
              state={values}
              setState={handleChange}
              errors={errors}
              handleBlur={handleBlur}
              touched={touched}
              setFieldValue={setFieldValue}
            />
          }

          {!keyboardShow &&
            <>
              <Row>
                <Button onPress={() => {step > 0 ? stepBack() : navigation.goBack()}}>
                  <Text>{step > 0 ? 'Anterior' : 'Retornar'}</Text>
                </Button>
                <Button onPress={() => {step < 3 ? goNext(setFieldTouched, errors, values) : handleSubmit()}}>
                  <Text>{step < 3 ? 'Próximo' : 'Salvar'}</Text>
                </Button>
              </Row>
              
              <Link onPress={() => navigation.navigate('SignIn')}>
                <Title>Já possui uma conta? <Title color='#A52'> Entre</Title></Title>
              </Link>
            </>
          }
          
          {isSubmitting && <Loader text='AGUARDE...'/>}
        </Container>
      )}
    </Formik>
  )
}