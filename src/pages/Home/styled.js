import styled from "styled-components";

const MainHome = styled.main`
  margin-top: 38px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .home-section {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-left: 12px;
  }

  li {
    white-space: normal;
  }

  .home-list {
    overflow-y: hidden;
    white-space: nowrap;
    display: -webkit-inline-box;
    padding-right: 20px;
  }

  .auction-list {
    gap: 8px;
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
      gap: 12px;
    }
  }

  .motorcycle-list-section {
    padding-left: 23px;
    margin-bottom: 93px;

    h2 {
      margin-bottom: 62px;
    }

    ul {
      gap: 12px;
    }
  }

  @media (min-width: 500px) {
    .auction-list {
      height: 435px;
    }
  }

  @media (min-width: 769px) {
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

    .home-list::-webkit-scrollbar {
      height: 8px;
    }

    .home-list::-webkit-scrollbar-track {
      background: var(--grey-6);
      border-radius: 4px;
    }

    .home-list::-webkit-scrollbar-thumb {
      background-color: var(--brand-1);
      border-radius: 20px;
    }
  }

  @media (min-width: 845px) {
    .home-section {
      padding-left: 60px;
    }

    .auction-list {
      height: 400px;
      margin-top: 40px;
    }
  }
`;

export default MainHome;
