import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../../../constants/colors";

interface Props {
  price?: number;
  pickUpTime?: string;
  seats?: number;
}
export default function RideInfoContent({
  price = 60,
  pickUpTime = "10 Min",
  seats,
}: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <Text style={styles.title}>Ride Price</Text>
        <Text style={{ ...styles.info, color: colors.success }}>${price}</Text>
      </View>

      <View style={styles.rowContainer}>
        <Text style={styles.title}>Pickup Time</Text>
        <Text style={styles.info}>{pickUpTime}</Text>
      </View>

      <View style={styles.rowContainer}>
        <Text style={styles.title}>Car Seats</Text>
        <Text style={styles.info}>{seats}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    backgroundColor: colors.light_primary,
    marginVertical: 20,
  },
  rowContainer: {
    backgroundColor: "transparent",
    padding: 14,
    borderTopWidth: 0.25,
    borderBottomWidth: 0.25,
    borderColor: colors.bg,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    color: colors.text,
    fontFamily: "Jakarta-Regular",
    fontSize: 16,
  },
  info: {
    color: colors.text,
    fontFamily: "Jakarta-SemiBold",
    fontSize: 16,
  },
});
