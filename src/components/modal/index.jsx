import * as styles from "./styles";
import { GrClose } from "react-icons/gr";
import { useContext, useEffect, useState } from "react";
import { ModalContext } from "../../providers/modal";

const AnuncioModal = ({ title, children }) => {
  const { showModal, setShowModal } = useContext(ModalContext);
  const [rootHeight, setRootHeight] = useState(
    window.getComputedStyle(document.getElementById("root")).height
  );

  useEffect(() => {
    setRootHeight(
      window.getComputedStyle(document.getElementById("root")).height
    );
  }, [showModal]);

  return (
    <styles.GenericModal height={rootHeight}>
      <div className="generic-modal">
        <div>
          <h2>{title}</h2>
          <GrClose
            onClick={() => {
              setShowModal(!showModal);
              console.log(showModal);
            }}
          />
        </div>
        {children}
      </div>
    </styles.GenericModal>
  );
};

export default AnuncioModal;
