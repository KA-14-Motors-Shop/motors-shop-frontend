import styled from "styled-components";

const MainProducts = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: linear-gradient(
    to top,
    var(--grey-8) 84%,
    var(--brand-1) 16%
  );

  .user-infos-section {
    width: 95%;
    max-width: 1240px;
    margin-top: 65px;
    background-color: var(--grey-10);
    border-radius: 4px;
    display: flex;
    flex-direction: column;

    div {
      margin: 40px 0px 24px 29px;
      font-size: 36px;
    }

    .user-title-div {
      margin: 0px 0px 24px 29px;
      display: flex;
      align-items: center;
      gap: 9px;

      h3 {
        font-size: 20px;
      }

      span {
        width: 92px;
        height: 32px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--brand-4);
        border-radius: 4px;
        color: var(--brand-1);
        font-size: 14px;
        font-weight: 500;
      }
    }

    p {
      margin-left: 29px;
      width: 79%;
      margin-bottom: 40px;
      line-height: 28px;
      color: var(--grey-2);
    }
  }

  .products-section {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-left: 12px;
  }

  li {
    white-space: normal;
  }

  .products-list {
    overflow-y: hidden;
    white-space: nowrap;
    display: -webkit-inline-box;
    padding-right: 20px;
  }

  .car-list-section {
    margin-top: 44px;
    padding-left: 23px;
    margin-bottom: 92px;

    h2 {
      margin-bottom: 62px;
    }

    ul {
      gap: 12px;
    }
  }

  .motorcycle-list-section {
    padding-left: 23px;
    margin-bottom: 128px;

    h2 {
      margin-bottom: 62px;
    }

    ul {
      gap: 12px;
    }
  }

  @media (min-width: 426px) {
    .user-infos-section {
      div {
        margin-left: 4%;
      }

      .user-title-div {
        margin-left: 4%;
      }

      p {
        width: auto;
        margin-left: 4%;
        margin-right: 4%;
      }
    }
  }

  @media (min-width: 769px) {
    background-image: linear-gradient(
      to top,
      var(--grey-8) 83%,
      var(--brand-1) 17%
    );
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

    .products-list::-webkit-scrollbar {
      height: 8px;
    }

    .products-list::-webkit-scrollbar-track {
      background: var(--grey-6);
      border-radius: 4px;
    }

    .products-list::-webkit-scrollbar-thumb {
      background-color: var(--brand-1);
      border-radius: 20px;
    }
  }

  @media (min-width: 845px) {
    .products-section {
      padding-left: 60px;
    }
  }
`;

export default MainProducts;
