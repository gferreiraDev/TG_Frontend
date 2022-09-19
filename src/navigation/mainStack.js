import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { useSelector } from "react-redux"

import CustomMainTab from "../components/Tabs/CustomMainTab"
import CustomShoppingTab from "../components/Tabs/CustomShoppingTab"

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

/* SCREENS */
import Preload from "../screens/Preload"
import SignIn from "../screens/SignIn"
import SignUp from "../screens/SignUp"
import Profile from "../screens/Profile"
import Recovery from "../screens/Recovery"
import SellerSearch from "../screens/SellerSearch"
import ShoppingProfile from "../screens/ShoppingProfile"
import StockList from "../screens/StockList"
import Chat from "../screens/Chat"
import Cart from "../screens/Cart"
import Reviews from "../screens/Reviews"
import ProductDetails from "../screens/ProductDetails"
import Home from "../screens/Home"
import Settings from "../screens/Settings"
import Stock from "../screens/Stock"
import Products from "../screens/Products"

/* FORMS */
import UserUpdate from "../screens/Forms/UserUpdate"
import AddressUpdate from "../screens/Forms/AddressUpdate"
import OpeningHoursUpdate from "../screens/Forms/OpeningHoursUpdate"
import Product from "../screens/Forms/Product"

const MainTab = () => {
  const user = useSelector(rootState => rootState.user)
  
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Search"
      tabBar={props => <CustomMainTab {...props}/>}
    >
      <Tab.Screen name="Profile" component={Profile}/>
      <Tab.Screen name="Home" component={Home}/>
      {user.profile === 'Vendedor' &&
        <Tab.Screen name="Stock" component={Stock}/>
      }
      {user.profile === 'Consumidor' &&
        <Tab.Screen name="Search" component={SellerSearch}/>
      }
    </Tab.Navigator>
  )
}

const ShoppingTab = () => (
  <Tab.Navigator
    screenOptions={{ headerShown: false }}
    initialRouteName="Products"
    tabBar={props => <CustomShoppingTab {...props}/>}
  >
    <Tab.Screen name="ShoppingProfile" component={ShoppingProfile}/>
    <Tab.Screen name="Reviews" component={Reviews}/>
    <Tab.Screen name="Products" component={Products}/>
    <Tab.Screen name="Cart" component={Cart}/>
    <Tab.Screen name="Chat" component={Chat}/>
  </Tab.Navigator>
)

const MainStack = () => (
  <Stack.Navigator
    screenOptions={{ headerShown: false }}
    initialRouteName="Preload"
  >
    <Stack.Group>
      <Stack.Screen name="Preload" component={Preload}/>
      <Stack.Screen name="SignIn" component={SignIn}/>
      <Stack.Screen name="SignUp" component={SignUp}/>
      <Stack.Screen name="Recovery" component={Recovery}/>
    </Stack.Group>

    <Stack.Group>
      <Stack.Screen name="Main" component={MainTab}/>
      <Stack.Screen name="UserUpdate" component={UserUpdate}/>
      <Stack.Screen name="AddressUpdate" component={AddressUpdate}/>
      <Stack.Screen name="OpeningHoursUpdate" component={OpeningHoursUpdate}/>
    </Stack.Group>

    <Stack.Group>
      <Stack.Screen name="Shopping" component={ShoppingTab}/>
      <Stack.Screen name="ProductDetails" component={ProductDetails}/>
      <Stack.Screen name="Settings" component={Settings}/>
      <Stack.Screen name="Product" component={Product}/>
    </Stack.Group>
  </Stack.Navigator>
)

export default MainStack;