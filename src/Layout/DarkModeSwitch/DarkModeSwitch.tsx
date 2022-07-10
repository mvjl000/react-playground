import { FC, MouseEventHandler } from "react";
import { Wrapper } from "./DarkModeSwitch.styles";
import MoonIcon from "../../assets/moon.svg";
import SunIcon from "../../assets/sun.svg";

interface Props {
  isDarkMode: boolean;
  handleToggle: MouseEventHandler<HTMLButtonElement>;
}

const DarkModeSwitch: FC<Props> = ({ handleToggle, isDarkMode }) => {
  return (
    <Wrapper type="button" onClick={handleToggle} isDarkMode={isDarkMode}>
      <div>
        <img src={isDarkMode ? MoonIcon : SunIcon} alt="Dark mode icon" />
      </div>
    </Wrapper>
  );
};

export default DarkModeSwitch;
