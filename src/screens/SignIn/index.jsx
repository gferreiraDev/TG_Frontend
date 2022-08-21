import React, { useEffect, useState } from "react"
import { Keyboard, ToastAndroid as Toast } from "react-native"
import { Button, Container, Image, Text, Area, Link, Title } from "./styles"
import logo from '../../assets/logo.png'
import { Formik } from "formik"
import * as yup from "yup"
import Input from '../../components/Input'
import Loader from "../../components/Loader"
import { useDispatch } from "react-redux"
import userThunk from "../../thunks/user.thunks"

export default ({ navigation, route }) => {
  const [showPassword, setShowPassword] = useState(false)
  const [keyboardShow, setKeyboardShow] = useState(false)
  const dispatch = useDispatch()

  const validations = yup.object().shape({
    email: yup.string().email('Formato inválido').required('Campo obrigatório'),
    password: yup.string().required('Campo obrigatório')
  });
  
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
      initialValues={{email: '', password: ''}}
      enableReinitialize={true}
      validationSchema={validations}
      onSubmit={(values, {resetForm, setSubmitting}) => {
        setSubmitting(true)

        dispatch(userThunk.login(values)).then(result => {
          setSubmitting(false)
          if (result.error)
            return Toast.show(result.message, Toast.LONG)
          
          resetForm()
          return navigation.reset({routes: [{name: 'Main'}]})
        })
      }}
    >
      {({values, errors, touched, handleBlur, handleChange, handleSubmit, isSubmitting}) => (
        <Container>
          <Image source={logo}/>

          <Area>
            <Input
              label='*E-mail'
              value={values.email}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              error={touched.email && !!errors.email}
              keyboardType='email-address'
            />

            <Input
              label='Senha'
              value={values.password}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              secureTextEntry={!showPassword}
              icon={showPassword ? 'eye-slash' : 'eye'}
              action={() => setShowPassword(!showPassword)}
              error={touched?.password && !!errors?.password}
            />

            <Link onPress={() => navigation.navigate('Recovery')}>
              <Text align='right'>Esqueci a senha</Text>
            </Link>
          </Area>

          {!keyboardShow &&
            <>
              <Button large mV='20' onPress={handleSubmit}>
                <Text>Entrar</Text>
              </Button>

              <Link onPress={() => navigation.navigate('SignUp')}>
                <Title>Não possui uma conta? <Title color='#80E'> Cadastre-se</Title></Title>
              </Link>
            </>
          }

          {isSubmitting && <Loader text='AGUARDE...'/>}
        </Container>
      )}
    </Formik>
  )
}