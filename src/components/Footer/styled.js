import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: var(--grey-0);
  color: var(--white-fixed);
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    margin-top: 45px;
    font-size: 25px;
  }

  span {
    font-size: 18px;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    margin: 60px 0px;
  }

  button {
    margin-bottom: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    font-weight: 900;
  }

  @media (min-width: 769px) {
    flex-direction: row;
    height: 140px;
    align-items: center;
    justify-content: space-around;

    h3 {
      margin: 0;
    }

    p {
      margin: 0;
    }

    button {
      margin: 0;
    }
  }
`;

export default FooterContainer;
