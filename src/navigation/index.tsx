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
import OnBoardScreen from '../screens/OnBoardScreen/OnBoardScreen';
import UserProfile from '../screens/UserProfile/UserProfile';
import Anuradhapura from '../screens/DestinationScreen/Anuradhapura';
import Galle from '../screens/DestinationScreen/Galle';
import Bentota from '../screens/DestinationScreen/Bentota';
import Ella from '../screens/DestinationScreen/Ella';
import Kandy from '../screens/DestinationScreen/Kandy';
import Jaffna from '../screens/DestinationScreen/Jaffna';
const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='Onboard' component={OnBoardScreen} />
        <Stack.Screen name='SignIn' component={SigninScreen} />
        <Stack.Screen name='SignUp' component={SignUpScreen} />
        <Stack.Screen name='ConfirmEmail' component={ConfirmEmailScreen} />
        <Stack.Screen name='ForgotPassword' component={ForgotPasswordScreen} />
        <Stack.Screen name='NewPassword' component={NewPasswordScreen} />
        <Stack.Screen name='Home' component={TabNavigator} />
        <Stack.Screen name='Search' component={Search} />
        <Stack.Screen name='Favourite' component={Favourite} />
        <Stack.Screen name='Map' component={MapScreen} />
        <Stack.Screen name='User' component={UserProfile} />
        <Stack.Screen name='AnuradhapuraScreen' component={Anuradhapura} />
        <Stack.Screen name='GalleScreen' component={Galle} />
        <Stack.Screen name='BentotaScreen' component={Bentota} />
        <Stack.Screen name='EllaScreen' component={Ella} />
        <Stack.Screen name='KandyScreen' component={Kandy} />
        <Stack.Screen name='JaffnaScreen' component={Jaffna} />

      
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation