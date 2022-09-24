import AnuncioModal from "../../modal";
import { EditAdrsContainer } from "./styles";

const EditAddressModal = ({ modalState, setModalState }) => {
  return (
    <EditAdrsContainer>
      <AnuncioModal
        title="Editar endereço"
        modalState={modalState}
        setModalState={setModalState}
      ></AnuncioModal>
    </EditAdrsContainer>
  );
};

export default EditAddressModal;
