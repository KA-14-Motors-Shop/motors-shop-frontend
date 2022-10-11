import styled from "styled-components";

export const GenericModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  z-index: 1;
  width: 100%;
  height: ${(props) => props.height};
  background: rgba(0, 0, 0, 0.5);

  .generic-modal {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0px 20px;
    background-color: var(--white-fixed);
    width: 90%;
    max-width: 500px;
    border-radius: 8px;
    position: absolute;
    top: 120px;
    z-index: 10;
    overflow-y: ${({ modalType, height }) =>
      modalType === "CreateAd" && height <= 1205
        ? "scroll"
        : modalType === "UpdateAd" && height <= 1528
        ? "scroll"
        : "auto"};
    max-height: calc(100% - 140px);

    .modal-header-div {
      margin-top: 30px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      height: 25px;
      align-items: center;

      h2 {
        font-size: 16px;
        font-weight: 500;
        max-height: 20px;
      }

      svg {
        width: 24px;
        height: 24px;
        color: var(--grey-4);
      }
    }
  }
`;
