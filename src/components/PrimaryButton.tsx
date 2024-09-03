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
import { defaultStyles } from "../constants/styles";

interface Props {
  label: string;
  onPress?: () => void;
  containerStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  iconLeft?: any;
}
export default function PrimaryButton({
  label,
  onPress,
  containerStyle,
  labelStyle,
  iconLeft,
}: Props) {
  return (
    <TouchableOpacity
      style={[styles.container, defaultStyles.shadowLight, containerStyle]}
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
    backgroundColor: colors.primary,
    height: 54,
    borderRadius: 40,
  },
  label: {
    color: colors.bg,
    fontFamily: "Jakarta-SemiBold",
    fontSize: 18,
  },
  iconLeft: {
    width: 24,
    height: 24,
  },
});
