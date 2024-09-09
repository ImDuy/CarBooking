import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import TabBarIcon from "../components/TabBarIcon";
import { colors } from "../constants/colors";
import { icons } from "../constants/icons";
import { screenPadding } from "../constants/sizes";
import Chat from "../screens/Chat";
import History from "../screens/History";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import { TabParamList } from "../utils/navigation-types";

const Tab = createBottomTabNavigator<TabParamList>();
export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,

        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: colors.tabBar_bg,
          marginBottom: 20,
          marginHorizontal: screenPadding.horizontal / 2,
          borderRadius: 40,
          height: 72,
        },
      }}
      sceneContainerStyle={{ backgroundColor: colors.bg }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} source={icons.home} />
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={History}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} source={icons.list} />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} source={icons.chat} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              focused={focused}
              source={icons.profile}
              iconSize={27}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
