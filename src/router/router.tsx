import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Appearance } from "react-native";
import { Authentication } from "./authentication";

export const Router = () => {
  return (
    <NavigationContainer>
      <Authentication />
    </NavigationContainer>
  );
};
