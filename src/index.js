import React from "react"
import { StatusBar } from "expo-status-bar"
import { NavigationContainer } from "@react-navigation/native"
import MainStack from "./navigation/mainStack"
import { Provider } from "react-redux"
import store from "./store/index"


export default () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar backgroundColor="#ccc" style="auto"/>
        <MainStack/>
      </NavigationContainer>
    </Provider>
  )
}