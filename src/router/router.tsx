import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Appearance, StatusBar } from "react-native";
import { Authentication } from "./authentication";
import { ThemeContext } from "../utils/theme/theme.provider";

export const Router = () => {
  const { activeScheme, toggleThemeSchema, theme } = useContext(ThemeContext);

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
