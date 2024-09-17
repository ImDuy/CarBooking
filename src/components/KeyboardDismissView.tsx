import React from "react";
import {
  Keyboard,
  TouchableWithoutFeedback,
  View,
  ViewProps,
} from "react-native";

interface Props extends ViewProps {}
export default function KeyboardDismissView({ ...props }: Props) {
  return (
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}
      accessible={false}
    >
      <View {...props} />
    </TouchableWithoutFeedback>
  );
}
