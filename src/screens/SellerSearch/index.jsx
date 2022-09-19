import React, {useEffect, useState} from "react"
import { ToastAndroid as Toast } from "react-native"
import { Column, Container, Title, Text, List, Card, Image, CardHeader, Row} from "./styles"
import Loader from "../../components/Loader"
import NoContent from "../../components/NoContent"
import * as Location from "expo-location"
import { useDispatch, useSelector } from "react-redux"
import storeActions from "../../store/actions/store.actions"

import api from "../../services/api"

export default ({ navigation, route}) => {
  const [loading, setLoading] = useState(false)
  const [sellers, setSellers] = useState([])
  const dispatch = useDispatch()
  const store = useSelector(rootState => rootState.store);



  const handleSelectSeller = (seller) => {
    dispatch(storeActions.selectSeller(seller))
    navigation.navigate('Shopping')
  }

  useEffect(() => {
    setLoading(true)
    Location.requestForegroundPermissionsAsync().then(({status}) => {
      if (status !== 'granted')
        Toast.show('Permissão necessária para mapear os etabelecimentos ao redor', Toast.LONG)
      else {
        Location.getCurrentPositionAsync({})
        .then(position => {
          api.searchSellers(position).then(result => {
            setSellers(result)
            setLoading(false)
          })
        })
      }
    })
  }, [])
  
  return (
    <Container>
      <Title>Busca de Estabelecimentos</Title>

      {loading ?
        <Loader/>
        :
      sellers.length > 0 ?
        <List
          data={sellers}
          keyExtractor={item => item._id}
          renderItem={({item}) => (
            <Card onPress={() => handleSelectSeller(item)}>
              <CardHeader>
                <Title color='#000'>{item.tradingName}</Title>
              </CardHeader>
              <Row>
                <Image source={{ uri: item.avatar }}/>
                <Column>
                  <Text>{item.address.streetName}, {item.address.number}, {item.address.complement}, {item.address.district}, {item.address.city}/{item.address.state} - {item.address.zipcode}</Text>
                </Column>
              </Row>
            </Card>
          )}
        />
        :
        <NoContent title='Nenhum Estabelecimento Encontrado'/>
      }
    </Container>
  )
}