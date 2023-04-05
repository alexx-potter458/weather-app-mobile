import { AppTheme } from "../../utils/theme/theme";
import { StyleSheet } from "react-native";

export const textFieldStyle = (theme: AppTheme) =>
  StyleSheet.create({
    inputField: {
      ...theme.typography.normalText,
      borderWidth: 1,
      borderStyle: "solid",
      borderColor: theme.colors.secondary,
      borderRadius: 22,
      paddingVertical: theme.spacing(1),
      paddingHorizontal: theme.spacing(3),
      marginTop: theme.spacing(3),
    },
  });
