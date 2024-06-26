import {
  Box,
  HStack,
  IconButton,
  Image,
  Text,
  useColorModeValue,
  useTheme,
} from "@chakra-ui/react";
import { FaGithub, FaInfoCircle } from "react-icons/fa";
import { GoLinkExternal } from "react-icons/go";

import { motion } from "framer-motion";

export const ProjectCard = ({
  title,
  image,
  ghLink,
  liveLink,
  description,
  info,
  isOpen,
  onClose,
}) => {
  const theme = useTheme();
  const overlayBg = useColorModeValue(
    "rgba(0, 0, 0, 0.6)",
    "rgba(255, 255, 255, 0.6)"
  );

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      viewport={{ once: false }}
    >
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
          border={"1px solid"}
          _hover={{ opacity: 1 }}
          display="flex"
          alignItems="flex-end"
          justifyContent="center"
        >
          <HStack spacing={6} pb={10}>
            <a href={ghLink} target="_blank" rel="noopener noreferrer">
              <IconButton
                _hover={{ bg: "transparent" }}
                icon={<FaGithub />}
                color={theme.colors.jhataak}
                fontSize={30}
                bg={"transparent"}
                aria-label="Code"
              />
            </a>
            <a href={liveLink} target="_blank" rel="noopener noreferrer">
              <IconButton
                _hover={{ bg: "transparent" }}
                icon={<GoLinkExternal />}
                color={theme.colors.jhataak}
                fontSize={30}
                bg={"transparent"}
                aria-label="Link"
              />
            </a>
            <IconButton
              _hover={{ bg: "transparent" }}
              icon={<FaInfoCircle />}
              color={theme.colors.jhataak}
              fontSize={30}
              bg={"transparent"}
              aria-label="Info"
              onClick={info}
            />
          </HStack>
        </Box>
      </Box>
    </motion.div>
  );
};
