import { useContext } from "react";
import { Image, View } from "react-native";
import { ThemeContext } from "../../../utils/theme/theme.provider";
import { profileStyle } from "../profile.styles";

export const ProfilePicture = () => {
  const { theme } = useContext(ThemeContext);
  const styles = profileStyle(theme);
  return (
    <>
      <View style={styles.pictureContainer}>
        <Image
          style={styles.profilePicture}
          source={require("../../../assets/images/user.png")}
        />
      </View>
    </>
  );
};
