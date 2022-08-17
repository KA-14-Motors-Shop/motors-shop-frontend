import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
`;

export const InnerContainer = styled.div`
  width: 100%;
  height: 76.55vh;
  background-color: var(--grey-8);
  display: flex;
  align-items: center;
  justify-content: center;

  label {
    font-size: 14px;
    font-weight: 500;
  }

  .forgot-password {
    cursor: pointer;
  }

  .login-form {
    background-color: var(--grey-10);
  }

  .new-acc-question {
    color: var(--grey-2);
    font-size: 14px;
    font-weight: 400;
    font-family: "Inter", sans-serif;
    margin-top: 24px;
    margin-bottom: 24px;
  }

  @media (max-width: 768px) {
    .forgot-password {
      display: flex;
      justify-content: flex-end;
      padding-right: 18px;
      color: var(--grey-2);
      font-size: 14px;
      font-weight: 500;
      font-family: "Inter", sans-serif;
    }

    .login-form {
      width: 343px;
      height: 542px;
      background-color: var(--grey-10);
      border-radius: 4px;

      .login-title {
        padding-left: 28px;
        height: 90px;
        display: flex;
        align-items: center;
      }

      .sc-idiyUo {
        /* CONTAINER DO INPUT */
        margin-left: 10px;
        margin-bottom: 15px;
      }

      .login-form-btn-container {
        margin-top: 21px;
        display: flex;
        justify-content: center;
      }

      .login-form-btn {
        width: 295px;
        margin-left: 11px;
      }

      .new-acc-question {
        display: flex;
        justify-content: center;
        padding-left: 10px;
        cursor: pointer;
      }
    }
  }
`;
