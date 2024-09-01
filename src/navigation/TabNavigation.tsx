import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Chat from "../screens/Chat";
import History from "../screens/History";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import { TabParamList } from "../utils/navigation-types";

const Tab = createBottomTabNavigator<TabParamList>();
export default function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="History" component={History} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
