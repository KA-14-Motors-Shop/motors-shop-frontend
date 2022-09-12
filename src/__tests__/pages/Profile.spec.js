import React, { useRef } from "react";
import {
  render,
  fireEvent,
  waitFor,
  screen,
  renderHook,
} from "@testing-library/react";

import { AuthContext } from "../../providers/auth";
import Profile from "../../pages/Profile";

let store = {
  "@MotorShop:user": {
    id: 1,
    name: "Pedro Santos",
    description: "Vendedor de carros e motos",
    type: "advertiser",
    advertisements: [
      {
        id: 1,
        title: "Mustang",
        description: "Mustang GT muito potente",
        mileage: 0,
        year: 2019,
        price: "300000.00",
        type: "auction",
        vehicle_type: "car",
        images: [
          {
            url: "https://storage.googleapis.com/motors-shop.appspot.com/1662612661181.png",
            is_front: true,
          },
        ],
      },
      {
        id: 2,
        title: "Dodge",
        description: "Dodge GT muito potente",
        mileage: 0,
        year: 2019,
        price: "300000.00",
        type: "sale",
        vehicle_type: "car",
        images: [
          {
            url: "https://storage.googleapis.com/motors-shop.appspot.com/1662612661181.png",
            is_front: true,
          },
        ],
      },
      {
        id: 3,
        title: "Moto",
        description: "Moto GT muito potente",
        mileage: 0,
        year: 2019,
        price: "300000.00",
        type: "sale",
        vehicle_type: "motorcycle",
        images: [
          {
            url: "https://storage.googleapis.com/motors-shop.appspot.com/1662612661181.png",
            is_front: true,
          },
        ],
      },
    ],
  },
};

Object.defineProperty(window, "localStorage", {
  value: {
    getItem: (key) => store[key] || null,
  },
});

const mockHistoryPush = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  Link: ({ children }) => children,
  useHistory: () => ({
    push: mockHistoryPush,
  }),
  Redirect: jest.fn(),
}));

window.scrollTo = jest.fn();

JSON.parse = (value) => value;

describe("Profile Page Tests", () => {
  test("should be able to render a profile", async () => {
    await render(
      <AuthContext.Provider value={{ authenticated: true }}>
        <Profile />
      </AuthContext.Provider>
    );
    const profileTitle = await screen.findByRole("heading", {
      name: /Pedro Santos/i,
    });

    await waitFor(() => {
      expect(profileTitle).toBeInTheDocument();
    });
  });

  test("should be able to open the create ad modal", async () => {
    await render(
      <AuthContext.Provider value={{ authenticated: true }}>
        <div id="root">
          <Profile />
        </div>
      </AuthContext.Provider>
    );
    const createButton = await screen.findByText(/Criar Anúncio/);
    fireEvent.click(createButton);

    await waitFor(() => {
      expect(screen.getByText(/Tipo de anúncio/)).toBeInTheDocument();
    });
  });
});
