import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import { Routes } from "./router.types";
import { Login } from "../screens/authentication/login.screen";
import { Register } from "../screens/authentication/register.screen";

const Stack = createNativeStackNavigator<Routes>();

export const Authentication = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};
