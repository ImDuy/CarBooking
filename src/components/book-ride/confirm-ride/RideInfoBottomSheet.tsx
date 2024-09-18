import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetFooterProps,
  BottomSheetModal,
  BottomSheetScrollView,
} from "@gorhom/bottom-sheet";
import React, { RefObject } from "react";
import { StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { colors } from "../../../constants/colors";
import {
  bottomSheetFooterHeight,
  screenPadding,
} from "../../../constants/sizes";
import { Driver } from "../../../utils/types";
import AppBottomSheet from "../../AppBottomSheet";
import SheetFooter from "../SheetFooter";
import RideInfoDriver from "./RideInfoDriver";
import RideInfoHeader from "./RideInfoHeader";
import RideInfoContent from "./RideInfoContent";
import RideInfoLocation from "./RideInfoLocation";

interface Props {
  sheetRef: RefObject<BottomSheetModal>;
  selectedDriver: Driver | null;
}
export default function RideInfoBottomSheet({
  sheetRef,
  selectedDriver,
}: Props) {
  const { bottom } = useSafeAreaInsets();
  const renderSheetBackDrop = (props: BottomSheetBackdropProps) => (
    <BottomSheetBackdrop
      {...props}
      appearsOnIndex={0}
      disappearsOnIndex={-1}
      pressBehavior="close"
      onPress={() => sheetRef.current?.dismiss()}
    />
  );

  return (
    <AppBottomSheet
      ref={sheetRef}
      snapPoints={["80%"]}
      handleIndicatorStyle={styles.indicator}
      handleComponent={() => (
        <RideInfoHeader onClosePress={() => sheetRef.current?.dismiss()} />
      )}
      footerComponent={(props: BottomSheetFooterProps) => (
        <SheetFooter btnLabel="Confirm Ride" {...props} />
      )}
      backdropComponent={renderSheetBackDrop}
    >
      <BottomSheetScrollView
        style={{ marginTop: 4 }}
        contentContainerStyle={[
          styles.container,
          { paddingBottom: bottom + bottomSheetFooterHeight + 12 },
        ]}
        showsVerticalScrollIndicator={false}
      >
        <RideInfoDriver
          avatarUrl={selectedDriver?.profile_image_url}
          name={`${selectedDriver?.first_name} ${selectedDriver?.last_name}`}
          rating={selectedDriver?.rating}
        />
        <RideInfoContent seats={selectedDriver?.car_seats} />
        <RideInfoLocation />
      </BottomSheetScrollView>
    </AppBottomSheet>
  );
}

const styles = StyleSheet.create({
  indicator: { backgroundColor: "transparent", margin: 0 },
  container: {
    paddingTop: 24,
    paddingHorizontal: (screenPadding.horizontal * 2) / 3,
    backgroundColor: colors.bg,
  },
});
