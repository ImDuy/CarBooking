import React from "react";
import { StyleSheet, Text } from "react-native";
import Modal, { ModalProps } from "react-native-modal";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { colors } from "../../constants/colors";
import { icons } from "../../constants/icons";
import KeyboardDismissView from "../KeyboardDismissView";
import PrimaryButton from "../PrimaryButton";
import InputField from "./InputField";

interface Props extends Partial<ModalProps> {
  code: string;
  error: string;
  onChangeCodeInput: (code: string) => void;
  onClearCodeInput: () => void;
  onVerifyPress: () => void;
}

export default function PendingVerificationModal({
  code,
  error,
  onChangeCodeInput,
  onClearCodeInput,
  onVerifyPress,
  ...modalProps
}: Props) {
  const { bottom, top } = useSafeAreaInsets();
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
          value={code}
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
          onPress={onVerifyPress}
          containerStyle={styles.verifyBtn}
        />
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
