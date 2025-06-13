import React, { FC } from "react";
import { StatusBar, View, StyleSheet } from "react-native";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { AuthSection } from "./auth-section";
//import { MainSection } from "./main-section";
import { useSelector } from "react-redux";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { NavigationService } from "../utils";

//Get current active section
const getActiveSection = (activeSection: string): JSX.Element => {
  switch (activeSection) {
    case RoutesSection.MainSection:
      return <MainSection />;
    case RoutesSection.AuthSection:
      return <AuthSection />;
    default:
      return <AuthSection />;
  }
};

//Types
interface Props {
  restored: boolean;
}

const Navigator: FC<Props> = ({ restored }) => {
  //const activeSection = useSelector(selectActiveSection);
  // const { themePalette: theme }: any = useTheme();
  const insets = useSafeAreaInsets();

  const styles = StyleSheet.create({
    defaults: {
      flex: 1,
      paddingTop: insets.top,
      paddingBottom: insets.bottom,
    },
  });

  return (
    <>
      <StatusBar
        barStyle="light-content"
        animated
        backgroundColor={"transparent"}
        hidden={true}
      />
      <NavigationContainer
        // theme={theme.dark ? DarkTheme : DefaultTheme}
        ref={NavigationService.NavigationRef}
      >
        <View style={styles.defaults}>{<AuthSection />}</View>
        {/* <L        oader />
        <FlashMessage position={'top'} /> */}
      </NavigationContainer>
    </>
  );
};

export { Navigator };
