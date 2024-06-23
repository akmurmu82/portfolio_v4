import MyHeading from "./components/Heading";
import {
  Box,
  Text,
  Flex,
  Image,
  Button,
  useTheme,
  Icon,
} from "@chakra-ui/react";
import { FaDownload } from "react-icons/fa";

function Home() {
  const theme = useTheme();
  function downloadResume() {}
  return (
    <>
      <Box
        pt={5}
        // height="80vh"
        display="flex"
        justifyContent="center"
        textAlign="center"
      >
        <Flex
          direction={{ base: "column", lg: "row" }}
          w={"100%"}
          alignItems={"center"}
          gap={{ base: "20px", lg: "70px" }}
          p={{ base: "10px", lg: "20px" }}
        >
          <Image
            src="https://avatars.githubusercontent.com/u/66897228?s=400&u=17b4c06be92a9b164cacca77427ba77fb2dd7a0d&v=4"
            alignSelf={{ base: "center", lg: "initial" }}
            borderRadius={"73% 27% 70% 30% / 30% 45% 55% 70% "}
            boxShadow={"-10px 6px 0px 8px rgba(191,176,176,0.75)"}
            w={{ base: "60%", lg: "30%" }}
            ml={5}
          />
          <Box maxW={{ base: "100%", lg: "60%" }}>
            <Text
              fontSize={{ base: "2xl", lg: "5xl" }}
              color={theme.colors.jhataak}
              fontWeight={"bold"}
              fontFamily={theme.fonts.subheading}
            >
              I&apos;M AMIT KUMAR MURMU
            </Text>
            {/* <MyHeading title="I'M AMIT KUMAR MURMU" /> */}
            <Text
              fontFamily={theme.fonts.text}
              fontSize={{ base: "xl", lg: "3xl" }}
              fontWeight={"bold"}
              mb={4}
            >
              A Full Stack Developer
            </Text>
            <Text
              fontSize={{ base: "lg", lg: "23px" }}
              textAlign={"left"}
              fontFamily={theme.fonts.text}
              pr={{ base: "0", lg: 50 }}
            >
              A seasoned Software Developer with 1.5 years of hands-on
              experience. I specialize in crafting dynamic and scalable web
              applications using a technology stack that includes MongoDB,
              Express, React, Node.js, and various other libraries.
            </Text>
            <Button
              _hover={{ backgroundColor: theme.colors.jhataak }}
              style={{ ...theme.button }}
              // onClick={downloadResume}
              as="a"
              target="_blank"
              href="/Amit Kumar Murmu-Resume.pdf"
              // download
              fontSize={{ base: 20, lg: 14 }}
              m={"20px"}
              rightIcon={<Icon as={FaDownload} />}
            >
              DOWNLOAD CV
            </Button>
          </Box>
        </Flex>
      </Box>
    </>
  );
}

export default Home;
