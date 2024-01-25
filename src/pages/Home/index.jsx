import ProductCardAuction from "../../components/Cards/ProductCardAuction";
import HomeHeader from "../../components/HomeHeader";
import MainHome from "./styled";
import ProductCard from "../../components/Cards/ProductCard";
import Footer from "../../components/Footer";
import PageComponent from "../../components/PageComponent";
import { useContext, useEffect } from "react";
import { AdvertisementsContext } from "../../providers/advertisements";
import { AuthContext } from "../../providers/auth";

const Home = () => {
  const { advertisements, getAdvertisements, setGetAdvertisements } =
    useContext(AdvertisementsContext);

  const { authenticated } = useContext(AuthContext);

  const auctionAds = advertisements.filter(({ type }) => type === "auction");

  const carAds = advertisements.filter(
    ({ type, vehicle_type }) => type === "sale" && vehicle_type === "car"
  );

  const motoAds = advertisements.filter(
    ({ type, vehicle_type }) => type === "sale" && vehicle_type === "motorcycle"
  );

  const user = JSON.parse(localStorage.getItem("@MotorShop:user"));

  useEffect(() => {
    setGetAdvertisements(!getAdvertisements);
  }, []);

  return (
    <PageComponent>
      <HomeHeader
        isLoggedIn={authenticated}
        username={authenticated && user.name}
      />
      <MainHome>
        <section className="home-section">
          <h2>Leilão</h2>
          <ul className="auction-list home-list">
            {auctionAds.map((ad) => {
              return (
                <ProductCardAuction
                  key={ad.id}
                  id={ad.id}
                  images={ad.images}
                  title={ad.title}
                  description={ad.description}
                  owner={ad.owner}
                  mileage={ad.mileage}
                  year={ad.year}
                  price={ad.price}
                />
              );
            })}
          </ul>
        </section>
        <section className="home-section car-list-section">
          <h2>Carros</h2>
          <ul className="home-list">
            {carAds.map((ad) => {
              return (
                <ProductCard
                  key={ad.id}
                  id={ad.id}
                  images={ad.images}
                  title={ad.title}
                  description={ad.description}
                  owner={ad.owner}
                  mileage={ad.mileage}
                  year={ad.year}
                  price={ad.price}
                />
              );
            })}
          </ul>
        </section>
        <section className="home-section motorcycle-list-section">
          <h2>Motos</h2>
          <ul className="home-list">
            {motoAds.map((ad) => {
              return (
                <ProductCard
                  key={ad.id}
                  id={ad.id}
                  images={ad.images}
                  title={ad.title}
                  description={ad.description}
                  owner={ad.owner}
                  mileage={ad.mileage}
                  year={ad.year}
                  price={ad.price}
                />
              );
            })}
          </ul>
        </section>
      </MainHome>
      <Footer />
    </PageComponent>
  );
};

export default Home;
