import MainProducts from "./styled";
import ProductCard from "../../components/Cards/ProductCard";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import DefaultProfilePicture from "../../components/DefaultProfilePicture";

const UserProduct = () => {
  return (
    <>
      <Header />
      <MainProducts>
        <section className="user-infos-section">
          <DefaultProfilePicture
            username="Samuel Leão"
            width="104px"
            height="104px"
          />
          <div className="user-title-div">
            <h3>Samuel Leão</h3>
            <span>Anunciante</span>
          </div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </section>
        <section className="products-section car-list-section">
          <h2>Carros</h2>
          <ul className="products-list">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </ul>
        </section>
        <section className="products-section motorcycle-list-section">
          <h2>Motos</h2>
          <ul className="products-list">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </ul>
        </section>
      </MainProducts>
      <Footer />
    </>
  );
};

export default UserProduct;
