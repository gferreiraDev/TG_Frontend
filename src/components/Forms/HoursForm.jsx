import React from 'react'
import { Area, Row, Title } from './styles'
import Input from '../Input'

export default ({ state, setState, errors, handleBlur, touched }) => {
  return (
    <Scroll>
      <Area>
        {Object.keys(state).map((item, idx) => (
          <Row key={idx}>
            <Title>{state[item].label}</Title>

            <Input
              width='40'
              label='De'
              value={state[item].from}
              onChangeText={setState(`${item}.from`)}
              onBlur={handleBlur(`${item}.from`)}
              error={touched.from && !!errors.from}
            />

            <Input
              width='40'
              label='Até'
              value={state[item].to}
              onChangeText={setState(`${item}.to`)}
              onBlur={handleBlur(`${item}.to`)}
              error={touched.to && !!errors.to}
            />
          </Row>
        ))}
      </Area>
    </Scroll>
  )
}