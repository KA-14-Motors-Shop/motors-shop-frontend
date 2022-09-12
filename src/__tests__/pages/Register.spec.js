import {render, screen, fireEvent, waitFor} from "@testing-library/react"
import React from "react"
import CardRegister from "../../components/Register"

import MockAdapter from "axios-mock-adapter"
import { apiDeploy ,apiCep} from "../../services/api"


const apiMock = new MockAdapter(apiDeploy)
const cepMock = new MockAdapter(apiCep)


describe("Register Page Tests.", () => {

    it("Should be able to render some input.",async () => {
        apiMock.onPost("/users").replyOnce(201,{})
        render(<CardRegister/>)

        const emailField = screen.getByPlaceholderText("Ex samuel@kenzie.com")
        expect(emailField).toBeTruthy()

    })


    it("Should be able to render some button.",async () => {
        apiMock.onPost("/users").replyOnce(200,{})
        render(<CardRegister/>)

        const emailField = screen.getByText("Finalizar Cadastro")
        expect(emailField).toBeTruthy()

    })

    it("Should be able register some user.",async () => {
        apiMock.onPost("/users").replyOnce(200,{})
        cepMock.onGet("20020030/json/").replyOnce(200,{})

        render(<CardRegister/>)

        const nameField = screen.getByPlaceholderText("Ex: Samuel Leão")
        const emailField = screen.getByPlaceholderText("Ex samuel@kenzie.com")
        const cpfField = screen.getByPlaceholderText("000.000.000-00")
        const cellphoneField = screen.getByPlaceholderText("(DDD) 90000-0000")
        const dateField = screen.getByPlaceholderText("00/00/00")
        const descriptionField = screen.getByPlaceholderText("Digitar Descrição")
        const cepField = screen.getByPlaceholderText("Ex: 00000.000")
        const stateField = screen.getByPlaceholderText("Digitar Estado")
        const cityField = screen.getByPlaceholderText("Digitar Cidade")
        const streetField = screen.getByPlaceholderText("Digitar Rua")
        const numberField = screen.getByPlaceholderText("Digitar número")
        const complementField = screen.getByPlaceholderText("Digitar complemento")
        const passwordField = screen.getByPlaceholderText("Sua melhor senha")
        const confirmePasswordField = screen.getByPlaceholderText("Confirme sua melhor senha")
        const buttonElement = screen.getByText("Finalizar Cadastro")

        fireEvent.change(nameField, {
            target: {value: "Samuel Leão" }
        })
        
        fireEvent.change(emailField, {
            target: {value: "Ex samuel@kenzie.com" }
        })

        fireEvent.change(cpfField, {
            target: {value: "00000000000" }
        })

        fireEvent.change(cellphoneField, {
            target: {value: "9912341234" }
        })

        fireEvent.change(dateField, {
            target: {value: "12/12/12" }
        })

        fireEvent.change(descriptionField, {
            target: {value: "Descricao comum" }
        })

        fireEvent.change(cepField, {
            target: {value: "20020030" } // mockar resposta
        })

        fireEvent.change(stateField, {
            target: {value: "Rio de Janeiro" }
        })

        fireEvent.change(cityField, {
            target: {value: "Rio de Janeiro" }
        })

        fireEvent.change(streetField, {
            target: {value: "Centro" }
        })

        fireEvent.change(numberField, {
            target: {value: 22 }
        })

        fireEvent.change(complementField, {
            target: {value: "Complemento comum" }
        })

        fireEvent.change(passwordField, {
            target: {value: "1234" }
        })

        fireEvent.change(confirmePasswordField, {
            target: {value: "1234" }
        })

        fireEvent.click(buttonElement);

    })

})