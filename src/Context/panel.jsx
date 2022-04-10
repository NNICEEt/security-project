import { createContext, useState } from "react";

export const PanelContext = createContext();

export const PanelProvider = ({ children }) => {
  const [selectedPanel, setSelectedPanel] = useState(1);
  return (
    <PanelContext.Provider value={{ selectedPanel, setSelectedPanel }}>
      {children}
    </PanelContext.Provider>
  );
};
