import { createContext, useEffect, useState } from "react";
import { apiDeploy } from "../../services/api";

export const AdvertisementsContext = createContext([]);

export const AdvertisemenstProvider = ({ children }) => {
  const [advertisements, setAdvertisements] = useState([]);
  const [getAdvertisements, setGetAdvertisements] = useState(false);

  useEffect(() => {
    apiDeploy
      .get("ads")
      .then((resp) => setAdvertisements(resp.data))
      .catch((err) => console.log(err));
  }, [getAdvertisements]);

  return (
    <AdvertisementsContext.Provider
      value={{ advertisements, getAdvertisements, setGetAdvertisements }}
    >
      {children}
    </AdvertisementsContext.Provider>
  );
};
