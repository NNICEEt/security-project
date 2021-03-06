import { useContext } from "react";
import { DisclosureContext } from "../contexts/disclosure";

/*---------------------------------------- UI Component ----------------------------------------*/
import {
  Box,
  Heading,
  useMediaQuery,
  IconButton,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { LockIcon, HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";

const TopBar = () => {
  const { onOpen } = useContext(DisclosureContext);
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box
      px={{ base: 2, sm: 6, md: 10 }}
      py={{ base: 4, md: 5 }}
      bgColor={useColorModeValue("white", "gray.800")}
      display={"flex"}
      justifyContent={{ base: "center", md: "flex-start" }}
      alignItems={"center"}
      gap={{ base: 1, sm: 2, md: 4 }}
      borderBottom={"2px"}
      borderColor={"blackAlpha.200"}
      position={"relative"}
    >
      {!isLargerThan768 && (
        <HamburgerIcon
          color={"green.400"}
          position={"absolute"}
          left={{ base: 4, sm: 6 }}
          transform={"auto"}
          translateY={"5%"}
          onClick={onOpen}
          fontSize={{ base: "2xl", sm: "3xl" }}
        />
      )}
      <LockIcon
        color={"primary"}
        fontSize={{ base: "md", sm: "md", md: "xl" }}
        transform={"auto"}
        translateY={{ base: "0%", md: "10%" }}
      />
      <Box
        display={"flex"}
        alignItems={"center"}
        gap={{ base: 1, md: 3 }}
        position={"relative"}
        _before={{
          content: `""`,
          width: { base: "52px", sm: "75px", md: "90px" },
          height: { base: "5px", sm: "8px" },
          background: "green.200",
          position: "absolute",
          bottom: 0,
          opacity: 0.5,
        }}
      >
        <Heading
          color={"primary"}
          fontSize={{ base: "xl", sm: "2xl", md: "3xl" }}
          fontWeight={500}
          position={"relative"}
        >
          Cipher
        </Heading>
        <Heading
          fontWeight={500}
          fontSize={{ base: "xl", sm: "2xl", md: "3xl" }}
          position={"relative"}
        >
          Cryptography
        </Heading>
      </Box>
      <IconButton
        bgColor={"transparent"}
        color={useColorModeValue("gray.400", "gray.300")}
        fontSize={"xl"}
        position={"absolute"}
        right={{ base: 1, sm: 5 }}
        _focus={{ outline: "none" }}
        aria-label="Search database"
        icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        onClick={toggleColorMode}
      />
    </Box>
  );
};

export default TopBar;
