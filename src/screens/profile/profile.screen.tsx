import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { HorizontalSpace } from "../../components/horizontal-space/horizontal-space.component";
import { Routes } from "../../router/router.types";
import { Text, View } from "react-native";
import { useContext } from "react";
import { ThemeContext } from "../../utils/theme/theme.provider";
import { profileStyle } from "./profile.styles";
import { ProfilePicture } from "./components/profile-picture.component";
import { Button } from "../../components/button/button.component";
import { setUserEmail } from "../../services/local/local";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectEmail } from "../../redux/user.slice";
import { store } from "../../redux/store";

type ProfileProps = NativeStackScreenProps<Routes, "Profile">;
export const Profile = ({ navigation }: ProfileProps) => {
  const { theme } = useContext(ThemeContext);
  const dispatch = useDispatch();
  const styles = profileStyle(theme);
  const email = useSelector(selectEmail);

  const onLogout = async () => {
    dispatch(logout());
    await setUserEmail();
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>Profile</Text>
      <HorizontalSpace />
      <ProfilePicture />
      <HorizontalSpace size={3} />
      <Text style={styles.emailText}>Your email</Text>
      <HorizontalSpace />
      <Text style={styles.usernameText}>{email}</Text>
      <View style={styles.emptySpace} />
      <Button title="Log out" onPress={onLogout} />
      <HorizontalSpace size={6} />
    </View>
  );
};
