import { AntDesign } from "@expo/vector-icons";
import React, { useEffect } from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
interface Props {
  size?: number;
  spinnerColor?: string;
  containerStyle?: StyleProp<ViewStyle>;
}

export default function LoadingOverlay({
  size = 36,
  spinnerColor = "white",
  containerStyle,
}: Props) {
  const rotation = useSharedValue(0);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: `${rotation.value}deg` }],
    };
  });
  useEffect(() => {
    rotation.value = withRepeat(
      withTiming(360, { duration: 600, easing: Easing.linear }),
      -1
    );
  }, [rotation]);
  return (
    <View style={[style.container, containerStyle]}>
      <Animated.View style={animatedStyle}>
        <AntDesign name="loading2" size={size} color={spinnerColor} />
      </Animated.View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "black",
    opacity: 0.7,
    justifyContent: "center",
    alignItems: "center",
  },
});
