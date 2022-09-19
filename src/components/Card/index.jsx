import React from 'react'
import { Body, Box, Button, Card, Header, Icon, Title } from './styles'

export default ({onPress, title, buttons, children}) => {
  return (
    <Card onPress={onPress}>
      {title && 
        <Header>
          <Title>{title}</Title>
          <Box row>
            {buttons && buttons.map((item, idx) => (
              <Button
                key={idx}
                mH='5'
                onPress={item.action}
                delete={item.delete}
              >
                <Icon name={item.icon}/>
              </Button>
            ))}
          </Box>
        </Header>
      }
      <Body>
        {children}
      </Body>
    </Card>
  )
}