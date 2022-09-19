import React from "react"
import { Icon, Enticon, Tab, TabItem } from "./styles"
import { useDispatch } from "react-redux"
import userThunk from "../../thunks/user.thunks"
import { useSelector } from "react-redux"

export default ({ state, navigation }) => {
  const user = useSelector(rootState => rootState.user)
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
      </TabItem>

      <TabItem onPress={() => handleNavigate('Home')}>
        <Enticon name={user.profile === 'Consumidor' ? 'home' : 'shop'}/>
      </TabItem>
      
      {user.profile === 'Consumidor' &&
        <TabItem onPress={() => handleNavigate('Search')}>
          <Icon name='search' />
        </TabItem>
      }

      {user.profile === 'Vendedor' &&
        <TabItem onPress={() => handleNavigate('Stock')}>
          <Icon name='list' />
        </TabItem>
      }

      {/* <TabItem onPress={() => handleNavigate('Orders')}>
        <Icon name='document-text-outline' />
        <Label>Pedidos</Label>
      </TabItem>
      */}

      <TabItem onPress={handleLogout}>
        <Icon name='power' />
      </TabItem>
    </Tab>
  )
}