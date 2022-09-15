import styled from "styled-components";

export const EditProfileContainer = styled.div`
  padding-bottom: 30px;
  display: ${(props) => (props.editPfModal ? "block" : "none")};
  width: 90%;
  max-width: 500px;
  border-radius: 8px;
  font-family: "Lexend", sans-serif;

  .close__icon {
    cursor: pointer;
    margin-right: 20px;
  }

  .edit__profile__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 18px;
    padding-left: 20px;
  }

  .edit__profile__title {
    font-size: 16px;
    font-weight: 500;
  }

  .personal__info__text {
    padding-top: 30px;
    padding-left: 20px;
    padding-bottom: 25px;
    font-size: 14px;
    font-weight: 500;
  }

  .edit__profile__btns__container {
    padding-top: 15px;
    display: flex;
    justify-content: flex-end;
    padding-right: 19px;
  }

  .save__button {
    margin-left: 10px;
  }

  .sc-bjUoiL {
    /* INPUT CONTAINER */
    padding-left: 10px;

    label {
      font-size: 14px;
      font-weight: 500;
    }
  }
`;

export const ModalBackground = styled.div``;
