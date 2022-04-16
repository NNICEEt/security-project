import { useState, useEffect } from "react";

/*---------------------------------------- UI Component ----------------------------------------*/
import {
  Box,
  Input,
  Text,
  Textarea,
  Button,
  IconButton,
  Heading,
  useClipboard,
  Select,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";
import { CopyIcon, CheckIcon } from "@chakra-ui/icons";

const Form = ({ cipher }) => {
  const [keySize, setKeySize] = useState("");
  const [publicKey, setPublicKey] = useState("");
  const [privateKey, setPrivateKey] = useState("");

  const [isLoadingEn, setIsLoadingEn] = useState(false);
  const [isLoadingDe, setIsLoadingDe] = useState(false);
  const [enInput, setEnInput] = useState({
    text: "",
    key: "",
    result: "",
  });
  const [deInput, setDeInput] = useState({
    text: "",
    key: "",
    result: "",
  });
  

  const onEncrypt = async () => {
    setIsLoadingEn(true);
    const result = await encrypt(enInput.text, enInput.key);
    setEnInput({ ...enInput, result: result.cipherText });
    setIsLoadingEn(false);
  };

  const onDecrypt = async () => {
    setIsLoadingDe(true);
    const result = await decrypt(deInput.text, deInput.key);
    setDeInput({ ...deInput, result: result.plainText });
    setIsLoadingDe(false);
  };

  const { generateKey, encrypt, decrypt } = cipher();
  

  const genKey = async (keySize) => {
    const result = await generateKey(keySize);
    setPrivateKey(result.privateKey);
    setPublicKey(result.publicKey);
  };
  return (
    <Box bgColor={"white"}>
      <Heading px={2} pt={1} color={"green.400"} fontWeight={500}>
        RSA Cipher
      </Heading>
      <Text p={3} fontSize={"3xl"} fontWeight={300}>
        Generate RSA Key
      </Text>
      <Box
        display={"flex"}
        flexDirection={{ base: "column", md: "row" }}
        gap={{ base: 5, md: 10 }}
      >
        <Select
          maxWidth={{ base: "100%", md: 300 }}
          placeholder="Select Key Size"
          onChange={(e) => {
            setKeySize(e.target.value);
          }}
        >
          <option value={256}>256 bit</option>
          <option value={512}>512 bit</option>
          <option value={1024}>1024 bit</option>
        </Select>
        <Button
         
          color={"white"}
          _hover={{ bgColor: "green.400" }}
          bgColor={"green.300"}
          size="md"
          onClick={() => genKey(keySize)}
        >
          Generate Key
        </Button>
      </Box>
      <Box display={"flex"} flexDirection={{ base: "column", lg: "row" }}>
        <Reform2
        method={"Public Key"}
        key = {publicKey}
        />
        <Box w={"2px"} bgColor={"blackAlpha.400"}></Box>
        <Reform2
        method={"Private Key"}
        key = {privateKey}
        />
      </Box>
      <Box display={"flex"} flexDirection={{ base: "column", lg: "row" }}>
        <Reform
          input={enInput}
          setInput={setEnInput}
          method={"Encrypt"}
          onSubmit={onEncrypt}
          isLoading={isLoadingEn}
        />
        <Box w={"2px"} bgColor={"blackAlpha.400"}></Box>
        <Reform
          input={deInput}
          setInput={setDeInput}
          method={"Decrypt"}
          onSubmit={onDecrypt}
          isLoading={isLoadingDe}
        />
      </Box>
    </Box>
  );
};

const Reform2 = ({method, key}) => {
  console.log("aaaaaaa"+key);
  const { hasCopied, onCopy } = useClipboard({key});
  return (
    <Box flex={1} p={5}>
    <Text p={3} fontSize={"3xl"} fontWeight={300}>
      {method}
    </Text>
    <Box
    display={"flex"}
    justifyContent={"flex-end"}>
    <IconButton
      bgColor={"green.300"}
      color={"white"}
      icon={hasCopied ? <CheckIcon /> : <CopyIcon />}
      _hover={{ bgColor: "green.400" }}
      _focus={{ outline: "none" }}
      onClick={onCopy}
    />
    </Box>
    
    <Textarea
      resize={"none"}
      minHeight={200}
      isReadOnly
      placeholder={method}
      value={key}
    />
  </Box>
  );
};

const Reform = ({ input, setInput, method, onSubmit, isLoading }) => {
  const { text, key, result } = input;
  const { hasCopied, onCopy } = useClipboard(result);
  const handleChange = (e) => {
    const { target } = e;
    const { name } = target;

    setInput({
      ...input,
      [name]: target.value,
    });
  };
  return (
    <Box flex={1} p={5}>
      <Text p={3} fontSize={"3xl"} fontWeight={300}>
        {method + "ion"}
      </Text>
      <Text p={3} fontSize={"lg"}>
        {method === "Encrypt" ? "Plain Text" : "Cipher Text"}
      </Text>
      <Textarea
        resize={"none"}
        name={"text"}
        minHeight={200}
        placeholder={method === "Encrypt" ? "Plain Text" : "Cipher Text"}
        value={text}
        onChange={handleChange}
      />
      <Text p={3} fontSize={"lg"}>
        Enter Public/Private Key
      </Text>
      <Textarea
        resize={"none"}
        name={"key"}
        minHeight={200}
        placeholder="Enter Public/Private Key"
        value={key}
        onChange={handleChange}
      />
      <Box pt={5} display={"flex"} justifyContent={"flex-end"}>
        <Button
          bgColor={"green.300"}
          color={"white"}
          _hover={{ bgColor: "green.400" }}
          isLoading={isLoading}
          onClick={onSubmit}
          disabled={!(text && key)}
        >
          {method}
        </Button>
      </Box>

      <Box
        pt={5}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Text p={3} fontSize={"lg"}>
          Result
        </Text>
        <IconButton
          bgColor={"green.300"}
          color={"white"}
          icon={hasCopied ? <CheckIcon /> : <CopyIcon />}
          _hover={{ bgColor: "green.400" }}
          _focus={{ outline: "none" }}
          onClick={onCopy}
        />
      </Box>
      <Textarea
        resize={"none"}
        name={"result"}
        minHeight={200}
        focusBorderColor={"green.200"}
        placeholder="Result"
        isReadOnly
        value={result}
      />
    </Box>
  );
};
export default Form;
