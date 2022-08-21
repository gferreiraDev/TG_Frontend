import React from 'react'
import { Box, Card, Icon, Text  } from './styles'

export default ({ errorText, onChange, value }) => {
  return (
    <Box>
      <Box row pV='5' pH='5'>
        <Card radius='5' mH='10' border width='25px' height='25' onPress={onChange}>
          {value && <Icon name='checkmark-done-sharp' />}
        </Card>
        <Card width='90%'>
          <Text>Li e concordo com os
            <Text bold color='#6D2DA7'> Termos de Uso</Text> e com a
            <Text bold color='#6D2DA7'> Política de Privacidade</Text>
          </Text>
        </Card>
      </Box>
      <Text italic small mH='15' color='#EE2E31'>{errorText}</Text>
    </Box>
  )
}