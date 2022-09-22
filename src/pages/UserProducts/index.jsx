import MainProducts from "./styled";
import ProductCard from "../../components/Cards/ProductCard";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import DefaultProfilePicture from "../../components/DefaultProfilePicture";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { apiDeploy } from "../../services/api";
import { useContext } from "react";
import { AuthContext } from "../../providers/auth";

const UserProduct = () => {
  const [user, setUser] = useState([]);
  const [carAds, setCarAds] = useState([]);
  const [motorAds, setMotorAds] = useState([]);

  const { authenticated } = useContext(AuthContext);

  const params = useParams();

  useEffect(() => {
    apiDeploy
      .get(`users/${params.id}`)
      .then((resp) => {
        setUser(resp.data);
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
    <>
      <Header
        isLoggedIn={authenticated}
        username={authenticated && user.name}
      />
      <MainProducts>
        <section className="user-infos-section">
          <DefaultProfilePicture
            username={user.name}
            width="104px"
            height="104px"
          />
          <div className="user-title-div">
            <h3>{user.name}</h3>
            <span>
              {user.type === "advertiser" ? "Anunciante" : "Comprador"}
            </span>
          </div>
          <p>{user.description}</p>
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
                    owner={{ name: user.name }}
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
                    owner={{ name: user.name }}
                    images={ad.images.find(({ is_front }) => is_front === true)}
                  />
                );
              })}
            </ul>
          </section>
        )}
      </MainProducts>
      <Footer />
    </>
  );
};

export default UserProduct;
