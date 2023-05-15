import { StyleSheet } from "react-native";
import { AppTheme } from "../../utils/theme/theme";

export const homeStyles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      boxSizing: "border-box",
      flex: 1,
      marginHorizontal: 24,
      marginTop: theme.spacing(4),
    },
    upButtons: {
      marginHorizontal: 24,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    city: {
      ...theme.typography.subtitle,
      color: theme.colors.primary,
      fontWeight: "700",
      textAlign: "center",
    },
    temp: {
      ...theme.typography.title,
      color: theme.colors.primary,
      fontWeight: "800",
      fontSize: 96,
      textAlign: "center",
    },
    weatherType: {
      ...theme.typography.subtitle,
      color: theme.colors.primary,
      textAlign: "center",
    },
    boxTitle: {
      ...theme.typography.normalText,
      color: theme.colors.secondary,
    },
    boxValue: {
      ...theme.typography.subtitle,
      color: theme.colors.primary,
    },
    weatherTypeImage: {
      width: 72,
      height: 72,

      objectFit: "contain",
      marginLeft: "auto",
      marginRight: "auto",
    },
    upButtonImage: {
      width: 24,
      height: 24,
    },
    boxImage: {
      width: 28,
      height: 28,
    },
    background: {
      width: "100%",
      height: "100%",
      zIndex: -10,
      position: "absolute",
      objectFit: "cover",
    },
    rowDetails: {
      gap: 24,
      marginHorizontal: 24,
      marginVertical: 10,
      display: "flex",
      flexDirection: "row",
      backgroundColor: theme.colors.card,
      borderRadius: 16,
    },
    topAction: {
      backgroundColor: theme.colors.card,
      padding: 8,
      borderRadius: 12,
    },
    boxDetails: {
      minHeight: 110,
      justifyContent: "center",
      alignItems: "center",
      flex: 1,
      paddingVertical: 2,
      paddingHorizontal: 12,
    },
  });
