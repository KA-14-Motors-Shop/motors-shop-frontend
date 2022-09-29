import { EditProfileContainer, ModalBackground } from "./styles";
import { GrClose } from "react-icons/gr";
import Input from "../../input";
import Button from "../../Button";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { EditPfModalContext } from "../../../providers/editPfModal";
import { useEffect } from "react";
import { apiDeploy } from "../../../services/api";
import { AuthContext } from "../../../providers/auth";
import { toast } from "react-toastify";

const EditProfileModal = ({ user, setMakeGet, makeGet }) => {
  const schema = yup.object().shape({
    name: yup.string(),
    email: yup.string().email("Email invalido"),
    cpf: yup.string(),
    cellphone: yup.string(),
    birthday: yup.string(),
    description: yup.string(),
  });

  const { editPfModal, setEditPfModal } = useContext(EditPfModalContext);
  const { token } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [rootHeight, setRootHeight] = useState(
    window.getComputedStyle(document.getElementById("root")).height
  );

  useEffect(() => {
    setRootHeight(getComputedStyle(document.getElementById("root")).height);
  }, [editPfModal]);

  const handleEditProfile = (data) => {
    const isEmpty = Object.values(data).every((v) => v === "");

    if (isEmpty) {
      setEditPfModal(false);
      return toast.info("Campos vazios, nenhuma alteração feita.");
    }

    for (const [key, value] of Object.entries(data)) {
      if (!value) {
        delete data[key];
      }
    }

    apiDeploy
      .patch("/users", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setEditPfModal(false);
        setMakeGet(!makeGet);
        toast.success("Usuário atualizado com sucesso!");
      })
      .catch((err) => console.log(err));
  };

  return (
    <ModalBackground height={rootHeight} isActive={editPfModal}>
      <EditProfileContainer editPfModal={editPfModal}>
        <div className="edit__profile__header">
          <h4 className="edit__profile__title">Editar perfil</h4>
          <GrClose
            className="close__icon"
            size={15}
            onClick={() => setEditPfModal(false)}
          />
        </div>
        <h6 className="personal__info__text">Informações pessoais</h6>
        <form
          className="edit__profile__form"
          onSubmit={handleSubmit(handleEditProfile)}
        >
          <Input
            label="Nome"
            name="name"
            width="98%"
            height="48px"
            register={register}
            errored={errors?.name}
            placeholder={user?.name}
            inputOrNot={true}
          />

          <Input
            label="Email"
            name="email"
            width="98%"
            height="48px"
            register={register}
            errored={errors?.email}
            placeholder={user?.email}
            inputOrNot={true}
          />

          <Input
            label="CPF"
            name="cpf"
            width="98%"
            height="48px"
            register={register}
            errored={errors?.cpf}
            placeholder={user?.cpf}
            inputOrNot={true}
          />

          <Input
            label="Celular"
            name="cellphone"
            width="98%"
            height="48px"
            register={register}
            errored={errors?.cellphone}
            placeholder={user?.cell_phone}
            inputOrNot={true}
          />

          <Input
            label="Data de nascimento"
            name="birthday"
            width="98%"
            height="48px"
            register={register}
            errored={errors?.birthday}
            placeholder={user?.birthday}
            inputOrNot={true}
          />

          <Input
            label="Descrição"
            name="description"
            width="98%"
            height="75px"
            register={register}
            errored={errors?.description}
            placeholder={user?.description}
          />

          <div className="edit__profile__btns__container">
            <Button
              type="button"
              width="120px"
              height="45px"
              bgColor="var(--grey-6)"
              borderColor="var(--grey-6)"
              fontColor="var(--grey-2)"
              fontSize="14px"
              onClick={() => setEditPfModal(false)}
            >
              Cancelar
            </Button>

            <Button
              type="submit"
              className="save__button"
              width="140px"
              height="45px"
              bgColor="var(--brand-1)"
              borderColor="var(--brand-1)"
              fontColor="var(--grey-10)"
              fontSize="14px"
              onHoverColor="var(--brand-3)"
            >
              Salvar alterações
            </Button>
          </div>
        </form>
      </EditProfileContainer>
    </ModalBackground>
  );
};

export default EditProfileModal;
