import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { icons } from "../../../constants/icons";
import { colors } from "../../../constants/colors";
import { screenPadding } from "../../../constants/sizes";

interface Props {
  onClosePress?: () => void;
}
export default function RideInfoHeader({ onClosePress }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ride Information</Text>
      <TouchableOpacity style={styles.btnContainer} onPress={onClosePress}>
        <Image source={icons.close} style={styles.btnIcon} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bg,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    marginTop: 4,
    marginHorizontal: 8,
    paddingHorizontal: screenPadding.horizontal / 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1.5,
    borderBottomColor: colors.bg_gray,
  },
  title: {
    color: colors.text,
    fontFamily: "Jakarta-SemiBold",
    fontSize: 20,
  },
  btnContainer: {
    paddingVertical: 14,
    paddingLeft: 8,
  },
  btnIcon: {
    width: 20,
    height: 20,
    tintColor: colors.textMuted,
  },
});
