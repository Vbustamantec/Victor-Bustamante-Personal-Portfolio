import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(false);
  const [toggle, setToggle] = useState(false);


  return (
    <ThemeContext.Provider value={{ darkTheme, setDarkTheme, toggle, setToggle }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
