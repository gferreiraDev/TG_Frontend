import React, {useEffect, useState} from "react"
import {Avatar, Box, Button, Column, Label, List, Modal, Row, Text, Title} from "./styles"
import Input from "../Input"
import Card from "../Card"

import externApi from "../../services/extern.api"

export default ({showModal, setShowModal, setFieldValue}) => {
  const [query, setQuery] = useState('')
  const [list, setList] = useState([])

  const handleSearch = () => {
    externApi.searchProduct(query).then(result => {
      setList(result)
    })
  }

  const handleSelect = (item) => {
    Object.keys(item).map(key => {
      if (key === 'name') {
        setFieldValue('productName', item[key])
      }
      setFieldValue(key, item[key])
    })
    setShowModal(false)
  }

  useEffect(() => handleSearch(), [])

  return (
    <Modal visible={showModal}>
      <Box>
        <Input
          label='Pesquise um produto'
          value={query}
          onChangeText={setQuery}
          icon='search'
          action={handleSearch}
        />

        {list.length > 0 ?
          <List
            data={list}
            keyExtractor={item => item._id}
            renderItem={({item}) => (
              <Card
                title={item.name}
                onPress={() => handleSelect(item)}
              >
                <Row align='flex-start'>
                  <Avatar source={{uri: item.image}}/>
                  
                  <Column width='80'>
                    <Text><Text bold>Marca: </Text> {item.trend}</Text>
                  </Column>
                </Row>

              </Card>
            )}
          />
          :
          <Title>Nenhum produto encontrado</Title>
        }

        <Button onPress={() => setShowModal(false)}>
          <Label>Fechar</Label>
        </Button>
      </Box>
    </Modal>
  )
}