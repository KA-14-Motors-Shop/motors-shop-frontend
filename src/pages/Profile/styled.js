import styled from "styled-components";

export const ModalContainer = styled.section`
  form {
    display: flex;
    flex-wrap: wrap;
    margin-top: 35px;
  }

  h6 {
    width: 100%;
    font-size: 14px;
    font-weight: 500;
  }

  .advertisement-buttons-div {
    width: 100%;
    display: flex;
    gap: 10px;
    margin: 18px 0px 24px;
  }

  .sale-button {
    background-color: ${(props) =>
      props.adType === "sale" ? "var(--brand-1)" : "var(--white-fixed)"};
    border-color: ${(props) =>
      props.adType === "sale" ? "var(--brand-1)" : "var(--grey-4)"};
    color: ${(props) =>
      props.adType === "sale" ? "var(--white-fixed)" : "var(--grey-0)"};
  }

  .auction-button {
    background-color: ${(props) =>
      props.adType === "auction" ? "var(--brand-1)" : "var(--white-fixed)"};
    border-color: ${(props) =>
      props.adType === "auction" ? "var(--brand-1)" : "var(--grey-4)"};
    color: ${(props) =>
      props.adType === "auction" ? "var(--white-fixed)" : "var(--grey-0)"};
  }

  .div-input {
    color: var(--grey-3);
    border: 1px solid var(--grey-7);
    font-size: 16px;
    margin-top: 8px;
    height: 48px;
  }

  .div-input::-webkit-input-placeholder {
    color: var(--grey-3);
  }

  .vehicle-infos-section {
    h6 {
      margin-bottom: 24px;
    }

    label {
      padding: 0px;
      color: var(--grey-1);
      font-size: 14px;
      font-weight: 600;
    }

    div {
      padding: 0px;
      height: auto;
      max-width: unset;
    }
  }

  .title-input-div {
    margin-bottom: 24px;

    .container {
      div {
      }
    }
  }

  .vehicle-numbers-div {
    /* media 556 */
    display: flex;
    flex-wrap: wrap;

    .minors-inputs-div {
      display: flex;
      gap: 10%;
      margin-bottom: 24px;

      .container {
        width: 45%;
      }
    }

    .price-input-div {
      margin-bottom: 24px;
      width: 100%;

      .container {
        width: 100%;
      }
    }
  }

  .description-input-div {
    margin-bottom: 24px;
    textarea {
      height: 80px;
    }
  }

  .vehicle-buttons-div {
    width: 100%;
    display: flex;
    gap: 10px;
    margin: 24px 0px;
  }

  .car-button {
    background-color: ${(props) =>
      props.vhType === "car" ? "var(--brand-1)" : "var(--white-fixed)"};
    border-color: ${(props) =>
      props.vhType === "car" ? "var(--brand-1)" : "var(--grey-4)"};
    color: ${(props) =>
      props.vhType === "car" ? "var(--white-fixed)" : "var(--grey-0)"};
  }

  .motorcycle-button {
    background-color: ${(props) =>
      props.vhType === "motorcycle" ? "var(--brand-1)" : "var(--white-fixed)"};
    border-color: ${(props) =>
      props.vhType === "motorcycle" ? "var(--brand-1)" : "var(--grey-4)"};
    color: ${(props) =>
      props.vhType === "motorcycle" ? "var(--white-fixed)" : "var(--grey-0)"};
  }

  .finalize-ad-div {
    width: 100%;
    display: flex;
    gap: 4%;
    margin: 37px 0px 32px;
    justify-content: flex-end;
  }

  .cancel-button {
    max-width: 126px;
  }

  .create-button {
    max-width: 193px;
  }

  @media (min-width: 556px) {
    .vehicle-numbers-div {
      .minors-inputs-div {
        gap: 11px;

        .container {
          width: 146px;
        }
      }

      .price-input-div {
        width: 146px;
        margin-left: 11px;
      }
    }
  }
`;

export const MainProfile = styled.main`
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
    margin-bottom: 37px;
    background-color: var(--grey-10);
    border-radius: 4px;
    display: flex;
    flex-direction: column;

    div {
      margin: 40px 0px 24px 29px;
      font-size: 36px;
    }

    button {
      margin-left: 29px;
      margin-bottom: 40px;
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
      margin-bottom: 10px;
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
    padding-bottom: 20px;
    padding-right: 20px;
  }

  .auction-list {
    gap: 8px;
    height: 460px;
    margin-top: 37px;
  }

  .car-list-section {
    margin-top: 52px;
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

      button {
        margin-left: 4%;
      }
    }
  }

  @media (min-width: 500px) {
    .auction-list {
      height: 380px;
    }
  }

  @media (min-width: 769px) {
    background-image: linear-gradient(
      to top,
      var(--grey-8) 83%,
      var(--brand-1) 17%
    );

    .user-infos-section {
      margin-bottom: 89px;
    }

    .products-list {
      padding-bottom: 10px;
    }

    .auction-list {
      gap: 24px;
    }

    .car-list-section {
      margin-top: 200px;
      margin-bottom: 200px;

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

    .auction-list {
      height: 400px;
      margin-top: 40px;
    }
  }
`;
