import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Text, View } from "react-native";

import FormNavigator from "./FormNavigator";

const ProfileNavigator = () => {
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>inside my profile</Text>
    </View>
  );
};

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Summary"
      component={FormNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="information"
            color={color}
            size={size}
          />
        ),
        headerShown: false,
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default AppNavigator;
