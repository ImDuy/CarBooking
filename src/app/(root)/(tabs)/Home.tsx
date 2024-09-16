import React from "react";
import { StyleSheet } from "react-native";
import RideList from "../../../components/home/RideList";
import ScreenContainer from "../../../components/ScreenContainer";
import { screenPadding } from "../../../constants/sizes";

export default function Home() {
  return (
    <ScreenContainer containerStyle={styles.container}>
      <RideList />
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: (screenPadding.horizontal * 2) / 3,
  },
});
