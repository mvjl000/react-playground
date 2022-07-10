import React from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";

const lightTheme: DefaultTheme = {
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

const darkTheme: DefaultTheme = {
  colors: {
    main: "#181818",
    accent: "hsla(160, 100%, 37%, 1)",
    text: "#fff",
    textAccent: "rgba(235, 235, 235, 0.64)",
  },
  fontSizes: {
    small: "1rem",
    medium: "2rem",
    large: "3rem",
    xlarge: "4rem",
  },
};

interface Props {
  children: React.ReactNode;
  isDarkMode: boolean;
}

const Theme: React.FC<Props> = ({ children, isDarkMode }) => (
  <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
    {children}
  </ThemeProvider>
);

export default Theme;
