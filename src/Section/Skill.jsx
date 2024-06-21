import { Box, Text, Flex } from "@chakra-ui/react";
import MyHeading from "./components/Heading";

function SkillCard({ img, title, key }) {
  return (
    <Box key={key}>
      <img src={img} alt={title} />
      <Text>{title}</Text>
    </Box>
  );
}

const skillsArr = [
  {
    title: "HTML",
    img: "https://cdn3d.iconscout.com/3d/free/thumb/html-5728485-4781249.png",
    key: "1",
  },
  { title: "CSS", img: "https://cdn3d.iconscout.com/3d/free/thumb/free-html-9294875-7578018.png", key: "2" },
  { title: "CSS", img: "https://cdn3d.iconscout.com/3d/free/thumb/free-css-9294881-7578024.png", key: "2" },
  { title: "JavaScript", img: "./javascript.png", key: "3" },
];

function Skills() {
  return (
    <Box
      height="100vh"
      display="flex"
      justifyContent="center"
      // alignItems="center"
      textAlign="center"
    >
      <Box>
        <MyHeading title="SKILLS" />
        <Flex>
          {skillsArr.map(({ title, img, key }) => (
            <SkillCard key={key} title={title} img={img} />
          ))}
        </Flex>
      </Box>
    </Box>
  );
}

export default Skills;
