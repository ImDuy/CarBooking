import React from "react";
import { StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import { defaultStyles } from "../../constants/styles";
import { RootState } from "../../store/store";
import FloatingHeader from "../../components/FloatingHeader";
import UserLocationMap from "../../components/UserLocationMap";

export default function FindRide() {
  const { userAddress, destinationAddress } = useSelector(
    (state: RootState) => state.location
  );

  return (
    <View style={defaultStyles.flex1}>
      <FloatingHeader title="Ride" />
      <UserLocationMap containerStyle={{ height: "100%" }} />
    </View>
  );
}

const styles = StyleSheet.create({});
