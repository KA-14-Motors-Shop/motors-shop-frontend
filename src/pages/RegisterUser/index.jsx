import CardRegisterSection from "./styled";
import PageComponent from "../../components/PageComponent";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import CardRegister from "../../components/Register";

const RegisterUserPage = () => {
  return (
    <PageComponent>
      <Header username={"Samuel Leão"}></Header>

      <CardRegisterSection className="section-register">
        <CardRegister />
      </CardRegisterSection>

      <Footer />
    </PageComponent>
  );
};

export default RegisterUserPage;
