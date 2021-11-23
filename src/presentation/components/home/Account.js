import React from 'react'
import { SafeAreaView,View, Text } from 'react-native'
import tw from 'tailwind-react-native-classnames'

const Account = () => {
  return (
    <SafeAreaView style={[tw`flex-grow p-3`, {backgroundColor:'#FAFAFF'}]}>
      <View>
        <Text> Account Screen </Text>
      </View>
    </SafeAreaView>
  )
}

export default Account
