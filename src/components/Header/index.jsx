import header_logo from "../../assets/header_logo.png";
import menu_bars from "../../assets/menu_bars.png";
import { HeaderUpperContainer } from "./styles";

const Header = () => {
  return (
    <HeaderUpperContainer>
      <img className="logo" src={header_logo} alt="header_logo" />
    </HeaderUpperContainer>
  );
};

export default Header;
