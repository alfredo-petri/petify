import { NavigationContainer } from '@react-navigation/native'
import React from 'react'

interface IProvidersProps {
    children: React.ReactNode
}

export const Providers:React.FC<IProvidersProps> = ({children}) => {
  return (
    <NavigationContainer>{children}</NavigationContainer>
  )
}
