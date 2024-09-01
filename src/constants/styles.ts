import { StyleSheet } from "react-native";
import { colors } from "./colors";

export const defaultStyles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  screenContainer: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: colors.bg,
  },
});
