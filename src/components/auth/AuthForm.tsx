import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { icons } from "../../constants/icons";
import { defaultStyles } from "../../constants/styles";
import PrimaryButton from "../PrimaryButton";
import SecondaryButton from "../SecondaryButton";
import AuthDivider from "./AuthDivider";
import FormFooter from "./FormFooter";
import { AuthFormInfo } from "../../utils/types";
import AuthInputField from "./AuthInputField";

interface Props {
  screen: "login" | "signup";
  onPrimaryBtnPress: (form: AuthFormInfo) => void;
  onLoginWithGoogle?: () => void;
}
export default function AuthForm({
  screen,
  onPrimaryBtnPress,
  onLoginWithGoogle,
}: Props) {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  return (
    <View style={[defaultStyles.screenContainer, styles.container]}>
      {screen === "signup" && (
        <AuthInputField
          label="Name"
          value={form.name}
          placeholder="Enter name"
          autoCapitalize="words"
          iconLeft={icons.person}
          containerStyle={styles.mb}
          onChangeText={(name: string) =>
            setForm((prevForm) => ({ ...prevForm, name }))
          }
          clearText={() => setForm((prevForm) => ({ ...prevForm, name: "" }))}
        />
      )}
      <AuthInputField
        label="Email"
        value={form.email}
        placeholder="Enter email"
        autoCapitalize="none"
        autoComplete="email"
        iconLeft={icons.email}
        containerStyle={styles.mb}
        onChangeText={(email: string) =>
          setForm((prevForm) => ({ ...prevForm, email }))
        }
        clearText={() => setForm((prevForm) => ({ ...prevForm, email: "" }))}
      />
      <AuthInputField
        password
        label="Password"
        value={form.password}
        placeholder="Enter password"
        autoCapitalize="none"
        iconLeft={icons.lock}
        containerStyle={styles.mb}
        onChangeText={(password: string) =>
          setForm((prevForm) => ({ ...prevForm, password }))
        }
        clearText={() => setForm((prevForm) => ({ ...prevForm, password: "" }))}
      />

      <PrimaryButton
        label={screen === "login" ? "Log In" : "Sign Up"}
        containerStyle={styles.mt}
        onPress={() => onPrimaryBtnPress(form)}
      />
      {screen === "login" && (
        <>
          <AuthDivider containerStyle={styles.mvt} />
          <SecondaryButton
            label="Continue with Google"
            iconLeft={icons.google}
            onPress={onLoginWithGoogle}
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
