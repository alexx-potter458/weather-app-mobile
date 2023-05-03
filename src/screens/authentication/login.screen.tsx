import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text, SafeAreaView } from "react-native";
import { Routes } from "../../router/router.types";
import { authStyles } from "./authentication.styles";
import { useContext, useState } from "react";
import { ThemeContext } from "../../utils/theme/theme.provider";
import { TextField } from "../../components/textfield/textfield.component";
import { Button } from "../../components/button/button.component";
import { HorizontalSpace } from "../../components/horizontal-space/horizontal-space.component";

type LoginProps = NativeStackScreenProps<Routes, "Login">;
export const Login = ({ navigation }: LoginProps) => {
  const { theme, toggleThemeSchema } = useContext(ThemeContext);
  const styles = authStyles(theme);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = () => {
    console.log(email, password);
  };

  return (
    <SafeAreaView style={styles.authContainer}>
      <Text style={styles.title} onPress={() => toggleThemeSchema()}>
        Sign in
      </Text>
      <HorizontalSpace />
      <TextField placeholder="Email" onChangeText={setEmail} />
      <HorizontalSpace />

      <TextField
        placeholder="Password"
        onChangeText={setPassword}
        hidden={true}
      />
      <HorizontalSpace size={4} />

      <Button title="Login" onPress={onLogin} />
      <Text style={styles.link} onPress={() => navigation.navigate("Register")}>
        No accout? Register here!
      </Text>
    </SafeAreaView>
  );
};
