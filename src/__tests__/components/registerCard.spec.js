import { render,screen } from "@testing-library/react";
import React from "react";
import CardRegister from "../../components/Register";

describe("Testing CardRegister Component", () => {
test("Should be able to render the CardRegister", () => {
    render(<CardRegister/>);

    expect(screen.getByTestId("Register-Container")).toBeTruthy()
})

test("Should be able to fixed texts in component", () => {
    render(<CardRegister/>)

    const cadastro = screen.getByText("Cadastro")
    const heading = screen.getByText(/Informações pessoais/i)
    const informacoes = screen.getByText("Informações de endereço")
    const tipo = screen.getByText("Tipo de conta")


    expect(heading).toBeTruthy()
    expect(cadastro).toBeTruthy()
    expect(informacoes).toBeTruthy()
    expect(tipo).toBeTruthy()

})

})