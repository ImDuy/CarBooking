import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Modal, { ModalProps } from "react-native-modal";
import { colors } from "../../constants/colors";
import { images } from "../../constants/images";
import PrimaryButton from "../PrimaryButton";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import LoadingOverlay from "../LoadingOverlay";

interface Props extends Partial<ModalProps> {
  onBrowseHome: () => void;
}
export default function SuccessModal({ onBrowseHome, ...modalProps }: Props) {
  const isLoading = useSelector((state: RootState) => state.app.isLoading);
  return (
    <Modal
      useNativeDriverForBackdrop
      //   hideModalContentWhileAnimating
      {...modalProps}
    >
      <View style={styles.container}>
        <Image source={images.check} style={styles.image} />
        <Text style={styles.title}>Verified</Text>
        <Text style={styles.subTitle}>
          You have successfully verified your account
        </Text>
        <PrimaryButton
          label="Go to Home"
          onPress={onBrowseHome}
          containerStyle={styles.browseHomeBtn}
        />
        {isLoading && <LoadingOverlay />}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 14,
    paddingVertical: 36,
    paddingHorizontal: 20,
    justifyContent: "center",
    gap: 8,
    backgroundColor: colors.bg,
  },
  image: {
    alignSelf: "center",
    width: 110,
    height: 110,
  },
  title: {
    color: colors.text,
    fontFamily: "Jakarta-Bold",
    fontSize: 26,
    lineHeight: 26,
    textAlign: "center",
    marginTop: 12,
  },
  subTitle: {
    color: colors.textMuted,
    fontFamily: "Jakarta-Regular",
    fontSize: 15,
    textAlign: "center",
    lineHeight: 16,
    marginBottom: 12,
  },
  browseHomeBtn: {
    height: 50,
  },
});
