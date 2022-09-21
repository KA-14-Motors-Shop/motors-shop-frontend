import styled from "styled-components";

export const HeaderUpperContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  background: var(--grey-10);

  .logo {
    width: 153px;
    height: 26px;
    margin-left: 16px;
    cursor: pointer;
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
  } ;
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

  .ddown_item {
    padding-left: 22px;
    color: var(--grey-2);
    height: 50px;
    display: flex;
    align-items: center;
    cursor: pointer;
    :hover {
      transition: 0.4s;
      background: var(--grey-6);
    }
  }

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
    position: relative;
    cursor: pointer;

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

  .m_usercontainer {
    height: 78px;
    display: flex;
    align-items: center;
    cursor: pointer;
    padding-left: 16px;
    :hover {
      transition: 0.4s;
      background-color: var(--grey-5);
    }

    .m_username {
      margin-left: 10px;
      font-weight: 600;
      font-size: 16px;
      color: var(--grey-2);
    }
  }
`;
