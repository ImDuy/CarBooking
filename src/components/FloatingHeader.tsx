import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { screenPadding } from "../constants/sizes";
import { icons } from "../constants/icons";
import { router } from "expo-router";
import { colors } from "../constants/colors";

interface Props {
  title?: string;
}
export default function FloatingHeader({ title }: Props) {
  const { top } = useSafeAreaInsets();
  return (
    <View style={{ ...styles.container, top: top + 16 }}>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => router.canGoBack() && router.back()}
      >
        <Image source={icons.backArrow} style={styles.icon} />
      </TouchableOpacity>
      <Text style={styles.title}>{title ?? "Go Back"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    zIndex: 99,
    position: "absolute",
    left: screenPadding.horizontal,
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  iconContainer: {
    backgroundColor: "white",
    width: 40,
    height: 40,
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    tintColor: colors.text,
    width: 22,
    height: 22,
  },
  title: {
    color: colors.text,
    fontFamily: "Jakarta-Bold",
    fontSize: 24,
  },
});
