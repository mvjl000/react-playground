import React from "react";
import { Header, Navigation, StyledLink, Wrapper } from "./Layout.styles";
import ViteLogo from "../assets/vite-logo.svg";
import DarkModeSwitch from "./DarkModeSwitch/DarkModeSwitch";

interface Props {
  children: React.ReactNode;
  isDarkMode: boolean;
  setIsDarkMode: Function;
}

const Layout: React.FC<Props> = ({ children, isDarkMode, setIsDarkMode }) => (
  <Wrapper>
    <Header>
      <img src={ViteLogo} alt="Vite logo" />
      <p>Playground</p>
      <DarkModeSwitch
        isDarkMode={isDarkMode}
        handleToggle={() => setIsDarkMode(!isDarkMode)}
      />
    </Header>
    <Navigation>
      <ul>
        <li>
          <StyledLink to="/">Home</StyledLink>
        </li>
        <li>
          <StyledLink to="/others">Others</StyledLink>
        </li>
      </ul>
    </Navigation>
    {children}
  </Wrapper>
);

export default Layout;
