import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import { AdvertisemenstProvider } from "../../providers/advertisements";

import Home from "../../pages/Home";
import { apiDeploy } from "../../services/api";
import MockAdapter from "axios-mock-adapter";

const apiMock = new MockAdapter(apiDeploy);

const providerProps = [
  {
    id: 1,
    type: "auction",
    created_at: "2021-10-05T17:16:18.198Z",
    updatedAt: "2021-10-05T17:16:18.198Z",
    title: "Mustang",
    year: 2019,
    mileage: 0,
    description: "Mustang GT muito potente",
    price: "300000.00",
    vehicle_type: "car",
    is_active: true,
    images: {
      url: "https://storage.googleapis.com/motors-shop.appspot.com/1662612661181.png",
    },
    owner: { name: "Gabriel Santos", id: 1 },
  },
  {
    id: 2,
    type: "sale",
    created_at: "2021-10-05T17:16:18.198Z",
    updatedAt: "2021-10-05T17:16:18.198Z",
    title: "Moto",
    year: 2019,
    mileage: 0,
    description: "Moto GT muito potente",
    price: "300000.00",
    vehicle_type: "car",
    is_active: true,
    images: {
      url: "https://storage.googleapis.com/motors-shop.appspot.com/1662612661181.png",
    },
    owner: { name: "Gabriel Santos", id: 1 },
  },
  {
    id: 3,
    type: "sale",
    created_at: "2021-10-05T17:16:18.198Z",
    updatedAt: "2021-10-05T17:16:18.198Z",
    title: "Dodge",
    year: 2019,
    mileage: 0,
    description: "Dodge GT muito potente",
    price: "300000.00",
    vehicle_type: "motorcycle",
    is_active: true,
    images: {
      url: "https://storage.googleapis.com/motors-shop.appspot.com/1662612661181.png",
    },
    owner: { name: "Gabriel Santos", id: 1 },
  },
];

describe("Home Page Tests", () => {
  test("should be able to retrieve tasks", async () => {
    apiMock.onGet("ads").replyOnce(200, providerProps);

    await render(
      <AdvertisemenstProvider>
        <Home />
      </AdvertisemenstProvider>
    );

    const auctionCard = await screen.findByText("Mustang");

    await waitFor(() => {
      expect(screen.getByRole("main")).toBeTruthy();
    });

    await waitFor(() => {
      expect(auctionCard).toBeInTheDocument();
    });
  });
});
