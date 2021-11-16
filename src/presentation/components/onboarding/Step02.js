import React, { useCallback } from 'react'
import { View, TextInput } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import tw from 'tailwind-react-native-classnames'
import { useFocusEffect } from '@react-navigation/native';

import { setStep } from 'reducers/authStepperSlice'

const Step02 = () => {

  const dispatch = useDispatch()

  useFocusEffect(
    useCallback(() => {
      dispatch(setStep(2))
    }, [])
  );

  return (
    <View style={tw`flex flex-1 flex-col py-10`}>
      <TextInput
        style={tw`bg-gray-200 p-4 rounded-md`}
        placeholder="Postal address" />
      <TextInput
        style={tw`bg-gray-200 p-4 mt-10 mb-10 rounded-md`}
        placeholder="Physical location" />
      <TextInput
        style={tw`bg-gray-200 p-4 rounded-md`}
        textContentType="telephoneNumber"
        placeholder="Alternative phone number" />
    </View>
  )
}

export default Step02
