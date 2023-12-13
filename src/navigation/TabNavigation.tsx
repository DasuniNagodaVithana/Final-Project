import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, StyleSheet, Text, View } from "react-native";

import Favourite from "../screens/HomeScreen/Favourite";
import Search from "../screens/HomeScreen/Search";
import StackNavigator from "../screens/StackNavigator";
import Index from "../screens/HomeScreen";
import MapScreen from "../screens/HomeScreen/MapScreen";
import UserProfile from "../screens/UserProfile/UserProfile";

const Tab = createBottomTabNavigator();


const TabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: [
          {
            position: "absolute",
            bottom: 25,
            left: 20,
            right: 20,
            elevation: 5, 
            backgroundColor: "#ffffff",
            borderRadius: 15,
            height: 90,
          },
          styles.shadow, 
        ],
        tabBarItemStyle: {
          // Adjust the icon position for the "Search" tab
          transform: [{ translateY: -10 }], // You can adjust the value as needed
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Index}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={
              {alignItems:'center',justifyContent:'center',top:10}
            }>
            <Image
              source={require("../assets/images/image12.png")}
              resizeMode="contain"
              style={{ width: 24, height: 24,tintColor:focused?'#e32f45':'#748c94', }}
            />
            <Text style={{
              color:focused?'#e32f45':'#748c94',
              fontSize:12
            }}>
              HOME
            </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Favourite"
        component={Favourite}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={
              {alignItems:'center',justifyContent:'center',top:10}
            }>
            <Image
              source={require("../assets/images/w1.png")}
              resizeMode="contain"
              style={{ width: 24, height: 24,tintColor:focused?'#e32f45':'#748c94', }}
            />
            <Text style={{
              color:focused?'#e32f45':'#748c94',
              fontSize:12
            }}>
              WEATHER
            </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={
              {alignItems:'center',justifyContent:'center',top:10}
            }>
            <Image
              source={require("../assets/images/image20.png")}
              resizeMode="contain"
              style={{ width: 24, height: 24,tintColor:focused?'#e32f45':'#748c94', }}
            />
            <Text style={{
              color:focused?'#e32f45':'#748c94',
              fontSize:12
            }}>
              FIND
            </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={
              {alignItems:'center',justifyContent:'center',top:10}
            }>
            <Image
              source={require("../assets/images/image13.png")}
              resizeMode="contain"
              style={{ width: 24, height: 24,tintColor:focused?'#e32f45':'#748c94', }}
            />
            <Text style={{
              color:focused?'#e32f45':'#748c94',
              fontSize:12
            }}>
              MAP
            </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="User"
        component={UserProfile}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={
              {alignItems:'center',justifyContent:'center',top:10}
            }>
            <Image
              source={require("../assets/images/user1.png")}
              resizeMode="contain"
              style={{ width: 24, height: 24,tintColor:focused?'#e32f45':'#748c94', }}
            />
            <Text style={{
              color:focused?'#e32f45':'#748c94',
              fontSize:12
            }}>
              USER
            </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

export default TabNavigator;
