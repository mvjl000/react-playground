import styled from "styled-components";

interface WrapperProps {
  isDarkMode: boolean;
}

export const Wrapper = styled.button<WrapperProps>`
  padding: 0 5px;
  width: 70px;
  height: 36px;
  border: none;
  border-radius: 18px;
  background-color: ${({ isDarkMode }) => (isDarkMode ? "#000" : "#87CEEB")};
  position: relative;
  cursor: pointer;

  div {
    width: 27px;
    height: 27px;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: ${({ isDarkMode }) =>
      isDarkMode ? "calc(100% - 20px)" : "calc(0% + 20px)"};
    transform: translate(-50%, -50%);
    background-color: ${({ isDarkMode }) =>
      isDarkMode ? "#000" : "transparent"};
    transition: 0.2s;
  }

  &:hover {
    div {
      transform: translate(-50%, -50%) rotate(-15deg);
    }
  }
`;
