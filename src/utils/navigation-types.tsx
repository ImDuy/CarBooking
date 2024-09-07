import { NavigatorScreenParams } from "@react-navigation/native";

export type RootStackParamList = {
  AuthStack: undefined;
  TabNavigation: NavigatorScreenParams<TabParamList>;
};

export type TabParamList = {
  Home: undefined;
  Chat: undefined;
  Profile: undefined;
  History: undefined;
};

export type AuthStackParamList = {
  Onboarding: undefined;
  LogIn: undefined;
  SignUp: undefined;
};
