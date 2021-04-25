import React, { createContext, useEffect, useState } from "react";

import { DarkTheme, LightTheme } from "../StyleConstants";

export const ThemeContext = createContext({
  isDarkTheme: false,
});

const ThemeContextProvider = ({ isDarkTheme, children }) => {
  const [colorCodes, setColorCodes] = useState(LightTheme);

  useEffect(() => {
    if (isDarkTheme) {
      setColorCodes(DarkTheme);
    } else {
      setColorCodes(LightTheme);
    }
  }, [isDarkTheme]);

  return (
    <ThemeContext.Provider
      value={{
        isDarkTheme: isDarkTheme,
        colorCodes: colorCodes,
      }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
