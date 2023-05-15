import { TextStyle } from "react-native";
import { ThemeColors } from "./colors";

export type TitleVariants = "title" | "subtitle" | "normalText" | "buttonText";

export type TypographyProps = { [key in TitleVariants]: TextStyle };

const typography: TypographyProps = {
  title: {
    fontSize: 24,
    fontWeight: "400",
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "400",
  },
  normalText: {
    fontSize: 14,
    fontWeight: "400",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "400",
  },
};

export const typographyWithColor = (colors: ThemeColors) => ({
  title: {
    color: colors.primary,
    ...typography.title,
  },
  subtitle: {
    color: colors.ternary,
    ...typography.subtitle,
  },
  normalText: {
    color: colors.ternary,
    ...typography.normalText,
  },
  buttonText: {
    color: colors.primary,
    ...typography.buttonText,
  },
});
