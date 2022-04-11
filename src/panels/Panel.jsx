import { useContext } from "react";
import { PanelContext } from "../context/panel";

/*---------------------------------------- Component ----------------------------------------*/
import Viginere from "./Viginere";

/*---------------------------------------- UI Component ----------------------------------------*/
import { Box } from "@chakra-ui/react";

/*---------------------------------------- Util ----------------------------------------*/
import { panel } from "../utils/panel";

const Panel = () => {
  const { selectedPanel } = useContext(PanelContext);

  return (
    <Box p={5}>
      {selectedPanel === panel.caesarCipher && <Box>caesarCipher</Box>}
      {selectedPanel === panel.vigenereCipher && <Viginere />}
      {selectedPanel === panel.railFenceCipher && <Box>Rail Fence Cipher</Box>}
      {selectedPanel === panel.rsa && <Box>RSA</Box>}
    </Box>
  );
};

export default Panel;
