import CardRegisterSection from "./styled"

import Footer from "../../components/Footer"
import Header from "../../components/Header"
import CardRegister from "../../components/Register"



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