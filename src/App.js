import Main from "./components/Main";
import TodoItem from "./components/TodoItem";
import { ThemeProvider } from "./contexts/themeContext";

function App() {
  return (
    <ThemeProvider>
      <TodoItem title="title" description="des" isCompleted={false} />
      <TodoItem title="title" description="des" isCompleted={true} />
      <Main />
    </ThemeProvider>
  );
}
export default App;
