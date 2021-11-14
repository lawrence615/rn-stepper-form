import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import tw from 'tailwind-react-native-classnames'

import { selectSteps, selectStep } from 'selectors/authStepperSlice'

const Header = () => {

  const steps = useSelector(selectSteps)
  const step = useSelector(selectStep)


  const renderSteps = () => {
    return steps.map((item, index) => {
      console.log(item)
      return (
        <View key={index} style={tw`py-4 px-2 w-24 rounded-l-md ${step === index + 1 && "bg-green-100"}`}>
          <Text style={tw`text-xs font-normal`}>{item.label}</Text>
          <Text style={tw`text-sm font-medium`}>{item.desc}</Text>
        </View>
      )
    })
  }

  const onNextStep = (step) => {

  }

  return (
    <View style={tw`flex flex-row justify-between bg-gray-100 rounded-md`}>
      {renderSteps()}
    </View>
  )
}

export default Header
