/*---------------------------------------- UI Component ----------------------------------------*/
import { Box } from "@chakra-ui/react";

export const Layout = ({ children }) => {
  return (
    <Box
      minHeight={"100vh"}
      bgColor={"blue.50"}
      display={"grid"}
      gridTemplateRows={"auto 1fr"}
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