import { useState } from "react";

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
} from "@chakra-ui/react";
import { CopyIcon, CheckIcon } from "@chakra-ui/icons";

const Form = ({ cipher, type, name }) => {
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

  const { encrypt, decrypt } = cipher();

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

  return (
    <Box
      bgColor={"white"}
      rounded={"md"}
      border={"1px"}
      borderColor={"blackAlpha.200"}
      boxShadow="base"
      p={5}
    >
      <Heading px={2} pt={1} color={"green.400"} fontWeight={500}>
        {name}
      </Heading>
      <Box display={"flex"} flexDirection={{ base: "column", lg: "row" }}>
        <FormCipher
          input={enInput}
          setInput={setEnInput}
          method={"Encrypt"}
          onSubmit={onEncrypt}
          type={type}
          isLoading={isLoadingEn}
        />
        <Box w={"2px"} bgColor={"blackAlpha.400"}></Box>
        <FormCipher
          input={deInput}
          setInput={setDeInput}
          method={"Decrypt"}
          onSubmit={onDecrypt}
          type={type}
          isLoading={isLoadingDe}
        />
      </Box>
    </Box>
  );
};

const FormCipher = ({ input, setInput, method, onSubmit, type, isLoading }) => {
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
    <Box p={3} flex={1}>
      <Text pb={4} fontSize={"3xl"} fontWeight={300}>
        {method + "ion"}
      </Text>
      <Text p={3} fontSize={"lg"}>
        {method === "Encrypt" ? "Plain Text" : "Cipher Text"}
      </Text>
      <Textarea
        name={"text"}
        minHeight={200}
        focusBorderColor={"green.200"}
        resize={"none"}
        placeholder={method === "Encrypt" ? "Plain Text" : "Cipher Text"}
        value={text}
        onChange={handleChange}
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
          name={"key"}
          maxWidth={{ base: "100%", md: 300 }}
          focusBorderColor={"green.200"}
          placeholder="Key"
          value={key}
          onChange={handleChange}
          type={type}
        />
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
        minHeight={200}
        focusBorderColor={"green.200"}
        placeholder="Result"
        value={result}
        isReadOnly
      />
    </Box>
  );
};

export default Form;
