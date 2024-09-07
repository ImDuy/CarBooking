import { useSignIn } from "@clerk/clerk-expo";
import React, { useCallback } from "react";
import { Alert, KeyboardAvoidingView, Platform } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import AuthForm from "../../components/auth/AuthForm";
import AuthHeader from "../../components/auth/AuthHeader";
import KeyboardDismissView from "../../components/KeyboardDismissView";
import { defaultStyles } from "../../constants/styles";
import { AuthFormInfo } from "../../utils/types";

export default function LogIn() {
  const { bottom } = useSafeAreaInsets();
  const { signIn, setActive, isLoaded } = useSignIn();

  const onSignInPress = useCallback(
    async (loginForm: AuthFormInfo) => {
      if (!isLoaded) {
        return;
      }

      try {
        const signInAttempt = await signIn.create({
          identifier: loginForm.email,
          password: loginForm.password,
        });

        if (signInAttempt.status === "complete") {
          await setActive({ session: signInAttempt.createdSessionId });
        } else {
          // See https://clerk.com/docs/custom-flows/error-handling
          // for more info on error handling
          console.error(JSON.stringify(signInAttempt, null, 2));
        }
      } catch (err: any) {
        Alert.alert("Error", err.errors[0].longMessage);
      }
    },
    [isLoaded, setActive, signIn]
  );

  return (
    <KeyboardAvoidingView
      style={{ ...defaultStyles.flex1, paddingBottom: bottom }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <KeyboardDismissView containerStyle={defaultStyles.flex1}>
        <AuthHeader title="Welcome 👋" />
        <AuthForm screen="login" onPrimaryBtnPress={onSignInPress} />
      </KeyboardDismissView>
    </KeyboardAvoidingView>
  );
}
