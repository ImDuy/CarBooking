import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { colors } from "../../constants/colors";

interface Props {
  active?: boolean;
}
export default function IndicatorBar({ active = false }: Props) {
  const activeAnimated = useSharedValue({
    width: active ? 36 : 10,
    bgColor: active ? colors.primary : colors.bg_gray,
  });

  useEffect(() => {
    activeAnimated.value = withTiming({
      width: active ? 36 : 10,
      bgColor: active ? colors.primary : colors.bg_gray,
    });
  }, [active, activeAnimated]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: activeAnimated.value.bgColor,
      width: activeAnimated.value.width,
    };
  });

  return <Animated.View style={[styles.bar, animatedStyle]} />;
}

const styles = StyleSheet.create({
  bar: {
    height: "100%",
    borderRadius: 20,
  },
});
