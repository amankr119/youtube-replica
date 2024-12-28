import React, { useContext, createContext, useState } from "react";

// Create context for theme
const themeContext = createContext();

// Custom hook to use the theme context
export const useTheme = () => {
  return useContext(themeContext);
}

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle between dark and light mode
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  }

  return (
    <themeContext.Provider value={{ toggleTheme, isDarkMode }}>
      {children}
    </themeContext.Provider>
  );
}
