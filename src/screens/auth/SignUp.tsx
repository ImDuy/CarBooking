import { useClerk } from "@clerk/clerk-expo";
import React, { useState } from "react";
import { Keyboard, KeyboardAvoidingView, Platform } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import SuccessModal from "../../components/auth/SuccessModal";
import AuthForm from "../../components/auth/AuthForm";
import AuthHeader from "../../components/auth/AuthHeader";
import PendingVerificationModal from "../../components/auth/PendingVerificationModal";
import KeyboardDismissView from "../../components/KeyboardDismissView";
import { defaultStyles } from "../../constants/styles";
import useClerkSignUp from "../../hooks/auth/useClerkSignUp";
import { AuthFormInfo } from "../../utils/types";

export default function SignUp() {
  const { bottom } = useSafeAreaInsets();
  const {
    clerkSignUp,
    clerkVerification,
    verification,
    setVerification,
    setSessionActive,
  } = useClerkSignUp();
  const { signOut } = useClerk();
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const onSignUpPress = async (signUpForm: AuthFormInfo) => {
    clerkSignUp(signUpForm);
  };

  const onPressVerify = async () => {
    clerkVerification();
  };

  const handleBrowseHome = async () => {
    setVerification({ state: "", code: "", error: "", signInSessionId: null });
    setShowSuccessModal(false);
    setSessionActive();
  };

  const onPendingModalBackdropPress = () => {
    if (Keyboard.isVisible()) Keyboard.dismiss();
    else
      setVerification((prevState) => ({
        ...prevState,
        state: "",
        code: "",
        error: "",
      }));
  };
  const onSuccessModalBackdropPress = () => {
    setVerification({
      state: "",
      code: "",
      error: "",
      signInSessionId: null,
    });
    setShowSuccessModal(false);
    signOut();
  };

  return (
    <KeyboardAvoidingView
      style={{ ...defaultStyles.flex1, paddingBottom: bottom }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <KeyboardDismissView containerStyle={defaultStyles.flex1}>
        <AuthHeader title="Create Your Account" />
        <AuthForm screen="signup" onPrimaryBtnPress={onSignUpPress} />
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
          onBackdropPress={onPendingModalBackdropPress}
          onModalHide={() => {
            if (verification.state === "success") setShowSuccessModal(true);
          }}
        />
        <SuccessModal
          isVisible={showSuccessModal}
          onBackdropPress={onSuccessModalBackdropPress}
          onBrowseHome={handleBrowseHome}
        />
      </KeyboardDismissView>
    </KeyboardAvoidingView>
  );
}
