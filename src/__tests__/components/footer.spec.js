import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Footer from "../../components/Footer";

describe("Test Footer component", () => {
  test("should be able to render the footer", () => {
    render(<Footer />);

    expect(screen.getByRole("contentinfo")).toBeTruthy();
  });

  test("should be able to scrool to the top", () => {
    render(<Footer />);

    const button = screen.getByRole("button");

    fireEvent.click(button);

    expect(window.screenY).toBe(0);
  });
});
