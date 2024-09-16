import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../constants/colors";
import { icons } from "../../constants/icons";
import { screenPadding } from "../../constants/sizes";
import { Driver } from "../../utils/types";

interface Props {
  driver: Driver;
  selectedDriverId: number | null;
  setSelectedDriverId: (id: number) => void;
}
export default function DriverCard({
  driver,
  selectedDriverId,
  setSelectedDriverId,
}: Props) {
  const {
    id,
    car_image_url,
    car_seats,
    first_name,
    last_name,
    profile_image_url,
    rating,
  } = driver;
  return (
    <TouchableOpacity
      style={[
        styles.container,
        selectedDriverId === id && { backgroundColor: colors.light_primary },
      ]}
      onPress={() => setSelectedDriverId(id)}
    >
      <Image source={{ uri: profile_image_url }} style={styles.avatar} />

      <View style={styles.infoContainer}>
        <View style={styles.infoInnerContainer}>
          <Text style={styles.name}>
            {first_name} {last_name}
          </Text>
          <Image source={icons.star} style={styles.icon} />
          <Text style={[styles.smallText, styles.primaryTextColor]}>
            {parseFloat(rating).toFixed(1)}
          </Text>
        </View>

        <View style={styles.infoInnerContainer}>
          <Image source={icons.dollar} style={styles.icon} />
          <Text style={[styles.smallText, styles.primaryTextColor]}>
            $money
          </Text>

          <View style={styles.divider} />
          <Text style={styles.smallText}>time</Text>

          <View style={styles.divider} />
          <Text style={styles.smallText}>{car_seats} seats</Text>
        </View>
      </View>

      <Image source={{ uri: car_image_url }} style={styles.carImage} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    paddingVertical: (screenPadding.horizontal * 2) / 3,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  avatar: {
    width: 48,
    height: 50,
    borderRadius: 32,
  },
  infoContainer: {
    flex: 1,
    marginLeft: 2,
    gap: 10,
  },
  infoInnerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  name: {
    color: colors.text,
    fontFamily: "Jakarta-Medium",
    fontSize: 16,
    marginRight: 10,
  },
  icon: {
    width: 16,
    height: 16,
    marginRight: 4,
  },
  smallText: {
    color: colors.textMuted,
    fontFamily: "Jakarta-Regular",
    fontSize: 12,
  },
  primaryTextColor: {
    color: colors.text,
  },
  divider: {
    width: 1,
    height: 12,
    backgroundColor: colors.textMuted,
    marginHorizontal: 8,
  },
  carImage: {
    width: 76,
    height: 50,
  },
});
