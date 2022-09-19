import React from "react"
import { Area, Button, Container, Icon, Input, Label, MaskedInput } from "./styles"

export default ({type, label, icon, action, error, width, ...props}) => {
  return (
    <Container width={width}>
      {label && <Label error={error}>{label}</Label>}
      <Area error={error}>
        {type ? 
          <MaskedInput error={error} type={type} {...props}/>
          : 
          <Input error={error} {...props}/>
        }
        <Button onPress={action}>
          <Icon name={icon}/>
        </Button>
      </Area>
    </Container>
  )
}