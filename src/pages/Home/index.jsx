import ProductCardAuction from "../../components/Cards/ProductCardAuction";
import HomeHeader from "../../components/HomeHeader";
import { MainHome, FooterHome } from "./styled";
import ProductCard from "../../components/Cards/ProductCard";
import Button from "../../components/Button";
import { IoIosArrowUp } from "react-icons/io";

const Home = ({}) => {
  return (
    <>
      <HomeHeader />
      <MainHome>
        <section className="home-list-section">
          <h2>Leilão</h2>
          <ul className="auction-list">
            <ProductCardAuction />
            <ProductCardAuction />
            <ProductCardAuction />
          </ul>
        </section>
        <section className="home-list-section car-list-section">
          <h2>Carros</h2>
          <ul>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </ul>
        </section>
        <section className="home-list-section motorcycle-list-section">
          <h2>Motos</h2>
          <ul>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </ul>
        </section>
      </MainHome>
      <FooterHome>
        <h3>
          Motors <span>shop</span>
        </h3>
        <p>© 2022 - Todos os direitos reservados.</p>
        <Button
          width="53px"
          height="50px"
          bgColor="var(--grey-1)"
          fontColor="var(--white-fixed)"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <IoIosArrowUp />
        </Button>
      </FooterHome>
    </>
  );
};

export default Home;
