import React from "react"
import Rating from "../../components/Rating"
import * as ImagePicker from "expo-image-picker"
import mime from "mime"
import { useDispatch } from "react-redux"
import userThunk from "../../thunks/user.thunks"
import { Area, Badge, Card, Image, Page, Text, Title,
  Button, CardBody, CardHeader, Row, Column, Icon, ClickArea, MapArea, Map, Scroll
} from "./styles"

export default ({ user, navigation, route }) => {
  const dispatch = useDispatch()

  const pickImage = () => {
    ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      selectionLimit: 1,
      aspect: [4, 3],
      quality: 1,
    })
    .then(result => {
      if (!result.cancelled) {
        const data = new FormData();
        data.append('fileName', {
          name: `${new Date().toISOString()}_profile.jpg`,
          uri: result.uri,
          type: mime.getType(result.uri)
        });

        dispatch(userThunk.updateAvatar(data))
      }
    })
  }

  return (
    <Scroll>
      <Page>
        <Area>
          <ClickArea onPress={pickImage}>
            <Image source={{ uri: user.avatar }}/>
            <Badge>
              <Icon name='camera' color='white'/>
            </Badge>
          </ClickArea>
          <Column>
            <Title>{user.tradingName}</Title>
            <Rating top={20} score={user.score} showNumber/>
          </Column>
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
              <Column width='33%'>
                <Text bold>Razão Social</Text>
                <Text bold>Nome</Text>
                <Text bold>Email</Text>
                <Text bold>CNPJ</Text>
                <Text bold>Telefone</Text>
                <Text bold>Website</Text>
              </Column>
              <Column width='67%'>
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
            <MapArea>
              <Map/>
            </MapArea>
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