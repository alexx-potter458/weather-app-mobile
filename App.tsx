import { Router } from "./src/router/router";
import { ThemeProvider } from "./src/utils/theme/theme.provider";

export default function App() {
  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  );
}
