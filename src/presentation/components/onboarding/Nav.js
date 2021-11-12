import React from 'react'
import { SafeAreaView, View, TouchableOpacity, Text } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import tw from 'tailwind-react-native-classnames'

import { setStep } from 'reducers/authStepperSlice'
import { selectStep } from 'selectors/authStepperSlice'

const Nav = () => {

  const dispatch = useDispatch()
  const step = useSelector(selectStep)

  const onNextStep = () => {
    dispatch(setStep(step + 1))
  }

  const onPreviousStep = () => {
    dispatch(setStep(step - 1))
  }

  return (
    <SafeAreaView style={tw`bg-white mt-auto`}>
      <View style={tw`flex flex-row justify-between mb-5`}>
        <TouchableOpacity
          style={tw`justify-between py-3 rounded-full`}>
          <Text style={tw`text-xl font-semibold`} onPress={() => onPreviousStep()}>Previous step</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`justify-between bg-blue-400 w-36 h-16 px-4 py-4 rounded-md`}>
          <Text style={tw`text-xl text-white font-semibold`} onPress={() => onNextStep()}>Next step</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Nav
