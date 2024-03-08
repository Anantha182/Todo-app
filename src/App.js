import Main from "./components/Main";
import { ThemeProvider } from "./contexts/themeContext";

function App() {
  return (
    <ThemeProvider>
      <Main />
    </ThemeProvider>
  );
}
export default App;
