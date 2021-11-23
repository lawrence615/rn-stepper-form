import React from 'react'
import { SafeAreaView, View, TouchableOpacity, Text } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import tw from 'tailwind-react-native-classnames'
import { useNavigation } from '@react-navigation/native'

import { setStep } from 'reducers/authStepperSlice'
import { selectStep } from 'selectors/authStepperSlice'

const Nav = () => {

  const dispatch = useDispatch()
  const step = useSelector(selectStep)
  const navigation = useNavigation()


  const onRoleChange = () => {
    navigation.navigate('PickRole')
  }

  const onPreviousStep = () => {
    dispatch(setStep(step - 1))
  }

  const onNextStep = () => {
    dispatch(setStep(step + 1))
  }

  const onFinish = () => {
    // dispatch(setStep(step + 1))
  }

  return (
    <View style={tw`flex flex-row justify-between`}>
      {
        step === 1 && (
          <TouchableOpacity
            style={tw`justify-between py-3 rounded-full items-center`}>
            <Text style={[tw`text-xl font-semibold`, { color: '#102A68' }]} onPress={() => onRoleChange()}>Change role</Text>
          </TouchableOpacity>
        )
      }
      {
        step > 1 && (
          <TouchableOpacity
            style={tw`justify-between py-3 rounded-full items-center`}>
            <Text style={[tw`text-xl font-semibold`, { color: '#102A68' }]} onPress={() => onPreviousStep()}>Previous step</Text>
          </TouchableOpacity>
        )
      }
      {
        step < 4 && (
          <TouchableOpacity
            style={[tw`justify-between w-36 h-16 px-4 py-4 rounded-md items-center`, { backgroundColor: '#FE9D34' }]}>
            <Text style={[tw`text-xl text-white font-semibold`]} onPress={() => onNextStep()}>Next step</Text>
          </TouchableOpacity>
        )
      }
      {
        step === 4 && (
          <TouchableOpacity
            style={[tw`justify-between w-36 h-16 px-4 py-4 rounded-md items-center`, { backgroundColor: '#FE9D34' }]}>
            <Text style={tw`text-xl text-white font-semibold`} onPress={() => onFinish()}>Finish</Text>
          </TouchableOpacity>
        )
      }
    </View>
  )
}

export default Nav
