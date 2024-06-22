import { extendTheme } from "@chakra-ui/react";

export const myTheme = extendTheme({
  colors: {
    dark: "#181818",
    jhataak: "#feb800",
    light: "#f6f6f6",
    // Add more colors as needed
  },
  fonts: {
    anek: "'Anek Devanagari', sans-serif",
    subheading: "'Kanit', sans-serif",
    text: "'Titillium Web', sans-serif",
    outline: "'Londrina Outline', sans-serif",
    // Add more font definitions
  },
  button: {
    borderRadius: "30px",
    padding: "10px 20px",
    // border: "1px solid"
  },

  // Add other theme properties like spacing, breakpoints, etc.
});
