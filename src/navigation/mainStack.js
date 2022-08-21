import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import CustomMainTab from "../components/Tabs/CustomMainTab"

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

/* SCREENS */
import Preload from "../screens/Preload"
import SignIn from "../screens/SignIn"
import SignUp from "../screens/SignUp"
import Profile from "../screens/Profile"
import Recovery from "../screens/Recovery"

/* FORMS */
import UserUpdate from "../screens/Forms/UserUpdate"
import AddressUpdate from "../screens/Forms/AddressUpdate"
import OpeningHoursUpdate from "../screens/Forms/OpeningHoursUpdate"

const MainTab = () => (
  <Tab.Navigator
    screenOptions={{ headerShown: false }}
    initialRouteName="Profile"
    tabBar={props => <CustomMainTab {...props}/>}
  >
    <Tab.Screen name="Profile" component={Profile}/>
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
  </Stack.Navigator>
)

export default MainStack;