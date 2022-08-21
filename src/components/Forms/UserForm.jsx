import React from 'react'
import { Area, Scroll } from './styles'
import Input from '../Input'

export default ({ state, setState, errors, touched, handleBlur }) => {
  return state.profile === 'Consumidor' ? (
    <Scroll>
      <Area>
        <Input
          label='*Nome'
          value={state.name}
          onChangeText={setState('name')}
          onBlur={handleBlur('name')}
          error={touched.name && !!errors.name}
        />

        <Input
          label='*E-mail'
          value={state.email}
          onChangeText={setState('email')}
          onBlur={handleBlur('email')}
          error={touched.email && !!errors.email}
        />

        <Input
          label='*CPF'
          type='cpf'
          value={state.cpf}
          onChangeText={setState('cpf')}
          onBlur={handleBlur('cpf')}
          error={touched.cpf && !!errors.cpf}
        />

        <Input
          label='*Telefone'
          type='cel-phone'
          value={state.phone}
          onChangeText={setState('phone')}
          onBlur={handleBlur('phone')}
          error={touched.phone && !!errors.phone}
        />
      </Area>
    </Scroll>
  )
  :
  (
    <Scroll>
      <Area>
        <Input
          label='*Razão Social'
          value={state.corporateName}
          onChangeText={setState('corporateName')}
          onBlur={handleBlur('corporateName')}
          error={touched.corporateName && !!errors.corporateName}
        />

        <Input
          label='*Nome Fantasia'
          value={state.tradingName}
          onChangeText={setState('tradingName')}
          onBlur={handleBlur('tradingName')}
          error={touched.tradingName && !!errors.tradingName}
        />

        <Input
          label='*E-mail'
          value={state.email}
          onChangeText={setState('email')}
          onBlur={handleBlur('email')}
          error={touched.email && !!errors.email}
        />

        <Input
          label='*CNPJ'
          type='cnpj'
          value={state.cnpj}
          onChangeText={setState('cnpj')}
          onBlur={handleBlur('cnpj')}
          error={touched.cnpj && !!errors.cnpj}
        />

        <Input
          label='*Telefone'
          type='cel-phone'
          value={state.phone}
          onChangeText={setState('phone')}
          onBlur={handleBlur('phone')}
          error={touched.phone && !!errors.phone}
        />
        
        <Input
          label='Website'
          value={state.website}
          onChangeText={setState('website')}
        />
      </Area>
    </Scroll>
  )
}