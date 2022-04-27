import { useState } from "react";

/*---------------------------------------- UI Component ----------------------------------------*/
import {
  Box,
  Text,
  Textarea,
  Button,
  IconButton,
  Heading,
  useClipboard,
  Select,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { CopyIcon, CheckIcon } from "@chakra-ui/icons";

const Form = ({ cipher }) => {
  const [keySize, setKeySize] = useState("");
  const [publicKey, setPublicKey] = useState("");
  const [privateKey, setPrivateKey] = useState("");
  const [textLimit, settextLimit] = useState("");
  const [isLoadingKey, setIsLoadingKey] = useState(false);
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
  const toast = useToast();

  const onEncrypt = async () => {
    setEnInput({ ...enInput, result: "" });
    setIsLoadingEn(true);
    const { data, isSuccess } = await encrypt(enInput.text, enInput.key);
    if (isSuccess) setEnInput({ ...enInput, result: data.cipherText });
    else
      toast({
        position: "top",
        title: data,
        status: "error",
        duration: 2500,
        isClosable: true,
      });
    setIsLoadingEn(false);
  };

  const onDecrypt = async () => {
    setDeInput({ ...deInput, result: "" });
    setIsLoadingDe(true);
    const { data, isSuccess } = await decrypt(deInput.text, deInput.key);
    if (isSuccess) setDeInput({ ...deInput, result: data.plainText });
    else
      toast({
        position: "top",
        title: data,
        status: "error",
        duration: 2500,
        isClosable: true,
      });
    setIsLoadingDe(false);
  };

  const { generateKey, encrypt, decrypt } = cipher();
  const setLimit = (keysize) => {
    if (keysize === "512") {
      settextLimit(120);
    } else if (keysize === "1024") {
      settextLimit(240);
    }
  };
  const genKey = async (keySize) => {
    setIsLoadingKey(true);
    setLimit(keySize);
    setEnInput({ ...enInput, text: "" });
    const result = await generateKey(keySize);
    setPrivateKey(result.privateKey);
    setPublicKey(result.publicKey);
    setIsLoadingKey(false);
  };

  return (
    <Box
      bgColor={useColorModeValue("white", "gray.800")}
      rounded={"md"}
      border={"1px"}
      borderColor={"blackAlpha.200"}
      boxShadow="base"
      p={5}
    >
      <Heading px={2} pt={1} color={"primary"} fontWeight={500}>
        RSA Cipher
      </Heading>
      <Text p={3} fontSize={"3xl"} fontWeight={300}>
        Generate RSA Key
      </Text>
      <Box
        display={"flex"}
        flexDirection={{ base: "column", md: "row" }}
        gap={{ base: 5, md: 10 }}
        px={3}
      >
        <Select
          maxWidth={{ base: "100%", md: 300 }}
          placeholder={"Select key size"}
          onChange={(e) => {
            setKeySize(e.target.value);
          }}
        >
          <option value={512}>512 bit</option>
          <option value={1024}>1024 bit</option>
        </Select>
        <Button
          variant={"primary"}
          size={"md"}
          disabled={!keySize || isLoadingKey}
          isLoading={isLoadingKey}
          onClick={() => genKey(keySize)}
        >
          Generate Key
        </Button>
      </Box>
      <Box display={"flex"} flexDirection={{ base: "column", lg: "row" }}>
        <GenarateKeyDisplay method={"Public Key"} keys={publicKey} />
        <Box w={"2px"} bgColor={"blackAlpha.400"}></Box>
        <GenarateKeyDisplay method={"Private Key"} keys={privateKey} />
      </Box>
      <Box display={"flex"} flexDirection={{ base: "column", lg: "row" }}>
        <EncryptionForm
          input={enInput}
          setInput={setEnInput}
          method={"Encrypt"}
          onSubmit={onEncrypt}
          isLoading={isLoadingEn}
          textLimit={textLimit}
        />
        <Box w={"2px"} bgColor={"blackAlpha.400"}></Box>
        <EncryptionForm
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

const GenarateKeyDisplay = ({ method, keys }) => {
  const { hasCopied, onCopy } = useClipboard(keys);
  return (
    <Box flex={1} p={5}>
      <Box display={"flex"} justifyContent={"space-between"}>
        <Text fontSize={"3xl"} fontWeight={300}>
          {method}
        </Text>
        <IconButton
          bgColor={"green.300"}
          color={"white"}
          icon={hasCopied ? <CheckIcon /> : <CopyIcon />}
          _hover={{ bgColor: "green.400" }}
          _focus={{ outline: "none" }}
          onClick={onCopy}
          disabled={!keys}
        />
      </Box>

      <Textarea
        resize={"none"}
        minHeight={200}
        isReadOnly
        placeholder={method}
        value={keys}
      />
    </Box>
  );
};

const EncryptionForm = ({
  input,
  setInput,
  method,
  onSubmit,
  isLoading,
  textLimit,
}) => {
  const { text, key, result } = input;
  const { hasCopied, onCopy } = useClipboard(result);
  const handleChange = (e) => {
    const { target } = e;
    const { name } = target;
    let value = target.value;
    const thPattern = /[ก-๛]+/;
    value = value.replace(thPattern, "");
    setInput({
      ...input,
      [name]: value,
    });
  };
  return (
    <Box flex={1} p={5}>
      <Text p={3} fontSize={"3xl"} fontWeight={300}>
        {method + "ion"}
      </Text>
      <Text p={3} fontSize={"lg"}>
        {method === "Encrypt"
          ? `Plain Text ${
              textLimit === "" ? "" : `(${text.length}/${textLimit})`
            }`
          : "Cipher Text"}
      </Text>
      <Textarea
        resize={"none"}
        name={"text"}
        minHeight={200}
        placeholder={method === "Encrypt" ? "Plain Text" : "Cipher Text"}
        value={text}
        onChange={(e) => {
          method === "Encrypt"
            ? e.target.value.length <= textLimit && handleChange(e)
            : handleChange(e);
        }}
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
          variant={"primary"}
          isLoading={isLoading}
          onClick={onSubmit}
          disabled={!(text && key) || isLoading}
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
          disabled={!result}
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
