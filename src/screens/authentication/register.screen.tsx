import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text, SafeAreaView } from "react-native";
import { Routes } from "../../router/router.types";
import { authStyles } from "./authentication.styles";
import { useContext, useState } from "react";
import { ThemeContext } from "../../utils/theme/theme.provider";
import { TextField } from "../../components/textfield/textfield.component";
import { Button } from "../../components/button/button.component";

type RegisterProps = NativeStackScreenProps<Routes, "Register">;
export const Register = ({ navigation }: RegisterProps) => {
  const { theme, toggleThemeSchema } = useContext(ThemeContext);
  const styles = authStyles(theme);

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onRegister = () => {
    console.log(email, password, username);
  };

  return (
    <SafeAreaView style={styles.authContainer}>
      <Text style={styles.title} onPress={() => toggleThemeSchema()}>
        Register
      </Text>
      <TextField placeholder="Username" onChangeText={setUsername} />
      <TextField placeholder="Email" onChangeText={setEmail} />
      <TextField
        placeholder="Password"
        onChangeText={setPassword}
        hidden={true}
      />
      <Button title="Register" onPress={onRegister} />
      <Text style={styles.link} onPress={() => navigation.goBack()}>
        Go back!
      </Text>
    </SafeAreaView>
  );
};
