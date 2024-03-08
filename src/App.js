import Main from "./components/Main";
import TodoList from "./components/TodoList";
import { ThemeProvider } from "./contexts/themeContext";

function App() {
  return (
    <ThemeProvider>
      <Main />
    </ThemeProvider>
  );
}
export default App;
