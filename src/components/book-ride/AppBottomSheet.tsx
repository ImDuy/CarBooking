import BottomSheet, { BottomSheetFooterProps } from "@gorhom/bottom-sheet";
import React, { FC, ReactNode, useRef } from "react";
import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";
import { screenSize } from "../../constants/sizes";

interface Props {
  children?: ReactNode;
  footer?: FC<BottomSheetFooterProps>;
}

export default function AppBottomSheet({ children, footer }: Props) {
  const sheetRef = useRef<BottomSheet>(null);

  return (
    <BottomSheet
      keyboardBehavior="extend" //extend to max snap point when keyboard show
      keyboardBlurBehavior="restore" //restore sheet position after keyboard hide (no need for 'extend' behavior but still put here just in case other behaviors)
      ref={sheetRef}
      index={0}
      snapPoints={[screenSize.height < 700 ? "45%" : "40%", "85%"]}
      backgroundStyle={styles.background}
      handleIndicatorStyle={styles.indicator}
      footerComponent={footer}
    >
      {children}
    </BottomSheet>
  );
}

const styles = StyleSheet.create({
  background: {
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  indicator: {
    borderRadius: 40,
    width: 40,
    backgroundColor: colors.textMuted,
    marginBottom: 4,
  },
});
