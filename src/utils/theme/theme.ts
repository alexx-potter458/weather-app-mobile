import { lightColors, darkColors, ThemeColors } from "./colors";
import { SpacerIndex, spacing } from "./spacers";
import { typographyWithColor, TypographyProps } from "./typography";

export const lightTheme = {
  dark: false,
  colors: { ...lightColors },
  spacing,
  typography: typographyWithColor(lightColors),
};

export const darkTheme = {
  dark: true,
  colors: { ...darkColors },
  spacing,
  typography: typographyWithColor(darkColors),
};

export type AppTheme = {
  dark: boolean;
  colors: ThemeColors;
  spacing: (index: SpacerIndex) => number;
  typography: TypographyProps;
};
