import React from "react"
import { Load, Modal, Text } from "./styles"

export default ({title, text, buttons}) => {
  return (
    <Modal>
      <Title>{title}</Title>
      <Load/>
      <Text>{text}</Text>
    </Modal>
  )
}