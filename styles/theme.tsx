import { defineStyle, defineStyleConfig, extendTheme } from "@chakra-ui/react";

const buttonBrandPrimary = defineStyle({
  background: "transparent",
  color: "textPrimary",
  borderColor: "textPrimary",
  border: "2px",

  _hover: {
    background: "primary",
    borderColor: "transparent",
  },
});

export const buttonTheme = defineStyleConfig({
  variants: { buttonBrandPrimary },
});

const myTheme = extendTheme({
  colors: {
    primary: "#ffd466",
    secondary: "#2b5fae",
    textPrimary: "#303030",
    textSecondary: "#ffffff",
  },

  components: { Button: buttonTheme },
});

export default myTheme;
