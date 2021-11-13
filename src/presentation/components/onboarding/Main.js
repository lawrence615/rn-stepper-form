import React, { useEffect } from 'react'
import { SafeAreaView, View, Text, TextInput } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import tw from 'tailwind-react-native-classnames'

import Header from './Header'
import Nav from './Nav'
import Step01 from 'components/onboarding/Step01'
import Step02 from 'components/onboarding/Step02'
import Step03 from 'components/onboarding/Step03'
import Step04 from 'components/onboarding/Step04'

import { selectStep } from 'selectors/authStepperSlice'

const Main = () => {

  const step = useSelector(selectStep)

  const renderView = (step) => {
    console.log('renderView: ', step)
    switch (step) {
      case 1:
        return <Step01 />
      case 2:
        return <Step02 />
      case 3:
        return <Step03 />
      case 4:
        return <Step04 />
    }
  }

  useEffect(() => {
    console.log('step', step)

    const updateView = (step) => {
      renderView(step)
    }
    updateView(step)
  }, [step])

  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Header />
      {renderView(step)}
      <Nav />
    </SafeAreaView>
  )
}

export default Main
