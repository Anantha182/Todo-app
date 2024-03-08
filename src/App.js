import Main from "./components/Main";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./contexts/themeContext";

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <Main />
    </ThemeProvider>
  );
}
export default App;
