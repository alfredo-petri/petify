import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { DashBoard } from '../components/dashboard/DashBoard'

export type MainscreenStackParams = {
    DashBoard: undefined
}

const Stack = createNativeStackNavigator<MainscreenStackParams>()


export const MainscreenStack = () => {



    return (
    <Stack.Navigator><Stack.Screen name="DashBoard" component={DashBoard} /></Stack.Navigator>
  )
}
