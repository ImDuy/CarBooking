import { useClerk, useSignUp } from "@clerk/clerk-expo";
import React, { useState } from "react";
import { Alert, Keyboard, KeyboardAvoidingView, Platform } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import AccountVerifiedModal from "../../components/auth/AccountVerifiedModal";
import AuthForm from "../../components/auth/AuthForm";
import AuthHeader from "../../components/auth/AuthHeader";
import PendingVerificationModal from "../../components/auth/PendingVerificationModal";
import KeyboardDismissView from "../../components/KeyboardDismissView";
import { defaultStyles } from "../../constants/styles";
import { AuthFormInfo } from "../../utils/types";

type Verification = {
  state: string;
  code: string;
  error: string;
  signInSessionId: string | null;
};

export default function SignUp() {
  const { bottom } = useSafeAreaInsets();
  const { isLoaded, signUp, setActive } = useSignUp();
  const { signOut } = useClerk();
  const [verification, setVerification] = useState<Verification>({
    state: "",
    code: "",
    error: "",
    signInSessionId: null,
  });
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const onSignUpPress = async (signUpForm: AuthFormInfo) => {
    if (!isLoaded) return;

    try {
      await signUp.create({
        emailAddress: signUpForm.email,
        password: signUpForm.password,
      });

      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });

      setVerification((prevState) => ({ ...prevState, state: "pending" }));
    } catch (err: any) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      Alert.alert("Error", err.errors[0].longMessage);
    }
  };

  const onPressVerify = async () => {
    if (!isLoaded) return;

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code: verification.code,
      });

      if (completeSignUp.status === "complete") {
        // TODO: create user in database

        setVerification((prevState) => ({
          ...prevState,
          state: "success",
          signInSessionId: completeSignUp.createdSessionId,
        }));
      } else {
        setVerification((prevState) => ({
          ...prevState,
          // state: "failed",
          error: "Verification failed",
        }));
      }
    } catch (err: any) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      setVerification((prevState) => ({
        ...prevState,
        error: err.errors[0].longMessage,
      }));
    }
  };

  const handleBrowseHome = async () => {
    setVerification({ state: "", code: "", error: "", signInSessionId: null });
    setShowSuccessModal(false);
    setActive !== undefined &&
      setActive({ session: verification.signInSessionId });
    // navigation.navigate("TabNavigation", { screen: "Home" });
  };

  return (
    <KeyboardAvoidingView
      style={{ ...defaultStyles.flex1, paddingBottom: bottom }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <KeyboardDismissView containerStyle={defaultStyles.flex1}>
        <AuthHeader title="Create Your Account" />
        <AuthForm screen="signup" onPrimaryBtnPress={onSignUpPress} />
        <AccountVerifiedModal
          isVisible={showSuccessModal}
          onBackdropPress={() => {
            setVerification({
              state: "",
              code: "",
              error: "",
              signInSessionId: null,
            });
            setShowSuccessModal(false);
            signOut();
          }}
          onBrowseHome={handleBrowseHome}
        />
        <PendingVerificationModal
          isVisible={verification.state === "pending"}
          code={verification.code}
          error={verification.error}
          onVerifyPress={onPressVerify}
          onChangeCodeInput={(code) =>
            setVerification((prevState) => ({ ...prevState, error: "", code }))
          }
          onClearCodeInput={() =>
            setVerification((prevState) => ({
              ...prevState,
              error: "",
              code: "",
            }))
          }
          onBackdropPress={() => {
            if (Keyboard.isVisible()) Keyboard.dismiss();
            else
              setVerification((prevState) => ({
                ...prevState,
                state: "",
                code: "",
                error: "",
              }));
          }}
          onModalHide={() => {
            if (verification.state === "success") setShowSuccessModal(true);
          }}
        />
      </KeyboardDismissView>
    </KeyboardAvoidingView>
  );
}
