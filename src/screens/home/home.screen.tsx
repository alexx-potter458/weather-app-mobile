import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { HorizontalSpace } from "../../components/horizontal-space/horizontal-space.component";
import { Routes } from "../../router/router.types";
import { Text } from "react-native";
import { useContext } from "react";
import { ThemeContext } from "../../utils/theme/theme.provider";
import { homeStyles } from "./home.styles";

type HomeProps = NativeStackScreenProps<Routes, "Home">;
export const Home = () => {
  const { theme } = useContext(ThemeContext);
  const styles = homeStyles(theme);

  return (
    <>
      <HorizontalSpace size={5} />
      <Text style={styles.city}>Bucharest</Text>
      <Text style={styles.temp}>19°</Text>
      <Text style={styles.weatherType}>Mostly cloudy</Text>
      <Text style={styles.weatherType}>H:24 - L:18</Text>
    </>
  );
};
