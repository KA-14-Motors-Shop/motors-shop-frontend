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

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo {
      margin-left: 16px;
    }
  } ;
`;
