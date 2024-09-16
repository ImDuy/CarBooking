import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import React, { ReactNode, useRef } from "react";
import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";
import { screenPadding, screenSize } from "../../constants/sizes";

interface Props {
  children?: ReactNode;
}

export default function AppBottomSheet({ children }: Props) {
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
    >
      <BottomSheetView style={styles.viewContainer}>{children}</BottomSheetView>
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
  viewContainer: {
    flex: 1,
    paddingHorizontal: (screenPadding.horizontal * 2) / 3,
  },
});
