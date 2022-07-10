import React, { useEffect, useState } from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";

const lightColorsTheme = {
  colors: {
    main: "#FFFDF9",
    accent: "#0683b4",
    text: "#303030",
    textAccent: "#797979",
  },
  fontSizes: {
    small: "1rem",
    medium: "2rem",
    large: "3rem",
    xlarge: "4rem",
  },
};

const darkColorsTheme = {
  colors: {
    main: "#181818",
    accent: "hsla(160, 100%, 37%, 1)",
    text: "#fff",
    textAccent: "rgba(235, 235, 235, 0.64)",
  },
};

const sizeTheme = {
  fontSizes: {
    small: "1rem",
    medium: "2rem",
    large: "3rem",
    xlarge: "4rem",
  },
};

const darkTheme: DefaultTheme = { ...sizeTheme, ...darkColorsTheme };

const lightTheme: DefaultTheme = { ...sizeTheme, ...lightColorsTheme };

interface Props {
  children: React.ReactNode;
  isDarkMode: boolean;
}

const Theme: React.FC<Props> = ({ children, isDarkMode }) => {
  const [themeObj, setThemeObj] = useState<DefaultTheme>(
    isDarkMode ? darkTheme : lightTheme
  );

  useEffect(() => {
    if (isDarkMode) {
      setThemeObj(darkTheme);
    } else {
      setThemeObj(lightTheme);
    }
  }, [isDarkMode]);

  return <ThemeProvider theme={themeObj}>{children}</ThemeProvider>;
};

export default Theme;
