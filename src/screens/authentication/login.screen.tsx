import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text } from "react-native";
import { Routes } from "../../router/router.types";

type LoginProps = NativeStackScreenProps<Routes, "Login">;
export const Login = ({ navigation }: LoginProps) => {
  return <Text>Dont you have an account?</Text>;
};
