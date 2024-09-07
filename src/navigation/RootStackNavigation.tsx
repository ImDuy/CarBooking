import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { RootStackParamList } from "../utils/navigation-types";
import AuthStackNavigation from "./AuthStackNavigation";
import TabNavigation from "./TabNavigation";
import { colors } from "../constants/colors";
import { useAuth } from "@clerk/clerk-expo";

const Stack = createNativeStackNavigator<RootStackParamList>();
export default function RootStackNavigation() {
  const { isSignedIn } = useAuth();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: colors.bg },
      }}
    >
      {isSignedIn ? (
        <Stack.Screen name="TabNavigation" component={TabNavigation} />
      ) : (
        <Stack.Screen name="AuthStack" component={AuthStackNavigation} />
      )}
    </Stack.Navigator>
  );
}
