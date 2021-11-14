import React, { useCallback } from 'react'
import { View, Text, TextInput } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import tw from 'tailwind-react-native-classnames'
import { useFocusEffect } from '@react-navigation/native';

import { setStep } from 'reducers/authStepperSlice'
import { selectRole } from 'selectors/authStepperSlice'


const Step01 = () => {

  const dispatch = useDispatch()

  const role = useSelector(selectRole)

  useFocusEffect(
    useCallback(() => {
      dispatch(setStep(1))
    }, [])
  );

  return (
    <View style={tw`flex-1`}>
      <View style={tw`py-10`}>
        <Text style={tw`text-xl font-medium`}>A little about you</Text>
        <Text style={tw`text-sm font-light`}>Please fill the inputs below</Text>
      </View>

      {role === 'law_firm' && (
        <View>
          <View style={tw`flex flex-col`}>
            <TextInput
              style={tw`bg-gray-200 p-4 rounded-md`}
              placeholder="Business registration number" />
            <TextInput
              style={tw`bg-gray-200 p-4 mt-10 mb-10 rounded-md`}
              placeholder="Name of Law Firm" />
            <TextInput
              style={tw`bg-gray-200 p-4 rounded-md`}
              placeholder="Email" />
            <TextInput
              style={tw`bg-gray-200 p-4  mt-10 rounded-md`}
              placeholder="Phone number" />
          </View>
        </View>
      )}

      {role === 'organization' && (
        <View>
          <View style={tw`flex flex-col`}>
            <TextInput
              style={tw`bg-gray-200 p-4 rounded-md`}
              placeholder="Organization registration number" />
            <TextInput
              style={tw`bg-gray-200 p-4 mt-10 mb-10 rounded-md`}
              placeholder="Name of organization" />
            <TextInput
              style={tw`bg-gray-200 p-4 rounded-md`}
              placeholder="Email" />
            <TextInput
              style={tw`bg-gray-200 p-4  mt-10 rounded-md`}
              placeholder="Phone number" />
          </View>
        </View>
      )}

      {role === 'individual' && (
        <View>
          <View style={tw`flex flex-row mb-10`}>
            <TextInput
              style={tw`flex-1 bg-gray-200 mr-2.5 p-4 rounded-md`}
              placeholder="First name" />
            <TextInput
              style={tw`flex-1 bg-gray-200 ml-2.5 p-4 rounded-md`}
              placeholder="Last name" />
          </View>
          <View style={tw`flex flex-col`}>
            <TextInput
              style={tw`bg-gray-200 p-4 rounded-md`}
              placeholder="Email" />
            <TextInput
              style={tw`bg-gray-200 p-4 mt-10 mb-10 rounded-md`}
              placeholder="ID Number" />
            <TextInput
              style={tw`bg-gray-200 p-4 rounded-md`}
              placeholder="Phone number" />
          </View>
        </View>
      )}
    </View>
  )
}

export default Step01
