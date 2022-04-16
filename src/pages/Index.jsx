import { useContext } from "react";
import { PanelContext } from "../contexts/panel";
import rsaService from "../services/rsaService";
import ceasarService from "../services/ceasarService";
import railFenceCipher from "../services/railFenceService";
import vigenereService from "../services/viginereService";
import RSA from "../pages/RSA";

/*---------------------------------------- Component ----------------------------------------*/
import Form from "./Form";

/*---------------------------------------- UI Component ----------------------------------------*/
import { Box, Text } from "@chakra-ui/react";

/*---------------------------------------- Util ----------------------------------------*/
import { panel } from "../utils/panel";

const Index = () => {
  const { selectedPanel } = useContext(PanelContext);

  return (
    <Box p={5}>
      {selectedPanel === panel.caesarCipher && (
        <Form cipher={ceasarService} type={"number"} name={panel.caesarCipher} />
      )}
      {selectedPanel === panel.vigenereCipher && (
        <Form cipher={vigenereService} type={"text"} name={panel.vigenereCipher} />
      )}
      {selectedPanel === panel.railFenceCipher && (
        <Form cipher={railFenceCipher} type={"number"} name={panel.railFenceCipher} />
      )}
      {selectedPanel === panel.rsa && 
        <RSA cipher={rsaService}/>
      }
    </Box>
  );
};

export default Index;
