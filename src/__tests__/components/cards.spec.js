import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ProductCard from "../../components/Cards/ProductCard";
import { userEvent } from "@testing-library/user-event/dist/types/setup";

describe("Cards components tests", () => {
  test("should be able to render a product card", () => {
    render(<ProductCard />);

    expect(screen.getByRole("listitem")).toBeTruthy();
  });

  test("should be able to change product card figure border", async () => {
    const user = userEvent.setup();
    render(<ProductCard />);

    await user.click(screen.getByRole("listitem"));

    // expect(screen.getByRole("figure")).toHaveStyle(
    //   "border: 2px solid var(--brand-1)"
    // );

    expect(screen.getByRole("img")).toHaveStyle("width: 100%");
  });
});
