import * as originalModal from "../modal/styles"
import { IoMdClose } from "react-icons/io";
import { useEffect, useState } from "react";

const SucessoModal = ({ title, children, modalState, setModalState }) => {
  const [rootHeight, setRootHeight] = useState(
    getComputedStyle(document.getElementById("root")).height
  );

  useEffect(() => {
    setRootHeight(getComputedStyle(document.getElementById("root")).height);
  }, [modalState]);

  return (
    <originalModal.GenericModal height={rootHeight} style={{right:0, top:0}}>
      <div className="generic-modal" style={{height:"300px", padding: "10px 15px",}}>
        <div className="modal-header-div">
          <h2>{title}</h2>
          <IoMdClose
            onClick={() => {
              setModalState(!modalState);
            }}
          />
        </div>
        {children}
      </div>
    </originalModal.GenericModal>
  );
};

export default SucessoModal;
