import AntDesign from "@expo/vector-icons/AntDesign";
import React, { useState } from "react";
import {
  Image,
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import { colors } from "../constants/colors";
import { icons } from "../constants/icons";
interface Props extends TextInputProps {
  value: string;
  iconLeft: any;
  border?: boolean;
  password?: boolean;
  clearText: () => void;
  containerStyle?: StyleProp<ViewStyle>;
}
export default function InputField({
  value,
  iconLeft,
  border = false,
  password = false,
  clearText,
  containerStyle,
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
    <View
      style={[
        styles.inputContainer,
        {
          borderColor: isFocused
            ? colors.primary
            : border
            ? colors.bg_gray
            : colors.input_bg,
          backgroundColor: isFocused ? colors.bg : colors.input_bg,
        },
        containerStyle,
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
        autoCorrect={false}
        {...props}
      />
      {value.length > 0 && isFocused && (
        <TouchableOpacity style={styles.inputBtnRight} onPress={clearText}>
          <AntDesign name="closecircle" size={20} color={colors.textMuted} />
        </TouchableOpacity>
      )}
      {password && (
        <TouchableOpacity
          style={styles.inputBtnRight}
          onPress={() => setShowPassword((prevState) => !prevState)}
        >
          {renderShowPasswordIcon()}
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
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
  inputBtnRight: {
    height: "100%",
    width: 34,
    justifyContent: "center",
    alignItems: "center",
  },
});
