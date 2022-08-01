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

export const DesktopNavBar = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
  display: flex;
  height: inherit;
  width: 73vw;
  max-width: 600px;
  font-family: "Inter", sans-serif;

  .desktop_inner_menu {
    height: inherit;
    display: flex;
    align-items: center;
    border-right: 1.5px solid var(--grey-6);

    .d_menu_item {
      width: 89px;
      height: inherit;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--grey-2);
      font-weight: 600;
      cursor: pointer;
      :hover {
        transition: 0.4s;
        background-color: var(--grey-6);
      }
    }
  }

  .desktop_outer_menu {
    display: flex;
    align-items: center;
    height: inherit;
    .d_menu_login {
      height: inherit;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 150px;
      color: var(--grey-2);
      font-weight: 600;
      cursor: pointer;
      :hover {
        transition: 0.4s;
        background-color: var(--grey-6);
      }
    }
  }

  .d_user_container {
    height: inherit;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;

    :hover {
      transition: 0.4s;
      background-color: var(--grey-6);
    }

    .d_user_name_txt {
      margin-left: 10px;
      color: var(--grey-2);
      font-size: 16px;
    }
  }
`;
