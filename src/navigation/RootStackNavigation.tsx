import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { RootStackParamList } from "../utils/navigation-types";
import AuthStackNavigation from "./AuthStackNavigation";
import TabNavigation from "./TabNavigation";
import { colors } from "../constants/colors";

const Stack = createNativeStackNavigator<RootStackParamList>();
export default function RootStackNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: colors.bg },
      }}
    >
      <Stack.Screen name="AuthStack" component={AuthStackNavigation} />
      <Stack.Screen name="TabNavigation" component={TabNavigation} />
    </Stack.Navigator>
  );
}
