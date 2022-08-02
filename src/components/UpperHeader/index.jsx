import { useRef, useState, useEffect } from "react";
import {
  HeaderUpperContainer,
  DesktopNavBar,
  MenuOuterContainer,
} from "./styles";
import DropdownMenu from "../DropdownMenu";
import header_logo from "../../assets/header_logo.png";
import Button from "../Button";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import DefaultProfilePicture from "../DefaultProfilePicture";

const UpperHeader = ({ isLoggedIn = false, username }) => {
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const [ddownMenu, setDdownMenu] = useState(false);
  const ddownRef = useRef();

  useEffect(() => {
    const closeDropdown = (e) => {
      if (
        e.target !== ddownRef.current &&
        e.target !== ddownRef.current.children[0] &&
        e.target !== ddownRef.current.children[1] &&
        e.target !== ddownRef.current.children[2]
      ) {
        setDdownMenu(false);
      }
    };

    document.body.addEventListener("click", closeDropdown);
  }, []);

  return (
    <>
      <HeaderUpperContainer>
        <img className="logo" src={header_logo} alt="header_logo" />

        <DesktopNavBar>
          <div className="desktop_inner_menu">
            <div className="d_menu_item">Carros</div>
            <div className="d_menu_item">Motos</div>
            <div className="d_menu_item">Leilão</div>
          </div>
          {isLoggedIn ? (
            <div
              ref={ddownRef}
              className="d_user_container"
              onClick={() => setDdownMenu(!ddownMenu)}
            >
              <DefaultProfilePicture username={username} />
              <div className="d_user_name_txt">{username}</div>

              <DropdownMenu top={"4.5em"} right={"2.5em"} isActive={ddownMenu}>
                <div className="ddown_item">Editar perfil</div>
                <div className="ddown_item">Editar endereço</div>
                <div className="ddown_item">Minhas compras</div>
                <div className="ddown_item">Sair</div>
              </DropdownMenu>
            </div>
          ) : (
            <div className="desktop_outer_menu">
              <div className="d_menu_login">Fazer Login</div>

              <Button width="133px" height="48px" borderColor="var(--grey-4)">
                Cadastrar
              </Button>
            </div>
          )}
        </DesktopNavBar>

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
            {isLoggedIn ? (
              <>
                <div className="m_usercontainer">
                  <DefaultProfilePicture username={username} />
                  <div className="m_username">{username}</div>
                </div>
                <ul className="items_ul">
                  <li className="menu_item">Sair</li>
                </ul>
              </>
            ) : (
              <>
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
              </>
            )}
          </div>
        </MenuOuterContainer>
      )}
    </>
  );
};

export default UpperHeader;
