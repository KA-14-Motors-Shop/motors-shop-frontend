import React from "react";
import { render, screen } from "@testing-library/react";
import { AuthProvider } from "../../providers/auth";
import Header from "../../components/Header";

describe("Testing header component", () => {
  test("Should be able to render the header", () => {
    render(
      <AuthProvider>
        <Header />
      </AuthProvider>
    );
    expect(screen.getByRole("img")).toBeTruthy();
    expect(screen.getByRole("button")).toBeTruthy();
  });
});
