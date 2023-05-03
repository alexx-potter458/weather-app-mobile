import { AppTheme } from "../../utils/theme/theme";
import { StyleSheet } from "react-native";

export const horizontalSpaceStyle = (
  theme: AppTheme,
  size: 0 | 1 | 2 | 3 | 4 | 5 | 6
) =>
  StyleSheet.create({
    space: {
      height: theme.spacing(size),
    },
  });
