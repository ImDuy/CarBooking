import {
  BottomSheetFooter,
  BottomSheetFooterProps,
} from "@gorhom/bottom-sheet";
import React from "react";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { colors } from "../../constants/colors";
import { bottomSheetFooterHeight, screenPadding } from "../../constants/sizes";
import PrimaryButton from "../PrimaryButton";

interface Props extends BottomSheetFooterProps {
  btnLabel: string;
  onBtnPress?: () => void;
}
export default function SheetFooter({
  btnLabel,
  onBtnPress,
  ...bottomSheetFooterProps
}: Props) {
  const { bottom } = useSafeAreaInsets();

  return (
    <BottomSheetFooter
      bottomInset={bottom}
      style={styles.footerContainer}
      {...bottomSheetFooterProps}
    >
      <View style={styles.btnWrapper}>
        <PrimaryButton
          label={btnLabel}
          containerStyle={styles.selectRideBtn}
          onPress={onBtnPress}
        />
      </View>
    </BottomSheetFooter>
  );
}

const styles = StyleSheet.create({
  footerContainer: {
    backgroundColor: colors.bg,
  },
  btnWrapper: {
    height: bottomSheetFooterHeight,
  },
  selectRideBtn: {
    height: 54,
    marginHorizontal: (screenPadding.horizontal * 2) / 3,
    marginTop: 8,
  },
});
