import { AuthProvider } from "./auth";
import { AdvertisemenstProvider } from "./advertisements";

const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <AdvertisemenstProvider> {children}</AdvertisemenstProvider>
    </AuthProvider>
  );
};

export default Providers;
