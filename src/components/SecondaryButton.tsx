import React from "react";
import {
  Image,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import { colors } from "../constants/colors";

interface Props {
  label: string;
  onPress?: () => void;
  containerStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  iconLeft?: any;
}
export default function SecondaryButton({
  label,
  onPress,
  containerStyle,
  labelStyle,
  iconLeft,
}: Props) {
  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      onPress={onPress}
    >
      {iconLeft && <Image source={iconLeft} style={styles.iconLeft} />}
      <Text style={[styles.label, labelStyle]}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    backgroundColor: "transparent",
    height: 56,
    borderRadius: 40,
    borderWidth: 0.5,
    borderColor: colors.text,
  },
  label: {
    color: colors.text,
    fontFamily: "Jakarta-Medium",
    fontSize: 18,
  },
  iconLeft: {
    width: 22,
    height: 22,
  },
});
