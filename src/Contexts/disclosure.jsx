import { createContext } from "react";
import { useDisclosure } from "@chakra-ui/react";

export const DisclosureContext = createContext();

export const DisclosureProvider = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <DisclosureContext.Provider value={{ isOpen, onOpen, onClose }}>
      {children}
    </DisclosureContext.Provider>
  );
};
