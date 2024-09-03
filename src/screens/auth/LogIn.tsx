import React from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import AuthForm from "../../components/auth/AuthForm";
import AuthHeader from "../../components/auth/AuthHeader";
import { defaultStyles } from "../../constants/styles";

export default function LogIn() {
  const { bottom } = useSafeAreaInsets();
  return (
    <KeyboardAvoidingView
      style={{ ...defaultStyles.flex1, paddingBottom: bottom }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback
        onPress={() => Keyboard.dismiss()}
        accessible={false}
      >
        <View style={defaultStyles.flex1}>
          <AuthHeader title="Welcome 👋" />
          <AuthForm screen="login" />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
