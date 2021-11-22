import React, { Component, useState } from 'react'
import { SafeAreaView, View, TouchableOpacity, Text, TextInput, StyleSheet } from 'react-native'
import { Icon } from 'react-native-elements'
import tw from 'tailwind-react-native-classnames'
import { useNavigation } from '@react-navigation/native'

const StartScreen = () => {

  const navigation = useNavigation()
  const [hidePassword, setHidePassword] = useState(true)


  const renderIcon = () => {
    return hidePassword
      ? <Icon style={tw`right-0`} name='eye-off-outline' type='ionicon' onPress={onPasswordShow} />
      : <Icon style={tw`right-0`} name='eye-outline' type='ionicon' onPress={onPasswordShow} />
  }

  const onPasswordShow = () => {
    return hidePassword ? setHidePassword(false) : setHidePassword(true)
  }

  return (
    <SafeAreaView style={tw`bg-white flex-grow p-3`}>
      <View style={tw`h-1/3`}>
        <View style={tw`justify-center items-center absolute bottom-10 self-center`}>
          <Text style={[tw`text-xl font-extrabold`, { color: "#102A68" }]}>Welcome to MyLegalRights</Text>
          <Text style={tw`text-base font-normal`}>Justice Be Our Shield and Defender</Text>
        </View>
      </View>
      <View style={tw`h-2/3 p-4`}>
        <View style={tw`flex flex-col`}>
          <TextInput
            style={tw`bg-gray-200 p-4 rounded-md`}
            textContentType="emailAddress"
            placeholder="Email" />
          <View style={tw`flex-row items-center bg-gray-200 p-2 mt-5 rounded-md`}>
            <TextInput
              style={tw`flex-1`}
              placeholder="Password"
              textContentType="password"
              secureTextEntry={hidePassword} />
            {renderIcon()}
          </View>
          <TouchableOpacity style={[tw`bg-black py-4 mt-7 rounded-md`, { backgroundColor: '#FE9D34' }]} onPress={() => navigation.navigate('HomeScreen')}>
            <Text style={tw`text-center text-white text-xl`}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={tw`flex-row justify-center items-center absolute bottom-0 self-center`}>
          <Text style={tw`text-lg font-normal`}>Don't have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
            <Text style={[tw`text-lg font-extrabold`, { color: "#102A68" }]}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default StartScreen

