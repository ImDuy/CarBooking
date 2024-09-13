import {
  LocationObject,
  LocationSubscription,
  PermissionStatus,
  reverseGeocodeAsync,
  useForegroundPermissions,
  watchPositionAsync,
} from "expo-location";
import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUserLocation } from "../store/userSlice";

export default function useUserLocation() {
  const [permissionInfo, requestPermission] = useForegroundPermissions();
  const dispatch = useDispatch();

  const verifyLocationPermissions = useCallback(async () => {
    if (permissionInfo?.status === PermissionStatus.GRANTED)
      return PermissionStatus.GRANTED;
    const { status } = await requestPermission();
    return status;
  }, [requestPermission, permissionInfo?.status]);

  useEffect(() => {
    let subscription: LocationSubscription | null = null;
    const requestUserLocation = async () => {
      const status = await verifyLocationPermissions();
      if (status !== PermissionStatus.GRANTED) {
        return;
      }
      //keep track of user current location (subscribe to device location update -> trigger the callback whenever the location changes)
      subscription = await watchPositionAsync(
        { accuracy: 4 },
        async (location: LocationObject) => {
          const address = await reverseGeocodeAsync(location.coords);
          dispatch(
            setUserLocation({
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
              address: `${address[0].name}, ${address[0].region}`,
            })
          );
        }
      );
    };

    requestUserLocation();
    return () => {
      subscription?.remove();
    };
  }, [verifyLocationPermissions, dispatch]);
}
