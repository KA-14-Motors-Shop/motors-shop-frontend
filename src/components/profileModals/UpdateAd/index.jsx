import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { apiDeploy } from "../../../services/api";
import AnuncioModal from "../../modal";
import Button from "../../Button";
import Input from "../../input";
import ModalContainer from "./styled";
import { AuthContext } from "../../../providers/auth";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";

const UpdateAdModal = ({
  modalState,
  setModalState,
  infos,
  makeGet,
  setMakeGet,
}) => {
  const [advertisementType, setAdvertisementType] = useState(infos.type);
  const [vehicleType, setVehicleType] = useState(infos.vehicle_type);
  const [frontImage, setFrontImage] = useState(null);
  const [galleryImages, setGalleryImages] = useState([]);
  const [actualGallery, setActualGallery] = useState(
    infos.images.filter(({ is_front }) => !is_front)
  );
  const [title, setTitle] = useState(infos.title);
  const [year, setYear] = useState(infos.year);
  const [mileage, setMileage] = useState(infos.mileage);
  const [price, setPrice] = useState(Number(infos.price));
  const [description, setDescription] = useState(infos.description);
  const [modalImage, setModalImage] = useState(0);

  const { token } = useContext(AuthContext);

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

  const changeModalImage = (comand) => {
    if (comand === "add") {
      modalImage === actualGallery.length - 1
        ? setModalImage(0)
        : setModalImage(modalImage + 1);
    } else if (comand === "sub") {
      modalImage === 0
        ? setModalImage(actualGallery.length - 1)
        : setModalImage(modalImage - 1);
    }
  };

  const deleteImage = () => {
    if (actualGallery.length === 1) {
      return toast.error(
        "Salve com ao menos 1 imagem nova para a galeria antes!"
      );
    }

    apiDeploy
      .delete(`ads/${infos.id}/image/${actualGallery[modalImage].id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((_) => {
        toast.success("Imagem deletada");

        setActualGallery(
          actualGallery.filter(({ id }) => id !== actualGallery[modalImage].id)
        );

        setModalImage(0);

        setMakeGet(!makeGet);
      })
      .catch((err) => console.log(err));
  };

  const onSubmitFunction = (data) => {
    const completeData = {
      ...data,
      type: advertisementType,
      vehicle_type: vehicleType,
    };

    const request = new FormData();

    Object.keys(completeData).forEach((key) => {
      if (completeData[key] !== infos[key]) {
        request.append(key, completeData[key]);
      }
    });

    if (galleryImages.length > 0) {
      galleryImages.forEach((img) => {
        request.append("image", img);
      });
    }

    if (frontImage) {
      request.append("front", frontImage);
    }

    apiDeploy
      .patch(`/ads/${infos.id}`, request, {
        headers: {
          "Content-type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((resp) => {
        toast.success("Anúncio atualizado!");
        setMakeGet(!makeGet);
        setModalState(!modalState);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Requisição incorreta");
      });
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
                value={title}
                onChange={(e) => setTitle(e.target.value)}
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
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
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
                  value={mileage}
                  onChange={(e) => setMileage(e.target.value)}
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
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
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
                value={description}
                onChange={(e) => setDescription(e.target.value)}
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

          <section className="gallery-section">
            <h6>Galeria atual</h6>

            <figure>
              <div className="trash-div">
                <FaTrash onClick={deleteImage} />
              </div>
              <img
                src={actualGallery[modalImage].url}
                alt={`${infos.title}_Image`}
              />
              <figcaption>{infos.title} Image</figcaption>
              <div className="move-gallery-div">
                <AiOutlineLeft
                  onClick={() => {
                    changeModalImage("sub");
                  }}
                />
                <AiOutlineRight
                  onClick={() => {
                    changeModalImage("add");
                  }}
                />
              </div>
            </figure>
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
