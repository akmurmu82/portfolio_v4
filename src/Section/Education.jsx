import { Box, Text } from "@chakra-ui/react";
import MyHeading from "./components/Heading";

function Education() {
  return (
    <Box
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
    >
      <Box>
        <MyHeading title="EDUCATION" />
        <Text fontSize="lg">Display your educational background here.</Text>
      </Box>
    </Box>
  );
}

export default Education;
