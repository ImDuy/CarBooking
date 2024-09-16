import { router } from "expo-router";
import React from "react";
import {
  Alert,
  Image,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";
import {
  GooglePlaceData,
  GooglePlaceDetail,
  GooglePlacesAutocomplete,
} from "react-native-google-places-autocomplete";
import { useDispatch } from "react-redux";
import { colors } from "../../constants/colors";
import { icons } from "../../constants/icons";
import { defaultStyles } from "../../constants/styles";
import { setDestinationLocation } from "../../store/userSlice";

interface Props {
  containerStyle?: StyleProp<ViewStyle>;
}
export default function SearchInput({ containerStyle }: Props) {
  const dispatch = useDispatch();

  const onLocationPress = (
    data: GooglePlaceData,
    details: GooglePlaceDetail | null = null
  ) => {
    if (details === null) {
      Alert.alert(
        "Error",
        "Could not find details of the address. Please try again."
      );
      return;
    }
    dispatch(
      setDestinationLocation({
        latitude: details?.geometry.location.lat,
        longitude: details?.geometry.location.lng,
        address: data?.description,
      })
    );
    router.navigate("/(root)/FindRide");
  };

  return (
    <View style={containerStyle}>
      <GooglePlacesAutocomplete
        placeholder="Where do you want to go?"
        textInputProps={{
          autoCorrect: false,
          autoCapitalize: "words",
          placeholderTextColor: colors.textMuted,
        }}
        debounce={200}
        fetchDetails={true}
        onPress={onLocationPress}
        query={{
          key: process.env.EXPO_PUBLIC_GOOGLE_API_KEY,
          language: "en",
        }}
        styles={{
          textInputContainer: styles.inputContainer,
          textInput: styles.input,
          listView: styles.listView,
        }}
        renderLeftButton={() => (
          <Image source={icons.search} style={styles.iconLeft} />
        )}
        onFail={(error) => console.log("error: " + error)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 2,
    backgroundColor: colors.bg,
    borderRadius: 40,
    height: 50,
    paddingHorizontal: 14,
    ...defaultStyles.shadowLight,
  },
  input: {
    padding: 0,
    height: "100%",
    color: colors.text,
    fontFamily: "Jakarta-Medium",
    fontSize: 16,
    borderRadius: 40,
    marginLeft: 2,
  },
  listView: {
    position: "absolute",
    zIndex: 99,
    top: 60,
    borderRadius: 10,
  },
  iconLeft: {
    width: 24,
    height: 24,
    tintColor: colors.text,
    alignSelf: "center",
  },
});
