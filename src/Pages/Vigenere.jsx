import { useState } from "react";
import useViginere from "../services/useViginereCipher";

/*---------------------------------------- UI Component ----------------------------------------*/
import { Box, Input, Text, Textarea, Button } from "@chakra-ui/react";

const Vigenere = () => {
  //Encrypt
  const [enInputText, setEnInputText] = useState("");
  const [enKeyInput, setEnKeyInput] = useState("");
  const [enResult, setEnResult] = useState("");
  //Decrypt
  const [deInputText, setDeInputText] = useState("");
  const [deKeyInput, setDeKeyInput] = useState("");
  const [deResult, setDeResult] = useState("");

  const { encrypt, decrypt } = useViginere();

  const enBtnDisabled = !(enInputText && enKeyInput);
  const deBtnDisabled = !(deInputText && deKeyInput);

  const onEncrypt = () => {
    const result = encrypt(enInputText, enKeyInput);
    setEnResult(result);
  };

  const onDecrypt = () => {
    const result = decrypt(deInputText, deKeyInput);
    setDeResult(result);
  };

  return (
    <Box
      p={5}
      bgColor={"white"}
      display={"flex"}
      flexDirection={{ base: "column", lg: "row" }}
      rounded={"md"}
      border={"1px"}
      borderColor={"blackAlpha.200"}
      boxShadow="base"
    >
      <Box p={3} flex={1}>
        <Text pb={4} fontSize={"3xl"} fontWeight={300}>
          Encryption
        </Text>
        <Text p={3} fontSize={"lg"}>
          Plain Text
        </Text>
        <Textarea
          minHeight={200}
          focusBorderColor={"green.200"}
          resize={"none"}
          placeholder="Plaintext"
          value={enInputText}
          onChange={(e) => setEnInputText(e.target.value)}
        />
        <Text p={3} fontSize={"lg"}>
          Key
        </Text>
        <Box
          pb={4}
          display={"flex"}
          flexDirection={{ base: "column", md: "row" }}
          justifyContent={"space-between"}
          gap={{ base: 5, md: 0 }}
        >
          <Input
            maxWidth={{ base: "100%", md: 300 }}
            focusBorderColor={"green.200"}
            placeholder="Key"
            value={enKeyInput}
            onChange={(e) => setEnKeyInput(e.target.value)}
          />
          <Button
            colorScheme={"green"}
            onClick={onEncrypt}
            disabled={enBtnDisabled}
          >
            Encrypt
          </Button>
        </Box>
        <Text p={3} fontSize={"lg"}>
          Result
        </Text>
        <Textarea
          minHeight={200}
          focusBorderColor={"green.200"}
          placeholder="Result"
          value={enResult}
          isReadOnly
        />
      </Box>
      <Box width={"2px"} mx={5} bgColor={"blackAlpha.300"}></Box>
      <Box p={3} flex={1}>
        <Text pb={4} fontSize={"3xl"} fontWeight={300}>
          Decryption
        </Text>
        <Text p={3} fontSize={"lg"}>
          Cypher Text
        </Text>
        <Textarea
          minHeight={200}
          focusBorderColor={"green.200"}
          resize={"none"}
          placeholder="Plaintext"
          value={deInputText}
          onChange={(e) => setDeInputText(e.target.value)}
        />
        <Text p={3} fontSize={"lg"}>
          Key
        </Text>
        <Box
          pb={4}
          display={"flex"}
          flexDirection={{ base: "column", md: "row" }}
          justifyContent={"space-between"}
          gap={{ base: 5, md: 0 }}
        >
          <Input
            maxWidth={{ base: "100%", md: 300 }}
            focusBorderColor={"green.200"}
            placeholder="Key"
            value={deKeyInput}
            onChange={(e) => setDeKeyInput(e.target.value)}
          />
          <Button
            colorScheme={"green"}
            onClick={onDecrypt}
            disabled={deBtnDisabled}
          >
            Decrypt
          </Button>
        </Box>
        <Text p={3} fontSize={"lg"}>
          Result
        </Text>
        <Textarea
          minHeight={200}
          focusBorderColor={"green.200"}
          placeholder="Result"
          value={deResult}
          isReadOnly
        />
      </Box>
    </Box>
  );
};

export default Vigenere;
