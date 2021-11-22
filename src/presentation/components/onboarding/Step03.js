import React, { useCallback, useState } from 'react'
import { View, TextInput } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { Icon } from 'react-native-elements'
import tw from 'tailwind-react-native-classnames'
import { useFocusEffect } from '@react-navigation/native';

import { setStep } from 'reducers/authStepperSlice'

const Step03 = () => {

  const [hideNewPassword, setHideNewPassword] = useState(true)
  const [hideConfirmNewPassword, setHideConfirmNewPassword] = useState(true)
  const dispatch = useDispatch()

  const renderNewPasswordIcon = () => {
    return hideNewPassword
      ? <Icon style={tw`right-0`} name='eye-off-outline' type='ionicon' onPress={onNewPasswordShow} />
      : <Icon style={tw`right-0`} name='eye-outline' type='ionicon' onPress={onNewPasswordShow} />
  }

  const renderConfirmNewPasswordIcon = () => {
    return hideConfirmNewPassword
      ? <Icon style={tw`right-0`} name='eye-off-outline' type='ionicon' onPress={onConfirmNewPasswordShow} />
      : <Icon style={tw`right-0`} name='eye-outline' type='ionicon' onPress={onConfirmNewPasswordShow} />
  }

  const onNewPasswordShow = () => {
    return hideNewPassword ? setHideNewPassword(false) : setHideNewPassword(true)
  }

  const onConfirmNewPasswordShow = () => {
    return hideConfirmNewPassword ? setHideConfirmNewPassword(false) : setHideConfirmNewPassword(true)
  }

  useFocusEffect(
    useCallback(() => {
      dispatch(setStep(3))
    }, [])
  );

  return (
    <View style={tw`flex flex-1 flex-col py-10`}>
      <View style={tw`flex-row items-center bg-gray-200 p-2 rounded-md`}>
        <TextInput
          style={tw`flex-1`}
          placeholder="Password"
          textContentType="newPassword"
          secureTextEntry={hideNewPassword} />
        {renderNewPasswordIcon()}
      </View>
      <View style={tw`flex-row items-center bg-gray-200 p-2 mt-10 mb-10 rounded-md`}>
        <TextInput
          style={tw`flex-1`}
          placeholder="Confirm password"
          textContentType="newPassword"
          secureTextEntry={hideConfirmNewPassword} />
        {renderConfirmNewPasswordIcon()}
      </View>
    </View>
  )
}

export default Step03
