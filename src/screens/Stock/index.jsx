import React, { useEffect, useState } from "react"
import Input from "../../components/Input"
import Loader from "../../components/Loader"
import NoContent from "../../components/NoContent"
import ProductCard from "../../components/ProductCard"
import { Button, Container, Icon, List, Row, Title } from "./styles"
import api from "../../services/api"
import { useSelector } from "react-redux"

export default ({ navigation, route }) => {
  const user = useSelector(state => state.user)
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState([])

  useEffect(() => {
    setLoading(true)
    api.getProducts(user._id).then(list => {
      setProducts(list);
      setLoading(false)
    })
  }, [])

  return (
    <Container>
      {loading ?
        <Loader/>
        :
        <>
          <Title>Estoque de Produtos</Title>

          <Row>
            <Input
              width='80'
              placeholder='Pesquise um produto'
              value={search}
              onChangeText={setSearch}
              icon='search'
              action={() => console.log(`Buscar por ${search}`)}
            />
            <Button onPress={() => navigation.navigate('Product')}>
              <Icon name='add'/>
            </Button>
          </Row>

          {products.length > 0 ?
            <List
              data={products}
              keyExtractor={item => item._id}
              renderItem={({item}) => <ProductCard product={item} {...navigation}/>}
              numColumns={2}
              columnWrapperStyle={{ justifyContent: 'space-between' }}
            />
            :
            <NoContent title='Nenhum produto cadastrado'/>
          }
        </>
      }
    </Container>
  )
}