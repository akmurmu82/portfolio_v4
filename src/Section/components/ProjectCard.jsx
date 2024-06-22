import {
  Box,
  HStack,
  IconButton,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaCode, FaInfoCircle, FaLink } from "react-icons/fa";

export const ProjectCard = ({ title, image }) => {
  const overlayBg = useColorModeValue(
    "rgba(0, 0, 0, 0.6)",
    "rgba(255, 255, 255, 0.6)"
  );
  return (
    <Box
      position="relative"
      overflow="hidden"
      borderRadius="md"
      boxShadow="lg"
      h={{ base: "30vh", lg: "40vh" }}
      transition="transform 0.3s"
      _hover={{ transform: "scale(1.05)" }}
    >
      <Image src={image} alt={title} borderRadius="md" />
      <Text
        position="absolute"
        bottom={0}
        width="100%"
        bg={useColorModeValue("gray.800", "gray.900")}
        color="white"
        textAlign="center"
        p={2}
        fontWeight="bold"
      >
        {title}
      </Text>
      <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        bg={overlayBg}
        opacity={0}
        transition="opacity 0.3s"
        _hover={{ opacity: 1 }}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <HStack spacing={4}>
          <IconButton
            icon={<FaCode />}
            colorScheme="yellow"
            aria-label="Code"
          />
          <IconButton
            icon={<FaLink />}
            colorScheme="yellow"
            aria-label="Link"
          />
          <IconButton
            icon={<FaInfoCircle />}
            colorScheme="yellow"
            aria-label="Info"
          />
        </HStack>
      </Box>
    </Box>
  );
};
