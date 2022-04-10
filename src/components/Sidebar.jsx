import { useEffect, useContext } from "react";
import { PanelContext } from "../context/panel";

/*---------------------------------------- UI Component ----------------------------------------*/
import {
  Box,
  Tabs,
  TabList,
  Tab,
  Heading,
  Drawer,
  DrawerOverlay,
  DrawerHeader,
  DrawerBody,
  useMediaQuery,
  DrawerContent,
  useBreakpointValue,
} from "@chakra-ui/react";
import { LockIcon, CloseIcon } from "@chakra-ui/icons";

/*---------------------------------------- Util ----------------------------------------*/
import { panel } from "../utils/panel";

const menu = [
  { label: "Caesar Cipher", panel: panel.caesarCipher },
  { label: "Vigenere Cipher", panel: panel.vigenereCipher },
  { label: "Rail fence Cipher", panel: panel.railFenceCipher },
  { label: "RSA", panel: panel.rsa },
];

const Sidebar = ({ isOpen, onClose }) => {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  const { selectedPanel, setSelectedPanel } = useContext(PanelContext);

  useEffect(() => {
    isLargerThan768 && onClose();
  }, [isLargerThan768, onClose]);

  return (
    <>
      {isLargerThan768 ? (
        <SidebarDesktop
          selectedPanel={selectedPanel}
          setSelectedPanel={setSelectedPanel}
        />
      ) : (
        <SidebarMobile
          isOpen={isOpen}
          onClose={onClose}
          selectedPanel={selectedPanel}
          setSelectedPanel={setSelectedPanel}
        />
      )}
    </>
  );
};

const SidebarDesktop = ({ selectedPanel, setSelectedPanel }) => {
  return (
    <Box
      p={4}
      height={"100%"}
      bgColor={"white"}
      borderRight={"1px"}
      borderColor={"blackAlpha.200"}
    >
      <Tabs variant="unstyled" colorScheme="green">
        <TabList display={"flex"} flexDirection="column" gap={5}>
          {menu.map((item, index) => (
            <Tab
              key={index}
              p={4}
              bgColor={
                selectedPanel === item.panel ? "green.200" : "transparent"
              }
              borderRadius={10}
              onClick={() => setSelectedPanel(item.panel)}
              _hover={selectedPanel !== item.panel && { color: "green.400" }}
              _focus={{ outline: "none" }}
            >
              {item.label}
            </Tab>
          ))}
        </TabList>
      </Tabs>
    </Box>
  );
};

const SidebarMobile = ({
  isOpen,
  onClose,
  selectedPanel,
  setSelectedPanel,
}) => {
  const sizes = useBreakpointValue({ base: "full", sm: "xs" });
  return (
    <Drawer
      placement={"left"}
      size={sizes}
      isOpen={isOpen}
      onClose={onClose}
      p={4}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader
          py={6}
          display={"flex"}
          gap={3}
          justifyContent={"center"}
          alignItems={"center"}
          borderBottom={"1px"}
          borderColor={"blackAlpha.300"}
        >
          <LockIcon color={"green.400"} fontSize={{ base: 24, sm: 28 }} />
          <Box
            display={"flex"}
            alignItems={"center"}
            gap={1}
            position={"relative"}
            _before={{
              content: `""`,
              width: "70px",
              height: "10px",
              background: "green.200",
              position: "absolute",
              bottom: 0,
              opacity: 0.5,
            }}
          >
            <Heading
              color={"green.400"}
              fontSize={24}
              fontWeight={500}
              position={"relative"}
            >
              Cipher
            </Heading>
            <Heading fontWeight={500} fontSize={24} position={"relative"}>
              Crytography
            </Heading>
          </Box>
          <CloseIcon
            display={{ base: "block", sm: "none" }}
            fontSize={18}
            position={"absolute"}
            right={"5%"}
            transform={"auto"}
            translateY={"5%"}
            onClick={onClose}
          />
        </DrawerHeader>
        <DrawerBody pt={6}>
          <Tabs variant="unstyled" colorScheme="green">
            <TabList display={"flex"} flexDirection="column" gap={5}>
              {menu.map((item, index) => (
                <Tab
                  key={index}
                  p={4}
                  bgColor={
                    selectedPanel === item.panel ? "green.200" : "transparent"
                  }
                  borderRadius={10}
                  onClick={() => {
                    setSelectedPanel(item.panel);
                    onClose();
                  }}
                  _hover={
                    selectedPanel !== item.panel && { color: "green.400" }
                  }
                  _focus={{ outline: "none" }}
                >
                  {item.label}
                </Tab>
              ))}
            </TabList>
          </Tabs>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default Sidebar;
