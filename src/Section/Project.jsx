import { Box, Grid } from "@chakra-ui/react";
import MyHeading from "./components/Heading";
import { ProjectCard } from "./components/ProjectCard";

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
          <ProjectCard
            title={"App 1"}
            image={
              "https://th.bing.com/th/id/OIP.Dbbsi4_1MA-1IGQRK894sQAAAA?rs=1&pid=ImgDetMain"
            }
          />
          <ProjectCard
            title={"App 1"}
            image={
              "https://th.bing.com/th/id/OIP.Dbbsi4_1MA-1IGQRK894sQAAAA?rs=1&pid=ImgDetMain"
            }
          />
          <ProjectCard
            title={"App 1"}
            image={
              "https://th.bing.com/th/id/OIP.Dbbsi4_1MA-1IGQRK894sQAAAA?rs=1&pid=ImgDetMain"
            }
          />
          <ProjectCard
            title={"App 1"}
            image={
              "https://th.bing.com/th/id/OIP.Dbbsi4_1MA-1IGQRK894sQAAAA?rs=1&pid=ImgDetMain"
            }
          />
          <ProjectCard
            title={"App 1"}
            image={
              "https://th.bing.com/th/id/OIP.Dbbsi4_1MA-1IGQRK894sQAAAA?rs=1&pid=ImgDetMain"
            }
          />
          <ProjectCard
            title={"App 1"}
            image={
              "https://th.bing.com/th/id/OIP.Dbbsi4_1MA-1IGQRK894sQAAAA?rs=1&pid=ImgDetMain"
            }
          />
        </Grid>
      </Box>
    </Box>
  );
}

export default Projects;
