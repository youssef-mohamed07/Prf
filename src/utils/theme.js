import { extendTheme } from "@chakra-ui/react";

const colors = {
  primary: {
    100: "#EBF8FF",
    200: "#BEE3F8",
    300: "#90CDF4",
    400: "#63B3ED",
    500: "#4299E1",
    600: "#3182CE",
    700: "#2B6CB0",
    800: "#2C5282",
    900: "#2A4365",
  },
};

const customTheme = extendTheme({ colors });

export default customTheme;
