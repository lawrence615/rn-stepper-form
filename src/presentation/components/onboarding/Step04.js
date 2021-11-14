import React, { useEffect, useCallback } from 'react'
import { SafeAreaView, View, Text, TextInput } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import tw from 'tailwind-react-native-classnames'
import { useFocusEffect } from '@react-navigation/native';

import { setStep } from 'reducers/authStepperSlice'

const Step04 = () => {

  const dispatch = useDispatch()

  useFocusEffect(
    useCallback(() => {
      dispatch(setStep(4))
    }, [])
  );

  return (
    <View style={tw`flex-1`}>
      <Text>Step04</Text>
    </View>
  )
}

export default Step04
