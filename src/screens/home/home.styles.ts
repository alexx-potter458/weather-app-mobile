import { StyleSheet } from "react-native";
import { AppTheme } from "../../utils/theme/theme";

export const homeStyles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      width: "90%",
      boxSizing: "border-box",
      flex: 1,
      marginHorizontal: "5%",
      marginTop: theme.spacing(4),
    },
    city: {
      ...theme.typography.title,
      fontWeight: "300",
      fontSize: 32,
      textAlign: "center",
    },
    temp: {
      ...theme.typography.title,
      fontWeight: "300",
      fontSize: 72,
      textAlign: "center",
    },
    weatherType: {
      ...theme.typography.subtitle,
      textAlign: "center",
    },
  });
