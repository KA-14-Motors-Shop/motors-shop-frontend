import styled from "styled-components";

export const HeaderUpperContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 80px;
  background: var(--grey-10);

  .logo {
    width: 153px;
    height: 26px;
    margin-left: 16px;
  }

  .mobile_menu_btn {
    display: none;
  }

  @media (max-width: 768px) {
    .mobile_bars {
      width: 20px;
      height: 15px;
    }

    .mobile_menu_btn {
      display: flex;
      justify-content: center;
      align-items: center;
      border: none;
      background: none;
      margin-right: 16px;
    }

    .GiHamIcon {
      width: 15px;
      height: 20px;
    }
  } ;
`;

export const MenuOuterContainer = styled.div`
  @media (min-width: 769px) {
    display: none;
  }

  height: 421px;

  @keyframes growDown {
    0% {
      transform: scaleY(0);
    }
    80% {
      transform: scaleY(1.1);
    }
    100% {
      transform: scaleY(1);
    }
  }

  animation: growDown 300ms ease-in-out forwards;
  transform-origin: top center;

  .menu_item {
    height: 78px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-weight: 600;
    font-size: 16px;
    color: var(--grey-2);
    padding-left: 16px;
    cursor: pointer;

    :hover {
      transition: 0.3s;
      background-color: var(--grey-5);
    }
  }

  .inner_items {
    border-bottom: 1px solid var(--grey-4);
  }

  .signup_btn {
    margin-left: 16px;
    margin-top: 15px;
  }
`;

export const HeaderLowerContainer = styled.div`
  width: 100vw;
  height: 503px;
  background-color: var(--brand-2);
  display: flex;
  align-items: center;
  flex-direction: column;

  .lower_header_h2 {
    font-family: "Lexend", sans-serif;
  }

  @media (max-width: 768px) {
    height: 623px;

    .lower_header_h2 {
      text-align: center;
      font-weight: 600;
      color: var(--grey-10);
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
