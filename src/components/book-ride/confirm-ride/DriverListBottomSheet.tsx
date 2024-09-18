import {
  BottomSheetFlatList,
  BottomSheetFooterProps,
  BottomSheetModal,
} from "@gorhom/bottom-sheet";
import React, { RefObject } from "react";
import { StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { colors } from "../../../constants/colors";
import { mockedDrivers } from "../../../constants/data";
import {
  bottomSheetFooterHeight,
  screenPadding,
  screenSize,
} from "../../../constants/sizes";
import { Driver } from "../../../utils/types";
import AppBottomSheet from "../../AppBottomSheet";
import Divider from "../../Divider";
import SheetFooter from "../SheetFooter";
import DriverCard from "./DriverCard";

interface Props {
  sheetRef: RefObject<BottomSheetModal>;
  rideInfoSheetRef: RefObject<BottomSheetModal>;
  selectedDriver: Driver | null;
  setSelectedDriver: (driver: Driver) => void;
}
export default function DriverListBottomSheet({
  sheetRef,
  rideInfoSheetRef,
  selectedDriver,
  setSelectedDriver,
}: Props) {
  const { bottom } = useSafeAreaInsets();

  const onFooterBtnPress = () => {
    rideInfoSheetRef.current?.present();
  };

  return (
    <AppBottomSheet
      ref={sheetRef}
      snapPoints={[screenSize.height < 700 ? "50%" : "40%"]}
      handleIndicatorStyle={styles.indicator}
      footerComponent={(props: BottomSheetFooterProps) => (
        <SheetFooter
          btnLabel="Select Ride"
          onBtnPress={onFooterBtnPress}
          {...props}
        />
      )}
    >
      <BottomSheetFlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          styles.container,
          { paddingBottom: bottom + bottomSheetFooterHeight },
        ]}
        data={mockedDrivers}
        renderItem={({ item }) => (
          <DriverCard
            driver={item}
            selectedDriver={selectedDriver}
            setSelectedDriver={setSelectedDriver}
          />
        )}
        ItemSeparatorComponent={() => <Divider style={styles.divider} />}
      />
    </AppBottomSheet>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bg,
    paddingHorizontal: (screenPadding.horizontal * 2) / 3,
  },
  indicator: { backgroundColor: "transparent", margin: 0 },
  divider: {
    marginHorizontal: 4,
    height: 1,
  },
});
