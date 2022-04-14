import { useContext } from "react";
import { PanelContext } from "../contexts/panel";
import rsaService from "../services/rsaService";

/*---------------------------------------- Component ----------------------------------------*/
import Vigenere from "./Vigenere";

/*---------------------------------------- UI Component ----------------------------------------*/
import { Box } from "@chakra-ui/react";

/*---------------------------------------- Util ----------------------------------------*/
import { panel } from "../utils/panel";

const Panel = () => {
  const { selectedPanel } = useContext(PanelContext);
  const { generateKey } = rsaService();

  const test = async () => {
    const data = await generateKey(256);
    console.log(data);
  };

  console.log("re-render")

  return (
    <Box p={5}>
      {selectedPanel === panel.caesarCipher && (
        <Box>
          <button onClick={test}>caesarCipher</button>
        </Box>
      )}
      {selectedPanel === panel.vigenereCipher && <Vigenere />}
      {selectedPanel === panel.railFenceCipher && <Box>Rail Fence Cipher</Box>}
      {selectedPanel === panel.rsa && <Box>RSA</Box>}
    </Box>
  );
};

export default Panel;
