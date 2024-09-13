import React from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import IndicatorBar from "./IndicatorBar";
import { onboarding } from "../../app/(auth)/Onboarding";

interface Props {
  activePageIdx: number;
  containerStyle?: StyleProp<ViewStyle>;
}
export default function PageIndicator({
  activePageIdx,
  containerStyle,
}: Props) {
  return (
    <View style={[styles.container, containerStyle]}>
      {onboarding.map((item) => {
        return (
          <IndicatorBar key={item.id} active={activePageIdx + 1 === item.id} />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 4,
    flexDirection: "row",
    gap: 4,
  },
});
