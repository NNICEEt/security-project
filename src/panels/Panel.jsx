import { useContext } from "react";
import { PanelContext } from "../context/panel";

/*---------------------------------------- UI Component ----------------------------------------*/
import { Box, NumberInput, NumberInputField } from "@chakra-ui/react";

/*---------------------------------------- Util ----------------------------------------*/
import { panel } from "../utils/panel";

const Panel = () => {
  const { selectedPanel } = useContext(PanelContext);

  return (
    <Box>
      {selectedPanel === panel.caesarCipher && (
        <Box>
          <NumberInput
            defaultValue={0}
            min={0}
            keepWithinRange={true}
            clampValueOnBlur={true}
          >
            <NumberInputField />
          </NumberInput>
        </Box>
      )}
      {selectedPanel === panel.vigenereCipher && <Box>Vigenere Cipher</Box>}
      {selectedPanel === panel.railFenceCipher && <Box>Rail Fence Cipher</Box>}
      {selectedPanel === panel.rsa && <Box>RSA</Box>}
    </Box>
  );
};

export default Panel;
