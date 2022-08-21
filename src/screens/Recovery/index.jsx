import React from "react"
import { Area, Button, Container, Link, Text, Title } from "./styles"
import Input from "../../components/Input"

export default ({ navigation, route }) => {
  return (
    <Container>
      <Title>Recuperação de Senha</Title>

      <Area>
        <Input label='E-mail'/>
      </Area>

      <Button large mV='20' onPress={() => console.log('Send e-mail')}>
        <Text>Enviar</Text>
      </Button>

      <Link onPress={() => navigation.goBack()}>
        <Text>Cancelar</Text>
      </Link>
    </Container>
  )
}