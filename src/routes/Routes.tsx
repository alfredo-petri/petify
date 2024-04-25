import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from '../screens/Home'
import { defaultNavigationOptions } from './defaultNavigationOptions'
import { MainscreenStack } from './MainscreenStack'


const Stack = createNativeStackNavigator<HomeStackParams>()

export type HomeStackParams = {
  Home: undefined,
  Mainscreen: undefined
}

export const Routes = () => {
  return (
    <Stack.Navigator screenOptions={defaultNavigationOptions}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Mainscreen" component={MainscreenStack} />
    </Stack.Navigator>
    
  )
}
