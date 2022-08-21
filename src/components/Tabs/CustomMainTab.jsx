import React from "react"
import { Icon, Label, Tab, TabItem } from "./styles"
import { useDispatch } from "react-redux"
import userThunk from "../../thunks/user.thunks"

export default ({ state, navigation }) => {
  const dispatch = useDispatch()
  const handleNavigate = (screen) => {
    return navigation.navigate(screen);
  }

  const handleLogout = () => {
    dispatch(userThunk.logout()).then(() => {
      return navigation.reset({routes: [{name: 'SignIn'}]})
    })
  }

  return (
    <Tab>
      <TabItem onPress={() => handleNavigate('Profile')}>
        <Icon name='person' />
        {/* <Label>Perfil</Label> */}
      </TabItem>
      
      {/* <TabItem onPress={() => handleNavigate('Home')}>
        <Icon name='home-sharp' />
        <Label>Início</Label>
      </TabItem>

      <TabItem onPress={() => handleNavigate('Search')}>
        <Icon name='search' />
        <Label>Busca</Label>
      </TabItem>

      <TabItem onPress={() => handleNavigate('Orders')}>
        <Icon name='document-text-outline' />
        <Label>Pedidos</Label>
      </TabItem>
      
      <TabItem onPress={() => handleNavigate('Settings')}>
        <Icon name='settings-outline' />
        <Label>Configs</Label>
      </TabItem> */}

      <TabItem onPress={handleLogout}>
        <Icon name='power' />
        {/* <Label>Sair</Label> */}
      </TabItem>
    </Tab>
  )
}