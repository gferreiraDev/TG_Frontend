import React, {useEffect, useState} from "react"
import { Card, CardHeader, Container, Icon, Row, Text, Title } from "./styles"
import Loader from "../../components/Loader"

export default ({navigation, route}) => {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  return (
    <Container>
      {loading ?
        <Loader/>
        :
        <>
          <Title>Olá, Ana!</Title>

          <Row>
            <Card
              width='48'
              onPress={() => console.log('Card 1 pressed')}
            >
              <CardHeader>
                <Text>Meus Pagamentos</Text>
                <Icon name='cogs' color='#f70'/>
              </CardHeader>
            </Card>

            <Card
              width='48'
              onPress={() => navigation.navigate('Settings')}
            >
              <CardHeader>
                <Text>Configurações</Text>
                <Icon name='cogs' color='#f70'/>
              </CardHeader>
            </Card>
          </Row>

          <Row>
            <Card onPress={() => console.log('Card 3 pressed')}>
              <CardHeader>
                <Text>Ajuda e Suporte</Text>
                <Icon name='cogs' color='#f70'/>
              </CardHeader>
            </Card>
          </Row>

          <Row>
            <Card
              onPress={() => console.log('Card 4 pressed')}
            >
              <CardHeader>
                <Text>Pedido Recente</Text>
                <Icon name='cogs' color='#f70'/>
              </CardHeader>
            </Card>
          </Row>
        </>
      }
    </Container>
  )
}