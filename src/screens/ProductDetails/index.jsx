import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import storeThunks from "../../thunks/store.thunks"
import { ToastAndroid as Toast } from "react-native"
import { Box, Button, Card, CardHeader, CardBody, Column, Container, Icon, Image,
  Input, Loader, Page, Row, Scroll, Swipe, SwipeDot, Text, Title
} from "./styles"


export default ({ navigation, route }) => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const [product, setProduct] = useState({})
  const [data, setData] = useState({})

  const handleUpdateData = (type) => {
    let qty = 1
    let subtotal = product.price * qty

    if (type === 'add' && data.currentQty < product.currentStock) {
      qty = data.currentQty + 1
      subtotal = product.price * qty
    }
    
    else if (type === 'remove' && data.currentQty > 1) {
      qty = data.currentQty - 1
      subtotal = product.price * qty
    }

    setData({...data, currentQty: qty, subtotal: subtotal})
  }

  const handleAddToCart = () => {
    const item = {
      _id: product._id,
      name: product.name,
      image: product.image,
      price: product.price,
      qty: data.currentQty
    }
    dispatch(storeThunks.addToCart(item))
    Toast.show('Item adicionado com Sucesso!', Toast.LONG)
    return navigation.goBack()
  }

  useEffect(() => {
    setLoading(true)
    console.log(route.params.product);
    setProduct(route.params.product)
    setData({ currentQty: 1, currentPrice: route.params.product.price, subtotal: route.params.product.price })

    setTimeout(() => setLoading(false), 2000)
  }, [])

  return (
    <Container>
      {loading ?
        <Loader/>
        :
        <Scroll>
          {product?.photos?.length > 0 ?
            <Swipe
              dot={<SwipeDot/>}
              activeDot={<SwipeDot active/>}
              paginationStyle={{top: 15, right: 15, bottom: null, left: null}}
              autoplay={true}
            >
              {product?.photos?.map((photo, idx) => (
                <Box key={idx}>
                  <Image source={{uri: photo.url}}/>
                </Box>
              ))}
            </Swipe>
            :
            <Box height='350'>
              <Image source={{uri: product?.image }}/>
            </Box>
          }

          <Page>
            <Title>{product?.name}</Title>

            <Card>
              <Row>
                <Column width='45' align='center'>
                  <Text bold>Preço Un.</Text>
                  <Text>R$ {(data?.currentPrice)?.toFixed(2)}</Text>
                </Column>

                <Column width='45' align='center'>
                  <Text bold>Subtotal</Text>
                  <Text>R$ {(data?.subtotal)?.toFixed(2)}</Text>
                </Column>
              </Row>
              
              <Row>
                <Column width='50' align='center'>
                  <Text bold>Quantidade</Text>
                  <Row>
                    <Button onPress={() => handleUpdateData('remove')}>
                      <Icon name='remove'/>
                    </Button>
                    <Input>{data?.currentQty}</Input>
                    <Button onPress={() => handleUpdateData('add')}>
                      <Icon name='add'/>
                    </Button>
                  </Row>
                </Column>
              </Row>

              <Button onPress={handleAddToCart}>
                <Text>Adicionar ao carrinho</Text>
              </Button>
            </Card>

            <Card>
              <CardHeader>
                <Title>Dados do Produto</Title>
              </CardHeader>
              <CardBody>
                <Row>
                  <Column width='30'>
                    <Text bold>Categoria</Text>
                    <Text bold>Unidade</Text>
                    {/* <Text bold>Peso</Text> */}
                    <Text bold>Marca</Text>
                    {/* <Text bold>Volume</Text> */}
                    <Text bold>Cód. Barras</Text>
                    <Text bold>Perecível</Text>
                  </Column>
                  <Column width='70'>
                    <Text>{product?.category}</Text>
                    <Text>{product?.measureUnit}</Text>
                    {/* <Text>{product?.weight.value}{product?.weight.type}</Text> */}
                    <Text>{product?.brand}</Text>
                    {/* <Text>{product?.volume.width} x {product?.volume.height} x {product?.volume.profundity}</Text> */}
                    <Text>{product?.eancode}</Text>
                    <Text>{product?.perishable ? 'Sim' : 'Não'}</Text>
                  </Column>
                </Row>
              </CardBody>
            </Card>

            <Card>
              <CardHeader>
                <Title>Informações Nutricionais</Title>
              </CardHeader>
              <CardBody>
                <Row>
                  <Column width='50'>
                    <Text bold>ITEM</Text>
                    <Text bold>Acido Fólico</Text>
                    <Text bold>Carboidratos</Text>
                    <Text bold>Ferro</Text>
                    <Text bold>Fibra Alimentar</Text>
                    <Text bold>Gorduras Saturadas</Text>
                    <Text bold>Gorduras Trans</Text>
                    <Text bold>Gorduras Totais</Text>
                    <Text bold>Proteínas</Text>
                    <Text bold>Sódio</Text>
                    <Text bold>Valor Energético</Text>
                  </Column>
                  <Column width='30'>
                    <Text bold>Qtd. Porção</Text>
                    <Text>75ug</Text>
                    <Text>38g</Text>
                    <Text>21mg</Text>
                    <Text>1.0g</Text>
                    <Text>0</Text>
                    <Text>0</Text>
                    <Text>0</Text>
                    <Text>5.0g</Text>
                    <Text>0</Text>
                    <Text>180kcal</Text>
                  </Column>
                  <Column width='20'>
                    <Text bold>VD*</Text>
                    <Text>31</Text>
                    <Text>13</Text>
                    <Text> </Text>
                    <Text>4</Text>
                    <Text>0</Text>
                    <Text>***</Text>
                    <Text>0</Text>
                    <Text>7</Text>
                    <Text>0</Text>
                    <Text>9</Text>
                  </Column>
                </Row>
              </CardBody>
            </Card>
          </Page>
        </Scroll>
      }
    </Container>
  )
}