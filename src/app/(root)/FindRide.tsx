import { router } from "expo-router";
import React from "react";
import { StyleSheet, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import RideLayout from "../../components/book-ride/RideLayout";
import GooglePlaceInput from "../../components/GooglePlaceInput";
import PrimaryButton from "../../components/PrimaryButton";
import { colors } from "../../constants/colors";
import { icons } from "../../constants/icons";
import { RootState } from "../../store/store";
import { setDestinationLocation, setUserLocation } from "../../store/userSlice";
import { BottomSheetView } from "@gorhom/bottom-sheet";
import { screenPadding } from "../../constants/sizes";

export default function FindRide() {
  const { userAddress, destinationAddress } = useSelector(
    (state: RootState) => state.location
  );
  const dispatch = useDispatch();

  return (
    <RideLayout title="Ride">
      <BottomSheetView style={styles.container}>
        <Text style={styles.inputTitle}>From</Text>
        <GooglePlaceInput
          bottomSheetInput
          initialLocation={userAddress ?? undefined}
          containerStyle={{ ...styles.inputContainer, zIndex: 2 }}
          listViewStyle={styles.inputListView}
          iconLeft={icons.point}
          handleLocationPress={(location) =>
            dispatch(setUserLocation(location))
          }
        />

        <Text style={{ ...styles.inputTitle, marginTop: 10 }}>To</Text>
        <GooglePlaceInput
          bottomSheetInput
          initialLocation={destinationAddress ?? undefined}
          containerStyle={{ ...styles.inputContainer, zIndex: 1 }}
          listViewStyle={styles.inputListView}
          iconLeft={icons.target}
          handleLocationPress={(location) =>
            dispatch(setDestinationLocation(location))
          }
        />

        <PrimaryButton
          label="Find Now"
          containerStyle={styles.btnContainer}
          onPress={() => router.navigate("/ConfirmRide")}
        />
      </BottomSheetView>
    </RideLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
    paddingHorizontal: (screenPadding.horizontal * 2) / 3,
  },
  inputTitle: {
    color: colors.text,
    fontFamily: "Jakarta-Medium",
    fontSize: 16,
    marginBottom: 4,
  },
  inputContainer: {
    backgroundColor: colors.bg_gray,
  },
  inputListView: {
    borderColor: colors.textMuted,
    borderWidth: 0.5,
  },
  btnContainer: {
    marginTop: 30,
    height: 54,
  },
});
