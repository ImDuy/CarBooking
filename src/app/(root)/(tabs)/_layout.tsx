import { Tabs } from "expo-router";
import React from "react";
import TabBarIcon from "../../../components/TabBarIcon";
import { colors } from "../../../constants/colors";
import { icons } from "../../../constants/icons";
import { bottomTabSize, screenPadding } from "../../../constants/sizes";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,

        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: colors.tabBar_bg,
          marginBottom: bottomTabSize.marginBottom,
          marginHorizontal: screenPadding.horizontal / 2,
          borderRadius: 40,
          height: bottomTabSize.height,
          position: "absolute",
        },
      }}
    >
      <Tabs.Screen
        name="Home"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} source={icons.home} />
          ),
        }}
      />
      <Tabs.Screen
        name="History"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} source={icons.list} />
          ),
        }}
      />
      <Tabs.Screen
        name="Chat"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} source={icons.chat} />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
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
    </Tabs>
  );
}
