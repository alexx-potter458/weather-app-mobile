import { AppTheme } from "../../utils/theme/theme";
import { StyleSheet } from "react-native";

export const buttonStyle = (theme: AppTheme) =>
  StyleSheet.create({
    buttonStyle: {
      borderRadius: 12,
      paddingVertical: theme.spacing(2),
      backgroundColor: theme.colors.card,
    },
    textStyle: {
      ...theme.typography.buttonText,
      textAlign: "center",
    },
  });
