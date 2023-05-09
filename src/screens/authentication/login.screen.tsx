import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text, SafeAreaView, Alert } from "react-native";
import { Routes } from "../../router/router.types";
import { authStyles } from "./authentication.styles";
import { useContext, useState } from "react";
import { ThemeContext } from "../../utils/theme/theme.provider";
import { TextField } from "../../components/textfield/textfield.component";
import { Button } from "../../components/button/button.component";
import { HorizontalSpace } from "../../components/horizontal-space/horizontal-space.component";
import { signInWithEmailAndPassword } from "firebase/auth/react-native";
import { auth } from "../../utils/firebase";
import { setUserEmail } from "../../services/local/local";
import { useDispatch } from "react-redux";
import { login } from "../../redux/user.slice";

type LoginProps = NativeStackScreenProps<Routes, "Login">;
export const Login = ({ navigation }: LoginProps) => {
  const { theme, toggleThemeSchema } = useContext(ThemeContext);
  const styles = authStyles(theme);
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      await setUserEmail(email);
      dispatch(login(email));
    } catch (err: any) {
      if (err.message.includes("invalid-email")) Alert.alert("Invalid e-mail.");
      if (err.message.includes("auth/missing-password"))
        Alert.alert("Missing password.");
      if (err.message.includes("auth/wrong-password"))
        Alert.alert("Wrong password.");
    }
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
