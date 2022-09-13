import {render, screen, fireEvent, waitFor} from "@testing-library/react"
import React from "react"
import CardRegister from "../../components/Register"

import MockAdapter from "axios-mock-adapter"
import { apiDeploy ,apiCep} from "../../services/api"
import { ModalContainer } from "../../pages/Product/styled"


const apiMock = new MockAdapter(apiDeploy)
const cepMock = new MockAdapter(apiCep)

const userMock = {
    name: "Samuel Leão",
	email: "samuel@kenzie.com",
	cpf: "00000000000",
	cell_phone: "9912341234",
	birthday: "12/12/12",
	password: "1234",
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
		updatedAt: "2022-09-12T15:27:37.920Z"
	},
}



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
        apiMock.onPost("/users").replyOnce(200,userMock)
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
            target: {value: "samuel@kenzie.com" }
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
            target: {value: "Flamengo" }
        })

        fireEvent.change(numberField, {
            target: {value: 22 }
        })

        fireEvent.change(complementField, {
            target: {value: "Final da rua" }
        })

        fireEvent.change(passwordField, {
            target: {value: "1234" }
        })

        fireEvent.change(confirmePasswordField, {
            target: {value: "1234" }
        })

        fireEvent.click(buttonElement);
        
        
        const modalCard= await screen.findByTestId("Register-Container");


        expect(modalCard).toHaveTextContent("TESTE")
    })

})

/*
TO DO:

 - no momento que obtiver sucesso na criacao do usuario abrir modal na pagina
 - com esse modal vou verificar se o user foi criado ou nao
 

*/