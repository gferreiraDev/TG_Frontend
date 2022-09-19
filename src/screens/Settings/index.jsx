import React, {useEffect, useState} from "react"
import { Button, Card, CardHeader, CardTitle, Container, Image, List, Row, Text, Title } from "./styles"
import Loader from "../../components/Loader"

export default ({navigation, route}) => {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  const settings = [
    { id: 0,
      image: require('../../assets/visual-config.jpg'),
      title: 'Temas',
      text: 'Altere o esquema de cores do aplicativo',
      action: () => console.log('Change Theme')
    },
    { 
      id: 1, image: require('../../assets/notifications.jpg'),
      title: 'Notificações',
      text: 'Altere as permissões de notificação do aplicativo',
      action: () => console.log('Change Preferences')
    },
    { 
      id: 2, image: require('../../assets/send-email.jpg'),
      title: 'Alterar Senha',
      text: 'Altere a senha de login da conta',
      action: () => console.log('Change Pass')
    },
    { 
      id: 3, image: require('../../assets/remove.jpg'),
      title: 'Remover Conta',
      text: 'Exclua sua conta e todos os dados de nosso servidor',
      action: () => console.log('Remove Account')
    }
  ]

  return (
    <Container>
      {loading ?
        <Loader/>
        :
        <>
          <Title>Configurações</Title>

          <List
            data={settings}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <Card onPress={item.action}>
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <Row>
                  <Image source={item.image}/>
                  <Text>{item.text}</Text>
                </Row>
              </Card>
            )}
          />

          <Button large mV='20' onPress={() => navigation.goBack()}>
            <Text>Voltar</Text>
          </Button>
        </>  
      }
    </Container>
  )
}