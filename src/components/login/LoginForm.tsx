import React, { useRef, useState } from 'react'
import  { LoginForm }  from '../../types/server/shared/login'
import {useFormik} from 'formik'
import { Alert, Keyboard, KeyboardAvoidingView, TextInput as OriginalTextInput  } from 'react-native'
import { TextInput } from 'react-native-paper'
import { api } from '../../backend/api'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { HomeStackParams } from '../../routes/Routes'
import { AxiosError } from 'axios'
export const LoginFormFC:React.FC = () => {
    const [loading, setLoading] = useState(false)
    const password_ref = useRef<OriginalTextInput>(null)

    const navigation = useNavigation<NavigationProp<HomeStackParams, "Home">>()

    const formik = useFormik<LoginForm>({
        initialValues: {
            login: '',
            password: '',
        },
        onSubmit: async (values) => {
            if(loading) return
            setLoading(true)
            Keyboard.dismiss()



            try {
                const response = await api.post('/user/login', values )
                const user  = response.data

                if(user) {
                    navigation.navigate("Mainscreen")
                } else {
                    Alert.alert("Email ou senha inválidos")
                }


            } catch (error) {
                if (error instanceof AxiosError) {
                    console.log(JSON.stringify(error.response,null,4))}
            } finally {
                setLoading(false)
            }
            console.log(values)
        }
    })



  return (
    <KeyboardAvoidingView behavior='padding' style={{gap:10, width:'100%'}}>
        <TextInput 
        label="Email ou nome de usuário"
        value={formik.values.login}
        onChangeText={formik.handleChange("login")} 
        keyboardType='email-address'
        returnKeyType='next'
        autoCapitalize='none'
        readOnly={loading}
        onSubmitEditing={()=> password_ref.current?.focus()}
        />
        
        <TextInput 
        ref={password_ref}
        label="Senha"
        value={formik.values.password}
        onChangeText={formik.handleChange("password")} 
        secureTextEntry
        returnKeyType='done'
        autoCapitalize='none'
        onSubmitEditing={()=> formik.handleSubmit()}
        readOnly={loading}/>
    </KeyboardAvoidingView>
  )
}
