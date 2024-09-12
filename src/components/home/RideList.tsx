import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { colors } from "../../constants/colors";
import { recentRides } from "../../constants/data";
import { bottomTabSize } from "../../constants/sizes";
import RideCard from "./RideCard";
import Header from "./Header";
import SearchInput from "./SearchInput";
import UserLocationMap from "./UserLocationMap";

export default function RideList() {
  return (
    <FlatList
      contentContainerStyle={{
        paddingBottom:
          bottomTabSize.height +
          bottomTabSize.marginBottom +
          bottomTabSize.gapWithContent,
      }}
      data={recentRides}
      keyExtractor={(item) => item.ride_id.toString()}
      renderItem={({ item }) => <RideCard ride={item} />}
      showsVerticalScrollIndicator={false}
      ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
      ListHeaderComponent={() => (
        <View>
          <Header />
          <SearchInput containerStyle={styles.searchContainer} />
          <Text style={styles.listHeaderText}>Your current location</Text>
          <UserLocationMap />
          <Text style={styles.listHeaderText}>Recent Rides</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  listHeaderText: {
    color: colors.text,
    fontFamily: "Jakarta-Bold",
    fontSize: 20,
    marginBottom: 12,
  },
  searchContainer: {
    paddingBottom: 20,
  },
});
