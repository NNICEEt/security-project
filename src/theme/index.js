import { extendTheme } from "@chakra-ui/react";

import Button from "./components/button";
import IconButton from "./components/iconButton";
import Textarea from "./components/textarea";
import Input from "./components/input";

const config = {
  initialColorMode: localStorage.getItem("chakra-ui-color-mode"),
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  colors: {
    primary: "#48BB78",
    borderColor: "#9AE6B4",
  },
  fonts: {
    heading: "Kanit, sans-serif",
    body: "Kanit, sans-serif",
  },
  components: {
    Button,
    IconButton,
    Textarea,
    Input,
  },
});

export default theme;
