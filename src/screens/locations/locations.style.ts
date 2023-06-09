import { StyleSheet } from "react-native";
import { AppTheme } from "../../utils/theme/theme";

export const locationsStyles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      boxSizing: "border-box",
      flex: 1,
      marginHorizontal: 24,
      marginTop: theme.spacing(4),
    },
    title: {
      ...theme.typography.title,
    },
    weatherTemp: {
      ...theme.typography.title,
      color: theme.colors.primary,
      fontSize: 46,
    },
    title2: {
      ...theme.typography.subtitle,
      color: theme.colors.primary,
    },
    text: {
      ...theme.typography.normalText,
      marginBottom: theme.spacing(1),
      color: theme.colors.primary,
    },
    textSecondary: {
      ...theme.typography.normalText,
      color: theme.colors.secondary,
    },
    textNoSearch: {
      ...theme.typography.normalText,
      color: theme.colors.ternary,
      textAlign: "center",
    },
    rowParent: {
      backgroundColor: theme.colors.card,
      paddingVertical: 8,
      borderRadius: 22,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    row: {
      paddingHorizontal: 16,
      width: "100%",
      borderRadius: 22,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    rowSide: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    weatherTypeImage: {
      width: 72,
      height: 72,
      objectFit: "contain",
      marginLeft: "auto",
      marginRight: "auto",
    },
  });
