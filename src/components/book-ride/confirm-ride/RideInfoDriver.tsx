import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../../../constants/colors";
import { icons } from "../../../constants/icons";

interface Props {
  avatarUrl?: string;
  name?: string;
  rating?: string;
}
export default function RideInfoDriver({ avatarUrl, name, rating }: Props) {
  if (!avatarUrl || !name || !rating) return null;

  return (
    <View style={styles.driverContainer}>
      <Image source={{ uri: avatarUrl }} style={styles.avatar} />
      <View style={styles.driverInfoContainer}>
        <Text style={styles.name}>{name}</Text>
        <Image source={icons.star} style={styles.starIcon} />
        <Text style={styles.rating}>{parseFloat(rating).toFixed(1)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  driverContainer: {
    alignSelf: "center",
    alignItems: "center",
    gap: 12,
  },
  avatar: {
    width: 94,
    height: 94,
    borderRadius: 50,
  },
  driverInfoContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },
  name: {
    color: colors.text,
    fontFamily: "Jakarta-Bold",
    fontSize: 20,
    textAlignVertical: "bottom",
  },
  starIcon: {
    width: 20,
    height: 20,
    marginLeft: 8,
  },
  rating: {
    color: colors.text,
    fontFamily: "Jakarta-SemiBold",
  },
});
