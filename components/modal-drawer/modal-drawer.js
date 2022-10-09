import { createPortal } from "react-dom";
import { useEffect, useState } from "react";

const ModalDrawer = ({ component }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  if (isBrowser) {
    return createPortal(component, document.getElementById("modal-root"));
  } else return null;
};

export default ModalDrawer;
