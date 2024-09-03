import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { colors } from "../../constants/colors";
import { images } from "../../constants/images";
import { screenPadding } from "../../constants/sizes";

interface Props {
  title: string;
}
export default function AuthHeader({ title }: Props) {
  return (
    <View style={styles.container}>
      <Image source={images.signUpCar} style={styles.img} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "30%",
  },
  img: {
    width: "100%",
    height: "100%",
  },
  title: {
    position: "absolute",
    left: screenPadding.horizontal,
    bottom: "10%",
    color: colors.text,
    fontFamily: "Jakarta-Bold",
    fontSize: 28,
  },
});
