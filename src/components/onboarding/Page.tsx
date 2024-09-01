import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { colors } from "../../constants/colors";

interface Props {
  title: string;
  description: string;
  image: any;
}
export default function Page({ title, description, image }: Props) {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.desc}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  image: {
    width: "100%",
    height: 300,
    objectFit: "contain",
  },
  title: {
    color: colors.text,
    fontFamily: "Jakarta-SemiBold",
    fontSize: 28,
    textAlign: "center",
    marginTop: 20,
    marginBottom: 14,
  },
  desc: {
    color: colors.textMuted,
    fontFamily: "Jakarta-Medium",
    fontSize: 18,
    textAlign: "center",
  },
});
