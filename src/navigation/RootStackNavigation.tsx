import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet } from "react-native";
import { RootStackParamList } from "../utils/navigation-types";
import AuthStackNavigation from "./AuthStackNavigation";
import TabNavigation from "./TabNavigation";

const Stack = createNativeStackNavigator<RootStackParamList>();
export default function RootStackNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AuthStack" component={AuthStackNavigation} />
      <Stack.Screen name="TabNavigation" component={TabNavigation} />
    </Stack.Navigator>
  );
}
