import { useThemeProvider } from "../hooks/useThemeProvider";

const Main = () => {
  const { theme, toggleTheme } = useThemeProvider();
  console.log(theme);
  return <button onClick={() => toggleTheme()}>Toggle theme</button>;
};

export default Main;
