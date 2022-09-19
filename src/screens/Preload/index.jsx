import React, {useEffect, useState} from "react"
import { Area, Background, Button, Container, Image, Loader, Text } from "./styles"
import logo from "../../assets/logo.png"
import background from "../../assets/background.jpg"
import { useDispatch } from "react-redux"
import userThunk from "../../thunks/user.thunks"

export default ({ navigation, route }) => {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    setLoading(true)

    dispatch(userThunk.authenticate()).then(result => {
      setLoading(false)
      if (result.error)
        return
      return navigation.reset({routes: [{name: 'Main'}]})
    })
  }, [])

  return (
    <Container>
      <Background source={background}/>
      <Image source={logo}/>

      {loading ?
        <Loader/>
        :
        <Area>
          <Button large mV='8' onPress={() => navigation.navigate('SignIn')}>
            <Text>Login</Text>
          </Button>

          <Button large mV='8' onPress={() => navigation.navigate('SignUp')}>
            <Text>Criar conta</Text>
          </Button>
        </Area>
      }
    </Container>
  )
}