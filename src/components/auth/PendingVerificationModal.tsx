import React, { useState } from "react";
import { StyleSheet, Text } from "react-native";
import Modal, { ModalProps } from "react-native-modal";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { colors } from "../../constants/colors";
import { icons } from "../../constants/icons";
import KeyboardDismissView from "../KeyboardDismissView";
import PrimaryButton from "../PrimaryButton";
import InputField from "./InputField";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";
import LoadingOverlay from "../LoadingOverlay";

interface Props extends Partial<ModalProps> {
  error: string;
  onVerifyPress: (code: string) => void;
}

export default function PendingVerificationModal({
  error,
  onVerifyPress,
  ...modalProps
}: Props) {
  const { bottom, top } = useSafeAreaInsets();
  const isLoading = useSelector((state: RootState) => state.app.isLoading);
  const [verificationCode, setVerificationCode] = useState("");

  const onChangeCodeInput = (code: string) => {
    setVerificationCode(code);
  };
  const onClearCodeInput = () => {
    setVerificationCode("");
  };

  return (
    <Modal
      useNativeDriverForBackdrop
      statusBarTranslucent
      avoidKeyboard
      style={{ marginTop: bottom, marginBottom: top }}
      //   hideModalContentWhileAnimating
      {...modalProps}
    >
      <KeyboardDismissView containerStyle={styles.container}>
        <Text style={styles.title}>Verification</Text>
        <Text style={styles.subTitle}>
          We've sent a verification code to your email address
        </Text>
        <InputField
          label="Code"
          value={verificationCode}
          iconLeft={icons.lock}
          placeholder="123456"
          keyboardType="numeric"
          onChangeText={onChangeCodeInput}
          clearText={onClearCodeInput}
          containerStyle={{ marginBottom: 20 }}
          inputContainerStyle={{ marginTop: 4 }}
        />
        {error && <Text style={styles.errorText}>{error}</Text>}
        <PrimaryButton
          label="Verify Email"
          onPress={() => onVerifyPress(verificationCode)}
          containerStyle={styles.verifyBtn}
        />
        {isLoading && <LoadingOverlay />}
      </KeyboardDismissView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 14,
    paddingVertical: 36,
    paddingHorizontal: 22,
    justifyContent: "center",
    gap: 4,
    backgroundColor: colors.bg,
  },
  title: {
    color: colors.text,
    fontFamily: "Jakarta-Bold",
    fontSize: 24,
    lineHeight: 24,
  },
  subTitle: {
    color: colors.textMuted,
    fontFamily: "Jakarta-Regular",
    marginBottom: 12,
  },
  errorText: {
    fontFamily: "Jakarta-Medium",
    color: colors.error,
    fontSize: 15,
    lineHeight: 16,
    textAlign: "center",
    marginBottom: 8,
  },
  verifyBtn: {
    backgroundColor: colors.success,
    height: 50,
  },
});
