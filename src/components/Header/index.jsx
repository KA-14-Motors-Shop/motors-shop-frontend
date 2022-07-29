import header_logo from "../../assets/header_logo.png";
import { HeaderUpperContainer } from "./styles";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const Header = () => {
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  return (
    <HeaderUpperContainer>
      <img className="logo" src={header_logo} alt="header_logo" />

      <button
        className="mobile_menu_btn"
        onClick={() => setIsMenuClicked(!isMenuClicked)}
      >
        {isMenuClicked ? <AiOutlineClose /> : <GiHamburgerMenu />}
      </button>
    </HeaderUpperContainer>
  );
};

export default Header;
