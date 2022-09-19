import React, {useEffect, useState} from "react"
import {Card, CardHeader, Column, Container, Header, Image, List, Loader, Row, Text, Title} from "./styles"
import { useSelector } from "react-redux"
import Rating from "../../components/Rating"

const avatar = 'https://cdn0.iconfinder.com/data/icons/leto-ui-generic-1/64/leto-04-128.png';

export default ({ navigation, route }) => {
  const store = useSelector(state => state.store)
  const [loading, setLoading] = useState(false)
  const [ratings, setRatings] = useState([
    {_id: 'rt01', avatar: avatar, score: 5.0, rater: { name: 'Maria da Silva' }, content: 'Muito bom. Atendimento rápido tanto na entrega quanto na retirada'},
    {_id: 'rt02', avatar: avatar, score: 5.0, rater: { name: 'João Paulo Medeiros' }, content: 'Cumpre o que promete'},
    {_id: 'rt03', avatar: avatar, score: 4.0, rater: { name: 'Ana Santos' }, content: 'Tem um pouco de fila durante a tarde.'},
    {_id: 'rt04', avatar: avatar, score: 3.0, rater: { name: 'José Mathias' }, content: 'Horrível. Não recomendo este vendedor. Fiz um pedido e não recebi. Pedi reembolso e até agora, nada.'},
    {_id: 'rt05', avatar: avatar, score: 5.0, rater: { name: 'Marcos Valente' }, content: 'Some text here...'},
  ])

  const getRatedScore = () => {
    return ratings.length > 0 ? ratings.reduce((sum, item) => sum + item.score, 0)/ratings.length : store.score
  }

  useEffect(() => {
    setLoading(true)
    setTimeout(() => setLoading(false), 2000)
  }, [])

  return (
    <Container>
      <Header>
        <Image source={{ uri: store.avatar }}/>
        <Column>
          <Title>{store.tradingName}</Title>
          <Rating score={getRatedScore()} showNumber/>
        </Column>
      </Header>

      {loading ?
        <Loader/>
        :
        <List
          data={ratings}
          keyExtractor={item => item._id}
          renderItem={({item}) => (
            <Card>
              <CardHeader row>
                <Text bold>{item.rater.name}</Text>
                <Rating score={item.score} showNumber/>
              </CardHeader>
              <Row>
                <Text>{item.content}</Text>
              </Row>
            </Card>
          )}
        />
      }
    </Container>
  )
}