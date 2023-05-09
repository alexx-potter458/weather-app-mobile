import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text, SafeAreaView, Alert } from "react-native";
import { Routes } from "../../router/router.types";
import { authStyles } from "./authentication.styles";
import { useContext, useState } from "react";
import { ThemeContext } from "../../utils/theme/theme.provider";
import { TextField } from "../../components/textfield/textfield.component";
import { Button } from "../../components/button/button.component";
import { HorizontalSpace } from "../../components/horizontal-space/horizontal-space.component";
import { createUserWithEmailAndPassword } from "firebase/auth/react-native";
import { auth } from "../../utils/firebase";
import { setUserEmail } from "../../services/local/local";
import { login } from "../../redux/user.slice";

type RegisterProps = NativeStackScreenProps<Routes, "Register">;
export const Register = ({ navigation }: RegisterProps) => {
  const { theme, toggleThemeSchema } = useContext(ThemeContext);
  const styles = authStyles(theme);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");

  const onRegister = async () => {
    console.log(email, password, passwordAgain);

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      Alert.alert("Invalid e-mail!");
      return;
    }

    if (password === "" || passwordAgain === "") {
      Alert.alert("No password provided");
      return;
    }

    if (password !== passwordAgain) {
      Alert.alert("The 2 passwords don't match");
      return;
    }

    if (password.length < 6) {
      Alert.alert("The password is too short!");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);

      await setUserEmail(email);
      dispatch(login(email));
    } catch (err: any) {
      if ((err.message as string).includes("auth/email-already-in-use"))
        Alert.alert("Email already used");
    }
  };

  return (
    <SafeAreaView style={styles.authContainer}>
      <Text style={styles.title} onPress={() => toggleThemeSchema()}>
        Register
      </Text>
      <HorizontalSpace />
      <TextField placeholder="Email" onChangeText={setEmail} />
      <HorizontalSpace />
      <TextField
        placeholder="Password"
        onChangeText={setPassword}
        hidden={true}
      />
      <HorizontalSpace />
      <TextField
        placeholder="Password again"
        onChangeText={setPasswordAgain}
        hidden={true}
      />
      <HorizontalSpace size={4} />
      <Button title="Register" onPress={onRegister} />
      <Text style={styles.link} onPress={() => navigation.goBack()}>
        Go back!
      </Text>
    </SafeAreaView>
  );
};
function dispatch(arg0: any) {
  throw new Error("Function not implemented.");
}
