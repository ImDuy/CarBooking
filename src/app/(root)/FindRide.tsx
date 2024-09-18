import React from "react";
import LocationBottomSheet from "../../components/book-ride/find-ride/LocationBottomSheet";
import RideLayout from "../../components/book-ride/RideLayout";

export default function FindRide() {
  return (
    <RideLayout title="Ride">
      <LocationBottomSheet />
    </RideLayout>
  );
}
