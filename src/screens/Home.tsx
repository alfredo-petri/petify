import React from 'react'
import { ScrollView, View } from 'react-native'
import { Surface, Text} from "react-native-paper"
import { Logo } from '../components/Logo'
import { LoginFormFC } from '../components/login/LoginForm'

export const Home = () => {
  return (
    <ScrollView style={{ }} contentContainerStyle={{paddingVertical: 30, paddingHorizontal:20, gap: 10, alignItems:"center", justifyContent:"center", flex: 1}} keyboardShouldPersistTaps='handled'>
      <Logo />
      <LoginFormFC />
      </ScrollView>
  )
}
