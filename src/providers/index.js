import { AuthProvider } from "./auth";
import { ModalProvider } from "./modal";

const Providers = ({ children }) => {
  return (
    <ModalProvider>
      <AuthProvider>{children}</AuthProvider>
    </ModalProvider>
  );
};

export default Providers;
