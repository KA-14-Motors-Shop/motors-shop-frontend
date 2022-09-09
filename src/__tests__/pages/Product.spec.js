import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import ProductPage from "../../pages/Product";
import { apiDeploy } from "../../services/api";
import MockAdapter from "axios-mock-adapter";
const apiMock = new MockAdapter(apiDeploy);

const providerProps = {
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
  images: [
    {
      id: "728dd4c4-5d00-4299-ad9e-6fb7ab5b0f48",
      url: "https://storage.googleapis.com/motors-shop.appspot.com/1662612661179.jpg",
      is_front: false,
    },
    {
      id: "728ddyc4-5d00-4299-ad9e-6fb7ab5b0f48",
      url: "https://storage.googleapis.com/motors-shop.appspot.com/1662612661179.jpg",
      is_front: false,
    },
    {
      id: "e3344e12-ce64-4a0c-a749-4c5378180a21",
      url: "https://storage.googleapis.com/motors-shop.appspot.com/1662612661181.png",
      is_front: true,
    },
  ],
  owner: {
    name: "Gabriel Santos",
    id: 1,
    description: "Vendedor",
    is_active: true,
  },
};

const mockHistoryPush = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  Link: ({ children }) => children,
  useHistory: () => ({
    push: mockHistoryPush,
  }),
  useParams: () => ({ id: 1 }),
}));

window.scrollTo = jest.fn();

describe("Home Page Tests", () => {
  test("should be able to render a product", async () => {
    apiMock.onGet("ads/1").replyOnce(200, providerProps);

    await render(<ProductPage />);

    await waitFor(() => {
      expect(screen.getByRole("main")).toBeTruthy();
    });

    await waitFor(() => {
      expect(
        screen.getByRole("heading", { name: /Mustang/i })
      ).toBeInTheDocument();
    });
  });

  test("should be able to go to open gallery modal", async () => {
    apiMock.onGet("ads/1").replyOnce(200, providerProps);

    await render(
      <div id="root">
        <ProductPage />
      </div>
    );

    const galleryDiv = await screen.findByTestId("galleryDiv");

    fireEvent.click(galleryDiv);

    await waitFor(() => {
      expect(screen.getByText(/Imagem do veículo/)).toBeInTheDocument();
    });
  });
});
