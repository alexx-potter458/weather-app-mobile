import { StyleSheet } from "react-native";
import { AppTheme } from "../../utils/theme/theme";

export const locationsStyles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
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
    text: {
      ...theme.typography.normalText,
    },
    textNoSearch: {
      ...theme.typography.normalText,
      textAlign: "center",
    },
    row: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
  });
