import React, { ReactNode } from "react";
import { StyleProp, View, ViewStyle } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { defaultStyles } from "../constants/styles";

interface Props {
  containerStyle?: StyleProp<ViewStyle>;
  children?: ReactNode;
}
export default function ScreenContainer({ containerStyle, children }: Props) {
  const { top, bottom } = useSafeAreaInsets();
  return (
    <View
      style={[
        defaultStyles.flex1,
        { paddingTop: top, paddingBottom: bottom },
        containerStyle,
      ]}
    >
      {children}
    </View>
  );
}
