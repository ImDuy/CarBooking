import React, { ReactNode } from "react";
import FloatingHeader from "../../components/book-ride/FloatingHeader";
import UserLocationMap from "../../components/UserLocationMap";
import { defaultStyles } from "../../constants/styles";
import KeyboardDismissView from "../KeyboardDismissView";

interface Props {
  title?: string;
  children?: ReactNode;
}
export default function RideLayout({ title, children }: Props) {
  return (
    <KeyboardDismissView style={defaultStyles.flex1}>
      <FloatingHeader title={title} />
      <UserLocationMap containerStyle={{ height: "70%" }} />
      {children}
    </KeyboardDismissView>
  );
}
