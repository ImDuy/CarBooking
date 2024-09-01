import { NavigationProp, useNavigation } from "@react-navigation/native";
import React, { useRef, useState } from "react";
import { View } from "react-native";
import PagerView from "react-native-pager-view";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import AppButton from "../../components/AppButton";
import Page from "../../components/onboarding/Page";
import PageIndicator from "../../components/onboarding/PageIndicator";
import { onboarding } from "../../constants/data";
import { defaultStyles } from "../../constants/styles";
import { AuthStackParamList } from "../../utils/navigation-types";

export default function Onboarding() {
  const { top, bottom } = useSafeAreaInsets();
  const ref = useRef<PagerView>(null);
  const [activePageIdx, setActivePageIdx] = useState(0);
  const navigation = useNavigation<NavigationProp<AuthStackParamList>>();

  const navigateToNextPage = () => {
    if (activePageIdx === 2) navigation.navigate("SignIn");
    else {
      ref.current?.setPage(activePageIdx + 1);
    }
  };

  const renderPages = () =>
    onboarding.map((item) => (
      <Page
        key={item.id}
        title={item.title}
        description={item.description}
        image={item.image}
      />
    ));
  return (
    <View
      style={[
        defaultStyles.screenContainer,
        { paddingTop: top, paddingBottom: bottom },
      ]}
    >
      <PagerView
        ref={ref}
        style={{ flex: 2.8 }}
        initialPage={0}
        onPageSelected={(e) => setActivePageIdx(e.nativeEvent.position)}
      >
        {renderPages()}
      </PagerView>

      <View style={{ ...defaultStyles.flex1 }}>
        <PageIndicator
          activePageIdx={activePageIdx}
          containerStyle={{ alignSelf: "center", marginVertical: "auto" }}
        />
        <AppButton
          label={activePageIdx === 2 ? "Get Started" : "Next"}
          onPress={navigateToNextPage}
          containerStyle={{ marginBottom: "auto" }}
        />
      </View>
    </View>
  );
}
