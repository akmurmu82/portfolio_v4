import { Box, Grid, useDisclosure } from "@chakra-ui/react";
import MyHeading from "./components/Heading";
import { ProjectCard } from "./components/ProjectCard";
import interviewHub from "../images/InterviewHub.png";
import Todoist from "../images/Todoist.png";
import GroceryHub from "../images/GroceryHub.png";

function Projects() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      display="flex"
      w={{ base: "90%", lg: "85%" }}
      justifyContent="center"
      m={"auto"}
      textAlign="center"
    >
      <Box>
        <MyHeading title="PROJECTS" />
        <Grid templateColumns={{ base: "1fr", lg: "repeat(3, 1fr)" }} gap={10}>
          <ProjectCard
            title={"Interview Hub"}
            image={interviewHub}
            ghLink="https://github.com/akmurmu82/InterviewIQ-Hub"
            liveLink="https://fe-interviewiq-hub.netlify.app/"
            info={onOpen}
            isOpen={isOpen}
            onClose={onClose}
          />
          <ProjectCard
            title={"Todoist"}
            image={Todoist}
            ghLink="https://github.com/akmurmu82/Todoist-clone"
            liveLink="https://heartfelt-alfajores-94d7dc.netlify.app/"
            info={onOpen}
            isOpen={isOpen}
            onClose={onClose}
          />
          <ProjectCard
            title={"GroceryHub"}
            image={GroceryHub}
            ghLink="https://github.com/akmurmu82/Grocery_Hub"
            liveLink="https://velvety-chebakia-b2faa1.netlify.app/"
            info={onOpen}
            isOpen={isOpen}
            onClose={onClose}
          />
        </Grid>
      </Box>
    </Box>
  );
}

export default Projects;
