import AntDesign from "@expo/vector-icons/AntDesign";
import React, { useState } from "react";
import {
  Image,
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import { colors } from "../../constants/colors";
import { icons } from "../../constants/icons";
interface Props extends TextInputProps {
  label: string;
  value: string;
  iconLeft: any;
  password?: boolean;
  inputContainerStyle?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
}
export default function InputField({
  label,
  value,
  iconLeft,
  password,
  containerStyle,
  inputContainerStyle,
  ...props
}: Props) {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const renderShowPasswordIcon = () => {
    if (!password || value.length === 0) return null;
    if (!showPassword)
      return <Image source={icons.eyecross} style={styles.icon} />;
    else if (showPassword)
      return <AntDesign name="eyeo" size={24} color={colors.text} />;
  };
  return (
    <View style={containerStyle}>
      <Text style={styles.label}>{label}</Text>
      <View
        style={[
          styles.inputContainer,
          {
            borderColor: isFocused ? colors.primary : colors.input_bg,
            backgroundColor: isFocused ? colors.bg : colors.input_bg,
          },
          inputContainerStyle,
        ]}
      >
        <Image
          source={iconLeft}
          style={{
            ...styles.icon,
            tintColor: isFocused ? colors.text : colors.textMuted,
          }}
        />
        <TextInput
          style={styles.input}
          value={value}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          secureTextEntry={password && !showPassword}
          {...props}
        />
        <TouchableOpacity
          disabled={!password}
          style={styles.showPasswordBtn}
          onPress={() => setShowPassword((prevState) => !prevState)}
        >
          {renderShowPasswordIcon()}
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    color: colors.text,
    fontFamily: "Jakarta-SemiBold",
    fontSize: 18,
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
    paddingLeft: 14,
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
  },
  showPasswordBtn: {
    height: "100%",
    paddingRight: 20,
    paddingLeft: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
