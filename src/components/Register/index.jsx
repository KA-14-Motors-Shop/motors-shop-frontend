import Input from "../input";
import CardRegisterContainer from "./styles";

const CardRegister = () => {

    return (
        <CardRegisterContainer>
            <h2>Cadastro</h2>
            <p>Informações pessoais</p>
            <Input width={"260px"} height={"40px"} label={"Nome aqui"} placeholder = {"Nome aqui"}></Input>
        </CardRegisterContainer>
    )
}

export default CardRegister