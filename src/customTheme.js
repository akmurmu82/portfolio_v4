import { extendTheme } from "@chakra-ui/react";

export const myTheme = extendTheme({
  colors: {
    primary: "#141a28",
    secondary: "#feb800",
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
