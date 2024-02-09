import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import { AdvertisemenstProvider } from "../../providers/advertisements";

import Home from "../../pages/Home";
import { apiDeploy } from "../../services/api";
import MockAdapter from "axios-mock-adapter";
import { AuthProvider } from "../../providers/auth";
import { EditPfModalProvider } from "../../providers/editPfModal";
import { AdFilterProvider } from "../../providers/adFilter";

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
    title: "Dodge",
    year: 2019,
    mileage: 0,
    description: "Dodge GT muito potente",
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
    title: "Moto",
    year: 2019,
    mileage: 0,
    description: "Moto GT muito potente",
    price: "300000.00",
    vehicle_type: "motorcycle",
    is_active: true,
    images: {
      url: "https://storage.googleapis.com/motors-shop.appspot.com/1662612661181.png",
    },
    owner: { name: "Gabriel Santos", id: 1 },
  },
];

const mockHistoryPush = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  Link: ({ children }) => children,
  useHistory: () => ({
    push: mockHistoryPush,
  }),
  useLocation: () => jest.fn(),
}));

describe("Home Page Tests", () => {
  test("should be able to retrieve tasks", async () => {
    apiMock.onGet("ads").replyOnce(200, providerProps);

    await render(
      <AdvertisemenstProvider>
        <AuthProvider>
          <EditPfModalProvider>
            <AdFilterProvider>
              <Home />
            </AdFilterProvider>
          </EditPfModalProvider>
        </AuthProvider>
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

  test("should be able to go to auction page", async () => {
    apiMock.onGet("ads").replyOnce(200, providerProps);

    await render(
      <AdvertisemenstProvider>
        <AuthProvider>
          <EditPfModalProvider>
            <AdFilterProvider>
              <Home />
            </AdFilterProvider>
          </EditPfModalProvider>
        </AuthProvider>
      </AdvertisemenstProvider>
    );

    const lis = await screen.findAllByRole("listitem");

    const auctionCard = lis.find((value) =>
      String(value["innerHTML"]).includes("Mustang")
    );

    fireEvent.click(auctionCard);

    await waitFor(() => {
      expect(mockHistoryPush).toHaveBeenCalledWith(
        `/product/${auctionCard.id}`
      );
    });
  });

  test("should be able to go to car page", async () => {
    apiMock.onGet("ads").replyOnce(200, providerProps);

    await render(
      <AdvertisemenstProvider>
        <AuthProvider>
          <EditPfModalProvider>
            <AdFilterProvider>
              <Home />
            </AdFilterProvider>
          </EditPfModalProvider>
        </AuthProvider>
      </AdvertisemenstProvider>
    );

    const lis = await screen.findAllByRole("listitem");

    const carCard = lis.find((value) =>
      String(value["innerHTML"]).includes("Dodge")
    );

    fireEvent.click(carCard);

    await waitFor(() => {
      expect(mockHistoryPush).toHaveBeenCalledWith(`/product/2`);
    });
  });

  test("should be able to go to motorcycle page", async () => {
    apiMock.onGet("ads").replyOnce(200, providerProps);

    await render(
      <AdvertisemenstProvider>
        <AuthProvider>
          <EditPfModalProvider>
            <AdFilterProvider>
              <Home />
            </AdFilterProvider>
          </EditPfModalProvider>
        </AuthProvider>
      </AdvertisemenstProvider>
    );

    const lis = await screen.findAllByRole("listitem");

    const motorcycleCard = lis.find((value) =>
      String(value["innerHTML"]).includes("Moto")
    );

    fireEvent.click(motorcycleCard);

    await waitFor(() => {
      expect(mockHistoryPush).toHaveBeenCalledWith(`/product/3`);
    });
  });
});
