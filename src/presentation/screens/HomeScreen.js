import React from 'react'
import { TouchableWithoutFeedback, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import tw from 'tailwind-react-native-classnames'
import { Icon } from 'react-native-elements'

import DashboardScreen from 'components/home/Dashboard'
import AccountScreen from 'components/home/Account'

const HomeScreen = ({ navigation }) => {

  const BottomTab = createBottomTabNavigator()

  const onAddNew = () => {
    console.log('onAddNew')
    navigation.navigate('AddNewScreen')
  }

  const AddNewComponent = () => {
    return null
  }

  const AddNewScreen = () => {
    return (
      <>
        <TouchableWithoutFeedback onPress={onAddNew}>
          <View style={{ bottom: 25, height:68, width:68}}>
            <Icon size={70} name='add-circle' color={'#00a16e'} />
          </View>
        </TouchableWithoutFeedback>
      </>
    );
  }


  return (
    <BottomTab.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        tabBarActiveTintColor: '#fe9d34',
        tabBarStyle: { height: 60, borderTopLeftRadius: 20, borderTopRightRadius: 20 },
        headerShown: false
      }}>
      <BottomTab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Icon name='home' type='ionicon' color={color} size={size} />
          )
        }} />
      {/* <BottomTab.Screen
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
        component={AddNewScreen} /> */}
      <BottomTab.Screen
        name="Add"
        component={AddNewComponent}
        options={{
          tabBarButton: () => <AddNewScreen />,
        }}
      />
      <BottomTab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({ color, size }) => (
            <Icon name='person' type='ionicon' color={color} size={size} />
          )
        }} />
    </BottomTab.Navigator>
  )
}

export default HomeScreen

