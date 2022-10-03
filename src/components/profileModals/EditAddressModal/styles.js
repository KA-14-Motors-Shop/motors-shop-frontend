import styled from "styled-components";

export const EditAdrsContainer = styled.div`
  svg {
    cursor: pointer;
  }

  h6 {
    width: 100%;
    font-size: 14px;
    font-weight: 500;
  }

  form {
    display: flex;
    flex-wrap: wrap;
    margin-top: 35px;
  }

  label {
    font-size: 14px;
    font-weight: 500;
  }

  .sc-idiyUo {
    /* INPUT CONTAINER */
    padding-left: 0;
  }

  .sc-bjUoiL {
    /*OUTER INPUT CONTAINER */
    padding-left: 0;
  }

  .single__input__field__div {
    width: 100%;
    padding-top: 18px;

    label {
      padding-left: 0;
    }
  }

  .double__input__fields__div {
    width: 100%;
    display: flex;
    padding-top: 18px;

    label {
      padding-left: 0;
    }
  }

  .editadrs__btns__container {
    padding-top: 20px;
    padding-bottom: 25px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding-right: 10px;
    gap: 10px;
  }
`;
