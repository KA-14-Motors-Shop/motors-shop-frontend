import ProductCardAuction from "../../components/Cards/ProductCardAuction";
import HomeHeader from "../../components/HomeHeader";
import MainHome from "./styled";
import ProductCard from "../../components/Cards/ProductCard";
import Footer from "../../components/Footer";

const Home = ({}) => {
  return (
    <>
      <HomeHeader />
      <MainHome>
        <section className="home-section">
          <h2>Leilão</h2>
          <ul className="auction-list home-list">
            <ProductCardAuction />
            <ProductCardAuction />
            <ProductCardAuction />
          </ul>
        </section>
        <section className="home-section car-list-section">
          <h2>Carros</h2>
          <ul className="home-list">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </ul>
        </section>
        <section className="home-section motorcycle-list-section">
          <h2>Motos</h2>
          <ul className="home-list">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </ul>
        </section>
      </MainHome>
      <Footer />
    </>
  );
};

export default Home;
