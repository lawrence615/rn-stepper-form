import React, { useEffect } from 'react'
import { SafeAreaView, View, TextInput } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import tw from 'tailwind-react-native-classnames'

import { setStep } from 'reducers/authStepperSlice'
import { selectRole, selectStep } from 'selectors/authStepperSlice'

import Header from './Header'
import Nav from './Nav'

const Step02 = () => {

  const dispatch = useDispatch()

  // const step = useSelector(selectStep)

  // useEffect(() => {
  //   console.log('current step')
  //   dispatch(setStep(2))
  // })

  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Header />
      <View style={tw`flex flex-col`}>
        <TextInput
          style={tw`bg-gray-200 p-4 rounded-md`}
          placeholder="Postal address" />
        <TextInput
          style={tw`bg-gray-200 p-4 mt-10 mb-10 rounded-md`}
          placeholder="Physical location" />
        <TextInput
          style={tw`bg-gray-200 p-4 rounded-md`}
          placeholder="Email" />
        <TextInput
          style={tw`bg-gray-200 p-4  mt-10 rounded-md`}
          placeholder="Alternative phone number" />
      </View>
      <Nav />
    </SafeAreaView>
  )
}

export default Step02
