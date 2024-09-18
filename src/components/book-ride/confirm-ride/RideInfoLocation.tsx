import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { icons } from "../../../constants/icons";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import Divider from "../../Divider";
import { colors } from "../../../constants/colors";

export default function RideInfoLocation() {
  const { userAddress, destinationAddress } = useSelector(
    (state: RootState) => state.location
  );
  return (
    <>
      <Divider style={styles.divider} />
      <View style={styles.rowContainer}>
        <Image source={icons.point} style={styles.icon} />
        <Text style={styles.text} numberOfLines={1}>
          {userAddress}
        </Text>
      </View>
      <Divider style={styles.divider} />
      <View style={styles.rowContainer}>
        <Image source={icons.to} style={styles.icon} />
        <Text style={styles.text}>{destinationAddress}</Text>
      </View>
      <Divider style={styles.divider} />
    </>
  );
}

const styles = StyleSheet.create({
  divider: {
    height: 1,
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 4,
    marginVertical: 12,
    gap: 12,
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: colors.text,
  },
  text: {
    flex: 1,
    color: colors.text,
    fontFamily: "Jakarta-SemiBold",
    fontSize: 16,
  },
});
