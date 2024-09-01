import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Onboarding from "../screens/auth/Onboarding";
import SignIn from "../screens/auth/SignIn";
import SignUp from "../screens/auth/SignUp";
import { AuthStackParamList } from "../utils/navigation-types";

const Stack = createNativeStackNavigator<AuthStackParamList>();
export default function AuthStackNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
}
