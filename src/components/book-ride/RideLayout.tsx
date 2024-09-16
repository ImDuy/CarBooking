import React, { FC, ReactNode } from "react";
import AppBottomSheet from "../../components/book-ride/AppBottomSheet";
import FloatingHeader from "../../components/book-ride/FloatingHeader";
import UserLocationMap from "../../components/UserLocationMap";
import { defaultStyles } from "../../constants/styles";
import KeyboardDismissView from "../KeyboardDismissView";
import { BottomSheetFooterProps } from "@gorhom/bottom-sheet";

interface Props {
  title?: string;
  children?: ReactNode;
  bottomSheetFooter?: FC<BottomSheetFooterProps>;
}
export default function RideLayout({
  title,
  children,
  bottomSheetFooter: footer,
}: Props) {
  return (
    <KeyboardDismissView style={defaultStyles.flex1}>
      <FloatingHeader title={title} />
      <UserLocationMap containerStyle={{ height: "80%" }} />
      <AppBottomSheet footer={footer}>{children}</AppBottomSheet>
    </KeyboardDismissView>
  );
}
