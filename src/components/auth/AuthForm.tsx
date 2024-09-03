import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { icons } from "../../constants/icons";
import { defaultStyles } from "../../constants/styles";
import PrimaryButton from "../PrimaryButton";
import SecondaryButton from "../SecondaryButton";
import AuthDivider from "./AuthDivider";
import FormFooter from "./FormFooter";
import InputField from "./InputField";

interface Props {
  screen: "login" | "signup";
}
export default function AuthForm({ screen }: Props) {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  return (
    <View style={[defaultStyles.screenContainer, styles.container]}>
      {screen === "signup" && (
        <InputField
          label="Name"
          value={form.name}
          placeholder="Enter name"
          iconLeft={icons.person}
          containerStyle={styles.mb}
          onChangeText={(name: string) => setForm({ ...form, name })}
        />
      )}
      <InputField
        label="Email"
        value={form.email}
        placeholder="Enter email"
        iconLeft={icons.email}
        containerStyle={styles.mb}
        onChangeText={(email: string) => setForm({ ...form, email })}
      />
      <InputField
        label="Password"
        value={form.password}
        placeholder="Enter password"
        iconLeft={icons.lock}
        containerStyle={styles.mb}
        onChangeText={(password: string) => setForm({ ...form, password })}
        password
      />

      <PrimaryButton
        label={screen === "login" ? "Log In" : "Sign Up"}
        containerStyle={styles.mt}
      />
      {screen === "login" && (
        <>
          <AuthDivider containerStyle={styles.mvt} />
          <SecondaryButton
            label="Continue with Google"
            iconLeft={icons.google}
          />
        </>
      )}
      <FormFooter screen={screen} containerStyle={{ marginTop: 10 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: "8%",
  },
  mt: {
    marginTop: 20,
  },
  mb: {
    marginBottom: 14,
  },
  mvt: {
    marginVertical: 10,
  },
});
