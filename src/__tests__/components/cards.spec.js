import React from "react";
import { render, screen } from "@testing-library/react";
import ProductCard from "../../components/Cards/ProductCard";
import ProductCardAdm from "../../components/Cards/ProductCardAdm";
import ProductCardAuction from "../../components/Cards/ProductCardAuction";
import ProductCardAuctionAdm from "../../components/Cards/ProductCardAuctionAdm";

describe("Cards components tests", () => {
  test("should be able to render a product card", () => {
    render(<ProductCard />);

    expect(screen.getByRole("listitem")).toBeTruthy();
  });

  test("should be able to render a product card adm", async () => {
    render(<ProductCardAdm />);

    expect(screen.getByRole("listitem")).toBeTruthy();
  });

  test("should be able to render a product card auction", async () => {
    render(<ProductCardAuction />);

    expect(screen.getByRole("listitem")).toBeTruthy();
  });

  test("should be able to render a product card auction adm", async () => {
    render(<ProductCardAuctionAdm />);

    expect(screen.getByRole("listitem")).toBeTruthy();
  });
});
