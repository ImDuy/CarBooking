import React, { useState } from "react";
import { StyleProp, View, ViewStyle } from "react-native";
import { icons } from "../../constants/icons";
import InputField from "../InputField";

interface Props {
  containerStyle?: StyleProp<ViewStyle>;
}
export default function SearchInput({ containerStyle }: Props) {
  const [searchText, setSearchText] = useState("");
  return (
    <View style={containerStyle}>
      <InputField
        border
        value={searchText}
        placeholder="Where do you want to go?"
        iconLeft={icons.search}
        onChangeText={(text: string) => setSearchText(text)}
        clearText={() => setSearchText("")}
      />
    </View>
  );
}
