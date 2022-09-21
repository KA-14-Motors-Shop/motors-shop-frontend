import { AuthProvider } from "./auth";
import { AdvertisemenstProvider } from "./advertisements";
import { EditPfModalProvider } from "./editPfModal";

const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <AdvertisemenstProvider>
        <EditPfModalProvider> {children} </EditPfModalProvider>
      </AdvertisemenstProvider>
    </AuthProvider>
  );
};

export default Providers;
