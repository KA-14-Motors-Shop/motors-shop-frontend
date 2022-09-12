import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import Login from "../../pages/Login";
import { AuthProvider } from "../../providers/auth";
import { BrowserRouter } from "react-router-dom";
import { apiDeploy } from "../../services/api";
import MockAdapter from "axios-mock-adapter";

const apiMock = new MockAdapter(apiDeploy);

const mockHistory = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  Link: ({ children }) => children,
  useHistory: () => ({
    push: mockHistory,
  }),
}));

describe("Login page", () => {
  test("Should be able to sign in", async () => {
    apiMock.onPost("/login").replyOnce(200, {});
    render(
      <BrowserRouter>
        <AuthProvider>
          <Login />
        </AuthProvider>
      </BrowserRouter>
    );
    const emailField = screen.getByPlaceholderText("Digitar usuário");
    const pwField = screen.getByPlaceholderText("Digitar senha");
    const btn = screen.getByText("Entrar");

    fireEvent.change(emailField, { target: { value: "test@mail.com" } });
    fireEvent.change(pwField, { target: { value: "1234" } });

    fireEvent.click(btn);

    expect(emailField).toHaveValue("test@mail.com");
    expect(pwField).toHaveValue("1234");
    await waitFor(() => {
      expect(mockHistory).toHaveBeenCalledWith("/profile");
    });
  });
});
