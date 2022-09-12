import { useState } from "react";
import ModalContainer from "./styled";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { apiDeploy } from "../../../services/api";
import AnuncioModal from "../../modal";
import Button from "../../Button";
import Input from "../../input";
import { useContext } from "react";
import { AuthContext } from "../../../providers/auth";
import { toast } from "react-toastify";

const CreateAdModal = ({ modalState, setModalState }) => {
  const [advertisementType, setAdvertisementType] = useState("sale");
  const [vehicleType, setVehicleType] = useState("car");
  const [frontImage, setFrontImage] = useState(null);
  const [galleryImages, setGalleryImages] = useState([]);
  const [frontImageError, setFrontImageError] = useState(false);
  const [galleryError, setGalleryError] = useState(false);

  const { token } = useContext(AuthContext);

  const schema = yup.object().shape({
    title: yup.string().required("Título é um campo obrigatório"),
    year: yup
      .number()
      .typeError("Ano deve ser um número")
      .integer("Ano deve ser um inteiro")
      .positive("Ano deve ser positivo")
      .required("Ano é um campo obrigatório"),
    mileage: yup
      .number()
      .typeError("Quilometragem deve ser um número")
      .min(0, "Quilometragem deve ser positivo")
      .integer("Quilometragem deve ser um inteiro")
      .required("Quilometragem é um campo obrigatório"),
    price: yup
      .number()
      .typeError("Preço deve ser um número")
      .positive("Preço deve ser positivo")
      .required("Preço é um campo obrigatório"),
    description: yup.string().required("Descrição é um campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmitFunction = (data) => {
    if (!frontImage) {
      return setFrontImageError(true);
    }

    if (!galleryImages.length) {
      return setGalleryError(true);
    }

    const completeData = {
      ...data,
      type: advertisementType,
      vehicle_type: vehicleType,
      front: frontImage,
    };

    const request = new FormData();

    Object.keys(completeData).forEach((key) => {
      request.append(key, completeData[key]);
    });

    request.append("is_active", true);

    galleryImages.forEach((img) => {
      request.append("image", img);
    });

    apiDeploy
      .post("/ads", request, {
        headers: {
          "Content-type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        toast.success("Novo anúncio criado");
      })
      .catch((err) => console.log(err));

    setModalState(!modalState);
  };

  return (
    <ModalContainer adType={advertisementType} vhType={vehicleType}>
      <AnuncioModal
        title={"Criar anúncio"}
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
              {errors.title?.message && <span>{errors.title.message}</span>}
            </div>

            <div className="vehicle-numbers-div">
              <div className="minors-inputs-div">
                <div>
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
                  {errors.year?.message && <span>{errors.year.message}</span>}
                </div>

                <div>
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
                  {errors.mileage?.message && (
                    <span>{errors.mileage.message}</span>
                  )}
                </div>
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
                {errors.price?.message && <span>{errors.price.message}</span>}
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
              {errors.description?.message && (
                <span>{errors.description.message}</span>
              )}
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
                Adicionar Imagem de Capa
              </label>
              <input
                type="file"
                accept="image/png, image/jpg, image/jpeg"
                id="select-principal-image"
                onChange={(e) => {
                  setFrontImage(e.target.files[0]);
                  setFrontImageError(false);
                }}
              />
              {frontImage && <span>{frontImage.name} Selecionada</span>}
              {frontImageError && (
                <span className="images-error-span">
                  Imagem de capa é obrigatório
                </span>
              )}
            </div>

            <div className="gallery-images-div">
              <label htmlFor="select-gallery-image">
                Adicionar Imagem para galeria
              </label>
              <input
                type="file"
                accept="image/png, image/jpg, image/jpeg"
                id="select-gallery-image"
                onChange={(e) => {
                  setGalleryImages([...galleryImages, e.target.files[0]]);
                  setGalleryError(false);
                }}
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
              {galleryError && (
                <span className="images-error-span">
                  É obrigatório ao menos 1 imagem
                </span>
              )}
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
    </ModalContainer>
  );
};

export default CreateAdModal;
