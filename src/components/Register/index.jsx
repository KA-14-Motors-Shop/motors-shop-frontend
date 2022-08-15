import Button from "../Button";
import Input from "../input";
import CardRegisterContainer from "./styles";

const CardRegister = () => {

    return (
        <CardRegisterContainer>
            <h2 >Cadastro</h2>
            <p>Informações pessoais</p>
            <Input inputOrNot={true} className="div-input" width={"315px"} height={"48px"} label={"Nome"} placeholder = {"Ex: Samuel Leão"}></Input>
            <Input inputOrNot={true} className="div-input" width={"315px"} height={"48px"} label={"Email"} placeholder = {"Ex samuel@kenzie.com"}></Input>
            <Input inputOrNot={true} className="div-input" width={"315px"} height={"48px"} label={"CPF"} placeholder = {"000.000.000-00"}></Input>
            <Input inputOrNot={true} className="div-input" width={"315px"} height={"48px"} label={"Celular"} placeholder = {"(DDD) 90000-0000"}></Input>
            <Input inputOrNot={true} className="div-input" width={"315px"} height={"48px"} label={"Data de Nascimento"} placeholder = {"00/00/00"}></Input>
            <Input inputOrNot={false} className="div-input" width={"315px"} height={"80px"} label={"Descrição"} placeholder = {"Digitar Descrição"}></Input>
        
        <div className="register-down-size">
        <p>Informações de endereço</p>
        <Input inputOrNot={true} className="div-input" width={"315px"} height={"48px"} label={"CEP"} placeholder = {"Ex: 00000.000"}></Input>
       
        <div className="div-endereco-row">
        <Input inputOrNot={true} className="div-input" width={"152px"} height={"48px"} label={"Estado"} placeholder = {"Digitar Estado"}></Input>
        <Input inputOrNot={true} className="div-input" width={"152px"} height={"48px"} label={"Cidade"} placeholder = {"Digitar Cidade"}></Input>
        </div>
        
        <Input inputOrNot={true} className="div-input" width={"315px"} height={"48px"} label={"Rua"} placeholder = {"Digitar Rua"}></Input>


        <div className="div-endereco-row">
        <Input inputOrNot={true} className="div-input" width={"152px"} height={"48px"} label={"Numero"} placeholder = {"Digitar Estado"}></Input>
        <Input inputOrNot={true} className="div-input" width={"152px"} height={"48px"} label={"Complemento"} placeholder = {"Digitar Cidade"}></Input>
        </div>
        
        <p>Tipo de conta</p>

        <div className="div-endereco-row">
            <Button className="btn-comprador" bgColor={"var(--brand-1)"} borderColor={"var(--brand-1)"} fontColor={"var(--white-fixed)"} type={"button"} width={"140px"} height={"48px"}>Comprador</Button>
            <Button bgColor={"var(--grey-4)"} borderColor={"var(--grey-4)"} fontColor={"var(--grey-0)"} type={"button"} width={"140px"} height={"48px"}>Vendedor</Button>
        </div>

        <Input inputOrNot={true} className="div-input" width={"315px"} height={"48px"} label={"Senha"} placeholder = {"Ex: Samuel Leão"}></Input>
        <Input inputOrNot={true} className="div-input" width={"315px"} height={"48px"} label={"Confirmar senha"} placeholder = {"Ex: Samuel Leão"}></Input>



        <Button className="btn-finalizar" bgColor={"var(--brand-1)"} borderColor={"var(--brand-1)"} fontColor={"var(--white-fixed)"} type={"submit"} width={"315px"} height={"48px"}>Finalizar Cadastro</Button>
        </div>
        

        
        </CardRegisterContainer>
        
        
    )
}

export default CardRegister