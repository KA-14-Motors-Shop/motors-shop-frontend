import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const InnerContainer = styled.div`
  width: 100%;
  padding: 60px 0px;
  background-color: var(--grey-8);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;

  label {
    font-size: 14px;
    font-weight: 500;
  }

  .forgot-password {
    cursor: pointer;
  }

  .login-form {
    background-color: var(--grey-10);
    border-radius: 4px;
  }

  .new-acc-question {
    color: var(--grey-2);
    font-size: 14px;
    font-weight: 400;
    font-family: "Inter", sans-serif;
    margin-top: 24px;
    margin-bottom: 24px;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    label {
      padding-left: 20px;
    }

    .forgot-password {
      display: flex;
      justify-content: flex-end;
      padding-right: 23px;
      color: var(--grey-2);
      font-size: 14px;
      font-weight: 500;
      font-family: "Inter", sans-serif;
    }

    .login-form {
      width: 343px;
      height: 542px;
      background-color: var(--grey-10);

      .login-title {
        padding-left: 28px;
        height: 85px;
        display: flex;
        align-items: center;
      }

      .sc-idiyUo {
        /* CONTAINER DO INPUT */
        margin-left: 10px;
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

  @media (min-width: 769px) {
    label {
      padding-left: 39px;
    }

    .login-form {
      width: 412px;
      height: 542px;

      .login-title {
        height: 95px;
        display: flex;
        align-items: center;
        padding-left: 48px;
      }

      .sc-idiyUo {
        /* CONTAINER DO INPUT */
        padding-left: 38px;
      }

      .forgot-password {
        display: flex;
        justify-content: flex-end;
        color: var(--grey-2);
        font-size: 14px;
        font-weight: 500;
        font-family: "Inter", sans-serif;
        padding-right: 55px;
        margin-bottom: 21px;
      }

      .login-form-btn-container {
        display: flex;
        justify-content: center;
      }

      .login-form-btn {
        width: 315px;
      }

      .new-acc-question {
        display: flex;
        justify-content: center;
      }

      .txtbox {
        width: 315px;
      }
    }
  }
`;
