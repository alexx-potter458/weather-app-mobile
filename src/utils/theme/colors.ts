type ColorsKeys =
  | "primary"
  | "secondary"
  | "background"
  | "ternary"
  | "card"
  | "card";

export type ThemeColors = { [key in ColorsKeys]: string };

export const lightColors: ThemeColors = {
  primary: "#ffffff",
  secondary: "#99aac5",
  ternary: "#646f80",
  background: "#d2c0ff",
  card: "#584e78",
};

export const darkColors: ThemeColors = {
  primary: "#ffffff",
  secondary: "#a19eb7",
  ternary: "#a19eb7",
  background: "#312b5b",
  card: "#231b40",
};
