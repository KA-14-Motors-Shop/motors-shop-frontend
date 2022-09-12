import { render,screen } from "@testing-library/react";
import React from "react";
import CardRegister from "../../components/Register";

describe("Testing CardRegister Component", () => {
test("Should be able to render the CardRegister", () => {
    render(<CardRegister/>);

    expect(screen.getByTestId("Register-Container")).toBeTruthy()
})

test("Should be able to render the h2 title", () => {
    render(<CardRegister/>)

    const cadastro = screen.getByText("Cadastro")
    const heading = screen.getByText(/Informações pessoais/i)
    expect(heading).toBeTruthy()
    expect(cadastro).toBeTruthy()

})





})