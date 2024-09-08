import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { RootStackParamList } from "../utils/navigation-types";
import AuthStackNavigation from "./AuthStackNavigation";
import TabNavigation from "./TabNavigation";
import { colors } from "../constants/colors";
import { useAuth } from "@clerk/clerk-expo";
import { View } from "react-native";
import { defaultStyles } from "../constants/styles";
import LoadingOverlay from "../components/LoadingOverlay";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const Stack = createNativeStackNavigator<RootStackParamList>();
export default function RootStackNavigation() {
  const { isSignedIn } = useAuth();
  const isLoading = useSelector((state: RootState) => state.app.isLoading);

  return (
    <View style={defaultStyles.flex1}>
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

      {isLoading && <LoadingOverlay />}
    </View>
  );
}
