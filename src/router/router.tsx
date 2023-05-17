import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Appearance, StatusBar } from "react-native";
import { Authentication } from "./authentication";
import { ThemeContext } from "../utils/theme/theme.provider";
import { Main } from "./main";
import { login, selectIsLoggedIn } from "../redux/user.slice";
import { useDispatch, useSelector } from "react-redux";
import { getUserEmail, isLogged } from "../services/local/local";

export const Router = () => {
  const { activeScheme, toggleThemeSchema, theme } = useContext(ThemeContext);
  const dispatch = useDispatch();

  const updateLoginStatus = async () => {
    if (((await isLogged()) as boolean) === true)
      dispatch(login(await getUserEmail()));
  };

  updateLoginStatus();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  Appearance.addChangeListener((scheme) => {
    if (scheme.colorScheme !== activeScheme) toggleThemeSchema();
  });

  return (
    <NavigationContainer theme={theme as any}>
      <StatusBar
        barStyle={theme.dark ? "light-content" : "dark-content"}
        backgroundColor={theme.colors.background}
      />
      {isLoggedIn ? <Main /> : <Authentication />}
    </NavigationContainer>
  );
};
