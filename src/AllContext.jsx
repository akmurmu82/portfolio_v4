import { createContext, useState } from "react";

export const ThemeContext = createContext();

export default function ThemeContextProvider({ children }) {
  const [isDark, setTheme] = useState(true);
//   const [isDark, setTheme] = useState(false);
  function toggleTheme() {
    setTheme(!isDark);
  }
  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
