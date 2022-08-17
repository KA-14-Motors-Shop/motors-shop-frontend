import CardRegisterSection from "./styled"

import Footer from "../../components/Footer"
import Header from "../../components/Header"
import CardRegister from "../../components/Register"

// import {useForm} from "react-hook-form"
// import * as yup from "yup"
// import {yupResolver} from "@hookform/resolvers/yup"

const RegisterUserPage = () => {

    return(
        <>
        <Header  username={"Samuel Leão"}></Header>

        <CardRegisterSection className="section-register">
        <CardRegister/>
        </CardRegisterSection>

        <Footer />
        </>
    )
}

export default RegisterUserPage