import { useContext } from "react";
import { PanelContext } from "../context/panel";
import Viginere from './Viginere';
/*---------------------------------------- UI Component ----------------------------------------*/
import { Box, NumberInput, NumberInputField, Button } from "@chakra-ui/react";

/*---------------------------------------- Util ----------------------------------------*/
import { panel } from "../utils/panel";

const Panel = () => {
  const { selectedPanel } = useContext(PanelContext);

  return (
    <Box>
      {selectedPanel === panel.caesarCipher && (
        <Box>
          <Button></Button>
        </Box>
      )}
      {selectedPanel === panel.vigenereCipher &&
        <Box>
          <Viginere/>
        </Box>}
      {selectedPanel === panel.railFenceCipher && <Box>Rail Fence Cipher</Box>}
      {selectedPanel === panel.rsa && <Box>RSA</Box>}
    </Box>
  );
};

export default Panel;
