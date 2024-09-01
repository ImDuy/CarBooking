import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { StyleSheet } from "react-native";
import RootStackNavigation from "./src/navigation/RootStackNavigation";

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
      <NavigationContainer>
        <RootStackNavigation />
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
