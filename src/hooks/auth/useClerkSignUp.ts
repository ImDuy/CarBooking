import { useSignUp } from "@clerk/clerk-expo";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AuthFormInfo } from "../../utils/types";
import { setIsLoading } from "../../store/appSlice";
import { Alert } from "react-native";
import { fetchAPI } from "../api/useFetchAPI";

type Verification = {
  state: string;
  error: string;
};
export default function useClerkSignUp() {
  const { isLoaded, signUp, setActive } = useSignUp();
  const dispatch = useDispatch();
  const [userInfo, setUserInfo] = useState<AuthFormInfo>();
  const [verification, setVerification] = useState<Verification>({
    state: "",
    error: "",
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
      setUserInfo(signUpForm);
      setVerification((prevState) => ({ ...prevState, state: "pending" }));
    } catch (err: any) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      dispatch(setIsLoading(false));
      Alert.alert("Error", err.errors[0].longMessage);
    }
  };

  const clerkVerification = async (code: string) => {
    if (!isLoaded) return;

    dispatch(setIsLoading(true));
    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      });
      if (completeSignUp.status === "complete") {
        // create user in database
        await fetchAPI("/user", {
          method: "POST",
          body: JSON.stringify({
            name: userInfo?.name,
            email: userInfo?.email,
            clerkId: completeSignUp.id,
          }),
        });
        await setActive({ session: completeSignUp.createdSessionId });
        dispatch(setIsLoading(false));
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

      if (err instanceof TypeError) {
        setVerification((prevState) => ({
          ...prevState,
          error: err.message,
        }));
      } else {
        setVerification((prevState) => ({
          ...prevState,
          error: err?.errors[0]?.longMessage,
        }));
      }
    }
  };

  const clearSignUpData = () => {
    setUserInfo(undefined);
    setVerification({ state: "", error: "" });
  };

  return {
    clerkSignUp,
    clerkVerification,
    verification,
    clearSignUpData,
  };
}
