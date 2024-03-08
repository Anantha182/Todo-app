import { useContext } from "react";
import { ThemeContext } from "../contexts/themeContext";

const useThemeProvider = () => {
  const themeContext = useContext(ThemeContext);
  return { ...themeContext };
};

export { useThemeProvider };
