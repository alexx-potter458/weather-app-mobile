import { StyleSheet } from "react-native";
import { AppTheme } from "../../utils/theme/theme";

export const authStyles = (theme: AppTheme) =>
  StyleSheet.create({
    authContainer: {
      width: "90%",
      boxSizing: "border-box",
      flex: 1,
      marginHorizontal: "5%",
      marginTop: theme.spacing(4),
    },
    title: {
      ...theme.typography.title,
    },
    link: {
      ...theme.typography.normalText,
      marginTop: theme.spacing(3),
      textAlign: "center",
    },
  });
