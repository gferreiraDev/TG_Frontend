import React, { useEffect, useState } from "react"
import { Area, Card, Image, Page, Text, Title, CardBody,
  CardHeader, Row, Column, ClickArea, MapArea, Scroll, Map, Container
} from "./styles"
import Loader from "../../components/Loader"
import Rating from "../../components/Rating"
import { useSelector } from "react-redux"

export default ({ navigation, route }) => {
  const seller = useSelector(rootState => rootState.store.seller)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => setLoading(false), 2000)
  }, [])

  return (
    <Container>
      {loading ?
        <Loader/>
        :
        <Scroll>
            <Page>
              <Area>
                <ClickArea>
                  <Image source={{ uri: seller?.avatar }}/>
                </ClickArea>
                <Column>
                  <Title mB='20'>{seller?.tradingName}</Title>
                  <Rating score={seller?.score} showNumber/>
                </Column>
              </Area>
            
              <Card>
                <CardHeader>
                  <Title>Dados do Estabelecimento</Title>
                </CardHeader>

                <CardBody>
                  <Row>
                    <Column width='30%'>
                      <Text bold>Razão Social</Text>
                      <Text bold>Nome</Text>
                      <Text bold>Email</Text>
                      <Text bold>CNPJ</Text>
                      <Text bold>Telefone</Text>
                      <Text bold>Website</Text>
                    </Column>
                    <Column width='70%'>
                      <Text>{seller?.corporateName}</Text>
                      <Text>{seller?.tradingName}</Text>
                      <Text>{seller?.email}</Text>
                      <Text>{seller?.cnpj}</Text>
                      <Text>{seller?.phone}</Text>
                      <Text>{seller?.website}</Text>
                    </Column>
                  </Row>
                </CardBody>
              </Card>

              <Card>
                <CardHeader>
                  <Title>Localização</Title>
                </CardHeader>

                <CardBody>
                  <MapArea>
                    <Map/>
                  </MapArea>
                  <Text>{seller?.address?.streetName}, {seller?.address?.number} - {seller?.address?.complement}, {seller?.address?.district}, {seller?.address?.city}/{seller?.address?.state}, {seller?.address?.zipcode}</Text>
                </CardBody>
              </Card>

              {seller?.openingHours &&
                <Card>
                  <CardHeader>
                    <Title>Horário de Funcionamento</Title>
                  </CardHeader>

                  <CardBody>
                    <Row>
                      {Object.keys(seller?.openingHours).map((key, idx) => (
                        <Column width='14%' align='center' key={idx}>
                          <Text bold>{seller.openingHours[key].label}</Text>
                          <Text small align='center'>{seller.openingHours[key].from} às {seller.openingHours[key].to}</Text>
                        </Column>
                      ))}
                    </Row>
                  </CardBody>
                </Card>
              }
            </Page>
        </Scroll>
      }
    </Container>
  )
}