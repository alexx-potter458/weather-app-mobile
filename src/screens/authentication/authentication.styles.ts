import { StyleSheet } from "react-native";
import { ThemeColors } from "../../utils/theme/colors";

export const authStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    authContainer: {
      width: "90%",
      boxSizing: "border-box",
      flex: 1,
      marginHorizontal: "5%",
      marginTop: 64,
    },
  });
