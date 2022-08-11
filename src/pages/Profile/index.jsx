import MainProfile from "./styled";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import DefaultProfilePicture from "../../components/DefaultProfilePicture";
import Button from "../../components/Button";
import ProductCardAdm from "../../components/Cards/ProductCardAdm";
import ProductCardAuctionAdm from "../../components/Cards/ProductCardAuctionAdm";

const Profile = () => {
  return (
    <>
      <Header isLoggedIn username={"Samuel Leão"} />
      <MainProfile>
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
          <Button
            width="160px"
            fontColor="var(--brand-1)"
            borderColor="var(--brand-1)"
          >
            Criar Anúncio
          </Button>
        </section>
        <section className="products-section">
          <h2>Leilão</h2>
          <ul className="auction-list products-list">
            <ProductCardAuctionAdm />
            <ProductCardAuctionAdm />
            <ProductCardAuctionAdm />
          </ul>
        </section>
        <section className="products-section car-list-section">
          <h2>Carros</h2>
          <ul className="products-list">
            <ProductCardAdm />
            <ProductCardAdm />
            <ProductCardAdm />
            <ProductCardAdm />
            <ProductCardAdm />
          </ul>
        </section>
        <section className="products-section motorcycle-list-section">
          <h2>Motos</h2>
          <ul className="products-list">
            <ProductCardAdm />
            <ProductCardAdm />
            <ProductCardAdm />
            <ProductCardAdm />
            <ProductCardAdm />
          </ul>
        </section>
      </MainProfile>
      <Footer />
    </>
  );
};

export default Profile;
