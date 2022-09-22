import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";

import { AuthContext } from "../../providers/auth";
import Profile from "../../pages/Profile";
import MockAdapter from "axios-mock-adapter";
import { apiDeploy } from "../../services/api";
import { EditPfModalContext } from "../../providers/editPfModal";

const apiMock = new MockAdapter(apiDeploy);

let providerProps = {
  id: 1,
  name: "Pedro Santos",
  description: "Vendedor de carros e motos",
  type: "advertiser",
  advertisements: [
    {
      id: "1",
      title: "Mustang",
      description: "Mustang GT muito potente",
      mileage: 0,
      year: 2019,
      price: "300000.00",
      type: "auction",
      vehicle_type: "car",
      is_active: true,
      images: [
        {
          url: "https://storage.googleapis.com/motors-shop.appspot.com/1662612661181.png",
          is_front: true,
        },
        {
          url: "https://storage.googleapis.com/motors-shop.appspot.com/1662612661181.png",
          is_front: false,
        },
      ],
    },
    {
      id: "2",
      title: "Dodge",
      description: "Dodge GT muito potente",
      mileage: 0,
      year: 2019,
      price: "300000.00",
      type: "sale",
      vehicle_type: "car",
      is_active: true,
      images: [
        {
          url: "https://storage.googleapis.com/motors-shop.appspot.com/1662612661181.png",
          is_front: true,
        },
        {
          url: "https://storage.googleapis.com/motors-shop.appspot.com/1662612661181.png",
          is_front: false,
        },
      ],
    },
    {
      id: "3",
      title: "Moto",
      description: "Moto GT muito potente",
      mileage: 0,
      year: 2019,
      price: "300000.00",
      type: "sale",
      vehicle_type: "motorcycle",
      is_active: true,
      images: [
        {
          url: "https://storage.googleapis.com/motors-shop.appspot.com/1662612661181.png",
          is_front: true,
        },
        {
          url: "https://storage.googleapis.com/motors-shop.appspot.com/1662612661181.png",
          is_front: false,
        },
      ],
    },
  ],
};

let store = {};

Object.defineProperty(window, "localStorage", {
  value: {
    getItem: (key) => store[key] || null,
    setItem: (key, value) => (store[key] = value.toString()),
    clear: () => (store = {}),
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

Object.defineProperty(window, "getComputedStyle", {
  value: () => ({
    getPropertyValue: (prop) => {
      return "";
    },
  }),
});

describe("Profile Page Tests", () => {
  test("should be able to render a profile", async () => {
    apiMock.onGet("users/me").replyOnce(200, providerProps);
    await render(
      <AuthContext.Provider
        value={{ authenticated: true, setAuthenticated: jest.fn(), token: 1 }}
      >
        <EditPfModalContext.Provider value={{ editPfModal: false }}>
          <div id="root">
            <Profile />
          </div>
        </EditPfModalContext.Provider>
      </AuthContext.Provider>
    );

    let profileTitle = await screen.findByRole("heading", {
      name: /Pedro Santos/i,
    });

    await waitFor(() => {
      expect(profileTitle).toBeInTheDocument();
    });
  });

  test("should be able to open the create ad modal", async () => {
    apiMock.onGet("users/me").replyOnce(200, providerProps);
    await render(
      <AuthContext.Provider
        value={{ authenticated: true, setAuthenticated: jest.fn(), token: 1 }}
      >
        <EditPfModalContext.Provider value={{ editPfModal: false }}>
          <div id="root">
            <Profile />
          </div>
        </EditPfModalContext.Provider>
      </AuthContext.Provider>
    );
    const createButton = await screen.findByText(/Criar Anúncio/);
    fireEvent.click(createButton);

    await waitFor(() => {
      expect(screen.getByText(/Tipo de anúncio/)).toBeInTheDocument();
    });
  });

  test("should be able to open the edit ad modal", async () => {
    apiMock.onGet("users/me").replyOnce(200, providerProps);
    await render(
      <AuthContext.Provider
        value={{ authenticated: true, setAuthenticated: jest.fn(), token: 1 }}
      >
        <EditPfModalContext.Provider value={{ editPfModal: false }}>
          <div id="root">
            <Profile />
          </div>
        </EditPfModalContext.Provider>
      </AuthContext.Provider>
    );
    const allEditButtons = await screen.findAllByRole("button", {
      name: /Editar/i,
    });

    fireEvent.click(allEditButtons[0]);

    await waitFor(() => {
      expect(screen.getByText(/Editar anúncio/)).toBeInTheDocument();
    });
  });
});
