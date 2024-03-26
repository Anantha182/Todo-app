import React from 'react';
import { createContext, useState, useCallback } from "react";
import { Themes } from '../types/types';

type ThemeProviderType = {
  theme: Themes;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeProviderType>({
  theme: "light",
  toggleTheme: () => {},
});

type ThemeProviderProps = {
  children?: React.ReactNode
}

const ThemeProvider: React.FC<ThemeProviderProps> = (props) => {
  const currentTheme: Themes =
    (localStorage.getItem("theme") as Themes) ?? "light";
  localStorage.setItem("theme", currentTheme);

  const [theme, setTheme] = useState<Themes>(currentTheme);

  const toggleTheme = useCallback(() => {
    const newTheme: Themes = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
