import { useRef, useState, useEffect, useContext } from "react";
import {
  HeaderUpperContainer,
  DesktopNavBar,
  MenuOuterContainer,
} from "./styles";
import { useLocation } from "react-router-dom";
import DropdownMenu from "../DropdownMenu";
import header_logo from "../../assets/header_logo.png";
import Button from "../Button";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import DefaultProfilePicture from "../DefaultProfilePicture";
import { AuthContext } from "../../providers/auth";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { EditPfModalContext } from "../../providers/editPfModal";

const Header = ({ isLoggedIn = false, username }) => {
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const [ddownMenu, setDdownMenu] = useState(false);
  const ddownRef = useRef();
  const history = useHistory();
  const location = useLocation();

  const { handleLogout } = useContext(AuthContext);
  const { setFromOtherPageModal, setEditPfModal } =
    useContext(EditPfModalContext);

  useEffect(() => {
    const closeDropdown = (e) => {
      if (ddownRef.current) {
        if (!ddownRef.current.contains(e.target)) {
          setDdownMenu(false);
        }
      }
    };

    document.body.addEventListener("click", closeDropdown);
  }, []);

  const handleEditPfModal = () => {
    if (location.pathname === "/profile") {
      return setEditPfModal(true);
    }
    history.push("/profile");
    setFromOtherPageModal(true);
  };

  return (
    <>
      <HeaderUpperContainer>
        <img
          className="logo"
          src={header_logo}
          alt="header_logo"
          onClick={() => history.push("/")}
        />

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
                <div className="ddown_item" onClick={handleEditPfModal}>
                  Editar perfil
                </div>
                <div className="ddown_item">Editar endereço</div>
                <div className="ddown_item">Minhas compras</div>
                <div
                  className="ddown_item"
                  onClick={() => handleLogout(history)}
                >
                  Sair
                </div>
              </DropdownMenu>
            </div>
          ) : (
            <div className="desktop_outer_menu">
              <div
                className="d_menu_login"
                onClick={() => history.push("/login")}
              >
                Fazer Login
              </div>

              <Button
                width="133px"
                height="48px"
                borderColor="var(--grey-4)"
                onClick={() => history.push("/register")}
              >
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
                  <li
                    className="menu_item"
                    onClick={() => handleLogout(history)}
                  >
                    Sair
                  </li>
                </ul>
              </>
            ) : (
              <>
                <ul className="items_ul">
                  <li
                    className="menu_item"
                    onClick={() => history.push("/login")}
                  >
                    Fazer Login
                  </li>
                </ul>

                <Button
                  className="signup_btn"
                  width="88vw"
                  borderColor="var(--grey-4)"
                  onClick={() => history.push("/register")}
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

export default Header;
