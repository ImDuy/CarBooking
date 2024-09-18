import {
  BottomSheetModal,
  BottomSheetModalProps,
  useBottomSheetTimingConfigs,
} from "@gorhom/bottom-sheet";
import React, { forwardRef } from "react";
import { StyleSheet } from "react-native";
import { colors } from "../constants/colors";
import { screenSize } from "../constants/sizes";

const AppBottomSheet = forwardRef<BottomSheetModal, BottomSheetModalProps>(
  (props, ref) => {
    const animationConfigs = useBottomSheetTimingConfigs({
      duration: 600,
    });

    return (
      // BottomSheetModal not present initially (have to manually present it)
      <BottomSheetModal
        ref={ref}
        keyboardBehavior="extend" //extend to max snap point when keyboard show
        keyboardBlurBehavior="restore" //restore sheet position after keyboard hide (no need for 'extend' behavior but still put here just in case other behaviors)
        enablePanDownToClose={false} //this is true by default when using BottomSheetModal
        index={0}
        snapPoints={[screenSize.height < 700 ? "45%" : "40%", "85%"]}
        animationConfigs={animationConfigs}
        backgroundStyle={styles.background}
        handleIndicatorStyle={styles.indicator}
        {...props}
      />
    );
  }
);

const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.bg,
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

AppBottomSheet.displayName = "AppBottomSheet";
export default AppBottomSheet;
