import styled from "styled-components";

export const GenericModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  width: 100%;
  height: ${(props) => props.height};
  background: rgba(0, 0, 0, 0.5);

  .generic-modal {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 5px 20px;
    background-color: var(--white-fixed);
    width: 90%;
    max-width: 500px;
    height: 300px;
    border-radius: 8px;
    position: absolute;
    top: 120px;

    div {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
  }

  h2 {
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    max-height: 20px;
  }
`;
