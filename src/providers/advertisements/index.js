import { createContext, useEffect, useState } from "react";
import { apiDeploy } from "../../services/api";

export const AdvertisementsContext = createContext([]);

export const AdvertisemenstProvider = ({ children }) => {
  const [advertisements, setAdvertisements] = useState([]);

  useEffect(() => {
    apiDeploy
      .get("ads")
      .then((resp) => setAdvertisements(resp.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <AdvertisementsContext.Provider value={{ advertisements }}>
      {children}
    </AdvertisementsContext.Provider>
  );
};
