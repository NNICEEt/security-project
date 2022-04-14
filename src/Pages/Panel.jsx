import { useContext } from "react";
import { PanelContext } from "../Contexts/panel";

/*---------------------------------------- Component ----------------------------------------*/
import Vigenere from "./Vigenere";

/*---------------------------------------- UI Component ----------------------------------------*/
import { Box } from "@chakra-ui/react";

/*---------------------------------------- Util ----------------------------------------*/
import { panel } from "../Utils/panel";

const Panel = () => {
  const { selectedPanel } = useContext(PanelContext);

  return (
    <Box p={5}>
      {selectedPanel === panel.caesarCipher && <Box>caesarCipher</Box>}
      {selectedPanel === panel.vigenereCipher && <Vigenere />}
      {selectedPanel === panel.railFenceCipher && <Box>Rail Fence Cipher</Box>}
      {selectedPanel === panel.rsa && <Box>RSA</Box>}
    </Box>
  );
};

export default Panel;
