import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import screens
import Search from '../HomeScreen/Search';
import HotelDetails from '../HotelDetails'; // Create this component for hotel details

const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Search">
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="HotelDetails" component={HotelDetails} options={{title: 'Hotel Details',
          }}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default StackNavigator;
