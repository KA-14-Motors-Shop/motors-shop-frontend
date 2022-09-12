import styled from "styled-components";

const CardContainer = styled.li`
  max-width: 735px;
  width: 87%;

  .product-section {
    width: 100%;
    position: relative;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    height: 387px;

    figure {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 90%;
      width: 100%;

      figcaption {
        display: none;
      }

      img {
        max-width: 580px;
        max-height: 315px;
        width: 88%;
      }
    }

    .auction-div {
      position: absolute;
      width: calc(100%);
      background: linear-gradient(180deg, rgba(0, 0, 0, 0.29) 0%, #000000 100%);
      border-radius: 4px 4px 0px 0px;

      .timer-div {
        margin-top: 35px;
        height: 36px;
        width: 123px;
        display: flex;
        align-items: center;
        background-color: var(--white-fixed);
        margin-bottom: 35px;
        margin-left: 22px;
        justify-content: center;
        border-radius: 32px;

        span {
          display: flex;
          width: 100%;
          justify-content: space-evenly;
          font-size: 16px;
          font-weight: 600;
          color: var(--grey-1);
          align-items: center;
          height: 20px;

          svg {
            width: 20px;
            height: 20px;
            color: var(--brand-1);
          }
        }
      }

      h5 {
        margin: 0px 22px 20px;
        font-size: 20px;
        font-weight: 600;
        color: var(--grey-10);
        height: 48px;
        overflow: hidden;
        width: auto;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }

      p {
        margin: 0px 22px 20px;
        font-size: 16px;
        font-weight: 400;
        color: var(--grey-5);
        height: 84px;
        overflow: hidden;
        width: auto;
        line-height: 28px;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
      }

      .infos-div {
        margin: 0px 22px 33px;
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
          color: var(--white-fixed);
        }
      }
    }
  }

  .link-div {
    height: 61px;
    background-color: var(--brand-1);
    border-radius: 0px 0px 4px 4px;
    color: var(--white-fixed);
    display: flex;
    justify-content: start;
    align-items: center;

    button {
      margin-left: 5px;
    }
  }

  :hover {
    cursor: pointer;

    .auction-div {
      background: linear-gradient(180deg, rgba(0, 0, 0, 0.71) 0%, #000000 100%);
    }

    .link-div {
      background-color: var(--brand-2);
    }
  }

  @media (min-width: 375px) {
    .link-div {
      padding-left: 22px;
      gap: 10px;
    }

    .link-div button {
      margin: 0;
    }
  }

  @media (min-width: 500px) {
    .product-section {
      height: 309px;
      .auction-div {
        p {
          height: 50px;
          -webkit-line-clamp: 2;
        }

        .infos-div {
          width: auto;
          align-items: center;

          h6 {
            margin-top: 0px;
            margin-left: auto;
          }
        }
      }
    }

    .link-div {
      padding-left: 36px;

      .edit-button {
        width: 80px;
      }

      .see-button {
        width: 105px;
      }
    }
  }

  @media (min-width: 845px) {
    .product-section {
      height: 326px;

      figure {
        height: 100%;
      }

      .auction-div {
        h5 {
          height: 25px;
          -webkit-line-clamp: 1;
        }

        p {
          height: 25px;
          -webkit-line-clamp: 1;
          margin-bottom: 50px;
        }

        .infos-div {
          margin-bottom: 55px;
        }

        .timer-div {
          margin-top: 22px;
          margin-bottom: 69px;
        }
      }
    }
  }
`;

export default CardContainer;
