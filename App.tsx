import { Provider } from "react-redux";
import { Router } from "./src/router/router";
import { ThemeProvider } from "./src/utils/theme/theme.provider";
import { store } from "./src/redux/store";

export default function App() {
  return (
    <ThemeProvider>
      <Provider store={store}>
        <Router />
      </Provider>
    </ThemeProvider>
  );
}
