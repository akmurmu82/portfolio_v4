import { Box, Flex, Text, Image, useTheme } from "@chakra-ui/react";
import MyHeading from "./components/Heading";
import { FaGraduationCap } from "react-icons/fa6";

function Education() {
  const theme = useTheme();
  return (
    <>
      <MyHeading title="EDUCATION" />
      <Flex
        height="100vh"
        border="1px solid"
        // justifyContent="space-between"
        // alignItems="center"
        gap={100}
        m={"auto"}
        textAlign="center"
        w={{ base: "90%", lg: "85%" }} // Set maximum width of the image
      >
        <Box
          w={{ base: "90%", lg: "40%" }} // Set maximum width of the image
          // border="1px solid"
        >
          <Image
            src="https://www.bing.com/images/blob?bcid=RGWBTJ66sSwHhxBgCox90Z-Bt-9J.....xw"
            alignSelf={{ base: "center", lg: "initial" }} // Align the image to the center on small screens, initial alignment on larger screens
            // borderRadius={"73% 27% 70% 30% / 30% 45% 55% 70% "}
            // boxShadow={"-10px 6px 0px 8px rgba(191,176,176,0.75)"}
            // mb={10}
          />
        </Box>
        <Box>
          <Text fontSize="lg">Display your educational background here.</Text>
          <Flex border="1px solid">
            <Box
              border="1px solid"
              padding={5}
              color={"white"}
              borderRadius={"50%"}
              bg="#141a28"
            >
              <FaGraduationCap />
            </Box>
          </Flex>
        </Box>
      </Flex>
    </>
  );
}

export default Education;
