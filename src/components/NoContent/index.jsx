import React from "react"
import { Container, Image, ImageView, Title, Text } from "./styles"

import nocontent from "../../assets/nocontent.png"

export default ({ title, message }) => {
  return (
    <Container>
      <ImageView>
        <Image source={nocontent}/>
      </ImageView>

      <Title>{title}</Title>
      <Text>{message}</Text>
    </Container>
  )
}