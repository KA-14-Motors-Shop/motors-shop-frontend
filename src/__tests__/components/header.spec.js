import React from "react";
import { render, screen } from "@testing-library/react";
import { AuthProvider } from "../../providers/auth";
import Header from "../../components/Header";
import { EditPfModalProvider } from "../../providers/editPfModal";

const mockHistoryPush = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  Link: ({ children }) => children,
  useHistory: () => ({
    push: mockHistoryPush,
  }),
  useLocation: () => jest.fn(),
}));

describe("Testing header component", () => {
  test("Should be able to render the header", () => {
    render(
      <AuthProvider>
        <EditPfModalProvider>
          <Header />
        </EditPfModalProvider>
      </AuthProvider>
    );
    expect(screen.getByRole("img")).toBeTruthy();
    expect(screen.getByRole("button")).toBeTruthy();
  });
});
