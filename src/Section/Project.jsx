import { Box, Grid } from "@chakra-ui/react";
import MyHeading from "./components/Heading";
import { ProjectCard } from "./components/ProjectCard";
import interviewHub from "../images/InterviewHub.png";
import Todoist from "../images/Todoist.png";
import GroceryHub from "../images/GroceryHub.png";

function Projects() {
  return (
    <Box
      // height="100vh"
      display="flex"
      w={{ base: "90%", lg: "85%" }}
      justifyContent="center"
      m={"auto"}
      textAlign="center"
    >
      <Box>
        <MyHeading title="PROJECTS" />
        <Grid templateColumns={{ base: "1fr", lg: "repeat(3, 1fr)" }} gap={10}>
          <ProjectCard title={"Interview Hub"} image={interviewHub} />
          <ProjectCard title={"Todoist"} image={Todoist} />
          <ProjectCard title={"GroceryHub"} image={GroceryHub} />
        </Grid>
      </Box>
    </Box>
  );
}

export default Projects;
