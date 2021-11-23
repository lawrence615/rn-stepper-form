import React from 'react'
import { SafeAreaView, View, Text } from 'react-native'
import tw from 'tailwind-react-native-classnames'

const Dashboard = () => {
  return (
    <SafeAreaView style={[tw`flex-grow p-3`, {backgroundColor:'#FAFAFF'}]}>
      <View>
        <Text> Dashboard Screen </Text>
      </View>
    </SafeAreaView>
  )
}

export default Dashboard
