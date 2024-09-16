import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../constants/colors";
import { icons } from "../../constants/icons";
import { headerHeight } from "../../constants/sizes";

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.title} numberOfLines={1}>
        Welcome 👋
      </Text>
      <TouchableOpacity style={styles.btnContainer}>
        <Image source={icons.out} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: headerHeight,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    tintColor: colors.text,
    gap: 30,
  },
  title: {
    color: colors.text,
    fontFamily: "Jakarta-Bold",
    fontSize: 28,
  },
  btnContainer: {
    padding: 6,
  },
  icon: {
    width: 24,
    height: 24,
  },
});
