import React from 'react'
import { Area, Card, Image, Text, Title } from './styles'
import customer from '../../assets/customer.jpg'
import seller from '../../assets/seller.jpg'

export default ({ state, setState, errors, touched }) => {
  return (
    <Area>
      <Title>Selecione um perfil</Title>

      <Card
        active={state.profile === 'Consumidor'}
        onPress={() => setState('profile', 'Consumidor')}
        error={touched.profile && !!errors.profile}
      >
        <Image source={customer}/>
        <Title>Consumidor</Title>
      </Card>

      <Card
        active={state.profile === 'Vendedor'}
        onPress={() => setState('profile', 'Vendedor')}
        error={touched.profile && !!errors.profile}
      >
        <Image source={seller}/>
        <Title>Vendedor</Title>
      </Card>

      <Text error={!!errors.profile}>{errors.profile}</Text>
    </Area>
  )
}