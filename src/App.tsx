import React from "react";
import Main from "./modules/Main";
import Navbar from "./modules/Navbar";
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
