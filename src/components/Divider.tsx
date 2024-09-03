import React from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import { colors } from "../constants/colors";

interface Props {
  style?: StyleProp<ViewStyle>;
}
export default function Divider({ style }: Props) {
  return <View style={[styles.divider, style]} />;
}

const styles = StyleSheet.create({
  divider: {
    height: 2,
    borderRadius: 14,
    backgroundColor: colors.bg_gray,
  },
});
