import { createContext, useState } from "react";

export const EditPfModalContext = createContext();

export const EditPfModalProvider = ({ children }) => {
  const [editPfModal, setEditPfModal] = useState(false);
  const [editPfOtherPage, setEditPfOtherPage] = useState(false);

  const [editAdrsModal, setEditAdrsModal] = useState(false);
  const [editAdrsOtherPage, setEditAdrsOtherPage] = useState(false);

  return (
    <EditPfModalContext.Provider
      value={{
        editPfModal,
        setEditPfModal,
        editPfOtherPage,
        setEditPfOtherPage,
        editAdrsModal,
        setEditAdrsModal,
        editAdrsOtherPage,
        setEditAdrsOtherPage,
      }}
    >
      {children}
    </EditPfModalContext.Provider>
  );
};
