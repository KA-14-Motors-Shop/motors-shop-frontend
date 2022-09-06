import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Button from "../../components/Button";
import { InnerContainer, MainContainer } from "./styles";
import Input from "../../components/input";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { apiDeploy } from "../../services/api";
import { toast } from "react-toastify";
import { Redirect, useHistory } from "react-router-dom";

const Login = ({ auth, setAuth }) => {
  const schema = yup.object().shape({
    email: yup.string().required("Campo obrigatório").email("Email inválido"),
    password: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const history = useHistory();

  if (auth) {
    return <Redirect to="/profile" />;
  }

  const handleLogin = async (data) => {
    const response = await apiDeploy.post("/login", data).catch((err) => {
      toast.error("Erro na autenticação, verifique seu e-mail ou senha");
    });

    const { Token_JWT } = response.data;

    localStorage.setItem("@MotorsShop:token", Token_JWT);

    toast.success("Login feito com sucesso");

    setAuth(true);

    history.push("/profile");
  };

  return (
    <MainContainer>
      <Header />
      <InnerContainer>
        <form className="login-form" onSubmit={handleSubmit(handleLogin)}>
          <h2 className="login-title">Login</h2>

          <Input
            inputOrNot={true}
            name="email"
            register={register}
            errored={errors?.email}
            className={"txtbox user-login"}
            placeholder="Digitar usuário"
            label="Usuário"
            width="315px"
            height="54px"
          ></Input>

          <Input
            inputOrNot={true}
            name="password"
            register={register}
            errored={errors?.password}
            className="txtbox password"
            placeholder="Digitar senha"
            label="Senha"
            width="315px"
            height="54px"
            type="password"
          ></Input>

          <div className="forgot-password">Esqueci minha senha</div>
          <div className="login-form-btn-container">
            <Button
              type="submit"
              className="login-form-btn"
              bgColor="var(--brand-1)"
              borderColor="var(--brand-1)"
              fontColor="var(--grey-10)"
            >
              Entrar
            </Button>
          </div>
          <div className="new-acc-question">Ainda não possui conta?</div>
          <div className="login-form-btn-container">
            <Button
              type="button"
              className="login-form-btn"
              onClick={() => console.log("click")}
            >
              Cadastrar
            </Button>
          </div>
        </form>
      </InnerContainer>
      <Footer />
    </MainContainer>
  );
};

export default Login;
