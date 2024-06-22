import { Box, Text, Flex, Image, useTheme } from "@chakra-ui/react";
import MyHeading from "./components/Heading";

function SkillCard({ img, title, key }) {
  const theme = useTheme();
  return (
    <Flex
      key={key}
      borderRadius={20}
      p={"10px 20px"}
      bg={"#fff"}
      gap={2}
      color={"#000"}
      align={"center"}
    >
      <Image src={img} alt={title} w={10} />
      <Text as={"bold"} fontFamily={theme.fonts.subheading}>
        {title}
      </Text>
    </Flex>
  );
}

const skillsArr = [
  {
    title: "HTML",
    img: "https://cdn3d.iconscout.com/3d/free/thumb/free-html-9294875-7578018.png",
    key: "1",
  },
  {
    title: "CSS",
    img: "https://cdn3d.iconscout.com/3d/free/thumb/free-css-9294881-7578024.png",
    key: "2",
  },
  {
    title: "Java Script",
    img: "https://www.bing.com/images/blob?bcid=S4kZbwqQsy0HhxBgCox90Z-Bt-9J.....zs",
    key: "2",
  },
  {
    title: "React",
    img: "https://www.bing.com/images/blob?bcid=S6DDiI1hSS0HhxBgCox90Z-Bt-9J.....0g",
    key: "2",
  },
  {
    title: "Redux",
    img: "https://www.bing.com/images/blob?bcid=S-xxyRKkIi0HqxcxoNWLuD9SqbotqVTdP.E",
    key: "2",
  },
  {
    title: "Chakra-UI",
    img: "https://www.bing.com/images/blob?bcid=S7t1H2fmbC0HqxcxoNWLuD9SqbotqVTdP-4",
    key: "2",
  },
  {
    title: "Node.js",
    img: "https://www.bing.com/images/blob?bcid=S-hpmPCSpC0HhxBgCox90Z-Bt-9J.....zU",
    key: "2",
  },
  {
    title: "Express",
    img: "https://www.bing.com/images/blob?bcid=S3-rKskGsS0HqxcxoNWLuD9SqbotqVTdP18",
    key: "2",
  },
  {
    title: "MongoDB",
    img: "https://www.bing.com/images/blob?bcid=S4.TZiIgLy0HqxcxoNWLuD9SqbotqVTdP2c",
    key: "2",
  },
  {
    title: "GitHub",
    img: "https://www.bing.com/images/blob?bcid=Synw-Bmz8C0HqxcxoNWLuD9SqbotqVTdP-g",
    key: "2",
  },
];

function Skills() {
  return (
    <>
      <MyHeading title="SKILLS" />
      <Box
        height="100vh"
        display="flex"
        w={{ base: "90%", lg: "85%" }}
        justifyContent="center"
        m={"auto"}
        textAlign="center"
      >
        <Box>
          <Flex gap={5} wrap={"wrap"}>
            {skillsArr.map(({ title, img, key }) => (
              <SkillCard key={key} title={title} img={img} />
            ))}
          </Flex>
        </Box>
      </Box>
    </>
  );
}

export default Skills;
