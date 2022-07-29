import styled from "styled-components";

export const HeaderUpperContainer = styled.div`
  width: 100vw;
  height: 80px;
  background: var(--grey-10);

  .logo {
    width: 153px;
    height: 26px;
  }

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

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo {
      margin-left: 16px;
    }
  } ;
`;

export const MenuOuterContainer = styled.div`
  height: 421px;

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
