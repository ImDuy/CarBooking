import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { colors } from "../../constants/colors";
import { icons } from "../../constants/icons";
import { mapPreviewSize } from "../../constants/sizes";
import { formatDate, formatTime } from "../../utils/helpers";
import { Ride } from "../../utils/types";

interface Props {
  ride: Ride;
}
export default function RideCard({
  ride: {
    destination_longitude,
    destination_latitude,
    destination_address,
    origin_address,
    created_at,
    ride_time,
    payment_status,
    driver: { first_name, last_name, car_seats },
  },
}: Props) {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <Image
          source={{
            uri: `https://maps.googleapis.com/maps/api/staticmap?center=${destination_latitude},${destination_longitude}&zoom=15&size=${
              mapPreviewSize.width * 2
            }x${mapPreviewSize.height * 2}&maptype=roadmap&key=${
              process.env.EXPO_PUBLIC_GOOGLE_API_KEY
            }`,
          }}
          style={styles.thumbnail}
        />
        <View style={styles.titleContainer}>
          <View style={styles.headerRowContainer}>
            <Image source={icons.to} style={styles.icon} />
            <Text style={[styles.text, styles.title]} numberOfLines={1}>
              {destination_address}
            </Text>
          </View>
          <View style={styles.headerRowContainer}>
            <Image source={icons.point} style={styles.icon} />
            <Text style={[styles.text, styles.title]} numberOfLines={1}>
              {origin_address}
            </Text>
          </View>
        </View>
      </View>

      {/* Content */}
      <View style={styles.contentContainer}>
        <View style={styles.contentRowContainer}>
          <Text style={[styles.text, styles.contentText]} numberOfLines={1}>
            Date & Time
          </Text>
          <Text style={[styles.text, styles.contentText]} numberOfLines={1}>
            {formatDate(created_at)}, {formatTime(ride_time)}
          </Text>
        </View>
        <View style={styles.contentRowContainer}>
          <Text style={[styles.text, styles.contentText]} numberOfLines={1}>
            Driver
          </Text>
          <Text style={[styles.text, styles.contentText]} numberOfLines={1}>
            {first_name} {last_name}
          </Text>
        </View>
        <View style={styles.contentRowContainer}>
          <Text style={[styles.text, styles.contentText]} numberOfLines={1}>
            Car Seats
          </Text>
          <Text style={[styles.text, styles.contentText]} numberOfLines={1}>
            {car_seats}
          </Text>
        </View>
        <View style={styles.contentRowContainer}>
          <Text style={[styles.text, styles.contentText]} numberOfLines={1}>
            Payment Status
          </Text>
          <Text
            style={[
              styles.text,
              {
                color:
                  payment_status.toLowerCase().trim() === "paid"
                    ? colors.success
                    : colors.error,
              },
            ]}
            numberOfLines={1}
          >
            {payment_status}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bg,
    borderRadius: 10,
    padding: 12,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 20,
    marginBottom: 20,
    paddingHorizontal: 4,
  },
  thumbnail: {
    width: mapPreviewSize.width,
    height: mapPreviewSize.height,
    borderRadius: 8,
  },
  titleContainer: {
    flex: 1,
    rowGap: 18,
  },
  headerRowContainer: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 4,
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: colors.text,
  },
  text: {
    fontFamily: "Jakarta-SemiBold",
    color: colors.text,
  },
  title: {},
  contentContainer: {
    paddingHorizontal: 12,
    paddingTop: 14,
    paddingBottom: 32,
    backgroundColor: colors.light_primary,
    borderRadius: 10,
    rowGap: 18,
  },
  contentRowContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 20,
  },
  contentText: {
    opacity: 0.5,
  },
});
