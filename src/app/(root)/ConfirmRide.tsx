import React, { useEffect, useRef, useState } from "react";
import DriverListBottomSheet from "../../components/book-ride/confirm-ride/DriverListBottomSheet";
import RideLayout from "../../components/book-ride/RideLayout";
import { Driver } from "../../utils/types";
import RideInfoBottomSheet from "../../components/book-ride/confirm-ride/RideInfoBottomSheet";
import { BottomSheetModal } from "@gorhom/bottom-sheet";

export default function ConfirmRide() {
  const [selectedDriver, setSelectedDriver] = useState<Driver | null>(null);
  const driverSheetRef = useRef<BottomSheetModal>(null);
  const rideInfoSheetRef = useRef<BottomSheetModal>(null);

  useEffect(() => {
    driverSheetRef.current?.present();
  }, []);

  return (
    <RideLayout title="Choose a Rider">
      <DriverListBottomSheet
        sheetRef={driverSheetRef}
        rideInfoSheetRef={rideInfoSheetRef}
        selectedDriver={selectedDriver}
        setSelectedDriver={(driver: Driver) => setSelectedDriver(driver)}
      />
      <RideInfoBottomSheet
        sheetRef={rideInfoSheetRef}
        selectedDriver={selectedDriver}
      />
    </RideLayout>
  );
}
