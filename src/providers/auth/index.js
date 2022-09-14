import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("@MotorShop:token"));

  useEffect(() => {
    if (token) {
      setAuthenticated(true);
    }
  }, [token]);

  const handleLogout = (history) => {
    localStorage.clear();
    setAuthenticated(false);
    history.push("/");
  };

  return (
    <AuthContext.Provider
      value={{ authenticated, setAuthenticated, handleLogout, token, setToken }}
    >
      {children}
    </AuthContext.Provider>
  );
};
