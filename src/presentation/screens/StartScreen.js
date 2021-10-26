import React, { Component } from 'react'
import { SafeAreaView, View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import { useNavigation } from '@react-navigation/native'

const StartScreen = () => {
  const navigation = useNavigation()

  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
      <View style={{ flex: 1 }}>
        <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center' }}>
          <TouchableOpacity style={tw`bg-black py-5 m-3 rounded-full`} onPress={() => navigation.navigate('LoginScreen')}>
            <Text style={tw`text-center text-white text-xl`}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={tw`bg-black py-5 m-3 rounded-full`} onPress={() => navigation.navigate('RegisterScreen')}>
            <Text style={tw`text-center text-white text-xl`}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default StartScreen

