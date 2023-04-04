import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, Text, Button, TextInput } from "react-native";
import { Routes } from "../../router/router.types";
import { authStyles } from "./authentication.styles";
import { useThemeConsumer } from "../../utils/theme/theme.consumer";
import { useState } from "react";

type LoginProps = NativeStackScreenProps<Routes, "Login">;
export const Login = ({ navigation }: LoginProps) => {
  const {
    theme: { colors, typography },
    toggleThemeSchema,
  } = useThemeConsumer();

  const styles = authStyles(colors);
  const [text, onChangeText] = useState("Useless Text");

  return (
    <View style={styles.authContainer}>
      <Text style={typography.title}>Sign in</Text>
      <TextInput onChangeText={onChangeText} value={text} />
    </View>
  );
};
