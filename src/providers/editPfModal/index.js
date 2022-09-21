import { createContext, useState } from "react";

export const EditPfModalContext = createContext();

export const EditPfModalProvider = ({ children }) => {
  const [editPfModal, setEditPfModal] = useState(false);

  return (
    <EditPfModalContext.Provider value={{ editPfModal, setEditPfModal }}>
      {children}
    </EditPfModalContext.Provider>
  );
};
