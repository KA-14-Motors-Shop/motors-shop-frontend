import CardRegisterContainer from "./styles";

import Button from "../Button";
import Input from "../input";
import { apiCep } from "../../services/api";
import { apiDeploy } from "../../services/api";

import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { toast } from "react-toastify";
import SucessoModal from "../successModal";

const CardRegister = () => {
  const [account, setAccount] = useState("buyer");
  const [showModal, setShowModal] = useState(false);
  const history = useHistory();

  const schema = yup.object().shape({
    name: yup.string().required("Nome é um campo obrigatório"),
    email: yup.string().required("Email é um campo obrigatório").email(),
    cpf: yup.string().required("CPF é um campo obrigatório"),
    cell_phone: yup.string().required("Celular é um campo obrigatório"),
    birthday: yup
      .string()
      .required("Data de Nascimento é um campo obrigatório"),
    description: yup.string().required("Descricao é um campo obrigatório"),
    cep: yup.string().required("CEP é um campo obrigatório"),
    state: yup.string().required("Estado é um campo obrigatório"),
    city: yup.string().required("Cidade é um campo obrigatório"),
    street: yup.string().required("Rua é um campo obrigatório"),
    number: yup.number().required("Numero é um campo obrigatório"),
    complement: yup.string().required("Complemento é um campo obrigatório"),
    type: yup.string(),
    password: yup.string().required("Senha é um campo obrigatório"),
    confirm_password: yup
      .string()
      .oneOf([yup.ref("password")], "As senhas devem coincidir")
      .required("Senha é um campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = async (data) => {
    const dataPartes = data.birthday.split("/");

    const newData = {
      name: data.name,
      cpf: data.cpf.replace(/\D/g, ""),
      email: data.email,
      password: data.password,
      description: data.description,
      cell_phone: data.cell_phone.replace(/\D/g, ""),
      birthday: `${dataPartes[1]}/${dataPartes[0]}/${dataPartes[2]}`,
      type: account,

      address: {
        cep: data.cep.replace(/\D/g, ""),
        state: data.state,
        city: data.city,
        street: data.street,
        number: data.number,
        complement: data.complement,
      },
    };
    delete newData.confirm_password;

    const response = await apiCep.get(`${data.cep}/json/`).catch((err) => {
      toast.error("Este cep é inválido. Tente novamente.");
    });

    if (response) {
      apiDeploy
        .post("/users", newData)
        .then((response) => {
          setShowModal(!showModal);
          toast.success("Usuário criado com sucesso!");
        })
        .catch((err) => {
          toast.error(err);
          console.log(err);
        });
    }
  };

  const onErrors = (er) => {
    console.log(er);
  };

  return (
    <CardRegisterContainer
      data-testid="Register-Container"
      onSubmit={handleSubmit(onSubmitFunction, onErrors)}
    >
      {showModal && (
        <SucessoModal
          style={{ right: 0, top: 0 }}
          data-testid="Register-Container"
          title={"Usuário criado com sucesso!"}
          modalState={showModal}
          setModalState={setShowModal}
        >
          <h3 id="h3-modal">Seu usuário foi registrado com sucesso!</h3>
          <p>Agora você poderá ver seus negócios crescendo em grande escala!</p>
          <Button
            className="btn-finalizar"
            bgColor={"var(--brand-1)"}
            borderColor={"var(--brand-1)"}
            fontColor={"var(--white-fixed)"}
            type="submit"
            width={"150px"}
            height={"38px"}
            onClick={() => history.push("/login")}
          >
            Voltar para Login
          </Button>
        </SucessoModal>
      )}
      <h2>Cadastro</h2>
      <p>Informações pessoais</p>
      <Input
        register={register}
        errored={errors.name}
        name="name"
        inputOrNot={true}
        className="div-input"
        width={"315px"}
        height={"48px"}
        label={"Nome"}
        placeholder={"Ex: Samuel Leão"}
      ></Input>
      <Input
        register={register}
        errored={errors.email}
        name="email"
        inputOrNot={true}
        className="div-input"
        width={"315px"}
        height={"48px"}
        label={"Email"}
        placeholder={"Ex samuel@kenzie.com"}
      ></Input>
      <Input
        register={register}
        errored={errors.cpf}
        name="cpf"
        inputOrNot={true}
        className="div-input"
        width={"315px"}
        height={"48px"}
        label={"CPF"}
        placeholder={"000.000.000-00"}
        placeholderMask={"999.999.999-99"}
      ></Input>
      <Input
        register={register}
        errored={errors.cell_phone}
        name="cell_phone"
        inputOrNot={true}
        className="div-input"
        width={"315px"}
        height={"48px"}
        label={"Celular"}
        placeholder={"(DDD) 90000-0000"}
        placeholderMask={"(99) 99999-9999"}
      ></Input>
      <Input
        register={register}
        errored={errors.birthday}
        name="birthday"
        inputOrNot={true}
        className="div-input"
        width={"315px"}
        height={"48px"}
        label={"Data de Nascimento"}
        placeholder={"00/00/0000"}
        placeholderMask={"99/99/9999"}
      ></Input>
      <Input
        register={register}
        errored={errors.description}
        name="description"
        inputOrNot={false}
        className="div-input"
        width={"315px"}
        height={"80px"}
        label={"Descrição"}
        placeholder={"Fale sobre você"}
      ></Input>

      <div className="register-down-size">
        <p>Informações de endereço</p>
        <Input
          register={register}
          errored={errors.name}
          name="cep"
          inputOrNot={true}
          className="div-input"
          width={"315px"}
          height={"48px"}
          label={"CEP"}
          placeholder={"Ex: 00000.000"}
          placeholderMask={"99999-999"}
        ></Input>

        <div className="div-endereco-row">
          <Input
            register={register}
            errored={errors.state}
            name="state"
            inputOrNot={true}
            className="div-input"
            width={"152px"}
            height={"48px"}
            label={"Estado"}
            placeholder={"Ex: Pará"}
          ></Input>
          <Input
            register={register}
            errored={errors.city}
            name="city"
            inputOrNot={true}
            className="div-input"
            width={"152px"}
            height={"48px"}
            label={"Cidade"}
            placeholder={"Ex: Cotia"}
          ></Input>
        </div>

        <Input
          register={register}
          errored={errors.street}
          name="street"
          inputOrNot={true}
          className="div-input"
          width={"315px"}
          height={"48px"}
          label={"Rua"}
          placeholder={"Ex: Rua Abacaxi"}
        ></Input>

        <div className="div-endereco-row">
          <Input
            register={register}
            errored={errors.number}
            name="number"
            inputOrNot={true}
            className="div-input"
            width={"152px"}
            height={"48px"}
            label={"Numero"}
            placeholder={"Ex: 456"}
          ></Input>
          <Input
            register={register}
            errored={errors.complement}
            name="complement"
            inputOrNot={true}
            className="div-input"
            width={"152px"}
            height={"48px"}
            label={"Complemento"}
            placeholder={"Ex: Fundos"}
          ></Input>
        </div>

        <p>Tipo de conta</p>

        <div className="div-endereco-row">
          <Button
            onClick={() => setAccount("buyer")}
            className="btn-comprador"
            bgColor={account === "buyer" ? "var(--brand-1)" : "var(--grey-4)"}
            borderColor={
              account === "buyer" ? "var(--brand-1)" : "var(--grey-4)"
            }
            fontColor={
              account === "buyer" ? "var(--white-fixed)" : "var(--grey-0)"
            }
            type={"button"}
            width={"140px"}
            height={"48px"}
          >
            Comprador
          </Button>
          <Button
            onClick={() => setAccount("seller")}
            bgColor={account === "seller" ? "var(--brand-1)" : "var(--grey-4)"}
            borderColor={
              account === "seller" ? "var(--brand-1)" : "var(--grey-4)"
            }
            fontColor={
              account === "seller" ? "var(--white-fixed)" : "var(--grey-0)"
            }
            type={"button"}
            width={"140px"}
            height={"48px"}
          >
            Vendedor
          </Button>
        </div>

        <Input
          register={register}
          errored={errors.password}
          name="password"
          type="password"
          inputOrNot={true}
          className="div-input"
          width={"315px"}
          height={"48px"}
          label={"Senha"}
          placeholder={"Sua melhor senha"}
        ></Input>
        <Input
          register={register}
          errored={errors.confirm_password}
          name="confirm_password"
          type="password"
          inputOrNot={true}
          className="div-input"
          width={"315px"}
          height={"48px"}
          label={"Confirmar senha"}
          placeholder={"Confirme sua senha"}
        ></Input>

        <Button
          className="btn-finalizar"
          bgColor={"var(--brand-1)"}
          borderColor={"var(--brand-1)"}
          fontColor={"var(--white-fixed)"}
          type="submit"
          width={"315px"}
          height={"48px"}
        >
          Finalizar Cadastro
        </Button>
      </div>
    </CardRegisterContainer>
  );
};

export default CardRegister;
