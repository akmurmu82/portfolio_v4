import { Box, Text, Flex, Image, useTheme } from "@chakra-ui/react";
import MyHeading from "./components/Heading";

function SkillCard({ img, title, key }) {
  const theme = useTheme();
  return (
    <Flex
      key={key}
      borderRadius={20}
      p={"10px 20px"}
      bg={"#eeeeee"}
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
    title: "React",
    img: "https://cdn-icons-png.flaticon.com/128/9440/9440705.png",
    key: "2",
  },
  {
    title: "Chakra-UI",
    img: "https://www.coffeeclass.io/_next/image?url=%2Flogos%2Fchakra-ui.png&w=1920&q=75",
    key: "2",
  },
  {
    title: "Node.js",
    img: "https://www.bing.com/images/blob?bcid=S-hpmPCSpC0HhxBgCox90Z-Bt-9J.....zU",
    key: "2",
  },
  {
    title: "Express",
    img: "https://th.bing.com/th/id/OIP.1fZjQpkRMKTBGN_7H5YnFwHaGL?rs=1&pid=ImgDetMain",
    key: "2",
  },
  {
    title: "MongoDB",
    img: "https://www.bing.com/images/blob?bcid=S4.TZiIgLy0HhxBgCox90Z-Bt-9J.....y8",
    key: "2",
  },
  {
    title: "GitHub",
    img: "https://cdn-icons-png.flaticon.com/128/2504/2504911.png",
    key: "2",
  },
  // <a href="https://www.flaticon.com/free-icons/chat-gpt" title="chat gpt icons">Chat gpt icons created by Freepik - Flaticon</a>,
  {
    title: "ChatGPT",
    img: "https://cdn-icons-png.flaticon.com/128/11865/11865326.png",
    key: "2",
  },
];

function Skills() {
  return (
    <>
      <MyHeading title="SKILLS" />
      <Box
        // height="50vh"
        display="flex"
        w={{ base: "90%", lg: "85%" }}
        justifyContent="center"
        m={"auto"}
        pb={50}
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
