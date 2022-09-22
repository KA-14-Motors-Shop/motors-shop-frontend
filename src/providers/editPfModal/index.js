import { createContext, useState } from "react";

export const EditPfModalContext = createContext();

export const EditPfModalProvider = ({ children }) => {
  const [editPfModal, setEditPfModal] = useState(false);
  const [fromOtherPageModal, setFromOtherPageModal] = useState(false);

  return (
    <EditPfModalContext.Provider
      value={{
        editPfModal,
        setEditPfModal,
        fromOtherPageModal,
        setFromOtherPageModal,
      }}
    >
      {children}
    </EditPfModalContext.Provider>
  );
};
