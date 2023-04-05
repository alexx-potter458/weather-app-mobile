type ColorsKeys =
  | "primary"
  | "secondary"
  | "error"
  | "background"
  | "text"
  | "card"
  | "border"
  | "button"
  | "buttonText"
  | "notification";

export type ThemeColors = { [key in ColorsKeys]: string };

export const lightColors: ThemeColors = {
  primary: "#1F1D47",
  secondary: "#86878c",
  error: "#ba1a1a",
  background: "#f4ecf7",
  text: "#1F1D47",
  card: "#fffbff",
  border: "#1b1b1f",
  button: "#48319D",
  buttonText: "#ffffff",
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
  button: "#48319D",
  buttonText: "#ffffff",
  notification: "#e0d9ff",
};
