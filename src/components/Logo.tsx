import React from 'react'
import { ColorValue } from 'react-native'
import { Image } from "expo-image"

interface ILogoProps {
    size?: number,
    tintColor?: ColorValue 
}


export const Logo:React.FC<ILogoProps> = ({size=200, tintColor="black"}) => {
  return (
    <Image source={require("../../assets/logo.jpg")} style={{width: size, height: size,}}/>
  )
}
