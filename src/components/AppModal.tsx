import { Modal, ModalProps, StyleSheet, Text, View } from "react-native";
import React, { ReactNode } from "react";
import { screenPadding } from "../constants/sizes";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface Props extends ModalProps {
  children: ReactNode;
}
export default function AppModal({ children, ...modalProps }: Props) {
  return (
    <Modal animationType="slide" transparent={true} {...modalProps}>
      <View style={styles.centeredView}>{children}</View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: screenPadding.horizontal / 2,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    // marginTop: 22,
  },
});
