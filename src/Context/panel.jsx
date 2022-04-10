import { createContext, useState } from "react";
import { panel } from "../utils/panel";

export const PanelContext = createContext();

export const PanelProvider = ({ children }) => {
  const [selectedPanel, setSelectedPanel] = useState(panel.caesarCipher);
  return (
    <PanelContext.Provider value={{ selectedPanel, setSelectedPanel }}>
      {children}
    </PanelContext.Provider>
  );
};
