import React from "react";
import { StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";
import { colors } from "../../constants/colors";
import Divider from "../Divider";

interface Props {
  containerStyle?: StyleProp<ViewStyle>;
}
export default function AuthDivider({ containerStyle }: Props) {
  return (
    <View style={[styles.container, containerStyle]}>
      <Divider style={styles.divider} />
      <Text style={styles.text}>Or</Text>
      <Divider style={styles.divider} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  text: {
    color: colors.text,
    fontFamily: "Jakarta-Medium",
    fontSize: 16,
  },
  divider: {
    flex: 1,
    marginHorizontal: 6,
  },
});
