import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";

import "@fontsource/kanit/300.css";
import "@fontsource/kanit/400.css";
import "@fontsource/kanit/500.css";
import "@fontsource/kanit/600.css";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
