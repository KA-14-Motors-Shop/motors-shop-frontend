import Button from "../Button";
import FooterContainer from "./styled";
import { IoIosArrowUp } from "react-icons/io";

const Footer = () => {
  const scrollPage = () => {
    return window.scrollTo(0, 0);
  };

  return (
    <FooterContainer>
      <h3>
        Motors <span>shop</span>
      </h3>
      <p>© 2022 - Todos os direitos reservados.</p>
      <Button
        width="53px"
        height="50px"
        bgColor="var(--grey-1)"
        fontColor="var(--white-fixed)"
        onClick={scrollPage}
      >
        <IoIosArrowUp />
      </Button>
    </FooterContainer>
  );
};

export default Footer;
