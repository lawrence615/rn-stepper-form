import React from 'react'
import { SafeAreaView, View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import tw from 'tailwind-react-native-classnames'
import { Icon } from 'react-native-elements'

import DashboardScreen from 'components/home/Dashboard'
import AddNewScreen from 'components/home/AddNewScreen'
import AccountScreen from 'components/home/Account'

const HomeScreen = () => {

  const Tab = createBottomTabNavigator()

  const AddNewButton = () => {
    return (
      <>

      </>
    )
  }


  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        tabBarActiveTintColor: '#fe9d34',
        tabBarStyle: { height: 60, borderTopLeftRadius: 20, borderTopRightRadius: 20 },
        headerShown: false
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
        name="Add"
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <View
              style={{
                position: 'absolute',
                bottom: 0, // space from bottombar
                height: 68,
                width: 68,
                borderRadius: 68,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Icon name="add-circle-outline" color="grey" size={68} />
            </View>
          )
        }}
        component={AddNewScreen} />
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

