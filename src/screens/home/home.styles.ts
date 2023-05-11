import { StyleSheet } from "react-native";
import { AppTheme } from "../../utils/theme/theme";
import { hex2rgba } from "../../utils/constants.app";

export const homeStyles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      boxSizing: "border-box",
      flex: 1,
      marginHorizontal: 24,
      marginTop: theme.spacing(4),
    },
    upButtons: {
      marginHorizontal: 32,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    city: {
      ...theme.typography.title,
      color: theme.colors.buttonText,
      fontWeight: "300",
      fontSize: 32,
      textAlign: "center",
    },
    temp: {
      ...theme.typography.title,
      color: theme.colors.buttonText,
      fontWeight: "300",
      fontSize: 72,
      textAlign: "center",
    },
    weatherType: {
      ...theme.typography.subtitle,
      color: theme.colors.buttonText,
      textAlign: "center",
    },
    boxTitle: {
      ...theme.typography.normalText,
      color: theme.colors.secondary,
    },
    boxValue: {
      ...theme.typography.subtitle,
      color: theme.colors.buttonText,
    },
    weatherTypeImage: {
      width: 72,
      height: 72,

      objectFit: "contain",
      marginLeft: "auto",
      marginRight: "auto",
    },
    upButtonImage: {
      width: 32,
      height: 32,
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
      backgroundColor: hex2rgba(theme.colors.card, 0.6),
      minHeight: 110,
      flex: 1,
      borderRadius: 16,
      borderColor: theme.colors.inactiveIcon,
      borderWidth: 2,
      paddingVertical: 8,
      paddingHorizontal: 12,
    },
  });
