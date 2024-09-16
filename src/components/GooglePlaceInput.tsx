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
import { colors } from "../constants/colors";
import { icons } from "../constants/icons";
import { defaultStyles } from "../constants/styles";
import { Location } from "../utils/types";

interface Props {
  containerStyle?: StyleProp<ViewStyle>;
  iconLeft?: any;
  initialLocation?: string;
  handleLocationPress: (location: Location) => void;
}
export default function GooglePlaceInput({
  containerStyle,
  handleLocationPress,
  iconLeft,
  initialLocation,
}: Props) {
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

    handleLocationPress({
      latitude: details?.geometry.location.lat,
      longitude: details?.geometry.location.lng,
      address: data?.description,
    });
  };

  return (
    <View style={containerStyle}>
      <GooglePlacesAutocomplete
        enablePoweredByContainer={false}
        placeholder={initialLocation ?? "Where do you want to go?"}
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
          <Image source={iconLeft ?? icons.search} style={styles.iconLeft} />
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
