import React, { ReactNode } from "react";
import { useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, StyleSheet, Text, View } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

import Favourite from "../screens/HomeScreen/Favourite";
import Search from "../screens/HomeScreen/Search";
import Index from "../screens/HomeScreen";
import MapScreen from "../screens/HomeScreen/MapScreen";
import UserProfile from "../screens/UserProfile/UserProfile";

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ children }: { children: ReactNode }) => {
  const navigation = useNavigation();

  const onPress = () => {
    // Navigate to the "Search" screen
    navigation.navigate("Search");
  };

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={{
          top: -20,
          justifyContent: "center",
          alignItems: "center",
          ...styles.shadow,
        }}
      >
        <View
          style={{
            width: 65,
            height: 65,
            borderRadius: 35,
            backgroundColor: "#e32f45",
          }}
        >
          {children}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

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
            bottom: 1,
            left: 4,
            right: 4,
            elevation: 5,
            backgroundColor: "#ffffff",
            borderRadius: 12,
            height: 55,
            
          },
          styles.shadow,
        ],
      }}
    >
      <Tab.Screen
        name="Home"
        component={Index}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center", top: 4}}>
              <Image
                source={require("../assets/images/image12.png")}
                resizeMode="contain"
                style={{ width: 25, height: 25, tintColor: focused ? "#e32f45" : "#748c94" }}
              />
              <Text style={{ color: focused ? "#e32f45" : "#748c94", fontSize: 12 }}>
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
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center", top: 4}}>
              <Image
                source={require("../assets/images/w1.png")}
                resizeMode="contain"
                style={{ width: 26, height: 26, tintColor: focused ? "#e32f45" : "#748c94" }}
              />
              <Text style={{ color: focused ? "#e32f45" : "#748c94", fontSize: 12 }}>
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
          tabBarIcon: () => (
            <Image
              source={require("../assets/images/image20.png")}
              resizeMode="contain"
              style={{ width: 50, height: 50, tintColor: "#fff" }}
            />
          ),
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
      />
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center", top: 4 }}>
              <Image
                source={require("../assets/images/image13.png")}
                resizeMode="contain"
                style={{ width: 25, height: 25, tintColor: focused ? "#e32f45" : "#748c94" }}
              />
              <Text style={{ color: focused ? "#e32f45" : "#748c94", fontSize: 12 }}>
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
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center", top: 4 }}>
              <Image
                source={require("../assets/images/user1.png")}
                resizeMode="contain"
                style={{ width: 25, height: 25, tintColor: focused ? "#e32f45" : "#748c94" }}
              />
              <Text style={{ color: focused ? "#e32f45" : "#748c94", fontSize: 12 }}>
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
