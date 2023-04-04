import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Appearance, StatusBar } from "react-native";
import { Authentication } from "./authentication";
import { useThemeConsumer } from "../utils/theme/theme.consumer";

export const Router = () => {
  const { activeScheme, toggleThemeSchema, theme } = useThemeConsumer();

  Appearance.addChangeListener((scheme) => {
    if (scheme.colorScheme !== activeScheme) {
      toggleThemeSchema();
    }
  });

  return (
    <NavigationContainer theme={theme}>
      <StatusBar
        barStyle={theme.dark ? "light-content" : "dark-content"}
        backgroundColor={theme.colors.background}
      />
      <Authentication />
    </NavigationContainer>
  );
};
