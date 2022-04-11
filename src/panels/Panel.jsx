import { useContext } from "react";
import { PanelContext } from "../context/panel";

/*---------------------------------------- UI Component ----------------------------------------*/
import { Box, NumberInput, NumberInputField, Button } from "@chakra-ui/react";

import useViginereCipher from "../services/useViginereCipher";

/*---------------------------------------- Util ----------------------------------------*/
import { panel } from "../utils/panel";

const Panel = () => {
  const { selectedPanel } = useContext(PanelContext);
  const { encrypt, decrypt } = useViginereCipher();

  console.log(encrypt("Engineer", "pim"));

  return (
    <Box>
      {selectedPanel === panel.caesarCipher && (
        <Box>
          <Button></Button>
        </Box>
      )}
      {selectedPanel === panel.vigenereCipher && <Box>Vigenere Cipher</Box>}
      {selectedPanel === panel.railFenceCipher && <Box>Rail Fence Cipher</Box>}
      {selectedPanel === panel.rsa && <Box>RSA</Box>}
    </Box>
  );
};

export default Panel;
