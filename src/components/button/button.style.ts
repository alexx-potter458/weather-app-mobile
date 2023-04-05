import { AppTheme } from "../../utils/theme/theme";
import { StyleSheet } from "react-native";

export const buttonStyle = (theme: AppTheme) =>
  StyleSheet.create({
    buttonStyle: {
      borderWidth: 1,
      borderStyle: "solid",
      borderColor: theme.colors.button,
      borderRadius: 22,
      paddingVertical: theme.spacing(2),
      paddingHorizontal: theme.spacing(3),
      marginTop: theme.spacing(4),
      backgroundColor: theme.colors.button,
    },
    textStyle: {
      ...theme.typography.buttonText,
      textAlign: "center",
    },
  });
