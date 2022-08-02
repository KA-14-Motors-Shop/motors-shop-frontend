import { HeaderLowerContainer } from "./styles";
import Button from "../Button";
import UpperHeader from "../UpperHeader";

const Header = ({ isLoggedIn = false, username }) => {
  return (
    <>
      <UpperHeader isLoggedIn={isLoggedIn} username={username} />
      <HeaderLowerContainer>
        <h2 className="lower_header_h2">
          Velocidade e experiência em um lugar feito para você
        </h2>

        <h4 className="lower_header_h4">
          Um ambiente feito para você explorar o seu melhor
        </h4>

        <div className="buttons_container">
          <Button
            className="lower_header_btn"
            borderColor="var(--grey-10)"
            bgColor="transparent"
            fontColor="var(--grey-10)"
            onHoverColor="var(--grey-4)"
          >
            Leilão
          </Button>
          <Button
            className="lower_header_btn"
            width="80vw"
            height="48px"
            borderColor="var(--grey-10)"
            bgColor="transparent"
            fontColor="var(--grey-10)"
            onHoverColor="var(--grey-4)"
          >
            Carros
          </Button>
          <Button
            className="lower_header_btn"
            width="80vw"
            height="48px"
            borderColor="var(--grey-10)"
            bgColor="transparent"
            fontColor="var(--grey-10)"
            onHoverColor="var(--grey-4)"
          >
            Motos
          </Button>
        </div>
      </HeaderLowerContainer>
    </>
  );
};

export default Header;
