import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { colors } from "../constants/colors";

interface Props {
  focused: boolean;
  source: any;
  iconSize?: number;
}
export default function TabBarIcon({ focused, source, iconSize = 26 }: Props) {
  return (
    <View
      style={[
        styles.iconContainer,
        focused && { backgroundColor: colors.primary },
      ]}
    >
      <Image
        source={source}
        style={[
          { width: iconSize, height: iconSize },
          { tintColor: focused ? colors.bg : colors.bg_gray },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    borderRadius: 80,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
