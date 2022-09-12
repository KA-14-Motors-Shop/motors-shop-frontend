import MainProfile from "./styled";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import DefaultProfilePicture from "../../components/DefaultProfilePicture";
import Button from "../../components/Button";
import ProductCardAdm from "../../components/Cards/ProductCardAdm";
import ProductCardAuctionAdm from "../../components/Cards/ProductCardAuctionAdm";
import CreateAdModal from "../../components/profileModals/CreateAd";
import { useContext, useState } from "react";
import UpdateAdModal from "../../components/profileModals/UpdateAd";
import { AuthContext } from "../../providers/auth";
import { Redirect } from "react-router-dom";

const Profile = () => {
  const { authenticated } = useContext(AuthContext);

  const [createAdModal, setCreateAdModal] = useState(false);
  const [updateAdModal, setUpdateAdModal] = useState(false);

  if (!authenticated) {
    return <Redirect to="/login" />;
  }

  const user = JSON.parse(localStorage.getItem("@MotorShop:user"));

  const auctionAds = user.advertisements.filter(
    ({ type }) => type === "auction"
  );

  const carAds = user.advertisements.filter(
    ({ type, vehicle_type }) => type === "sale" && vehicle_type === "car"
  );

  const motoAds = user.advertisements.filter(
    ({ type, vehicle_type }) => type === "sale" && vehicle_type === "motorcycle"
  );

  return (
    <>
      {createAdModal && (
        <CreateAdModal
          modalState={createAdModal}
          setModalState={setCreateAdModal}
        />
      )}
      {updateAdModal && (
        <UpdateAdModal
          modalState={updateAdModal}
          setModalState={setUpdateAdModal}
        />
      )}
      <Header isLoggedIn username={"Samuel Leão"} />
      {user && (
        <MainProfile>
          <section className="user-infos-section">
            <DefaultProfilePicture
              username={user.name}
              width="104px"
              height="104px"
            />
            <div className="user-title-div">
              <h3>{user.name}</h3>
              <span>
                {" "}
                {user.type === "advertiser" ? "Anunciante" : "Comprador"}
              </span>
            </div>
            <p>{user.description}</p>
            <Button
              width="160px"
              fontColor="var(--brand-1)"
              borderColor="var(--brand-1)"
              onClick={() => setCreateAdModal(!createAdModal)}
            >
              Criar Anúncio
            </Button>
          </section>
          {auctionAds.length > 0 && (
            <section className="products-section">
              <h2>Leilão</h2>
              <ul className="auction-list products-list">
                {auctionAds.map((ad) => {
                  return (
                    <ProductCardAuctionAdm
                      editFunction={() => setUpdateAdModal(!updateAdModal)}
                      key={ad.id}
                      id={ad.id}
                      title={ad.title}
                      description={ad.description}
                      mileage={ad.mileage}
                      year={ad.year}
                      price={ad.price}
                      images={ad.images.find(
                        ({ is_front }) => is_front === true
                      )}
                    />
                  );
                })}
              </ul>
            </section>
          )}

          {carAds.length > 0 && (
            <section className="products-section car-list-section">
              <h2>Carros</h2>
              <ul className="products-list">
                {carAds.map((ad) => {
                  return (
                    <ProductCardAdm
                      editFunction={() => setUpdateAdModal(!updateAdModal)}
                      key={ad.id}
                      id={ad.id}
                      title={ad.title}
                      description={ad.description}
                      mileage={ad.mileage}
                      year={ad.year}
                      price={ad.price}
                      images={ad.images.find(
                        ({ is_front }) => is_front === true
                      )}
                    />
                  );
                })}
              </ul>
            </section>
          )}

          {motoAds.length > 0 && (
            <section className="products-section motorcycle-list-section">
              <h2>Motos</h2>
              <ul className="products-list">
                {motoAds.map((ad) => {
                  return (
                    <ProductCardAdm
                      editFunction={() => setUpdateAdModal(!updateAdModal)}
                      key={ad.id}
                      id={ad.id}
                      title={ad.title}
                      description={ad.description}
                      mileage={ad.mileage}
                      year={ad.year}
                      price={ad.price}
                      images={ad.images.find(
                        ({ is_front }) => is_front === true
                      )}
                    />
                  );
                })}
              </ul>
            </section>
          )}
        </MainProfile>
      )}

      <Footer />
    </>
  );
};

export default Profile;
