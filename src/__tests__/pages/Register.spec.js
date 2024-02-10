import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import React from "react";
import CardRegister from "../../components/Register";

import MockAdapter from "axios-mock-adapter";
import { apiDeploy, apiCep } from "../../services/api";

const apiMock = new MockAdapter(apiDeploy);
const cepMock = new MockAdapter(apiCep);

const userMock = {
  name: "Samuel Leão",
  email: "samuel@kenzie.com",
  cpf: "00000000000",
  cell_phone: "99123412342",
  birthday: "12/12/2012",
  password: "123456",
  description: "Descricao comum",
  type: "buyer",
  is_active: true,
  id: "d76461ac-a16a-4dba-9f4a-277db8d72c62",
  createdAt: "2022-09-12T15:27:37.996Z",
  updatedAt: "2022-09-12T15:27:37.996Z",
  address: {
    id: "36f726da-033c-45d6-85b7-1b601236a6a0",
    cep: "20020030",
    state: "Rio de Janeiroo",
    city: "Rio de Janeiroo",
    street: "Flamengo",
    number: 22,
    complement: "Final da rua",
    createdAt: "2022-09-12T15:27:37.920Z",
    updatedAt: "2022-09-12T15:27:37.920Z",
  },
};

describe("Register Page Tests.", () => {
  it("Should be able to render some input.", async () => {
    render(<CardRegister />);

    const emailField = screen.getByPlaceholderText("Ex samuel@kenzie.com");
    expect(emailField).toBeTruthy();
  });

  it("Should be able to render some button.", async () => {
    render(<CardRegister />);

    const emailField = screen.getByText("Finalizar Cadastro");
    expect(emailField).toBeTruthy();
  });

  it("Should be able register some user.", async () => {
    apiMock.onPost("/users").replyOnce(200, userMock);
    cepMock.onGet("20020-030/json/").replyOnce(200, {});

    await render(
      <div id="root">
        <CardRegister />
      </div>
    );

    const nameField = screen.getByPlaceholderText("Ex: Samuel Leão");
    const emailField = screen.getByPlaceholderText("Ex samuel@kenzie.com");
    const cpfField = screen.getByPlaceholderText("000.000.000-00");
    const cellphoneField = screen.getByPlaceholderText("(DDD) 90000-0000");
    const dateField = screen.getByPlaceholderText("00/00/0000");
    const descriptionField = screen.getByPlaceholderText("Fale sobre você");
    const cepField = screen.getByPlaceholderText("Ex: 00000.000");
    const stateField = screen.getByPlaceholderText("Ex: Pará");
    const cityField = screen.getByPlaceholderText("Ex: Cotia");
    const streetField = screen.getByPlaceholderText("Ex: Rua Abacaxi");
    const numberField = screen.getByPlaceholderText("Ex: 456");
    const complementField = screen.getByPlaceholderText("Ex: Fundos");
    const passwordField = screen.getByPlaceholderText("Sua melhor senha");
    const confirmePasswordField =
      screen.getByPlaceholderText("Confirme sua senha");
    const buttonElement = screen.getByRole("button", {
      name: "Finalizar Cadastro",
    });

    fireEvent.change(nameField, {
      target: { value: "Samuel Leão" },
    });

    fireEvent.change(emailField, {
      target: { value: "samuel@kenzie.com" },
    });

    fireEvent.change(cpfField, {
      target: { value: "000.000.000-00" },
    });

    fireEvent.change(cellphoneField, {
      target: { value: "(99) 12341-2342" },
    });

    fireEvent.change(dateField, {
      target: { value: "12/12/2012" },
    });

    fireEvent.change(descriptionField, {
      target: { value: "Descricao comum" },
    });

    fireEvent.change(cepField, {
      target: { value: "20020-030" },
    });

    fireEvent.change(stateField, {
      target: { value: "Rio de Janeiro" },
    });

    fireEvent.change(cityField, {
      target: { value: "Rio de Janeiro" },
    });

    fireEvent.change(streetField, {
      target: { value: "Flamengo" },
    });

    fireEvent.change(numberField, {
      target: { value: 22 },
    });

    fireEvent.change(complementField, {
      target: { value: "Final da rua" },
    });

    fireEvent.change(passwordField, {
      target: { value: "123456" },
    });

    fireEvent.change(confirmePasswordField, {
      target: { value: "123456" },
    });

    fireEvent.click(buttonElement);

    const modalCard = await screen.findByText("Usuário criado com sucesso!");

    expect(modalCard).toBeTruthy();
    expect(modalCard).toBeInTheDocument();
  });
});
