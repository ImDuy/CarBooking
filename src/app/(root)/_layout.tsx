import { Stack } from "expo-router";
import React from "react";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="FindRide" />
      <Stack.Screen name="ConfirmRide" />
      <Stack.Screen name="BookRide" />
    </Stack>
  );
}
