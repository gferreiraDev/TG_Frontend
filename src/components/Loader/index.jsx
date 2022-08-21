import React from "react"
import { Load, Modal, Text } from "./styles"

export default ({text}) => {
  return (
    <Modal>
      <Load/>
      <Text>{text}</Text>
    </Modal>
  )
}