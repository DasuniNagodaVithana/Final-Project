import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native"; // Import Image component

import Favourite from "../screens/HomeScreen/Favourite";
import Search from "../screens/HomeScreen/Search";
import Index from "../screens/HomeScreen";
import MapScreen from "../screens/HomeScreen/MapScreen";
import UserProfile from "../screens/UserProfile/UserProfile";


const Tab = createBottomTabNavigator();

const TabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false, tabBarShowLabel: false }}
    >
      <Tab.Screen
        name="Home"
        component={Index}
        options={{
          tabBarIcon: () => (
            <Image
              source={require("../assets/images/image12.png")}
              style={{ width: 24, height: 24 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: () => (
            <Image
              source={require("../assets/images/image20.png")}
              style={{ width:40, height: 40}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favourite"
        component={Favourite}
        options={{
          tabBarIcon: () => (
            <Image
              source={require("../assets/images/w1.png")}
              style={{ width: 24, height: 24 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{
          tabBarIcon: () => (
            <Image
              source={require("../assets/images/image13.png")}
              style={{ width: 26, height: 26 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="User"
        component={UserProfile}
        options={{
          tabBarIcon: () => (
            <Image
              source={require("../assets/images/user1.png")}
              style={{ width: 26, height: 26 }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
