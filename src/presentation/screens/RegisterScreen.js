import React from 'react'
import { View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import tw from 'tailwind-react-native-classnames'

import PickRole from 'components/onboarding/PickRole'
import Main from 'components/onboarding/Main'

const RegisterScreen = () => {

  const Stack = createNativeStackNavigator()

  return (
    <View style={tw`bg-white flex-1 p-5`}>
      <Stack.Navigator initialRouteName="PickRole">
        <Stack.Screen name="PickRole" component={PickRole} options={{ headerShown: false }} />
        <Stack.Screen name="StartStepper" component={Main} options={{ headerShown: false }} />
      </Stack.Navigator>
    </View>
  )
}

export default RegisterScreen




