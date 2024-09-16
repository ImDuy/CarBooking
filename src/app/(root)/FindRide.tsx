import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

export default function FindRide() {
  const { userAddress, destinationAddress } = useSelector(
    (state: RootState) => state.location
  );

  return (
    <View>
      <Text>You are here: {userAddress}</Text>
      <Text>You are going to: {destinationAddress}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
