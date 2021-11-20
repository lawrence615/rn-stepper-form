import React from 'react'
import { SafeAreaView, View, Text } from 'react-native'
import tw from 'tailwind-react-native-classnames'

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white flex-grow p-3`}>
      <View>
        <Text> Home Screen </Text>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

