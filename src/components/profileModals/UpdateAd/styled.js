import styled from "styled-components";

const ModalContainer = styled.section`
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

  svg {
    cursor: pointer;
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

  .select-images-section {
    width: 100%;

    label {
      cursor: pointer;
      width: 100%;
      height: 38px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: var(--brand-4);
      border-radius: 4px;
      color: var(--brand-1);
      font-size: 14px;
      font-weight: 600;
    }

    label:hover {
      transition: 0.3s;
      filter: brightness(0.9);
    }

    input {
      display: none;
    }

    span {
      width: 100%;
      text-align: center;
      display: block;
      font-size: 14px;
      font-weight: 600;
    }

    .clean-gallery-button {
      border: none;
    }

    .clean-gallery-button:hover {
      transition: 0.3s;
      filter: brightness(0.9);
    }

    .gallery-images-div {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }

    .principal-image-div {
      width: 100%;
      margin-bottom: 24px;

      span {
        margin-top: 10px;
      }
    }
  }

  .gallery-section {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
    margin-top: 15px;

    .trash-div {
      position: absolute;
      background: var(--brand-2);
      padding: 6px;
      border-radius: 5px;
      margin-left: calc(100% - 70px);
      margin-top: -15px;

      svg {
        color: var(--white-fixed);
        width: 20px;
        height: 18px;
      }
    }

    figure {
      width: 100%;
      height: 275px;
    }

    img {
      width: 100%;
      max-height: 87%;
    }

    figcaption {
      display: none;
    }

    .move-gallery-div {
      width: 100%;
      display: flex;
      justify-content: space-between;

      svg {
        color: var(--brand-1);
        width: 33px;
        height: 33px;
      }
    }
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

    .gallery-images-div {
      label {
        width: 49%;
      }

      button {
        width: 48%;
      }
    }
  }
`;

export default ModalContainer;
