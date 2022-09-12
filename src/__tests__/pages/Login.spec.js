import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import Login from "../../pages/Login";
import { AuthProvider } from "../../providers/auth";
import { BrowserRouter } from "react-router-dom";
import { apiDeploy } from "../../services/api";
import MockAdapter from "axios-mock-adapter";

const apiMock = new MockAdapter(apiDeploy);

const getReturn = {
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
};

const mockHistory = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  Link: ({ children }) => children,
  useHistory: () => ({
    push: mockHistory,
  }),
}));

describe("Login page", () => {
  test("Should be able to sign in", async () => {
    apiMock.onPost("login").replyOnce(200, {});
    apiMock.onGet("users/me").replyOnce(200, getReturn);
    render(
      <BrowserRouter>
        <AuthProvider>
          <Login />
        </AuthProvider>
      </BrowserRouter>
    );
    const emailField = screen.getByPlaceholderText("Digitar usuário");
    const pwField = screen.getByPlaceholderText("Digitar senha");
    const btn = screen.getByText("Entrar");

    fireEvent.change(emailField, { target: { value: "test@mail.com" } });
    fireEvent.change(pwField, { target: { value: "1234" } });

    fireEvent.click(btn);

    expect(emailField).toHaveValue("test@mail.com");
    expect(pwField).toHaveValue("1234");
    await waitFor(() => {
      expect(mockHistory).toHaveBeenCalledWith("/profile");
    });
  });
});
