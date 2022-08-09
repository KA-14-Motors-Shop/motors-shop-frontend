import styled from "styled-components";

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
        width: 293px;
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
      width: 50px;
      height: 32px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: var(--brand-4);
      border-radius: 4px;
      color: var(--brand-1);
      margin-right: 12px;
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

    h3 {
      font-size: 20px;
      font-weight: 600;
      margin: 36px 0px 32px;
      width: 79%;
    }

    div {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 5px;
      margin-bottom: 36px;
      width: 93%;
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
      width: 76%;
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

    textarea {
      width: 80%;
      height: 128px;
      margin-left: 26px;
      padding: 10px;
      font-family: Inter;
      font-size: 16px;
      font-weight: 400;
      color: var(--grey-3);
      border: 2px solid var(--grey-7);
      border-radius: 4px;
    }

    button {
      margin: 24px 0px 24px 26px;
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
      div {
        gap: 10px;
      }

      figure {
        width: 108px;
        height: 108px;
      }
    }
  }

  @media (min-width: 769px) {
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
  }
`;

export const PurpleDiv = styled.div`
  background: var(--brand-1);
  width: 100%;
  height: 436px;
`;
