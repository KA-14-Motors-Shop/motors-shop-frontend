import AnuncioModal from "../../modal";
import { EditAdrsContainer } from "./styles";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const EditAddressModal = ({ modalState, setModalState }) => {
  const schema = yup.object().shape({
    cep: yup.string(),
    state: yup.string(),
    city: yup.string(),
    street: yup.string(),
    number: yup.number(),
    complement: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = (data) => {
    console.log(data);
  };

  return (
    <EditAdrsContainer>
      <AnuncioModal
        title="Editar endereço"
        modalState={modalState}
        setModalState={setModalState}
      >
        <form
          className="edit__address__form"
          onSubmit={handleSubmit(onSubmitFunction)}
        >
          <h6>Informações de endereço</h6>
        </form>
      </AnuncioModal>
    </EditAdrsContainer>
  );
};

export default EditAddressModal;
