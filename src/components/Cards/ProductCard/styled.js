import styled from "styled-components";

const CardContainer = styled.li`
  width: 80%;
  height: 355px;

  @media (min-width: 390px) {
    width: 312px;
  }

  :hover {
    figure {
      border: 2px solid var(--brand-1);

      img {
        width: 100%;
        height: 179px;
      }
    }

    cursor: pointer;
  }

  figure {
    background-color: var(--grey-7);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 152px;

    img {
      width: 262px;
      height: 151px;
    }

    figcaption {
      display: none;
    }
  }

  h5 {
    margin: 16px 0px;
    font-size: 16px;
    font-weight: 600;
    color: var(--grey-1);
    width: 100%;
  }

  p {
    width: 90%;
    height: 48px;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: var(--grey-2);
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-align: justify;
  }

  .owner-div {
    display: flex;
    align-items: center;
    margin: 16px 0px;

    div {
      width: 32px;
      height: 32px;
      background-color: ${(props) => `var(--random-${props.number})`};
      color: var(--white-fixed);
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 8px;
      font-size: 14px;
      font-weight: 500;
    }

    span {
      font-size: 14px;
      font-weight: 500;
      color: var(--grey-2);
    }
  }

  .infos-div {
    display: flex;
    align-items: center;

    div {
      width: 51px;
      height: 32px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 12px;
      background-color: var(--brand-4);
      color: var(--brand-1);
      font-size: 14px;
      font-weight: 500;
    }

    h6 {
      margin-left: auto;
      color: var(--grey-1);
      font-size: 16px;
      font-weight: 600;
    }
  }
`;

export default CardContainer;
