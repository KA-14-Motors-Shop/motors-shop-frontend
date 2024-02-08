import { HeaderLowerContainer } from "./styles";
import Button from "../Button";
import Header from "../Header";
import { useContext } from "react";
import { AdFilterContext } from "../../providers/adFilter";

const HomeHeader = ({ isLoggedIn = false, username }) => {
  const { setAdFilter } = useContext(AdFilterContext);

  return (
    <>
      <Header isLoggedIn={isLoggedIn} username={username} />
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
            onClick={() => setAdFilter("auction")}
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
            onClick={() => setAdFilter("car")}
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
            onClick={() => setAdFilter("motorcycle")}
          >
            Motos
          </Button>
          <Button
            className="lower_header_btn"
            width="80vw"
            height="48px"
            borderColor="var(--grey-10)"
            bgColor="transparent"
            fontColor="var(--grey-10)"
            onClick={() => setAdFilter(false)}
          >
            Todos
          </Button>
        </div>
      </HeaderLowerContainer>
    </>
  );
};

export default HomeHeader;
