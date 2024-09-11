import { useSignIn } from "@clerk/clerk-expo";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { AuthFormInfo } from "../../utils/types";
import { setIsLoading } from "../../store/appSlice";
import { Alert } from "react-native";
import { router } from "expo-router";

export default function useClerkSignIn() {
  const { signIn, setActive, isLoaded } = useSignIn();
  const dispatch = useDispatch();

  const clerkSignIn = useCallback(
    async (loginForm: AuthFormInfo) => {
      if (!isLoaded) {
        return;
      }

      dispatch(setIsLoading(true));
      try {
        const signInAttempt = await signIn.create({
          identifier: loginForm.email,
          password: loginForm.password,
        });

        dispatch(setIsLoading(false));
        if (signInAttempt.status === "complete") {
          router.navigate("/(root)/(tabs)/Home");
          await setActive({ session: signInAttempt.createdSessionId });
        } else {
          // See https://clerk.com/docs/custom-flows/error-handling
          // for more info on error handling
          console.error(JSON.stringify(signInAttempt, null, 2));
        }
      } catch (err: any) {
        dispatch(setIsLoading(false));
        Alert.alert("Error", err.errors[0].longMessage);
      }
    },
    [isLoaded, setActive, signIn, dispatch]
  );

  return { clerkSignIn };
}
