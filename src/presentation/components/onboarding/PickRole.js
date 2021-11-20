import React, { useEffect, useCallback } from 'react'
import { SafeAreaView, View, TouchableOpacity, Text, ToastAndroid } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import tw from 'tailwind-react-native-classnames'
import { Icon } from 'react-native-elements'
import { useFocusEffect } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native'

import { setStep, setRole } from 'reducers/authStepperSlice'
import { selectRole } from 'selectors/authStepperSlice'

const PickRole = () => {

  const navigation = useNavigation()
  const dispatch = useDispatch()
  const role = useSelector(selectRole)

  const onRoleSelected = (value) => {
    console.log('onRoleSelected', value)
    dispatch(setRole(value))
  }

  const onClickNext = () => {
    if (role === null) {
      ToastAndroid.show("Please select role", ToastAndroid.SHORT)
      return
    }
    console.log('onClickNext')
    // dispatch(setStep(1))
    navigation.navigate('StartStepper')
  }

  // useEffect(() => {
  //   console.log('current step')
  //   dispatch(setStep(0))
  // })

  useFocusEffect(
    useCallback(() => {
      dispatch(setStep(1))
    }, [])
  );

  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <View style={tw`m-3`}>
        <Text style={[tw`py-2 text-2xl font-extrabold`, { color: "#102A68" }]}>Get Started</Text>
        <Text style={tw`text-sm font-medium`}>Start by telling us who you are...</Text>
      </View>
      <View>
        <TouchableOpacity style={tw`bg-gray-100 py-4 m-3 rounded-lg max-h-40`} onPress={() => onRoleSelected('law_firm')}>
          <View style={tw`p-3`}>
            <View style={tw`flex flex-row justify-between mb-5`}>
              <Icon style={tw`items-start`} name="gavel" type="font-awesome" size={23} color='#102A68' />
              {
                role === 'law_firm' && (
                  <Icon style={tw`flex-grow items-end`} name="check-circle" type="font-awesome" size={23} color='#102A68' />
                )
              }
            </View>
            <Text style={[tw`text-xl font-semibold`,{color:'#102A68'}]}>Law Firm</Text>
            <Text style={tw`py-2`}>A business that is engaged in the practice of Law.</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={tw`bg-gray-100 py-4 m-3 rounded-lg max-h-40`} onPress={() => onRoleSelected('organization')}>
          <View style={tw`p-3`}>
            <View style={tw`flex flex-row justify-between mb-5`}>
              <Icon style={tw`items-start`} name="briefcase" type="font-awesome" size={23} color='#102A68' />
              {
                role === 'organization' && (
                  <Icon style={tw`flex-grow items-end`} name="check-circle" type="font-awesome" size={23} color='#102A68' />
                )
              }
            </View>
            <Text style={[tw`text-xl font-semibold`,{color:'#102A68'}]}>Organization</Text>
            <Text style={tw`py-2`}>A commercial operation, company or government department.</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={tw`bg-gray-100 py-4 m-3 rounded-lg max-h-40`} onPress={() => onRoleSelected('individual')}>
          <View style={tw`p-3`}>
            <View style={tw`flex flex-row justify-between mb-5`}>
              <Icon style={tw`items-start`} name="user" type="font-awesome" size={23} color='#102A68' />
              {
                role === 'individual' && (
                  <Icon style={tw`flex-grow items-end`} name="check-circle" type="font-awesome" size={23} color='#102A68' />
                )
              }
            </View>
            <Text style={[tw`text-xl font-semibold`,{color:'#102A68'}]}>Individual</Text>
            <Text style={tw`py-2`}>I'm an Individual.</Text>
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={tw`flex-row absolute bottom-0 self-center`}
        onPress={() => onClickNext()}>
        <View style={tw`flex-row justify-center items-center`}>
          <Text style={[tw`text-xl font-extrabold`, { color: "#102A68" }]}>Click to continue</Text>
          <Icon name='arrow-forward-outline' type='ionicon' color='#102A68' />
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default PickRole
