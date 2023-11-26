import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import SigninScreen from '../screens/SigninScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen';
import Favourite from "../screens/HomeScreen/Favourite";
import Search from "../screens/HomeScreen/Search";
import Index from '../screens/HomeScreen';
import MapScreen from '../screens/HomeScreen/MapScreen';
import TabNavigator from './TabNavigation';
const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='SignIn' component={SigninScreen} />
        <Stack.Screen name='SignUp' component={SignUpScreen} />
        <Stack.Screen name='ConfirmEmail' component={ConfirmEmailScreen} />
        <Stack.Screen name='ForgotPassword' component={ForgotPasswordScreen} />
        <Stack.Screen name='NewPassword' component={NewPasswordScreen} />
        <Stack.Screen name='Home' component={TabNavigator} />
        <Stack.Screen name='Search' component={Search} />
        <Stack.Screen name='Favourite' component={Favourite} />
        <Stack.Screen name='Map' component={MapScreen} />
      
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation