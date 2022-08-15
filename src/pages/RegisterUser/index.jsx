import Footer from "../../components/Footer"
import Header from "../../components/Header"
import CardRegister from "../../components/Register"
import CardRegisterSection from "./styled"






const RegisterUserPage = () => {

    return(
        <>
        <Header  username={"Samuel Leão"}></Header>

        <CardRegisterSection className="section-register">
        <CardRegister></CardRegister>
        </CardRegisterSection>

        <Footer />
        </>
    )
}

export default RegisterUserPage