import React from "react";
import { StyleSheet, Text } from "react-native";
import { useSelector } from "react-redux";
import ScreenContainer from "../../components/ScreenContainer";
import { RootState } from "../../store/store";

export default function FindRide() {
  const { userAddress, destinationAddress } = useSelector(
    (state: RootState) => state.location
  );

  return (
    <ScreenContainer>
      <Text>You are here: {userAddress}</Text>
      <Text>You are going to: {destinationAddress}</Text>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({});
