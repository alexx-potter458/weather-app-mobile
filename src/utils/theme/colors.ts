type ColorsKeys =
  | "primary"
  | "secondary"
  | "activeIcon"
  | "inactiveIcon"
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
  activeIcon: "#ffffff",
  inactiveIcon: "#a19eb7",
  error: "#ba1a1a",
  background: "#f4ecf7",
  text: "#1F1D47",
  card: "#2e325d",
  border: "#1b1b1f",
  button: "#48319D",
  buttonText: "#ffffff",
  notification: "#48319d",
};

export const darkColors: ThemeColors = {
  primary: "#ffffff",
  secondary: "#a19eb7",
  activeIcon: "#ffffff",
  inactiveIcon: "#a19eb7",
  error: "#ffb4ab",
  background: "#312b5b",
  text: "#ffffff",
  card: "#231b40",
  border: "#fff",
  button: "#48319D",
  buttonText: "#ffffff",
  notification: "#e0d9ff",
};
