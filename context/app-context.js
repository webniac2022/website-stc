import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppWrapper = ({ children }) => {
  const [showSideDrawer, setShowSideDrawer] = useState(false);
  const [showFab, setShowFab] = useState(false);
  const [tabs, setTabs] = useState([
    { name: "Acasa", path: "/", id: "acasa" },
    { name: "Despre", path: "despre", id: "despre" },
    { name: "Servicii", path: "servicii", id: "servicii" },
    { name: "Contact", path: "contact", id: "contact" },
  ]);

  const toggleSideDrawer = () => {
    setShowSideDrawer(!showSideDrawer);
  };

  const value = { tabs, toggleSideDrawer, showSideDrawer, showFab, setShowFab };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};
