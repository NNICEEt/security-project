import {
  Box,
  Input,
  Text,
  Textarea,
  Button,
} from "@chakra-ui/react";
import useViginere from "../services/useViginereCipher";
import { useState, useEffect } from "react";
const Form = () => {
  //Encrypt
  const [pText, setpText] = useState("");
  const [key, setkey] = useState("");
  const [result, setresult] = useState("");
  const [isEmpty, setisEmpty] = useState(true);
  //Decrypt
  const [dpText, setdpText] = useState("");
  const [dkey, setdkey] = useState("");
  const [dresult, setdresult] = useState("");
  const [disEmpty, setdisEmpty] = useState(true);

  const { encrypt, decrypt } = useViginere();
  useEffect(() => {
    if (pText !== "" && key !== "") {
      setisEmpty(false);
    } else {
      setisEmpty(true);
    }
    if (dpText !== "" && dkey !== "") {
      setdisEmpty(false);
    } else {
      setdisEmpty(true);
    }
  }, [key, pText, dpText, dkey]);

  return (
    <Box
      m={5}
      p={5}
      bgColor={"white"}
      display={"flex"}
      flexDirection={{ base: "column", lg: "row" }}
      borderRadius={10}
      border={"1px"}
      borderColor={"blackAlpha.200"}
      boxShadow="base"
    >
      <Box p={3} flex={1}>
        <Text fontSize={"3xl"} pb={5} fontWeight={300}>
          Encryption
        </Text>
        <Text p={4} fontSize={"lg"}>
          Plain Text
        </Text>
        <Textarea
          id={"text"}
          placeholder="Plaintext"
          focusBorderColor={"green.200"}
          value={pText}
          resize={"none"}
          minHeight={200}
          onChange={(e) => {
            setpText(e.target.value);
          }}
        />
        <Text p={4} fontSize={"lg"}>
          Key
        </Text>
        <Box
          pb={5}
          display={"flex"}
          justifyContent={"space-between"}
          flexDirection={{ base: "column", md: "row" }}
          gap={{ base: 5, md: 0 }}
        >
          <Input
            id="key"
            placeholder="Key"
            value={key}
            onChange={(e) => {
              setkey(e.target.value);
            }}
            maxWidth={{ base: "100%", md: 300 }}
            focusBorderColor={"green.200"}
          />
          <Button
            onClick={() => {
              setresult(encrypt(pText, key));
            }}
            colorScheme={"green"}
            disabled={isEmpty}
          >
            Encrypt
          </Button>
        </Box>
        <Text p={4} fontSize={"lg"}>
          Result
        </Text>
        <Textarea
          id={"result"}
          placeholder="Result"
          value={result}
          focusBorderColor={"green.200"}
          isReadOnly
          minHeight={200}
        />
      </Box>

      <Box width={"2px"} mx={5} bgColor={"blackAlpha.300"}></Box>
      <Box p={3} flex={1}>
        <Text fontSize={"3xl"} pb={5} fontWeight={300}>
          Decryption
        </Text>
        <Text p={4} fontSize={"lg"}>
          Cypher Text
        </Text>
        <Textarea
          id={"text"}
          placeholder="Plaintext"
          focusBorderColor={"green.200"}
          value={dpText}
          resize={"none"}
          minHeight={200}
          onChange={(e) => {
            setdpText(e.target.value);
          }}
        />
        <Text p={4} fontSize={"lg"}>
          Key
        </Text>
        <Box
          pb={5}
          display={"flex"}
          justifyContent={"space-between"}
          flexDirection={{ base: "column", lg: "row" }}
          gap={{ base: 5, md: 0 }}
        >
          <Input
            id="key"
            placeholder="Key"
            value={dkey}
            onChange={(e) => {
              setdkey(e.target.value);
            }}
            maxWidth={{ base: "100%", md: 300 }}
            focusBorderColor={"green.200"}
          />
          <Button
            onClick={() => {
              setdresult(decrypt(dpText, dkey));
            }}
            colorScheme={"green"}
            disabled={disEmpty}
          >
            Decrypt
          </Button>
        </Box>
        <Text p={4} fontSize={"lg"}>
          Result
        </Text>
        <Textarea
          id={"result"}
          placeholder="Result"
          value={dresult}
          focusBorderColor={"green.200"}
          isReadOnly
          minHeight={200}
        />
      </Box>
    </Box>
  );
};

export default Form;
