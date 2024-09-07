import React, { ReactNode } from "react";
import {
  Keyboard,
  StyleProp,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from "react-native";

interface Props {
  containerStyle?: StyleProp<ViewStyle>;
  children?: ReactNode;
}
export default function KeyboardDismissView({
  containerStyle,
  children,
}: Props) {
  return (
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}
      accessible={false}
    >
      <View style={containerStyle}>{children}</View>
    </TouchableWithoutFeedback>
  );
}
