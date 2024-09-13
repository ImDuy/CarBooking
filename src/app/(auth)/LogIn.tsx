import React from "react";
import { KeyboardAvoidingView, Platform } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import AuthForm from "../../components/auth/AuthForm";
import AuthHeader from "../../components/auth/AuthHeader";
import KeyboardDismissView from "../../components/KeyboardDismissView";
import { defaultStyles } from "../../constants/styles";
import useClerkSignIn from "../../hooks/auth/useClerkSignIn";
import { AuthFormInfo } from "../../utils/types";

export default function LogIn() {
  const { bottom } = useSafeAreaInsets();
  const { clerkSignIn } = useClerkSignIn();

  const onSignInPress = (loginForm: AuthFormInfo) => {
    clerkSignIn(loginForm);
  };

  return (
    <KeyboardAvoidingView
      style={{ ...defaultStyles.flex1, paddingBottom: bottom }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <KeyboardDismissView style={defaultStyles.flex1}>
        <AuthHeader title="Welcome 👋" />
        <AuthForm screen="login" onPrimaryBtnPress={onSignInPress} />
      </KeyboardDismissView>
    </KeyboardAvoidingView>
  );
}
