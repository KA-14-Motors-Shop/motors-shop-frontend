import { createContext, useState } from "react";

export const AdFilterContext = createContext();

export const AdFilterProvider = ({ children }) => {
  const [adFilter, setAdFilter] = useState(false);

  return (
    <AdFilterContext.Provider
      value={{
        adFilter,
        setAdFilter,
      }}
    >
      {children}
    </AdFilterContext.Provider>
  );
};
