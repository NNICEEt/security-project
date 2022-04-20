import { mode, darken, whiten } from "@chakra-ui/theme-tools";

const Button = {
  // style object for base or default style
  baseStyle: {},
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {
    primary: (props) => ({
      bgColor: "primary",
      color: "white",
      _hover: {
        bgColor: mode(darken("primary", 5), whiten("primary", 10))(props),
        boxShadow: "md",
      },
    }),
  },
  // default values for `size` and `variant`
  defaultProps: {},
};

export default Button;
