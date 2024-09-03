import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import React from "react";
import { colors } from "../../constants/colors";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { AuthStackParamList } from "../../utils/navigation-types";

interface Props {
  screen: "login" | "signup";
  containerStyle?: StyleProp<ViewStyle>;
}
export default function FormFooter({ screen, containerStyle }: Props) {
  const navigation = useNavigation<NavigationProp<AuthStackParamList>>();
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={styles.text}>
        {screen === "login"
          ? "Don't have an account?"
          : "Already have an account?"}
      </Text>
      <TouchableOpacity
        style={styles.btn}
        onPress={() =>
          navigation.navigate(screen === "login" ? "SignUp" : "LogIn")
        }
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
