import { useContext } from "react";
import ModalContainer from "./styled";
import { apiDeploy } from "../../../services/api";
import AnuncioModal from "../../modal";
import Button from "../../Button";
import { toast } from "react-toastify";
import { AuthContext } from "../../../providers/auth";

const DeleteAdModal = ({
  modalState,
  setModalState,
  makeGet,
  setMakeGet,
  id,
}) => {
  const { token } = useContext(AuthContext);

  const deleteAd = () => {
    apiDeploy
      .patch(`ads/status/${id}`, null, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((_) => {
        toast.success("Anúncio excluido!");
        setMakeGet(!makeGet);
        setModalState(!modalState);
        document.body.style.overflow = "auto";
      })
      .catch((err) => {
        console.log(err);
        toast.error("Problemas com o servidor!");
      });
  };

  return (
    <ModalContainer>
      <AnuncioModal
        title={"Excluir anúncio"}
        modalState={modalState}
        setModalState={setModalState}
      >
        <span>Tem certeza que deseja remover este anúncio?</span>
        <p>
          Essa ação não pode ser desfeita. Isso excluirá permanentemente seu
          anúncio e removerá seus dados de nossos servidores.
        </p>

        <div className="ad-delete-div">
          <Button
            width="126px"
            bgColor="var(--grey-6)"
            borderColor="var(--grey-6)"
            fontColor="var(--grey-2)"
            onClick={() => {
              setModalState(!modalState);
              document.body.style.overflow = "auto";
            }}
          >
            Cancelar
          </Button>
          <Button
            width="auto"
            bgColor="var(--alert-2)"
            borderColor="var(--alert-2)"
            fontColor="var(--alert-1)"
            onClick={deleteAd}
          >
            Sim, excluir anúncio
          </Button>
        </div>
      </AnuncioModal>
    </ModalContainer>
  );
};

export default DeleteAdModal;
