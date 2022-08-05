import styled from "styled-components";

export const MainHome = styled.main`
  margin-top: 38px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .home-list-section {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-left: 12px;
  }

  li {
    white-space: normal;
  }

  .auction-list {
    overflow-y: hidden;
    white-space: nowrap;
    gap: 8px;
    display: -webkit-inline-box;
    height: 510px;
    margin-top: 37px;
  }

  .car-list-section {
    margin-top: 67px;
    padding-left: 23px;
    margin-bottom: 83px;

    h2 {
      margin-bottom: 62px;
    }

    ul {
      overflow-y: hidden;
      white-space: nowrap;
      gap: 12px;
      display: -webkit-inline-box;
    }
  }

  .motorcycle-list-section {
    padding-left: 23px;
    margin-bottom: 93px;

    h2 {
      margin-bottom: 62px;
    }

    ul {
      overflow-y: hidden;
      white-space: nowrap;
      gap: 12px;
      display: -webkit-inline-box;
    }
  }

  @media (min-width: 500px) {
    .auction-list {
      height: 435px;
    }
  }

  @media (min-width: 768px) {
    .auction-list {
      gap: 24px;
    }

    .car-list-section {
      ul {
        gap: 48px;
      }
    }

    .motorcycle-list-section {
      ul {
        gap: 48px;
      }
    }
  }

  @media (min-width: 845px) {
    .home-list-section {
      padding-left: 60px;
    }

    .auction-list {
      height: 400px;
      margin-top: 40px;
    }
  }
`;

export const FooterHome = styled.footer`
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

  @media (min-width: 768px) {
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
