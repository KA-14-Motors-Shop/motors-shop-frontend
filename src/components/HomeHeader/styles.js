import styled from "styled-components";

export const HeaderLowerContainer = styled.div`
  height: 503px;
  background-color: var(--brand-2);
  display: flex;
  align-items: center;
  flex-direction: column;

  .lower_header_h2 {
    font-family: "Lexend", sans-serif;
    font-weight: 600;
    color: var(--grey-10);
  }

  .lower_header_btn {
    width: 175px;
    height: 48px;
  }

  .buttons_container {
    width: 75vw;
    display: flex;
    justify-content: space-evenly;
    max-width: 650px;
  }

  @media (min-width: 769px) {
    .lower_header_h2 {
      width: 80vw;
      text-align: center;
      max-width: 750px;
      font-size: 44px;
      margin-top: 80px;
      margin-bottom: 20px;
    }

    .lower_header_h4 {
      color: var(--grey-9);
      font-weight: 300;
      margin-bottom: 48px;
      font-size: 16px;
    }
  }

  @media (max-width: 768px) {
    height: 623px;

    .lower_header_btn {
      width: 80vw;
      height: 48px;
    }

    .lower_header_h2 {
      text-align: center;
      font-size: 32px;
      width: 80vw;
      margin-top: 52px;
      margin-bottom: 52px;
    }

    .lower_header_h4 {
      font-weight: 400;
      font-family: "Inter", sans-serif;
      color: var(--grey-9);
      font-size: 16px;
      width: 80vw;
      text-align: center;
      margin-bottom: 52px;
    }

    .buttons_container {
      display: flex;
      height: 190px;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      width: 100vw;
    }
  }
`;
