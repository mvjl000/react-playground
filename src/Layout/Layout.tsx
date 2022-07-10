import React from "react";
import { Header, Navigation, Wrapper } from "./Layout.styles";
import ViteLogo from "../assets/vite-logo.svg";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => (
  <Wrapper>
    <Header>
      <img src={ViteLogo} alt="Vite logo" />
      <p>Playground</p>
    </Header>
    <Navigation></Navigation>
    {children}
  </Wrapper>
);

export default Layout;
