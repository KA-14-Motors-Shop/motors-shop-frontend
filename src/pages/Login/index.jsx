import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Button from "../../components/Button";
import { InnerContainer, MainContainer } from "./styles";
import Input from "../../components/input";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const Login = () => {
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

  const handleLogin = (data) => {
    console.log(data);
  };

  return (
    <MainContainer>
      <Header />
      <InnerContainer>
        <form className="login-form" onSubmit={handleSubmit(handleLogin)}>
          <h2 className="login-title">Login</h2>

          <Input
            className="txtbox user-login"
            placeholder="Digitar usuário"
            label="Usuário"
            width="315px"
            height="54px"
            {...register("email")}
          ></Input>

          <Input
            className="txtbox password"
            placeholder="Digitar senha"
            label="Senha"
            width="315px"
            height="54px"
            {...register("password")}
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
