import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { colors } from "../../constants/colors";
import { mockedRecentRides } from "../../constants/data";
import { bottomTabSize } from "../../constants/sizes";
import RideCard from "./RideCard";
import Header from "./Header";
import GooglePlaceInput from "../GooglePlaceInput";
import UserLocationMap from "../UserLocationMap";
import { useDispatch } from "react-redux";
import { setDestinationLocation } from "../../store/userSlice";
import { Location } from "../../utils/types";
import { router } from "expo-router";
import { defaultStyles } from "../../constants/styles";

export default function RideList() {
  const dispatch = useDispatch();
  const handleSearchLocationPress = (location: Location) => {
    dispatch(setDestinationLocation(location));
    router.navigate("/(root)/FindRide");
  };

  return (
    <FlatList
      keyboardShouldPersistTaps="handled" // for the list view in GooglePlaceAutoCompleteInput to work when keyboard in enabled
      contentContainerStyle={styles.listContainer}
      data={mockedRecentRides}
      keyExtractor={(item) => item.ride_id.toString()}
      renderItem={({ item }) => <RideCard ride={item} />}
      showsVerticalScrollIndicator={false}
      ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
      ListHeaderComponent={() => (
        <>
          <Header />
          <GooglePlaceInput
            containerStyle={defaultStyles.shadowLight}
            handleLocationPress={handleSearchLocationPress}
          />
          <Text style={styles.listHeaderText}>Your current location</Text>
          <UserLocationMap containerStyle={styles.mapContainer} />
          <Text style={styles.listHeaderText}>Recent Rides</Text>
        </>
      )}
    />
  );
}

const styles = StyleSheet.create({
  listContainer: {
    paddingBottom:
      bottomTabSize.height +
      bottomTabSize.marginBottom +
      bottomTabSize.gapWithContent,
  },
  listHeaderText: {
    color: colors.text,
    fontFamily: "Jakarta-Bold",
    fontSize: 20,
    marginTop: 20,
    marginBottom: 12,
  },
  mapContainer: {
    marginBottom: 20,
  },
});
