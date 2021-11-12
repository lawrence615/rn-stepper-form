import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import tw from 'tailwind-react-native-classnames'

import { selectStep } from 'selectors/authStepperSlice'

const Header = () => {

  const step = useSelector(selectStep)


  const onNextStep = (step) => {

  }

  // useEffect(() => {
  //   console.log('current step ' + step)
  //   // dispatch(setStep(1))
  // }, [step])

  return (
    <View style={tw`flex flex-row justify-between bg-gray-100 rounded-md`}>
      <View style={tw`py-4 px-2 w-24 rounded-l-md ${step === 1 && "bg-green-100"}`}>
        <Text style={tw`text-xs font-normal`}>STEP 01</Text>
        <Text style={tw`text-sm font-medium`}>Start</Text>
      </View>
      <View style={tw`py-4 px-2 w-24 ${step === 2 && "bg-green-100"}`}>
        <Text style={tw`text-xs font-normal`}>STEP 02</Text>
        <Text style={tw`text-sm font-medium`}>Details</Text>
      </View>
      <View style={tw`py-4 px-2 w-24 ${step === 3 && "bg-green-100"}`}>
        <Text style={tw`text-xs font-normal`}>STEP 03</Text>
        <Text style={tw`text-sm font-medium`}>Topics</Text>
      </View>
      <View style={tw`py-4 px-2 w-24 rounded-r-md ${step === 4 && "bg-green-100"}`}>
        <Text style={tw`text-xs font-normal`}> STEP 04</Text>
        <Text style={tw`text-sm font-medium`}>Confirm</Text>
      </View>
    </View>
  )
}

export default Header
