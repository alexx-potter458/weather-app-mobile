import { TextStyle } from "react-native";
import { ThemeColors } from "./colors";

export type TitleVariants = "title" | "subtitle" | "normalText" | "buttonText";

export type TypographyProps = { [key in TitleVariants]: TextStyle };

const typography: TypographyProps = {
  title: {
    fontSize: 22,
    fontWeight: "700",
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "400",
  },
  normalText: {
    fontSize: 12,
    fontWeight: "400",
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "400",
  },
};

export const typographyWithColor = (colors: ThemeColors) => ({
  title: {
    color: colors.primary,
    ...typography.title,
  },
  subtitle: {
    color: colors.text,
    ...typography.subtitle,
  },
  normalText: {
    color: colors.text,
    ...typography.normalText,
  },
  buttonText: {
    color: colors.buttonText,
    ...typography.buttonText,
  },
});
