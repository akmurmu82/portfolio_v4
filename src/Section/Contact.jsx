import { useContext, useState } from "react";
import emailjs from "emailjs-com";
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
  VStack,
  useToast,
} from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import MyHeading from "./components/Heading";
import { ThemeContext } from "../AllContext";
import { IoIosSend } from "react-icons/io";
import CustomToast from "./components/CustomToast";

const GetInTouch = () => {
  const { isDark } = useContext(ThemeContext);
  const theme = useTheme();
  const toast = useToast();
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    subject: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_86yi4br",
        "template_s7kkrds",
        e.target,
        "Yr50FP_5lajaEFbZp"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast({
            position: "top",
            duration: 5000,
            isClosable: true,
            render: ({ onClose }) => (
              <CustomToast
                title="Feedback Sent"
                description="Thanks for your feedback. I'll sure reply to this."
                onClose={onClose}
              />
            ),
          });
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send the message. Please try again.");
        }
      );

    // Reset form fields
    setFormData({
      name: "",
      number: "",
      subject: "",
      email: "",
      message: "",
    });
  };
  return (
    <>
      <MyHeading title="GET IN TOUCH" />
      <Box
        color={isDark ? theme.colors.light : theme.colors.dark}
        pb={100}
        px={5}
        w={{ base: "90%", lg: "85%" }}
        m={"auto"}
      >
        <Flex
          direction={{ base: "column", md: "row" }}
          justifyContent="space-around"
        >
          <Box w={{ base: "100%", md: "40%" }} mb={{ base: 10, md: 0 }}>
            <Heading as="h2" size="lg" mb={5}>
              DON&apos;T BE SHY!
            </Heading>
            <Text
              fontSize={{ base: "lg", lg: "20px" }}
              textAlign={"left"}
              fontFamily={theme.fonts.text}
              mb={"10px"}
            >
              Feel free to get in touch with me. I am always open to discussing
              new projects, creative ideas or opportunities to be part of your
              visions.
            </Text>
            <Box mb={5}>
              <Flex align="center" mb={3}>
                <Icon
                  as={MdLocationOn}
                  w={7}
                  h={10}
                  color={theme.colors.jhataak}
                  mr={5}
                />
                <VStack alignItems={"flex-start"} gap={0}>
                  <Text>ADDRESS</Text>
                  <Text>West Bengal, India</Text>
                </VStack>
              </Flex>
              <Flex align="center" mb={3}>
                <EmailIcon w={7} h={10} color={theme.colors.jhataak} mr={5} />
                <VStack alignItems={"flex-start"} gap={0}>
                  <Text>E-MAIL</Text>
                  <Link href="mailto:sukantadeveloper7@gmail.com" isExternal>
                    amitkumar655921@gmail.com
                  </Link>
                </VStack>
              </Flex>
              <Flex align="center" mb={3}>
                <Icon
                  as={FaGithub}
                  w={7}
                  h={10}
                  color={theme.colors.jhataak}
                  mr={5}
                />
                <VStack alignItems={"flex-start"} gap={0}>
                  <Text>GITHUB</Text>
                  <Link href="https://github.com/akmurmu83" isExternal>
                    akmurmu82
                  </Link>
                </VStack>
              </Flex>
              <Flex align="center">
                <Icon
                  as={FaLinkedin}
                  w={7}
                  h={10}
                  color={theme.colors.jhataak}
                  mr={5}
                />
                <VStack alignItems={"flex-start"} gap={0}>
                  <Text>LINKEDIN</Text>
                  <Link
                    href="https://linkedin.com/in/amit-kumar-murmu82"
                    isExternal
                  >
                    amit-kumar-murmu82
                  </Link>
                </VStack>
              </Flex>
            </Box>
          </Box>
          <Box w={{ base: "100%", md: "60%" }}>
            <Heading as="h2" size="lg" mb={5}>
              Message me
            </Heading>

            <form onSubmit={handleSubmit}>
              <Flex direction="column" gap={3}>
                <Input
                  placeholder="YOUR NAME *"
                  name="name"
                  value={formData.name}
                  bg={theme.colors.light}
                  border="none"
                  onChange={handleChange}
                />
                <Input
                  placeholder="YOUR NUMBER"
                  name="number"
                  value={formData.number}
                  bg={theme.colors.light}
                  border="none"
                  onChange={handleChange}
                />
                <Input
                  placeholder="YOUR SUBJECT *"
                  name="subject"
                  value={formData.subject}
                  bg={theme.colors.light}
                  border="none"
                  onChange={handleChange}
                />
                <Input
                  placeholder="YOUR EMAIL *"
                  name="email"
                  value={formData.email}
                  bg={theme.colors.light}
                  border="none"
                  onChange={handleChange}
                />
                <Textarea
                  placeholder="YOUR MESSAGE *"
                  name="message"
                  value={formData.message}
                  bg={theme.colors.light}
                  border="none"
                  onChange={handleChange}
                  rows={6}
                />
                <Button
                  rightIcon={<Icon as={IoIosSend} />}
                  colorScheme="yellow"
                  type="submit"
                  bg={theme.colors.jhataak}
                  alignSelf="flex-start"
                >
                  SEND MESSAGE
                </Button>
              </Flex>
            </form>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default GetInTouch;
