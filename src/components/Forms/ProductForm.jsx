import React, { useState } from 'react'
import { Area, Avatar, AvatarArea, Row, Text } from './styles'
import Input from '../Input'
import CheckBox from '../CheckBox'
import ModalSearch from '../ModalSearch'
import product from '../../assets/product.png'


export default ({ state, setState, errors, handleBlur, touched, setFieldValue }) => {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <Area>
        <AvatarArea onPress={() => console.log('get image from device')}>
          <Avatar source={state.image ? {uri: state.image} : product }/>
        </AvatarArea>
        
        <Input
          label='Nome do Produto'
          icon='search'
          action={() => setShowModal(true)}
          value={state?.productName}
          onChangeText={setState('productName')}
          error={touched?.productName && !!errors?.productName}
        />

        <Row>
          <Input
            width='48'
            label='Categoria'
            value={state?.category}
            onChangeText={setState('category')}
            error={touched?.category && !!errors?.category}
          />

          <Input
            width='48'
            label='Marca'
            value={state?.trend}
            onChangeText={setState('trend')}
            error={touched?.trend && !!errors?.trend}
          />
        </Row>

        <Row>
          <Input
            width='38'
            label='SKU'
            value={state.sku}
            onChangeText={setState('sku')}
            onBlur={handleBlur('sku')}
            error={touched?.sku && !!errors?.sku}
          />

          <Input
            width='58'
            label='Código de Barras'
            value={state?.barcode}
            onChangeText={setState('barcode')}
            error={touched?.barcode && !!errors?.barcode}
          />
        </Row>

        <Row>
          <Input
            width='48'
            label='Unidade'
            value={state?.measureUnit}
            onChangeText={setState('measureUnit')}
          />

          <CheckBox
            width='40'
            value={state?.perishable}
            onChange={() => setFieldValue('perishable', !state.perishable)}
          >
            <Text bold>Perecível?</Text>
          </CheckBox>
        </Row>

        <Row>
          <Input
            width='48'
            label='Preço Varejo'
            value={state?.price}
            onChangeText={setState('price')}
            error={touched?.price && !!errors?.price}
          />

          <CheckBox
            width='40'
            value={state?.promotion}
            onChange={() => setFieldValue('promotion', !state.promotion)}
          >
            <Text bold>Promoção?</Text>
          </CheckBox>
        </Row>

        {state.promotion && 
          <Row>
            <Input
              width='48'
              label='Preço Atacado'
              value={state?.promotionPrice}
              onChangeText={setState('promotionPrice')}
              error={touched?.promotionPrice && !!errors?.promotionPrice}
            />

            <Input
              width='48'
              label='Qtd. Atacado'
              value={state?.promotionQty}
              onChangeText={setState('promotionQty')}
              error={touched?.promotionQty && !!errors?.promotionQty}
            />
          </Row>
        }
        
        <Row>
          <Input
            width='48'
            label='Estoque Min.'
            value={state?.minStock}
            onChangeText={setState('minStock')}
            error={touched?.minStock && !!errors?.minStock}
          />

          <Input
            width='48'
            label='Estoque Atual'
            value={state?.currentStock}
            onChangeText={setState('currentStock')}
            error={touched?.currentStock && !!errors?.currentStock}
          />
        </Row>
      </Area>

      <ModalSearch
        showModal={showModal}
        setShowModal={setShowModal}
        setFieldValue={setFieldValue}
      />
    </>
  )
}