import { router } from "expo-router";
import React from "react";
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import { colors } from "../../constants/colors";

interface Props {
  screen: "login" | "signup";
  containerStyle?: StyleProp<ViewStyle>;
}
export default function FormFooter({ screen, containerStyle }: Props) {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={styles.text}>
        {screen === "login"
          ? "Don't have an account?"
          : "Already have an account?"}
      </Text>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => router.navigate(screen === "login" ? "SignUp" : "LogIn")}
      >
        <Text style={[styles.text, styles.btnText]}>
          {screen === "login" ? "Sign Up" : "Log In"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
  },
  text: {
    color: colors.textMuted,
    fontFamily: "Jakarta-Regular",
    fontSize: 17,
  },
  btn: {
    paddingLeft: 6,
    paddingRight: 12,
  },
  btnText: {
    color: colors.primary,
    fontFamily: "Jakarta-SemiBold",
  },
});
