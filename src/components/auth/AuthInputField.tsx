import React from "react";
import {
  StyleProp,
  StyleSheet,
  Text,
  TextInputProps,
  View,
  ViewStyle,
} from "react-native";
import { colors } from "../../constants/colors";
import InputField from "../InputField";

interface Props extends TextInputProps {
  label: string;
  value: string;
  iconLeft: any;
  password?: boolean;
  clearText: () => void;
  inputContainerStyle?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
}
export default function AuthInputField({
  label,
  value,
  iconLeft,
  password = false,
  clearText,
  containerStyle,
  inputContainerStyle,
  ...props
}: Props) {
  return (
    <View style={containerStyle}>
      <Text style={styles.label}>{label}</Text>
      <InputField
        value={value}
        iconLeft={iconLeft}
        password={password}
        clearText={clearText}
        containerStyle={inputContainerStyle}
        {...props}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    color: colors.text,
    fontFamily: "Jakarta-SemiBold",
    fontSize: 17,
    marginBottom: 3,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.input_bg,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: colors.input_bg,
    height: 52,
    paddingHorizontal: 14,
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: colors.text,
  },
  input: {
    flex: 1,
    color: colors.text,
    fontFamily: "Jakarta-Medium",
    fontSize: 16,
    marginLeft: 10,
    marginRight: 4,
  },
  inputBtnLeft: {
    height: "100%",
    width: 34,
    justifyContent: "center",
    alignItems: "center",
  },
});
