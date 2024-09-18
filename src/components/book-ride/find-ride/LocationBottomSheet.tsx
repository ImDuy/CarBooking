import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { router } from "expo-router";
import React, { useEffect, useRef } from "react";
import { StyleSheet, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { colors } from "../../../constants/colors";
import { icons } from "../../../constants/icons";
import { screenPadding } from "../../../constants/sizes";
import { RootState } from "../../../store/store";
import {
  setDestinationLocation,
  setUserLocation,
} from "../../../store/userSlice";
import AppBottomSheet from "../../AppBottomSheet";
import GooglePlaceInput from "../../GooglePlaceInput";
import KeyboardDismissView from "../../KeyboardDismissView";
import PrimaryButton from "../../PrimaryButton";

export default function LocationBottomSheet() {
  const { userAddress, destinationAddress } = useSelector(
    (state: RootState) => state.location
  );
  const dispatch = useDispatch();
  const sheetRef = useRef<BottomSheetModal>(null);

  useEffect(() => {
    sheetRef.current?.present();
  }, []);

  return (
    <AppBottomSheet ref={sheetRef}>
      <KeyboardDismissView style={styles.container}>
        <Text style={styles.inputTitle}>From</Text>
        <GooglePlaceInput
          bottomSheetInput
          placeholder="Pick up at?"
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
          placeholder="Where to?"
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
      </KeyboardDismissView>
    </AppBottomSheet>
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
