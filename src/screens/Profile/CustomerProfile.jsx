import React from "react"
import { useDispatch } from "react-redux"
import userThunk from "../../thunks/user.thunks"
import { Area, Badge, Box, Card, Image, Page, Text, Title,
  Button, CardBody, CardHeader, Row, Column, Icon, ClickArea, List 
} from "./styles"

export default ({ user, navigation, route }) => {
  const dispatch = useDispatch()
  const handleDelete = (address) => {
    dispatch(userThunk.removeAddress(address._id))
  }

  return (
    <Page>
      <Area>
        <ClickArea onPress={() => console.log('Change Avatar')}>
          <Image source={{ uri: user.avatar }}/>
          <Badge>
            <Icon name='camera' color='white'/>
          </Badge>
        </ClickArea>
        <Title>{user.name}</Title>
      </Area>
    
      <Card>
        <CardHeader>
          <Title>Dados Pessoais</Title>
          <Button onPress={() => navigation.navigate('UserUpdate', user)}>
            <Icon name='pencil'/>
          </Button>
        </CardHeader>

        <CardBody>
          <Row>
            <Column width='30%'>
              <Text bold>Nome</Text>
              <Text bold>Email</Text>
              <Text bold>CPF</Text>
              <Text bold>Telefone</Text>
            </Column>
            <Column width='70%'>
              <Text>{user.name}</Text>
              <Text>{user.email}</Text>
              <Text>{user.cpf}</Text>
              <Text>{user.phone}</Text>
            </Column>
          </Row>
        </CardBody>
      </Card>

      <Row pV='8'>
        <Title>Endereços Cadastrados</Title>
      </Row>

      <List
        data={user.address}
        keyExtractor={item => item._id}
        renderItem={({ item }) => (
          <Card>
            <CardHeader>
              <Title>{item.title}</Title>
              <Box row>
                <Button mH='5' onPress={() => navigation.navigate('AddressUpdate', item)}>
                  <Icon name='pencil'/>
                </Button>
                <Button mH='5' delete onPress={() => handleDelete(item)}>
                  <Icon delete name='delete'/>
                </Button>
              </Box>
            </CardHeader>

            <CardBody>
              <Text>{item.streetName}, {item.number} - {item.complement}, {item.district}, {item.city}/{item.state}, {item.zipcode}</Text>
            </CardBody>
          </Card>
        )}
      />

      <Button large onPress={() => navigation.navigate('AddressUpdate')}>
        <Text>Adicionar Endereço</Text>
      </Button>
    </Page>
  )
}