import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import RootStackNavigation from "./src/navigation/RootStackNavigation";
import { ClerkLoaded, ClerkProvider } from "@clerk/clerk-expo";
import { tokenCache } from "./src/utils/clerk-auth";
import { Provider } from "react-redux";
import { store } from "./src/store/store";

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;
if (!publishableKey) {
  throw new Error(
    "Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env"
  );
}

SplashScreen.preventAutoHideAsync();
export default function App() {
  const [loaded, error] = useFonts({
    "Jakarta-Bold": require("./assets/fonts/PlusJakartaSans-Bold.ttf"),
    "Jakarta-ExtraBold": require("./assets/fonts/PlusJakartaSans-ExtraBold.ttf"),
    "Jakarta-ExtraLight": require("./assets/fonts/PlusJakartaSans-ExtraLight.ttf"),
    "Jakarta-Light": require("./assets/fonts/PlusJakartaSans-Light.ttf"),
    "Jakarta-Medium": require("./assets/fonts/PlusJakartaSans-Medium.ttf"),
    "Jakarta-Regular": require("./assets/fonts/PlusJakartaSans-Regular.ttf"),
    "Jakarta-SemiBold": require("./assets/fonts/PlusJakartaSans-SemiBold.ttf"),
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
        <ClerkLoaded>
          <Provider store={store}>
            <NavigationContainer>
              <RootStackNavigation />
            </NavigationContainer>
          </Provider>
        </ClerkLoaded>
      </ClerkProvider>
    </>
  );
}
