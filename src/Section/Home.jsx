import MyHeading from "./components/Heading";
import {
  Box,
  Text,
  Flex,
  Image,
  Button,
  useTheme,
} from "@chakra-ui/react";
import { FaDownload } from "react-icons/fa";

function Home() {
  const theme = useTheme();
  return (
    <Box
      height="100vh"
      display="flex"
      justifyContent="center"
      p={"50px"}
      pr={{ base: "20px", lg: "100px" }}
      alignItems="center"
      // bg={"green"}
      textAlign="center"
    >
      <Flex
        direction={{ base: "column", lg: "row" }} // Column layout on small screens, row layout on larger screens
        // border={"1px solid"}
        w={"100%"}
        alignItems={"center"}
        justifyContent={"space-between"}
        gap={{ base: "20px", lg: "70px" }} // Spacing between items
        p={{ base: "20px", lg: "20px" }} // Padding
      >
        <Image
          src="https://avatars.githubusercontent.com/u/66897228?s=400&u=17b4c06be92a9b164cacca77427ba77fb2dd7a0d&v=4"
          alignSelf={{ base: "center", lg: "initial" }} // Align the image to the center on small screens, initial alignment on larger screens
          borderRadius={"73% 27% 70% 30% / 30% 45% 55% 70% "}
          boxShadow={"-10px 6px 0px 8px rgba(191,176,176,0.75)"}
          w={{ base: "100%", lg: "30%" }} // Set maximum width of the image
        />
        <Box maxW={{ base: "100%", lg: "60%" }}>
          <MyHeading title="I'M AMIT KUMAR MURMU" />
          <Text
            fontFamily={theme.fonts.anek}
            fontSize={{ base: "2xl", lg: "5xl" }}
          >
            A Software Developer
          </Text>
          <Text
            fontSize={{ base: "lg", lg: "3xl" }}
            textAlign={{ base: "center", lg: "left" }}
            fontFamily={"'Mukta', sans-serif"}
          >
            A seasoned Software Developer with 1.5 years of hands-on experience.
            I specialize in crafting dynamic and scalable web applications using
            a technology stack that includes MongoDB, Express, React, Node.js,
            and various other libraries.
          </Text>
          <Button
            _hover={{ backgroundColor: theme.colors.secondary }}
            style={{ ...theme.button }}
            fontSize={{ base: 20, lg: 20 }}
            m={"20px"}
          >
            DOWNLOAD CV <FaDownload />
          </Button>
        </Box>
      </Flex>
    </Box>
  );
}

export default Home;
