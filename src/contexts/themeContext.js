import { createContext, useState, useCallback } from "react";
import { THEME_MODES } from "../utils/constants";

const ThemeContext = createContext(null);

const ThemeProvider = ({ children }) => {
  if (!localStorage.getItem("theme")) {
    localStorage.setItem("theme", THEME_MODES.LIGHT);
  }
  const [theme, setTheme] = useState(localStorage.getItem("theme"));
  const toggleTheme = useCallback(() => {
    const newTheme =
      theme === THEME_MODES.LIGHT ? THEME_MODES.DARK : THEME_MODES.LIGHT;
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
