import React from "react";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import RideList from "../../../components/home/RideList";
import { screenPadding } from "../../../constants/sizes";

export default function Home() {
  const { top, bottom } = useSafeAreaInsets();
  return (
    <View
      style={[styles.container, { paddingTop: top, paddingBottom: bottom }]}
    >
      <RideList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: (screenPadding.horizontal * 2) / 3,
  },
});
