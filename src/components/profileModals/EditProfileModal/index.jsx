import { EditProfileContainer } from "./styles";
import { GrClose } from "react-icons/gr";
import Input from "../../input";
import Button from "../../Button";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const EditProfileModal = ({ isOpen = false, user }) => {
  const schema = yup.object().shape({
    name: yup.string(),
    email: yup.string().email("Email invalido"),
    cpf: yup.string(),
    cellphone: yup.string(),
    birthday: yup.string(),
    description: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleEditProfile = (data) => {
    console.log(data);
  };

  return (
    <EditProfileContainer>
      <div className="edit__profile__header">
        <h4 className="edit__profile__title">Editar perfil</h4>
        <GrClose className="close__icon" size={15} />
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
        />

        <Input
          label="Email"
          name="email"
          width="98%"
          height="48px"
          register={register}
          errored={errors?.email}
          placeholder={user?.email}
        />

        <Input
          label="CPF"
          name="cpf"
          width="98%"
          height="48px"
          register={register}
          errored={errors?.cpf}
          placeholder={user?.cpf}
        />

        <Input
          label="Celular"
          name="cellphone"
          width="98%"
          height="48px"
          register={register}
          errored={errors?.cellphone}
          placeholder={user?.cell_phone}
        />

        <Input
          label="Data de nascimento"
          name="birthday"
          width="98%"
          height="48px"
          register={register}
          errored={errors?.birthday}
          placeholder={user?.birthday}
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
            onClick={() => !isOpen}
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
  );
};

export default EditProfileModal;
