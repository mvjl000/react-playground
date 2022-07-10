import React, { useEffect, useState } from "react";
import {
  ColorsTheme,
  DefaultTheme,
  FontSizeTheme,
  MediaQueriesTheme,
  ThemeProvider,
} from "styled-components";

const lightColorsTheme: ColorsTheme = {
  main: "#FFFDF9",
  accent: "#0683b4",
  text: "#303030",
  textAccent: "#797979",
};

const darkColorsTheme: ColorsTheme = {
  main: "#181818",
  accent: "hsla(160, 100%, 37%, 1)",
  text: "#fff",
  textAccent: "rgba(235, 235, 235, 0.64)",
};

const fontSizeTheme: FontSizeTheme = {
  small: "1rem",
  medium: "2rem",
  large: "3rem",
  xlarge: "4rem",
};

const mediaQueriesTheme: MediaQueriesTheme = {
  tablet: "@media (min-width: 768px)",
  desktop: "@media (min-width: 1024px)",
  largeDesktop: "@media (min-width: 1280px)",
  huge: "@media (min-width: 1440px)",
};

const darkTheme: DefaultTheme = {
  colors: {
    ...darkColorsTheme,
  },
  fontSize: {
    ...fontSizeTheme,
  },
  mq: {
    ...mediaQueriesTheme,
  },
};

const lightTheme: DefaultTheme = {
  colors: {
    ...lightColorsTheme,
  },
  fontSize: {
    ...fontSizeTheme,
  },
  mq: {
    ...mediaQueriesTheme,
  },
};

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
