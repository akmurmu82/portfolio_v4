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
import { motion } from "framer-motion";

function SkillCard({ img, title, key, delay }) {
  const theme = useTheme();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.1, delay: delay }}
      viewport={{ once: false }}
    >
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
    </motion.div>
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
            <SkillCard title="HTML" img={html} delay={0.2} />
            <SkillCard title="CSS" img={css} delay={0.3} />
            <SkillCard title="JavaScript" img={js} delay={0.4} />
            <SkillCard title="React" img={react} delay={0.5} />
            <SkillCard title="Redux" img={redux} delay={0.6} />
            <SkillCard title="chakraui" img={chakraui} delay={0.7} />
            <SkillCard title="Node.js" img={nodejs} delay={0.8} />
            <SkillCard title="Mongodb" img={mongodb} delay={0.9} />
            <SkillCard title="Express" img={express} delay={1} />
            <SkillCard title="GitHub" img={github} delay={1.1} />
            <SkillCard title="ChatGPT" img={chatgpt} delay={1.2} />
          </Flex>
        </Box>
      </Box>
    </>
  );
}

export default Skills;
