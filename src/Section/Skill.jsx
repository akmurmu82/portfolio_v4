import { Box, Text, Flex, Image, useTheme } from "@chakra-ui/react";
import MyHeading from "./components/Heading";
import html from "../images/html.webp";
import css from "../images/css.png";
import js from "../images/js.jpg";
import chakraui from "../images/chakraui.webp";
import nodejs from "../images/nodejs.jpg";
import react from "../images/react.jpg";
import chatgpt from "../images/chatgpt.png";
import github from "../images/github.png";
import express from "../images/express.jpg";
import mongodb from "../images/mongodb.jpg";
import redux from "../images/redux.jpg";

function SkillCard({ img, title, key }) {
  const theme = useTheme();
  return (
    <Flex
      key={key}
      borderRadius={20}
      p={"4px 20px"}
      bg={"#eeeeee"}
      gap={2}
      color={"#000"}
      align={"center"}
    >
      <Image src={img} alt={title} w={10} h={12} />
      <Text as={"bold"} fontFamily={theme.fonts.subheading}>
        {title}
      </Text>
    </Flex>
  );
}

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
            <SkillCard title="HTML" img={html} />
            <SkillCard title="CSS" img={css} />
            <SkillCard title="JavaScript" img={js} />
            <SkillCard title="React" img={react} />
            <SkillCard title="Redux" img={redux} />
            <SkillCard title="chakraui" img={chakraui} />
            <SkillCard title="Node.js" img={nodejs} />
            <SkillCard title="Mongodb" img={mongodb} />
            <SkillCard title="Express" img={express} />
            <SkillCard title="GitHub" img={github} />
            <SkillCard title="ChatGPT" img={chatgpt} />
          </Flex>
        </Box>
      </Box>
    </>
  );
}

export default Skills;
