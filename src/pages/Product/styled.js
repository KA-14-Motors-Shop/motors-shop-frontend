import styled from "styled-components";

export const ModalContainer = styled.section`
  figure {
    height: 239px;
    margin-top: 48px;
    margin-bottom: 28px;
    background-color: var(--grey-7);
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    width: 100%;
    max-height: 100%;
  }

  figcaption {
    display: none;
  }

  .move-gallery-div {
    margin: 0;
    position: absolute;
    width: calc(102%);
    display: flex;
    justify-content: space-between;
  }

  svg {
    color: var(--brand-1);
    width: 33px;
    height: 33px;
    cursor: pointer;
  }
`;

export const ProductMain = styled.main`
  padding-top: 45px;
  background-image: linear-gradient(
    to top,
    var(--grey-8) 87%,
    var(--brand-1) 13%
  );
  display: flex;
  justify-content: center;

  .product-infos-section {
    display: flex;
    flex-direction: column;
    align-items: center;

    figure {
      width: 95%;
      max-width: 752px;
      height: 351px;
      background-color: var(--white-fixed);
      border-radius: 4px;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 96%;
        max-width: 441px;
      }

      figcaption {
        display: none;
      }
    }
  }

  .title-div {
    background-color: var(--white-fixed);
    width: 95%;
    max-width: 752px;
    margin-top: 17px;
    display: flex;
    flex-direction: column;
    border-radius: 4px;

    h1 {
      font-size: 20px;
      font-weight: 600;
      line-height: 25px;
      margin-top: 44px;
      margin-bottom: 30px;
      margin-left: 15px;
    }

    button {
      border: 1.5px solid var(--brand-1);
      margin-left: 15px;
      margin-bottom: 28px;
    }
  }

  .infos-div {
    margin: 0px 15px 33px;
    width: 135px;
    display: flex;
    flex-wrap: wrap;

    div {
      height: 32px;
      background-color: var(--brand-4);
      border-radius: 4px;
      color: var(--brand-1);
      margin-right: 12px;
      padding: 5px;
    }

    h6 {
      margin-top: 24px;
      font-size: 16px;
      font-weight: 500;
      color: var(--grey-1);
    }
  }

  .description-div {
    background-color: var(--white-fixed);
    width: 95%;
    max-width: 752px;
    border-radius: 4px;
    margin-top: 24px;

    h3 {
      margin: 36px 28px 32px;
      font-size: 20px;
      font-weight: 600;
      color: var(--grey-1);
    }

    p {
      margin: 0px 28px 36px;
      font-size: 16px;
      line-height: 28px;
      font-weight: 400;
      color: var(--grey-2);
    }
  }

  .product-complementary-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 15px;
  }
  .pictures-div {
    width: 95%;
    max-width: 440px;
    background-color: var(--white-fixed);
    border-radius: 4px;
    margin-bottom: 52px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;

    h3 {
      font-size: 20px;
      font-weight: 600;
      margin: 36px 0px -13px;
      width: 79%;
    }

    div {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 5px;
      width: 93%;
      height: 275px;
      cursor: pointer;
    }

    figure {
      width: 90px;
      height: 90px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 4px;
      background-color: var(--grey-7);
    }

    img {
      width: 100%;
      height: 54px;
    }

    figcaption {
      display: none;
    }
  }

  .owner-div {
    width: 95%;
    max-width: 440px;
    background-color: var(--white-fixed);
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    align-items: center;

    div {
      font-size: 27px;
      margin: 40px 0px 28px;
    }

    h3 {
      font-size: 20px;
      font-weight: 600;
      color: var(--grey-1);
    }

    p {
      margin: 28px 40px;
      font-weight: 400;
      font-size: 16px;
      line-height: 28px;
      text-align: justify;
      color: var(--grey-2);
      max-width: 352px;
    }

    button {
      margin-bottom: 40px;
    }
  }

  .product-comments-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 18px;
  }

  .list-comments-div {
    width: 95%;
    max-width: 752px;
    background-color: var(--white-fixed);
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    padding-bottom: 36px;

    h3 {
      margin: 36px 0px 24px 28px;
      font-size: 20px;
      font-weight: 600;
      color: var(--grey-1);
    }

    ul {
      margin-left: 28px;
      width: 81%;
      display: flex;
      flex-direction: column;
      gap: 44px;
    }

    .comment-header-div {
      display: flex;
      margin-bottom: 12px;
      align-items: center;
      gap: 8px;
    }

    .coment-name-span {
      font-size: 14px;
      font-weight: 600;
      color: var(--grey-1);
    }

    .comment-date-span {
      font-size: 12px;
      font-weight: 400;
      color: var(--grey-3);
    }

    svg {
      width: 13px;
      height: 13px;
      color: var(--grey-4);
    }

    p {
      font-size: 14px;
      line-height: 24px;
      font-weight: 400;
      color: var(--grey-2);
    }
  }

  .create-comment-div {
    width: 95%;
    max-width: 752px;
    background-color: var(--white-fixed);
    border-radius: 4px;
    margin: 24px 0px 45px;
    display: flex;
    flex-direction: column;
  }

  .write-comment-div {
    margin-left: 26px;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 24px;

    textarea {
      width: 86%;
      max-width: 485px;
      height: 128px;
      padding: 10px;
      font-family: Inter;
      font-size: 16px;
      font-weight: 400;
      color: var(--grey-3);
      border: 2px solid var(--grey-7);
      border-radius: 4px;
      resize: none;
    }

    button {
      margin-top: 24px;
    }
  }

  .creator-comment-div {
    margin: 36px 0px 24px 26px;
    display: flex;
    align-items: center;
    gap: 8px;

    span {
      font-size: 14px;
      font-weight: 500;
      color: var(--grey-1);
    }
  }

  .comment-examples-div {
    width: 80%;
    margin-left: 26px;
    margin-bottom: 36px;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;

    span {
      cursor: pointer;
      background-color: var(--grey-7);
      color: var(--grey-3);
      font-size: 12px;
      font-weight: 500;
      padding: 0px 12px 0px 12px;
      border-radius: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  @media (min-width: 375px) {
    .pictures-div {
      div {
        width: 79%;
      }
    }

    .owner-div {
      p {
        text-align: center;
      }
    }
  }

  @media (min-width: 465px) {
    .pictures-div {
      h3 {
        margin-bottom: 0px;
      }

      div {
        gap: 10px;
      }

      figure {
        width: 108px;
        height: 108px;
      }
    }

    .title-div {
      align-items: center;

      h1 {
        width: 88%;
        margin-left: 0;
        margin-bottom: 41px;
      }

      button {
        align-self: flex-start;
        margin-left: 6%;
      }
    }

    .infos-div {
      width: 88%;
      align-items: center;

      h6 {
        margin-left: auto;
        margin-top: 0;
      }
    }

    .description-div {
      h3 {
        margin-left: 6%;
      }

      p {
        margin-left: 6%;
        margin-right: 6%;
      }
    }

    .list-comments-div {
      h3 {
        margin-left: 6%;
      }

      ul {
        margin-left: 6%;
        margin-right: 6%;
        width: auto;
      }
    }

    .creator-comment-div {
      margin-left: 6%;
    }

    .write-comment-div {
      margin-left: 6%;
      margin-right: 6%;

      textarea {
        width: 100%;
      }
    }

    .comment-examples-div {
      margin-left: 6%;
    }
  }

  @media (min-width: 710px) {
    .write-comment-div {
      border: 2px solid var(--grey-7);
      border-radius: 4px;
      justify-content: space-around;

      textarea {
        border: none;
        width: 480px;
      }

      button {
        margin-top: 0px;
        align-self: flex-end;
        margin-bottom: 13px;
      }
    }
  }

  @media (min-width: 769px) {
    background-image: linear-gradient(
      to top,
      var(--grey-8) 77%,
      var(--brand-1) 23%
    );

    .pictures-div {
      h3 {
        margin-bottom: 32px;
      }

      div {
        margin-bottom: 36px;
      }

      figure {
        width: 90px;
        height: 90px;
      }
    }

    .product-main-section {
      display: flex;
      flex-wrap: wrap;
      max-width: 1320px;
    }

    .product-infos-section {
      width: 60%;
    }

    .product-complementary-section {
      width: 40%;
      margin-top: 0px;
    }

    .product-comments-section {
      width: 100%;
      max-width: 792px;
    }

    .write-comment-div {
      justify-content: space-between;

      textarea {
        padding: 0;
        margin: 20px 0px 10px 20px;
        padding-right: 7px;
        width: 490px;
        max-width: 490px;
        cursor: auto;
      }

      textarea::-webkit-scrollbar {
        width: 8px;
      }

      textarea::-webkit-scrollbar-track {
        background: var(--grey-6);
        border-radius: 4px;
      }

      textarea::-webkit-scrollbar-thumb {
        background-color: var(--brand-1);
        border-radius: 20px;
      }

      button {
        margin-right: 11px;
      }
    }
  }

  @media (min-width: 967px) {
    .pictures-div {
      h3 {
        margin-bottom: 0px;
      }
    }
  }

  @media (min-width: 1146px) {
    background-image: linear-gradient(
      to top,
      var(--grey-8) 71%,
      var(--brand-1) 29%
    );

    .pictures-div {
      figure {
        width: 108px;
        height: 108px;
      }
    }
  }
`;

export const PurpleDiv = styled.div`
  background: var(--brand-1);
  width: 100%;
  height: 436px;
`;
