/*---------------------------------------- UI Component ----------------------------------------*/
import { Box, Heading, Spinner } from "@chakra-ui/react";

const Loading = () => {
  return (
    <Box
      textAlign={"center"}
      position={"absolute"}
      top={"50%"}
      left={"50%"}
      transform={"auto"}
      translateX={"-50%"}
      translateY={"-50%"}
    >
      <Heading color={"blue.300"} mb={"5"}>Encryption and Decryption</Heading>
      <Spinner
        thickness="6px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.300"
        size="xl"
      />
    </Box>
  );
};

export default Loading;
