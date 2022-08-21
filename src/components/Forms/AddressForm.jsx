import React from 'react'
import { Area, Row } from './styles'
import { ToastAndroid as Toast } from 'react-native'
import Input from '../Input'

import { searchZipcode } from '../../services/zipcodeService'

export default ({ state, setState, errors, handleBlur, touched, setFieldValue }) => {
  const handleZipcodeSearch = (query) => {
    // console.log(`searching zipcode: ${query}`);
    searchZipcode(query.replace('-', ''))
    .then(result => {
      if (result.error)
        return Toast.show(result.message, Toast.SHORT);
  
      return Object.keys(result).forEach(item => {
        setFieldValue(`address.${item}`, result[item]);
      });
    })
  }
  return (
    <Area>
      <Input
        type='zip-code'
        label='*CEP'
        icon='search'
        action={() => handleZipcodeSearch(state.address.zipcode)}
        value={state?.address?.zipcode}
        onChangeText={setState('address.zipcode')}
        onBlur={handleBlur('address.zipcode')}
        error={touched?.zipcode && !!errors?.zipcode}
      />

      <Input
        label='logradouro'
        value={state?.address?.streetName}
        onChangeText={setState('address.streetName')}
        error={touched?.streetName && !!errors?.streetName}
        editable={false}
      />

      <Row>
        <Input
          width='29'
          label='Número'
          value={state?.address?.number}
          onChangeText={setState('address.number')}
          error={touched?.number && !!errors?.number}
        />

        <Input
          width='69'
          label='Complemento'
          value={state?.address?.complement}
          onChangeText={setState('address.complement')}
        />
      </Row>

      <Input
        label='Bairro'
        value={state?.address?.district}
        onChangeText={setState('address.district')}
        error={touched?.district && !!errors?.district}
        editable={false}
      />

      <Row>
        <Input
          label='Cidade'
          width='69'
          value={state?.address?.city}
          onChangeText={setState('address.city')}
          error={touched?.city && !!errors?.city}
          editable={false}
        />

        <Input
          width='29'
          label='UF'
          value={state?.address?.state}
          onChangeText={setState('address.state')}
          error={touched?.state && !!errors?.state}
          editable={false}
        />
      </Row>
    </Area>
  )
}