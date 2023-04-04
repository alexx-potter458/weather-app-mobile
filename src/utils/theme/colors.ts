type ColorsKeys =
  | "primary"
  | "secondary"
  | "error"
  | "background"
  | "text"
  | "card"
  | "border"
  | "notification";

export type ThemeColors = { [key in ColorsKeys]: string };

export const lightColors: ThemeColors = {
  primary: "#000000",
  secondary: "#86878c",
  error: "#ba1a1a",
  background: "#f4ecf7",
  text: "#000000",
  card: "#fffbff",
  border: "#1b1b1f",
  notification: "#48319d",
};

export const darkColors: ThemeColors = {
  primary: "#ffffff",
  secondary: "#a19eb7",
  error: "#ffb4ab",
  background: "#312b5b",
  text: "#ffffff",
  card: "#1b1b1f",
  border: "#fff",
  notification: "#e0d9ff",
};
