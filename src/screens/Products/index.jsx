import React, { useEffect, useState } from "react"
import Input from "../../components/Input"
import Loader from "../../components/Loader"
import NoContent from "../../components/NoContent"
import { Badge, Card, CardHeader, Container, Image, List, Row, Text, Title } from "./styles"
import { useSelector } from "react-redux"
import api from '../../services/api'

export default ({ navigation, route }) => {
  const store = useSelector(rootState => rootState.store.seller)
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(false)
  const [productList, setProductList] = useState([])

  const handleSearch = () => {
    setLoading(true)
    api.getProducts(store._id, search).then(list => {
      setProductList(list);
      setLoading(false)
    })
  }

  useEffect(() => {
    handleSearch()
  }, [])

  return (
    <Container>
      {loading ?
        <Loader/>
        :
        <>
          <Title>Lista de Produtos</Title>

          <Input
            placeholder='Pesquise um produto'
            value={search}
            onChangeText={setSearch}
            icon='search'
            action={handleSearch}
          />

          {productList && productList.length > 0 ?
            <List
              data={productList}
              keyExtractor={item => item._id}
              renderItem={({item}) => (
                <Card onPress={() => navigation.navigate('ProductDetails', {product: item})}>
                  <CardHeader>
                    <Image source={{ uri: item.image }}/>
                    <Badge><Text bold small>Qtd: {item.currentStock}</Text></Badge>
                  </CardHeader>

                  <Text bold color='white' mV='6'>{item.name}</Text>
                  <Row>
                    <Text bold>R$ {(item.price).toFixed(2)}</Text>
                  </Row>
                </Card>
              )}
              numColumns={2}
              columnWrapperStyle={{ justifyContent: 'space-between' }}
            />
            :
            <NoContent
              title='Nenhum produto cadastrado'
            />
          }
        </>
      }
    </Container>
  )
}