
import { Box, Text } from "@chakra-ui/react";
import MyHeading from "./components/Heading";

function Projects() {
  return (
    <Box
      height="100vh"
      display="flex"
      justifyContent="center"
      // alignItems="center"
      textAlign="center"
    >
      <Box>
        <MyHeading title="PROJECTS" />
        <Text fontSize="lg">Display your projects here.</Text>
      </Box>
    </Box>
  );
}

export default Projects;
