import React from "react"
import { Area, Badge, Card, Image, Page, Text, Title,
  Button, CardBody, CardHeader, Row, Column, Icon, ClickArea, MapArea, Scroll
} from "./styles"

export default ({ user, navigation, route }) => {
  return (
    <Scroll>
      <Page>
        <Area>
          <ClickArea onPress={() => console.log('Change Avatar')}>
            <Image source={{ uri: user.avatar }}/>
            <Badge>
              <Icon name='camera' color='white'/>
            </Badge>
          </ClickArea>
          <Title>{user.tradingName}</Title>
        </Area>
      
        <Card>
          <CardHeader>
            <Title>Dados do Estabelecimento</Title>
            <Button onPress={() => navigation.navigate('UserUpdate', user)}>
              <Icon name='pencil'/>
            </Button>
          </CardHeader>

          <CardBody>
            <Row>
              <Column width='30%'>
                <Text bold>Razão Social</Text>
                <Text bold>Nome Fantasia</Text>
                <Text bold>Email</Text>
                <Text bold>CNPJ</Text>
                <Text bold>Telefone</Text>
                <Text bold>Website</Text>
              </Column>
              <Column width='70%'>
                <Text>{user.corporateName}</Text>
                <Text>{user.tradingName}</Text>
                <Text>{user.email}</Text>
                <Text>{user.cnpj}</Text>
                <Text>{user.phone}</Text>
                <Text>{user.website}</Text>
              </Column>
            </Row>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <Title>Localização</Title>
            <Button onPress={() => navigation.navigate('AddressUpdate', user?.address)}v>
              <Icon name='pencil'/>
            </Button>
          </CardHeader>

          <CardBody>
            <MapArea />
            <Text>{user?.address?.streetName}, {user?.address?.number} - {user?.address?.complement}, {user?.address?.district}, {user?.address?.city}/{user?.address?.state}, {user?.address?.zipcode}</Text>
          </CardBody>
        </Card>

        {user.openingHours &&
          <Card>
            <CardHeader>
              <Title>Horário de Funcionamento</Title>
              <Button onPress={() => navigation.navigate('OpeningHoursUpdate', user.openingHours)}>
                <Icon name='pencil'/>
              </Button>
            </CardHeader>

            <CardBody>
              <Row>
                {Object.keys(user.openingHours).map((key, idx) => (
                  <Column width='14%' align='center' key={idx}>
                    <Text bold>{user.openingHours[key].label}</Text>
                    <Text small align='center'>{user.openingHours[key].from} às {user.openingHours[key].to}</Text>
                  </Column>
                ))}
              </Row>
            </CardBody>
          </Card>
        }
      </Page>
    </Scroll>
  )
}