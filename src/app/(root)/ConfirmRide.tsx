import {
  BottomSheetFlatList,
  BottomSheetFooter,
  BottomSheetFooterProps,
} from "@gorhom/bottom-sheet";
import { router } from "expo-router";
import React, { useCallback, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import DriverCard from "../../components/book-ride/DriverCard";
import RideLayout from "../../components/book-ride/RideLayout";
import Divider from "../../components/Divider";
import PrimaryButton from "../../components/PrimaryButton";
import { mockedDrivers } from "../../constants/data";
import { StyleSheet } from "react-native";
import { screenPadding } from "../../constants/sizes";
import { colors } from "../../constants/colors";

export default function ConfirmRide() {
  const { bottom } = useSafeAreaInsets();
  const [selectedDriverId, setSelectedDriverId] = useState<number | null>(null);

  const renderFooter = useCallback(
    (props: BottomSheetFooterProps) => (
      <BottomSheetFooter
        {...props}
        bottomInset={bottom}
        style={style.footerContainer}
      >
        <PrimaryButton
          label="Select Ride"
          containerStyle={style.selectRideBtn}
          onPress={() => router.navigate("/BookRide")}
        />
      </BottomSheetFooter>
    ),
    [bottom]
  );

  return (
    <RideLayout title="Choose a Rider" bottomSheetFooter={renderFooter}>
      <BottomSheetFlatList
        contentContainerStyle={[style.container, { paddingBottom: bottom }]}
        data={mockedDrivers}
        renderItem={({ item }) => (
          <DriverCard
            driver={item}
            selectedDriverId={selectedDriverId}
            setSelectedDriverId={(id: number) => setSelectedDriverId(id)}
          />
        )}
        ItemSeparatorComponent={() => <Divider style={style.divider} />}
      />
    </RideLayout>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
    paddingHorizontal: (screenPadding.horizontal * 2) / 3,
  },
  footerContainer: {
    backgroundColor: colors.bg,
  },
  selectRideBtn: {
    height: 54,
    marginHorizontal: (screenPadding.horizontal * 2) / 3,
    marginTop: 8,
    marginBottom: 18,
  },
  divider: {
    marginHorizontal: 4,
    height: 1,
  },
});
