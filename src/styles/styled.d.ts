import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      main: string;
      accent: string;
      text: string;
      textAccent: string;
    };
    fontSizes: {
      small: string;
      medium: string;
      large: string;
      xlarge: string;
    };
  }
}
