import { useState, useEffect } from "react";

/*---------------------------- UI Component ----------------------------*/
import { Center, useColorModeValue } from "@chakra-ui/react";
import { ChevronUpIcon } from "@chakra-ui/icons";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const bgHover = useColorModeValue("green.500", "green.300");

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <Center
      position={"fixed"}
      right={4}
      bottom={4}
      p={2}
      bgColor={"primary"}
      borderRadius={"full"}
      _hover={{ cursor: "pointer", backgroundColor: bgHover }}
      onClick={scrollToTop}
      opacity={isVisible ? "1" : "0"}
    >
      <ChevronUpIcon color={"white"} fontSize={28} />
    </Center>
  );
};

export default ScrollToTop;
