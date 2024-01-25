import MainProducts from "./styled";
import ProductCard from "../../components/Cards/ProductCard";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import DefaultProfilePicture from "../../components/DefaultProfilePicture";
import PageComponent from "../../components/PageComponent";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { apiDeploy } from "../../services/api";
import { useContext } from "react";
import { AuthContext } from "../../providers/auth";

const UserProduct = () => {
  const [user] = useState(
    JSON.parse(localStorage.getItem("@MotorShop:user")) || []
  );
  const [carAds, setCarAds] = useState([]);
  const [motorAds, setMotorAds] = useState([]);
  const [owner, setOwner] = useState([]);

  const { authenticated } = useContext(AuthContext);

  const params = useParams();

  useEffect(() => {
    apiDeploy
      .get(`users/${params.id}`)
      .then((resp) => {
        setOwner(resp.data);
        setCarAds(
          resp.data.advertisements.filter(
            ({ vehicle_type, is_active }) => vehicle_type === "car" && is_active
          )
        );
        setMotorAds(
          resp.data.advertisements.filter(
            ({ vehicle_type, is_active }) =>
              vehicle_type === "motorcycle" && is_active
          )
        );
      })
      .catch((err) => console.log(err));
  }, [params.id]);

  return (
    <PageComponent>
      <Header
        isLoggedIn={authenticated}
        username={authenticated && user.name}
      />
      <MainProducts>
        <section className="user-infos-section">
          <DefaultProfilePicture
            username={owner.name}
            width="104px"
            height="104px"
          />
          <div className="user-title-div">
            <h3>{owner.name}</h3>
            <span>
              {owner.type === "advertiser" ? "Anunciante" : "Comprador"}
            </span>
          </div>
          <p>{owner.description}</p>
        </section>
        {carAds.length > 0 && (
          <section className="products-section car-list-section">
            <h2>Carros</h2>
            <ul className="products-list">
              {carAds.map((ad) => {
                return (
                  <ProductCard
                    key={ad.id}
                    id={ad.id}
                    title={ad.title}
                    description={ad.description}
                    mileage={ad.mileage}
                    year={ad.year}
                    price={ad.price}
                    owner={{ name: owner.name }}
                    images={ad.images.find(({ is_front }) => is_front === true)}
                  />
                );
              })}
            </ul>
          </section>
        )}

        {motorAds.length > 0 && (
          <section className="products-section motorcycle-list-section">
            <h2>Motos</h2>
            <ul className="products-list">
              {motorAds.map((ad) => {
                return (
                  <ProductCard
                    key={ad.id}
                    id={ad.id}
                    title={ad.title}
                    description={ad.description}
                    mileage={ad.mileage}
                    year={ad.year}
                    price={ad.price}
                    owner={{ name: owner.name }}
                    images={ad.images.find(({ is_front }) => is_front === true)}
                  />
                );
              })}
            </ul>
          </section>
        )}
      </MainProducts>
      <Footer />
    </PageComponent>
  );
};

export default UserProduct;
