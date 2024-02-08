import { AuthProvider } from "./auth";
import { AdvertisemenstProvider } from "./advertisements";
import { EditPfModalProvider } from "./editPfModal";
import { AdFilterProvider } from "./adFilter";

const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <AdvertisemenstProvider>
        <EditPfModalProvider>
          <AdFilterProvider>{children}</AdFilterProvider>
        </EditPfModalProvider>
      </AdvertisemenstProvider>
    </AuthProvider>
  );
};

export default Providers;
