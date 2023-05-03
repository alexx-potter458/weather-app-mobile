import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { HorizontalSpace } from "../../components/horizontal-space/horizontal-space.component";
import { Routes } from "../../router/router.types";
import { Text, SafeAreaView, View } from "react-native";
import { useContext } from "react";
import { ThemeContext } from "../../utils/theme/theme.provider";
import { profileStyle } from "./profile.styles";
import { ProfilePicture } from "./components/profile-picture.component";
import { Button } from "../../components/button/button.component";

type ProfileProps = NativeStackScreenProps<Routes, "Profile">;
export const Profile = ({ navigation }: ProfileProps) => {
  const { theme } = useContext(ThemeContext);
  const styles = profileStyle(theme);

  const logout = () => {
    navigation.navigate("Login");
    console.log("ceva");
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>Profile</Text>
      <HorizontalSpace />
      <ProfilePicture />
      <HorizontalSpace size={3} />
      <Text style={styles.usernameText}>alexx.potter</Text>
      <HorizontalSpace />
      <Text style={styles.emailText}>alexx.potter458@gmail.com</Text>
      <View style={styles.emptySpace} />
      <Button title="Log out" onPress={logout} />
      <HorizontalSpace size={6} />
    </View>
  );
};
