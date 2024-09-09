import { useSignUp } from "@clerk/clerk-expo";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AuthFormInfo } from "../../utils/types";
import { setIsLoading } from "../../store/appSlice";
import { Alert } from "react-native";

type Verification = {
  state: string;
  code: string;
  error: string;
  signInSessionId: string | null;
};
export default function useClerkSignUp() {
  const { isLoaded, signUp, setActive } = useSignUp();
  const dispatch = useDispatch();
  const [verification, setVerification] = useState<Verification>({
    state: "",
    code: "",
    error: "",
    signInSessionId: null,
  });

  const clerkSignUp = async (signUpForm: AuthFormInfo) => {
    if (!isLoaded) return;

    dispatch(setIsLoading(true));
    try {
      await signUp.create({
        emailAddress: signUpForm.email,
        password: signUpForm.password,
      });

      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
      dispatch(setIsLoading(false));
      setVerification((prevState) => ({ ...prevState, state: "pending" }));
    } catch (err: any) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      dispatch(setIsLoading(false));
      Alert.alert("Error", err.errors[0].longMessage);
    }
  };

  const clerkVerification = async () => {
    if (!isLoaded) return;

    dispatch(setIsLoading(true));
    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code: verification.code,
      });
      dispatch(setIsLoading(false));
      if (completeSignUp.status === "complete") {
        // TODO: create user in database

        setVerification((prevState) => ({
          ...prevState,
          state: "success",
          signInSessionId: completeSignUp.createdSessionId,
        }));
      } else {
        setVerification((prevState) => ({
          ...prevState,
          error: "Verification failed",
        }));
      }
    } catch (err: any) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      dispatch(setIsLoading(false));
      setVerification((prevState) => ({
        ...prevState,
        error: err.errors[0].longMessage,
      }));
    }
  };

  const setSessionActive = async () => {
    if (!isLoaded) return;
    dispatch(setIsLoading(true));
    setActive !== undefined &&
      (await setActive({ session: verification.signInSessionId }));
    dispatch(setIsLoading(false));
  };

  return {
    clerkSignUp,
    clerkVerification,
    verification,
    setVerification,
    setSessionActive,
  };
}
