import { MainProfile, ModalContainer } from "./styled";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import DefaultProfilePicture from "../../components/DefaultProfilePicture";
import Button from "../../components/Button";
import ProductCardAdm from "../../components/Cards/ProductCardAdm";
import ProductCardAuctionAdm from "../../components/Cards/ProductCardAuctionAdm";
import { useContext, useState } from "react";
import { ModalContext } from "../../providers/modal";
import AnuncioModal from "../../components/modal";
import Input from "../../components/input";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { apiDeploy, apiLocal } from "../../services/api";

const Profile = () => {
  const { showModal, setShowModal } = useContext(ModalContext);

  const [advertisementType, setAdvertisementType] = useState("sale");
  const [vehicleType, setVehicleType] = useState("car");
  const [frontImage, setFrontImage] = useState(null);
  const [galleryImages, setGalleryImages] = useState([]);

  const schema = yup.object().shape({
    title: yup.string().required("Título é um campo obrigatório"),
    year: yup
      .number()
      .integer()
      .positive()
      .required("Ano é um campo obrigatório"),
    mileage: yup
      .number()
      .min(0)
      .integer()
      .required("Quilometragem é um campo obrigatório"),
    price: yup.number().positive().required("Preço é um campo obrigatório"),
    description: yup.string().required("Descrição é um campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const cleanImages = () => {
    setFrontImage(null);
    setGalleryImages([]);
  };

  const onSubmitFunction = (data) => {
    const completeData = {
      ...data,
      type: advertisementType,
      vehicle_type: vehicleType,
      front: frontImage,
    };

    // const request = new FormData();

    // Object.keys(completeData).forEach((key) => {
    //   request.append(key, completeData[key]);
    // });

    // request.append("is_active", true);

    // galleryImages.forEach((img) => {
    //   request.append("image", img);
    // });

    // api
    //   .post("/ads", request, {
    //     headers: {
    //       "Content-type": "multipart/form-data",
    //       Authorization:
    //         "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imd1aUBtYWlsLmNvbSIsImlhdCI6MTY2MDg5MjkxMywiZXhwIjoxNjYwOTc5MzEzfQ.E6T3WL0ELxkFLSfKRKvzK-3L7nuX85-_f-OZ7p_XYiE",
    //     },
    //   })
    //   .then((resp) => console.log(resp))
    //   .catch((err) => console.log(err));

    setShowModal(!showModal);
  };

  return (
    <>
      <ModalContainer adType={advertisementType} vhType={vehicleType}>
        {showModal && (
          <AnuncioModal title={"Criar anúncio"}>
            <form onSubmit={handleSubmit(onSubmitFunction)}>
              <h6>Tipo de anúncio</h6>
              <div className="advertisement-buttons-div">
                <Button
                  type="button"
                  width="47%"
                  className="sale-button"
                  onClick={() => setAdvertisementType("sale")}
                >
                  Venda
                </Button>
                <Button
                  type="button"
                  width="47%"
                  className="auction-button"
                  onClick={() => setAdvertisementType("auction")}
                >
                  Leilão
                </Button>
              </div>

              <section className="vehicle-infos-section">
                <h6>Informações do veículo</h6>

                <div className="title-input-div">
                  <Input
                    register={register}
                    errored={errors.title}
                    name="title"
                    inputOrNot={true}
                    className="div-input"
                    width={"315px"}
                    height={"48px"}
                    label={"Título"}
                    placeholder={"Digitar título"}
                  />
                </div>

                <div className="vehicle-numbers-div">
                  <div className="minors-inputs-div">
                    <Input
                      register={register}
                      errored={errors.year}
                      name="year"
                      inputOrNot={true}
                      className="div-input"
                      width={"315px"}
                      height={"48px"}
                      label={"Ano"}
                      placeholder={"Ex: 2018"}
                    />
                    <Input
                      register={register}
                      errored={errors.mileage}
                      name="mileage"
                      inputOrNot={true}
                      className="div-input"
                      width={"315px"}
                      height={"48px"}
                      label={"Quilometragem"}
                      placeholder={"Ex: 0"}
                    />
                  </div>

                  <div className="price-input-div">
                    <Input
                      register={register}
                      errored={errors.price}
                      name="price"
                      inputOrNot={true}
                      className="div-input"
                      width={"315px"}
                      height={"48px"}
                      label={
                        advertisementType === "sale" ? "Preço" : "Lance Inicial"
                      }
                      placeholder={"Ex: 50.000,00"}
                    />
                  </div>
                </div>

                <div className="description-input-div">
                  <Input
                    register={register}
                    errored={errors.description}
                    name="description"
                    inputOrNot={false}
                    className="div-input"
                    width={"315px"}
                    height={"48px"}
                    label={"Descrição"}
                    placeholder={"Digitar descrição"}
                  />
                </div>
              </section>

              <h6>Tipo de veículo</h6>
              <div className="vehicle-buttons-div">
                <Button
                  type="button"
                  width="47%"
                  className="car-button"
                  onClick={() => setVehicleType("car")}
                >
                  Carro
                </Button>
                <Button
                  type="button"
                  width="47%"
                  className="motorcycle-button"
                  onClick={() => setVehicleType("motorcycle")}
                >
                  Moto
                </Button>
              </div>

              <section>
                <div>
                  <input
                    type="file"
                    accept="image/png, image/jpg, image/jpeg"
                    onChange={(e) => setFrontImage(e.target.files[0])}
                    // onChange={(e) => console.log(e.target.files[0].name)}
                  />
                </div>

                <div>
                  <input
                    type="file"
                    accept="image/png, image/jpg"
                    onChange={(e) =>
                      setGalleryImages([...galleryImages, e.target.files[0]])
                    }
                  />
                </div>

                <Button>Remover Imagens</Button>
              </section>

              <div className="finalize-ad-div">
                <Button
                  type="button"
                  width="48%"
                  bgColor="var(--grey-6)"
                  borderColor="var(--grey-6)"
                  fontColor="var(--grey-2)"
                  className="cancel-button"
                  onClick={() => setShowModal(!showModal)}
                >
                  Cancelar
                </Button>
                <Button
                  type="submit"
                  width="48%"
                  bgColor="var(--brand-3)"
                  borderColor="var(--brand-3)"
                  fontColor="var(--brand-4)"
                  className="create-button"
                >
                  Criar anúncio
                </Button>
              </div>
            </form>
          </AnuncioModal>
        )}
      </ModalContainer>

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
            onClick={() => setShowModal(!showModal)}
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
