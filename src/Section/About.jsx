// About.js
import { Box, Text } from "@chakra-ui/react";
import MyHeading from "./components/Heading";

function About() {
  return (
    <Box
      height="100vh"
      display="flex"
      justifyContent="center"
      // alignItems="center"
      textAlign="center"
    >
      <Box>
        {/* <Heading as="h2" size="xl" mb={4}>About Me</Heading> */}
        <MyHeading title="ABOUT ME" />
        <Text fontSize="lg">
          Here you can write a brief introduction about yourself.
        </Text>
      </Box>
    </Box>
  );
}

export default About;
