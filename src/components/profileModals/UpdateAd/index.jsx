import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
// import { apiDeploy, apiLocal } from "../../../services/api";
import AnuncioModal from "../../modal";
import Button from "../../Button";
import Input from "../../input";
import ModalContainer from "./styled";

const UpdateAdModal = ({ modalState, setModalState }) => {
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

  const onSubmitFunction = (data) => {
    const completeData = {
      ...data,
      type: advertisementType,
      vehicle_type: vehicleType,
      front: frontImage,
    };

    console.log(completeData);
    console.log(galleryImages);

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

    setModalState(!modalState);
  };

  return (
    <ModalContainer adType={advertisementType} vhType={vehicleType}>
      <AnuncioModal
        title={"Editar anúncio"}
        modalState={modalState}
        setModalState={setModalState}
      >
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <h6>Tipo de anúncio</h6>
          <div className="advertisement-buttons-div">
            <Button
              type="button"
              width="49%"
              className="sale-button"
              onClick={() => setAdvertisementType("sale")}
            >
              Venda
            </Button>
            <Button
              type="button"
              width="49%"
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
              width="49%"
              className="car-button"
              onClick={() => setVehicleType("car")}
            >
              Carro
            </Button>
            <Button
              type="button"
              width="49%"
              className="motorcycle-button"
              onClick={() => setVehicleType("motorcycle")}
            >
              Moto
            </Button>
          </div>

          <section className="select-images-section">
            <div className="principal-image-div">
              <label htmlFor="select-principal-image">
                Alterar Imagem de Capa
              </label>
              <input
                type="file"
                accept="image/png, image/jpg, image/jpeg"
                id="select-principal-image"
                onChange={(e) => setFrontImage(e.target.files[0])}
              />
              {frontImage && <span>{frontImage.name} Selecionada</span>}
            </div>

            <div className="gallery-images-div">
              <label htmlFor="select-gallery-image">
                Adicionar Imagem para galeria
              </label>
              <input
                type="file"
                accept="image/png, image/jpg, image/jpeg"
                id="select-gallery-image"
                onChange={(e) =>
                  setGalleryImages([...galleryImages, e.target.files[0]])
                }
              />
              <Button
                type="button"
                width="100%"
                height="38px"
                bgColor="var(--brand-4)"
                fontColor="var(--brand-1)"
                fontSize="14px"
                className="clean-gallery-button"
                onClick={() => setGalleryImages([])}
              >
                Limpar seleção
              </Button>
              <span>
                {galleryImages.length > 1
                  ? `${galleryImages.length} imagens foram selecionadas`
                  : galleryImages.length === 1
                  ? `${galleryImages.length} imagem foi selecionada`
                  : ""}
              </span>
            </div>
          </section>

          <div className="finalize-ad-div">
            <Button
              type="button"
              width="48%"
              bgColor="var(--grey-6)"
              borderColor="var(--grey-6)"
              fontColor="var(--grey-2)"
              className="cancel-button"
              onClick={() => setModalState(!modalState)}
            >
              Excluir anúncio
            </Button>
            <Button
              type="submit"
              width="48%"
              bgColor="var(--brand-3)"
              borderColor="var(--brand-3)"
              fontColor="var(--brand-4)"
              className="create-button"
            >
              Salvar alterações
            </Button>
          </div>
        </form>
      </AnuncioModal>
    </ModalContainer>
  );
};

export default UpdateAdModal;
