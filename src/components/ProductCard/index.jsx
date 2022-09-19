import React from "react"
import { Badge, Card, CardHeader, Image, Row, Text, Title } from "./styles"

export default ({ product, navigation, route }) => (
  <Card onPress={() => navigation.navigate('Product', product)}>
    <CardHeader>
      <Image source={{ uri: product?.image }}/>
      <Badge><Text bold small>Qtd: {product.currentStock}</Text></Badge>
    </CardHeader>

    <Title>{product.name}</Title>
    <Row>
      <Text bold>R$ {(product.price).toFixed(2)}</Text>
    </Row>
  </Card>
)