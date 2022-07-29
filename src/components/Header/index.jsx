import header_logo from "../../assets/header_logo.png";
import { HeaderUpperContainer, MenuOuterContainer } from "./styles";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import Button from "../Button";

const Header = ({ isLoggedIn = false }) => {
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  return (
    <>
      <HeaderUpperContainer>
        <img className="logo" src={header_logo} alt="header_logo" />

        <button
          className="mobile_menu_btn"
          onClick={() => setIsMenuClicked(!isMenuClicked)}
        >
          {isMenuClicked ? (
            <AiOutlineClose size={20} />
          ) : (
            <GiHamburgerMenu size={20} />
          )}
        </button>
      </HeaderUpperContainer>

      {isMenuClicked && (
        <MenuOuterContainer>
          <div className="inner_items">
            <ul className="items_ul">
              <li className="menu_item">Carros</li>
              <li className="menu_item">Motos</li>
              <li className="menu_item">Leilão</li>
            </ul>
          </div>

          <div className="outer_items">
            <ul className="items_ul">
              <li className="menu_item">Fazer Login</li>
            </ul>
            <Button
              className="signup_btn"
              width="88vw"
              borderColor="var(--grey-4)"
            >
              Cadastrar
            </Button>
          </div>
        </MenuOuterContainer>
      )}
    </>
  );
};

export default Header;
