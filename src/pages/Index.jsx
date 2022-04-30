import { useContext, useEffect } from "react";
import { PanelContext } from "../contexts/panel";

import rsaService from "../services/rsaService";
import ceasarService from "../services/ceasarService";
import railFenceCipher from "../services/railFenceService";
import vigenereService from "../services/vigenereService";

import { BASE_URL } from "../services/apiConstants";
/*---------------------------------------- Component ----------------------------------------*/
import Form from "./Form";
import RSA from "../pages/RSA";

/*---------------------------------------- UI Component ----------------------------------------*/
import { Box } from "@chakra-ui/react";

/*---------------------------------------- Util ----------------------------------------*/
import { panel } from "../utils/panel";

const Index = () => {
  const { selectedPanel } = useContext(PanelContext);

  useEffect(() => {
    fetch(BASE_URL);
  }, []);

  return (
    <Box p={5}>
      {selectedPanel === panel.caesarCipher && (
        <Form
          cipher={ceasarService}
          type={"number"}
          name={panel.caesarCipher}
        />
      )}
      {selectedPanel === panel.vigenereCipher && (
        <Form
          cipher={vigenereService}
          type={"text"}
          name={panel.vigenereCipher}
        />
      )}
      {selectedPanel === panel.railFenceCipher && (
        <Form
          cipher={railFenceCipher}
          type={"number"}
          name={panel.railFenceCipher}
        />
      )}
      {selectedPanel === panel.rsa && <RSA cipher={rsaService} />}
    </Box>
  );
};

export default Index;
