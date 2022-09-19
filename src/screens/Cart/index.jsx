import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import storeThunks from "../../thunks/store.thunks"
import {Box, Button, Card, CardHeader, Column, Container, Icon, Image, List, Loader, Row, Text, Title} from "./styles"
import NoContent from "../../components/NoContent"


export default ({ navigation, route }) => {
  const dispatch = useDispatch()
  const cart = useSelector(rootState => rootState.store.cart)
  const [loading, setLoading] = useState(false)

  const getCartSum = () => {
    return cart.reduce((sum, item) => sum += item.price * item.qty, 0).toFixed(2)
  }

  const addQuantity = (item) => {
    dispatch(storeThunks.updateCart({...item, qty: item.qty + 1}))
  }

  const removeQuantity = (item) => {
    if (item.qty > 1)
      return dispatch(storeThunks.updateCart({...item, qty: item.qty - 1}))
    return dispatch(storeThunks.removeFromCart(item))
  }

  return (
    <Container>
      {loading ?
        <Loader/>
        :
        <>
          <Title>Carrinho de compras</Title>
          <Row border mB='8' pV='4'>
            <Text bold color='white'>Itens: {cart.length}</Text>
            <Text bold color='white'>Total: R$ {getCartSum()}</Text>
          </Row>

          {cart.length > 0 ?
            <List
              data={cart}
              keyExtractor={item => item._id}
              renderItem={({ item }) => (
                <Card>
                  <CardHeader>
                    <Text bold large>{item.name}</Text>
                  </CardHeader>
                  <Row>
                    <Image source={{ uri: item.image }}/>
                    <Column>
                      <Row>
                        <Text><Text bold>Preço: R$ </Text> {(item.price).toFixed(2)}</Text>
                        <Text><Text bold>Subtotal: R$ </Text>{(item.price * item.qty).toFixed(2)}</Text>
                      </Row>
                      <Row>
                        <Text bold>Quantidade</Text>
                        <Column>
                          <Row justify='center'>
                            <Button color='danger' onPress={() => removeQuantity(item)}>
                              <Icon name={item.qty > 1 ? "remove" : "trash"}/>
                            </Button>
                            <Box>
                              <Text bold>{item.qty}</Text>
                            </Box>
                            <Button color='secondary' onPress={() => addQuantity(item)}>
                              <Icon name="add"/>
                            </Button>
                          </Row>
                        </Column>
                      </Row>
                    </Column>
                  </Row>
                </Card>
              )}
            />
            :
            <NoContent title='Nenhum item adicionado ao carrinho'/>
          }

          {cart.length > 0 &&
            <Button large border='accent' onPress={() => console.log('Redirect to checkout')}>
              <Text color='accent'>Continuar Compra</Text>
            </Button>
          }
        </>
      }
    </Container>
  )
}