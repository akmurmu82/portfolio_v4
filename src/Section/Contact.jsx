import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Input,
  Textarea,
  Button,
  Icon,
  Link,
  useTheme,
} from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import MyHeading from "./components/Heading";

const GetInTouch = () => {
  const theme = useTheme();
  return (
    <Box color="white" py={10} px={5} w={{ base: "90%", lg: "85%" }} m={"auto"}>
      <MyHeading title="GET IN TOUCH" />
      <Flex
        direction={{ base: "column", md: "row" }}
        justifyContent="space-around"
      >
        <Box w={{ base: "100%", md: "45%" }} mb={{ base: 10, md: 0 }}>
          <Heading as="h2" size="lg" mb={5} color="white">
            DON&apos;T BE SHY!
          </Heading>
          <Text
            fontSize={{ base: "lg", lg: "20px" }}
            textAlign={"left"}
            fontFamily={theme.fonts.text}
            // pb={{ base: "0", lg: 50 }}
            mb={'10px'}
          >
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas or opportunities to be part of your
            visions.
          </Text>
          <Box mb={5}>
            <Flex align="center" mb={3}>
              <Icon as={MdLocationOn} w={6} h={6} color={theme.colors.secondary} mr={3} />
              <Text>West Bengal, India</Text>
            </Flex>
            <Flex align="center" mb={3}>
              <EmailIcon w={6} h={6} color={theme.colors.secondary} mr={3} />
              <Link href="mailto:sukantadeveloper7@gmail.com" isExternal>
                sukantadeveloper7@gmail.com
              </Link>
            </Flex>
            <Flex align="center" mb={3}>
              <Icon as={FaGithub} w={6} h={6} color={theme.colors.secondary} mr={3} />
              <Link href="https://github.com/sukantadeveloper" isExternal>
                sukantadeveloper
              </Link>
            </Flex>
            <Flex align="center">
              <Icon as={FaLinkedin} w={6} h={6} color={theme.colors.secondary} mr={3} />
              <Link href="https://linkedin.com/in/sukantadeveloper" isExternal>
                sukantadeveloper
              </Link>
            </Flex>
          </Box>
        </Box>
        <Box w={{ base: "100%", md: "45%" }}>
          <Heading as="h2" size="lg" mb={5} color="white">
            Message me
          </Heading>
          <form>
            <Flex direction="column" gap={3}>
              <Input placeholder="YOUR NAME *" bg="#333" border="none" />
              <Input placeholder="YOUR NUMBER" bg="#333" border="none" />
              <Input placeholder="YOUR SUBJECT *" bg="#333" border="none" />
              <Input placeholder="YOUR EMAIL *" bg="#333" border="none" />
              <Textarea
                placeholder="YOUR MESSAGE *"
                bg="#333"
                border="none"
                rows={6}
              />
              <Button
                rightIcon={<Icon as={MdLocationOn} />}
                colorScheme="yellow"
                bg={theme.colors.secondary}
                alignSelf="flex-start"
              >
                SEND MESSAGE
              </Button>
            </Flex>
          </form>
        </Box>
      </Flex>
    </Box>
  );
};

export default GetInTouch;
