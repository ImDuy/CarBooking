import { Stack } from "expo-router";
import React from "react";
import { colors } from "../../constants/colors";

export default function AuthLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: colors.bg },
      }}
    >
      <Stack.Screen name="Onboarding" />
      <Stack.Screen name="LogIn" />
      <Stack.Screen name="SignUp" />
    </Stack>
  );
}
