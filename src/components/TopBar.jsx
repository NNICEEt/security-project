/*---------------------------------------- UI Component ----------------------------------------*/
import { Box, Heading, useMediaQuery } from "@chakra-ui/react";
import { LockIcon, HamburgerIcon } from "@chakra-ui/icons";

const TopBar = ({ onOpen }) => {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  return (
    <Box
      px={{ base: 2, sm: 6, md: 10 }}
      py={{ base: 4, md: 5 }}
      bgColor={"white"}
      display={"flex"}
      justifyContent={{ base: "center", md: "flex-start" }}
      alignItems={"center"}
      gap={{ base: 1, sm: 2, md: 4 }}
      borderBottom={"1px"}
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
          fontSize={{ base: 26, sm: 28 }}
        />
      )}
      <LockIcon
        color={"green.400"}
        fontSize={{ base: 22, sm: 28, md: 34 }}
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
          width: { base: "65px", sm: "85px", md: "110px" },
          height: { base: "10px", sm: "12px" },
          background: "green.200",
          position: "absolute",
          bottom: 0,
          opacity: 0.5,
        }}
      >
        <Heading
          color={"green.400"}
          fontSize={{ base: 22, sm: 28, md: 34 }}
          fontWeight={500}
          position={"relative"}
        >
          Cipher
        </Heading>
        <Heading
          fontWeight={500}
          fontSize={{ base: 22, sm: 28, md: 34 }}
          position={"relative"}
        >
          Crytography
        </Heading>
      </Box>
    </Box>
  );
};

export default TopBar;