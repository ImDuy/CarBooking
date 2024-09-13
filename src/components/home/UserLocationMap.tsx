import React from "react";
import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useSelector } from "react-redux";
import { mockedDrivers } from "../../constants/data";
import { icons } from "../../constants/icons";
import useUserLocation from "../../hooks/useUserLocation";
import { RootState } from "../../store/store";
import {
  calculateRegion,
  generateMockedDriversLocation,
} from "../../utils/helpers";
import { DriverLocation } from "../../utils/types";

interface Props {
  containerStyle?: StyleProp<ViewStyle>;
}
export default function UserLocationMap({ containerStyle }: Props) {
  const {
    userLatitude,
    userLongitude,
    destinationLatitude,
    destinationLongitude,
  } = useSelector((state: RootState) => state.location);

  useUserLocation();

  const region = calculateRegion(
    userLatitude,
    userLongitude,
    destinationLatitude,
    destinationLongitude
  );
  const driversLocation: DriverLocation[] = generateMockedDriversLocation(
    mockedDrivers,
    region.latitude,
    region.longitude
  );
  console.log(driversLocation);

  const renderDriverMarkers = () =>
    driversLocation.map((driver) => (
      <Marker
        key={driver.id}
        coordinate={{ latitude: driver.latitude, longitude: driver.longitude }}
        title={driver.title}
        image={icons.marker}
      />
    ));
  return (
    <MapView
      region={region}
      style={[styles.container, containerStyle]}
      mapType="mutedStandard"
      showsPointsOfInterest={false}
      showsUserLocation={true}
    >
      {renderDriverMarkers()}
    </MapView>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    height: 280,
  },
});
