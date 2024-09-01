import React from "react";
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import { colors } from "../constants/colors";
import { defaultStyles } from "../constants/styles";

interface Props {
  label: string;
  onPress?: () => void;
  containerStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
}
export default function AppButton({
  label,
  onPress,
  containerStyle,
  labelStyle,
}: Props) {
  return (
    <TouchableOpacity
      style={[styles.container, defaultStyles.shadowLight, containerStyle]}
      onPress={onPress}
    >
      <Text style={[styles.label, labelStyle]}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: 56,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 40,
  },
  label: {
    color: colors.bg,
    fontFamily: "Jakarta-SemiBold",
    fontSize: 18,
  },
});
