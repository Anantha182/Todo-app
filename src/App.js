import Main from "./components/Main";
import TodoItem from "./components/TodoItem";
import { ThemeProvider } from "./contexts/themeContext";

function App() {
  return (
    <ThemeProvider>
      <TodoItem />
      <Main />
    </ThemeProvider>
  );
}
export default App;
