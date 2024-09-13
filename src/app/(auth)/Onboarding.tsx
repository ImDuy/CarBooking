import { Redirect, router } from "expo-router";
import React, { useRef, useState } from "react";
import { View } from "react-native";
import PagerView from "react-native-pager-view";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { ClerkLoading, useAuth } from "@clerk/clerk-expo";
import Page from "../../components/onboarding/Page";
import { defaultStyles } from "../../constants/styles";
import PageIndicator from "../../components/onboarding/PageIndicator";
import PrimaryButton from "../../components/PrimaryButton";
import LoadingOverlay from "../../components/LoadingOverlay";
import { images } from "../../constants/images";

export const onboarding = [
  {
    id: 1,
    title: "Best car in your hands with Ryde",
    description:
      "Discover the convenience of finding your perfect ride with our Ryde App",
    image: images.onboarding1,
  },
  {
    id: 2,
    title: "The perfect ride is just a tap away!",
    description:
      "Your journey begins with Ryde. Find your ideal ride effortlessly",
    image: images.onboarding2,
  },
  {
    id: 3,
    title: "Your ride, your way. Let's go!",
    description:
      "Enter your destination, sit back, and let us take care of the rest",
    image: images.onboarding3,
  },
];

export default function Onboarding() {
  const { top, bottom } = useSafeAreaInsets();
  const { isSignedIn } = useAuth();
  const ref = useRef<PagerView>(null);
  const [activePageIdx, setActivePageIdx] = useState(0);

  const navigateToNextPage = () => {
    if (activePageIdx === 2) router.navigate("LogIn");
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

  if (isSignedIn) return <Redirect href="/(root)/(tabs)/Home" />;
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
        <PrimaryButton
          label={activePageIdx === 2 ? "Get Started" : "Next"}
          onPress={navigateToNextPage}
          containerStyle={{ marginBottom: "auto" }}
        />
      </View>

      <ClerkLoading>
        <LoadingOverlay />
      </ClerkLoading>
    </View>
  );
}
