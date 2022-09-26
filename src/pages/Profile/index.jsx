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
import { useEffect } from "react";
import { apiDeploy } from "../../services/api";
import DeleteAdModal from "../../components/profileModals/DeleteAd";
import EditProfileModal from "../../components/profileModals/EditProfileModal";
import { EditPfModalContext } from "../../providers/editPfModal";
import EditAddressModal from "../../components/profileModals/EditAddressModal";

const Profile = () => {
  const { authenticated, token, setAuthenticated } = useContext(AuthContext);

  const [createAdModal, setCreateAdModal] = useState(false);
  const [updateAdModal, setUpdateAdModal] = useState(false);
  const [deleteAdModal, setDeleteAdModal] = useState(false);
  const [updateInfos, setUpdateInfos] = useState({});
  const [user, setUser] = useState([]);
  const [auctionAds, setAuctionAds] = useState([]);
  const [carAds, setCarAds] = useState([]);
  const [motoAds, setMotoAds] = useState([]);
  const [makeGet, setMakeGet] = useState(false);

  const {
    setEditPfModal,
    editPfModal,
    editPfOtherPage,
    setEditPfOtherPage,
    editAdrsModal,
    setEditAdrsModal,
    editAdrsOtherPage,
    setEditAdrsOtherPage,
  } = useContext(EditPfModalContext);

  useEffect(() => {
    apiDeploy
      .get("users/me", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((resp) => {
        setUser(resp.data);
        setAuctionAds(
          resp.data.advertisements.filter(({ type }) => type === "auction")
        );
        setCarAds(
          resp.data.advertisements.filter(
            ({ type, vehicle_type }) =>
              type === "sale" && vehicle_type === "car"
          )
        );
        setMotoAds(
          resp.data.advertisements.filter(
            ({ type, vehicle_type }) =>
              type === "sale" && vehicle_type === "motorcycle"
          )
        );
        localStorage.setItem("@MotorShop:user", JSON.stringify(resp.data));

        if (editPfOtherPage) {
          setEditPfModal(true);
          setEditPfOtherPage(false);
        }

        if (editAdrsOtherPage) {
          setEditAdrsModal(true);
          setEditAdrsOtherPage(false);
        }
      })
      .catch((err) => {
        console.log(err);
        localStorage.clear();
        setAuthenticated(false);
      });
  }, [makeGet, token]);

  if (!authenticated) {
    return <Redirect to="/login" />;
  }

  const completeUpdateInfos = (e) => {
    const advertisementID = e.target.parentElement.parentElement.id;

    const ad = user.advertisements.find(({ id }) => id === advertisementID);

    setUpdateInfos(ad);

    setUpdateAdModal(!updateAdModal);
  };

  return (
    <>
      {createAdModal && (
        <CreateAdModal
          modalState={createAdModal}
          setModalState={setCreateAdModal}
          makeGet={makeGet}
          setMakeGet={setMakeGet}
        />
      )}
      {updateAdModal && (
        <UpdateAdModal
          modalState={updateAdModal}
          setModalState={setUpdateAdModal}
          infos={updateInfos}
          makeGet={makeGet}
          setMakeGet={setMakeGet}
          deleteState={deleteAdModal}
          setDeleteState={setDeleteAdModal}
        />
      )}
      {deleteAdModal && (
        <DeleteAdModal
          modalState={deleteAdModal}
          setModalState={setDeleteAdModal}
          makeGet={makeGet}
          setMakeGet={setMakeGet}
          id={updateInfos.id}
        />
      )}

      <EditProfileModal user={user} editPfModal={editPfModal} />

      {editAdrsModal && (
        <EditAddressModal
          modalState={editAdrsModal}
          setModalState={setEditAdrsModal}
          user={user}
        />
      )}

      <Header isLoggedIn username={user.name} />
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
                    editFunction={(e) => completeUpdateInfos(e)}
                    key={ad.id}
                    id={ad.id}
                    title={ad.title}
                    description={ad.description}
                    mileage={ad.mileage}
                    year={ad.year}
                    price={ad.price}
                    images={ad.images.find(({ is_front }) => is_front === true)}
                    is_active={ad.is_active}
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
                    editFunction={(e) => completeUpdateInfos(e)}
                    key={ad.id}
                    id={ad.id}
                    title={ad.title}
                    description={ad.description}
                    mileage={ad.mileage}
                    year={ad.year}
                    price={ad.price}
                    images={ad.images.find(({ is_front }) => is_front === true)}
                    is_active={ad.is_active}
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
                    editFunction={(e) => completeUpdateInfos(e)}
                    key={ad.id}
                    id={ad.id}
                    title={ad.title}
                    description={ad.description}
                    mileage={ad.mileage}
                    year={ad.year}
                    price={ad.price}
                    images={ad.images.find(({ is_front }) => is_front === true)}
                    is_active={ad.is_active}
                  />
                );
              })}
            </ul>
          </section>
        )}
      </MainProfile>
      <Footer />
    </>
  );
};

export default Profile;
