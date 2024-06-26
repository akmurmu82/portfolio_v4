import {
  Box,
  Button,
  HStack,
  IconButton,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useColorModeValue,
  useDisclosure,
  useTheme,
} from "@chakra-ui/react";
import { FaCode, FaInfoCircle, FaLink } from "react-icons/fa";
import { motion } from "framer-motion";

export const ProjectCard = ({ title, image, ghLink, liveLink, info, onClose, isOpen }) => {
  const theme = useTheme();
  const overlayBg = useColorModeValue(
    // "#eeeeee",
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

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>{/* <Lorem count={2} /> */}asdfg</ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant="ghost">Secondary Action</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

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
          <HStack spacing={6}>
            <a href={ghLink} target="_blank" rel="noopener noreferrer">
              <IconButton
                _hover={{ bg: "transparent" }}
                icon={<FaCode />}
                color={theme.colors.jhataak}
                fontSize={20}
                bg={"transparent"}
                aria-label="Code"
              />
            </a>
            <a href={liveLink} target="_blank" rel="noopener noreferrer">
              <IconButton
                _hover={{ bg: "transparent" }}
                icon={<FaLink />}
                color={theme.colors.jhataak}
                fontSize={20}
                bg={"transparent"}
                aria-label="Link"
              />
            </a>
            <IconButton
              _hover={{ bg: "transparent" }}
              icon={<FaInfoCircle />}
              color={theme.colors.jhataak}
              fontSize={20}
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
