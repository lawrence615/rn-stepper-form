import React from 'react'
import { SafeAreaView, View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import tw from 'tailwind-react-native-classnames'
import { Icon } from 'react-native-elements'

import DashboardScreen from 'components/home/Dashboard'
import AccountScreen from 'components/home/Account'

const HomeScreen = () => {

  const Tab = createBottomTabNavigator()


  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        tabBarActiveTintColor: '#fe9d34',
        tabBarStyle: { height: 60, borderTopLeftRadius:20, borderTopRightRadius:20 }
      }}>
      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Icon name='home' type='ionicon' color={color} size={size} />
          )
        }} />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({ color, size }) => (
            <Icon name='person' type='ionicon' color={color} size={size} />
          )
        }} />
    </Tab.Navigator>
  )
}

export default HomeScreen

