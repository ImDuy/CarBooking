import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { colors } from "../constants/colors";
import LogIn from "../screens/auth/LogIn";
import Onboarding from "../screens/auth/Onboarding";
import SignUp from "../screens/auth/SignUp";
import { AuthStackParamList } from "../utils/navigation-types";

const Stack = createNativeStackNavigator<AuthStackParamList>();
export default function AuthStackNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: colors.bg },
      }}
    >
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="LogIn" component={LogIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
}
