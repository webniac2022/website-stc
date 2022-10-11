import { useEffect, useState } from "react";
import { useCookieContext } from "../../context/cookie-context";
import CookieConsent from "../cookie-consent/cookie-consent";
import ModalDrawer from "../modal-drawer/modal-drawer";
import CookieSettings from "../aditional-settings-cookie-screen/cookie-settings-screen";

const Layout = ({ children }) => {
  const [isMounted, setIsMounted] = useState(false);
  const { state } = useCookieContext();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      {children}
      {state.showCookieSettingsScreen && (
        <ModalDrawer component={<CookieSettings />} />
      )}
      {isMounted && state.showCookieBanner && <CookieConsent />}
    </>
  );
};

export default Layout;
