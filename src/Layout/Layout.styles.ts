import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-rows: 90px 1fr;
  grid-template-columns: 230px 1fr;
  background-color: ${({ theme }) => theme.colors.main};
  overflow-x: hidden;
  overflow-y: hidden;
  transition: background-color 0.25s linear;
`;

export const Header = styled.header`
  grid-column: 1 / 3;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 30px;
  padding: 10px 30px;
  background-color: ${({ theme }) => theme.colors.main};
  border-bottom: 3px solid ${({ theme }) => theme.colors.accent};
  transition: background-color 0.25s linear;

  img {
    max-height: 60px;
    max-width: 60px;
  }

  p {
    font-weight: 500;
    font-size: ${({ theme }) => theme.fontSizes.xlarge};
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const Navigation = styled.nav`
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  border-right: 3px solid ${({ theme }) => theme.colors.accent};
`;
