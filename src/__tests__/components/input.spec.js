import { render,screen } from "@testing-library/react";
import React from "react";
import Input from "../../components/input"

describe("Testing Input Component", () => {

test("Should be able to render some input component", () => {
    render(<Input
        register={()=>{}}
        errored={""}
        name="name"
        inputOrNot={true}
        className="div-input"
        width={"315px"}
        height={"48px"}
        label={"Nome"}
        placeholder={"Ex: Samuel Leão"}
    />)
    expect(screen.getByPlaceholderText("Ex: Samuel Leão")).toBeTruthy()

})


test("Should be able to render an input type text", () => {
    render(<Input
        register={()=>{}}
        errored={""}
        name="name"
        inputOrNot={true}
        className="div-input"
        width={"315px"}
        height={"48px"}
        label={"Nome"}
        placeholder={""}
    />)

   expect(screen.getByRole("textbox")).toBeTruthy()

})

})