import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { colors } from "../../constants/colors";
import { mockedRecentRides } from "../../constants/data";
import { bottomTabSize } from "../../constants/sizes";
import RideCard from "./RideCard";
import Header from "./Header";
import SearchInput from "./SearchInput";
import UserLocationMap from "./UserLocationMap";

export default function RideList() {
  return (
    <FlatList
      contentContainerStyle={styles.listContainer}
      data={mockedRecentRides}
      keyExtractor={(item) => item.ride_id.toString()}
      renderItem={({ item }) => <RideCard ride={item} />}
      showsVerticalScrollIndicator={false}
      ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
      ListHeaderComponent={() => (
        <>
          <Header />
          <SearchInput containerStyle={styles.searchContainer} />
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
    marginBottom: 12,
  },
  searchContainer: {
    paddingBottom: 20,
  },
  mapContainer: {
    marginBottom: 20,
  },
});
