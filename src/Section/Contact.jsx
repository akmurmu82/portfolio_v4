import { Box, Text } from "@chakra-ui/react";
import MyHeading from "./components/Heading";

function Contact() {
  return (
    <Box
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
    >
      <Box>
        <MyHeading title="CONTACT" />
        <Text fontSize="lg">Contact information goes here.</Text>
      </Box>
    </Box>
  );
}

export default Contact;
