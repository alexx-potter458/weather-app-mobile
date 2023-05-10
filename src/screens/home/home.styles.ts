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
    boxTitle: {
      ...theme.typography.normalText,
      color: theme.colors.secondary,
    },
    boxValue: {
      ...theme.typography.subtitle,
    },
    weatherTypeImage: {
      width: 72,
      height: 72,

      objectFit: "contain",
      marginLeft: "auto",
      marginRight: "auto",
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
    },

    boxDetails: {
      backgroundColor: theme.colors.card,
      minHeight: 110,
      flex: 1,
      borderRadius: 22,
      borderColor: theme.colors.inactiveIcon,
      borderWidth: 2,
      paddingVertical: 8,
      paddingHorizontal: 12,
    },
  });
