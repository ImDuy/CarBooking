import { BottomSheetTextInput } from "@gorhom/bottom-sheet";
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
  bottomSheetInput?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  listViewStyle?: StyleProp<ViewStyle>;
  iconLeft?: any;
  initialLocation?: string;
  handleLocationPress: (location: Location) => void;
}
export default function GooglePlaceInput({
  containerStyle,
  listViewStyle,
  handleLocationPress,
  iconLeft,
  initialLocation,
  bottomSheetInput = false,
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
    <View style={[styles.container, containerStyle]}>
      <GooglePlacesAutocomplete
        placeholder={initialLocation ?? "Where do you want to go?"}
        textInputProps={{
          InputComp: bottomSheetInput && BottomSheetTextInput,
          autoCorrect: false,
          autoCapitalize: "words",
          placeholderTextColor: initialLocation
            ? colors.text
            : colors.textMuted,
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
          listView: [styles.listView, listViewStyle],
        }}
        renderLeftButton={() => (
          <Image source={iconLeft ?? icons.search} style={styles.iconLeft} />
        )}
        onFail={(error) => console.log("error: " + error)}
        onNotFound={() => console.log("not found")}
        onTimeout={() => console.log("timeout")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bg,
    borderRadius: 40,
    height: 50,
    marginHorizontal: 2,
    zIndex: 99,
  },
  inputContainer: {
    borderRadius: 40,
    height: 50,
    paddingHorizontal: 14,
  },
  input: {
    padding: 0,
    height: "100%",
    backgroundColor: "transparent",
    color: colors.text,
    fontFamily: "Jakarta-Medium",
    fontSize: 16,
    borderRadius: 40,
    marginLeft: 2,
  },
  listView: {
    position: "absolute",
    top: 57,
    marginHorizontal: 4,
    zIndex: 99,
    backgroundColor: "white",
    borderRadius: 12,
    ...defaultStyles.shadowDark,
  },

  iconLeft: {
    width: 24,
    height: 24,
    tintColor: colors.text,
    alignSelf: "center",
  },
});
