/*---------------------------------------- UI Component ----------------------------------------*/
import { Box, useColorModeValue } from "@chakra-ui/react";

export const Layout = ({ children }) => {
  return (
    <Box
      minHeight={"100vh"}
      bgColor={useColorModeValue("blue.50", "gray.900")}
      display={{ base: "block", md: "grid" }}
      gridTemplateRows={{ base: "1fr", md: "auto 1fr" }}
      gridTemplateColumns={{ base: "1fr", md: "minmax(200px,1fr) 5fr" }}
    >
      {children}
    </Box>
  );
};

export const TopbarLayout = ({ children }) => {
  return (
    <Box gridColumnStart={1} gridColumnEnd={3}>
      {children}
    </Box>
  );
};

export const SidebarLayout = ({ children }) => {
  return (
    <Box gridColumnStart={1} position={{ base: "absolute", md: "relative" }}>
      {children}
    </Box>
  );
};

export const ContentLayout = ({ children }) => {
  return <Box gridColumnStart={{ base: 1, md: 2 }}>{children}</Box>;
};

export default Layout;
