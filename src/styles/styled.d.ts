import "styled-components";

declare module "styled-components" {
  export interface ColorsTheme {
    main: string;
    accent: string;
    text: string;
    textAccent: string;
  }
  export interface FontSizeTheme {
    small: string;
    medium: string;
    large: string;
    xlarge: string;
  }
  export interface MediaQueriesTheme {
    tablet: string;
    desktop: string;
    largeDesktop: string;
    huge: string;
  }
  export interface DefaultTheme {
    colors: ColorsTheme;
    fontSize: FontSizeTheme;
    mq: MediaQueriesTheme;
  }
}
