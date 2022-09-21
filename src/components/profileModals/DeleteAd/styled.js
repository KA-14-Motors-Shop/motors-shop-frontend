import styled from "styled-components";

const ModalContainer = styled.section`
  svg {
    cursor: pointer;
  }

  span {
    margin: 40px 0px 25px;
    font-weight: 500;
    font-size: 16px;
  }

  .ad-delete-div {
    margin: 40px 0px 25px;
    display: flex;
    gap: 10px;
    justify-content: flex-end;

    button {
      padding: 0px 8px;
    }
  }
`;

export default ModalContainer;
