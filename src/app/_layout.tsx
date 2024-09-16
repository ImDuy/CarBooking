import { ClerkProvider } from "@clerk/clerk-expo";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { View } from "react-native";
import { Provider, useSelector } from "react-redux";
import LoadingOverlay from "../components/LoadingOverlay";
import { defaultStyles } from "../constants/styles";
import { RootState, store } from "../store/store";
import { tokenCache } from "../utils/clerk-auth";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;
if (!publishableKey) {
  throw new Error(
    "Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env"
  );
}

SplashScreen.preventAutoHideAsync();
export default function App() {
  const [loaded, error] = useFonts({
    "Jakarta-Bold": require("../../assets/fonts/PlusJakartaSans-Bold.ttf"),
    "Jakarta-ExtraBold": require("../../assets/fonts/PlusJakartaSans-ExtraBold.ttf"),
    "Jakarta-ExtraLight": require("../../assets/fonts/PlusJakartaSans-ExtraLight.ttf"),
    "Jakarta-Light": require("../../assets/fonts/PlusJakartaSans-Light.ttf"),
    "Jakarta-Medium": require("../../assets/fonts/PlusJakartaSans-Medium.ttf"),
    "Jakarta-Regular": require("../../assets/fonts/PlusJakartaSans-Regular.ttf"),
    "Jakarta-SemiBold": require("../../assets/fonts/PlusJakartaSans-SemiBold.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <>
      <StatusBar style="auto" />
      <ClerkProvider publishableKey={publishableKey} tokenCache={tokenCache}>
        <Provider store={store}>
          <GestureHandlerRootView style={defaultStyles.flex1}>
            <AppLayout />
          </GestureHandlerRootView>
        </Provider>
      </ClerkProvider>
    </>
  );
}

const AppLayout = () => {
  const isLoading = useSelector((state: RootState) => state.app.isLoading);

  return (
    <View style={defaultStyles.flex1}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="(auth)" />
        <Stack.Screen name="(root)" />
      </Stack>
      {isLoading && <LoadingOverlay />}
    </View>
  );
};
