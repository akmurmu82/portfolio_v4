import MyHeading from "./components/Heading";
import { Box, VStack, useTheme, Image, Flex } from "@chakra-ui/react";
import EducationCard from "./components/EducationCard";
import edu from "../images/edu.jpg";

function Education() {
  const theme = useTheme();
  return (
    <>
      <MyHeading title="EDUCATION" />
      <Flex
        color="white"
        align={"center"}
        w={{ base: "90%", lg: "85%" }}
        m={"auto"}
        gap={10}
        direction={{ base: "column", lg: "row" }}
      >
        <Box w={{ base: "90%", lg: "40%" }}>
          <Image
            src={edu}
            alignSelf={{ base: "center", lg: "initial" }} // Align the image to the center on small screens, initial alignment on larger screens
          />
        </Box>
        <VStack spacing={10} align="left">
          <EducationCard
            duration={"2023 - Present"}
            course={"Full Stack Web Development"}
            institute={"Masai"}
            location={"Bengaluru"}
          />
          <EducationCard
            duration={"2015 - 2017"}
            course={"Senior Secondary Education"}
            institute={"Sido Kanhu High School"}
            location={"Dumka, Jharkhand"}
          />
        </VStack>
      </Flex>
    </>
  );
}

export default Education;
