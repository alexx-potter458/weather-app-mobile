import { AppTheme } from "../../utils/theme/theme";
import { StyleSheet } from "react-native";

export const textFieldStyle = (theme: AppTheme) =>
  StyleSheet.create({
    inputField: {
      ...theme.typography.normalText,
      backgroundColor: theme.colors.card,
      borderWidth: 1,
      borderStyle: "solid",
      borderColor: theme.colors.secondary,
      borderRadius: 12,
      paddingVertical: theme.spacing(2),
      paddingHorizontal: theme.spacing(3),
    },
  });
