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
  shadowLight: {
    elevation: 3,
    shadowColor: "black",
    shadowRadius: 4,
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  shadowDark: {
    elevation: 6,
    shadowColor: "black",
    shadowRadius: 4,
    shadowOpacity: 0.4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
});
