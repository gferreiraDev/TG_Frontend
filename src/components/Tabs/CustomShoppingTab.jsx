import React from "react"
import { Icon, Enticon, Tab, TabItem } from "./styles"

export default ({ navigation }) => {
  const handleNavigate = (screen) => {
    return navigation.navigate(screen);
  }

  const handleGoBack = () => {
    return navigation.reset({routes: [{name: 'Main'}]})
  }

  return (
    <Tab>
      <TabItem onPress={() => handleNavigate('ShoppingProfile')}>
        <Enticon name='shop' />
        {/* <Label>Lojas</Label> */}
      </TabItem>

      <TabItem onPress={() => handleNavigate('Reviews')}>
        <Icon name='star-outline' />
        {/* <Label>Pedidos</Label> */}
      </TabItem>

      <TabItem onPress={() => handleNavigate('Products')}>
        <Icon name='search' />
        {/* <Label>Pedidos</Label> */}
      </TabItem>

      <TabItem onPress={() => handleNavigate('Cart')}>
        <Icon name='md-cart-outline' />
        {/* <Label>Pedidos</Label> */}
      </TabItem>
      
      <TabItem onPress={() => handleNavigate('Chat')}>
        <Icon name='ios-chatbox-ellipses-outline' />
        {/* <Label>Pedidos</Label> */}
      </TabItem>
      
      <TabItem onPress={handleGoBack}>
        <Icon name='arrow-undo-outline' />
        {/* <Label>Perfil</Label> */}
      </TabItem>
    </Tab>
  )
}