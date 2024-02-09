import * as styles from "./styles";
import { IoMdClose } from "react-icons/io";
import { useEffect, useState } from "react";

const AnuncioModal = ({
  title,
  children,
  modalState,
  setModalState,
  modalType,
}) => {
  const [rootHeight, setRootHeight] = useState(
    getComputedStyle(document.getElementById("root")).height
  );

  useEffect(() => {
    setRootHeight(getComputedStyle(document.getElementById("root")).height);

    if (modalState) {
      document.body.style.overflow = "hidden";
      window.scrollTo(0, 0);
    }
  }, [modalState]);

  return (
    <styles.GenericModal height={rootHeight} modalType={modalType}>
      <div className="generic-modal" id="generic-modal">
        <div className="modal-header-div">
          <h2>{title}</h2>
          <IoMdClose
            onClick={() => {
              setModalState(!modalState);
              document.body.style.overflow = "auto";
            }}
          />
        </div>
        {children}
      </div>
    </styles.GenericModal>
  );
};

export default AnuncioModal;
