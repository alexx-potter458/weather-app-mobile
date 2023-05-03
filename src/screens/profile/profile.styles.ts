import { StyleSheet } from "react-native";
import { AppTheme } from "../../utils/theme/theme";

export const profileStyle = (theme: AppTheme) =>
  StyleSheet.create({
    mainContainer: {
      width: "90%",
      boxSizing: "border-box",
      flex: 1,
      marginHorizontal: "5%",
      marginTop: theme.spacing(4),
    },
    title: {
      ...theme.typography.title,
    },
    usernameText: {
      ...theme.typography.subtitle,
      textAlign: "center",
    },
    emailText: {
      ...theme.typography.normalText,
      textAlign: "center",
    },
    pictureContainer: {
      width: 140,
      height: 140,
      marginLeft: "auto",
      marginRight: "auto",
      padding: 16,
      backgroundColor: theme.colors.card,
      borderRadius: 100,
    },
    profilePicture: {
      width: "90%",
      height: "90%",
      marginLeft: "auto",
      marginRight: "auto",
    },
    emptySpace: {
      display: "flex",
      flexGrow: 1,
    },
  });
