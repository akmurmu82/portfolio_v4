import { Box, HStack, Heading, Icon, Text, VStack } from "@chakra-ui/react";
import { useContext } from "react";
import { FaGraduationCap, FaMapMarkerAlt, FaUniversity } from "react-icons/fa";
import { ThemeContext } from "../../AllContext";
import { motion } from "framer-motion";

function EducationCard({ duration, course, institute, location }) {
  const { isDark } = useContext(ThemeContext);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      viewport={{ once: false }}
    >
      <HStack alignItems="flex-start" spacing={5}>
        <VStack spacing={0}>
          <Icon as={FaGraduationCap} boxSize={10} color="yellow.400" />
          <Box h="115px" borderLeft="2px dashed" borderColor="yellow.400" />
        </VStack>
        <VStack align={"start"} color={isDark ? "#f6f6f6" : "#333"}>
          <Text
            fontWeight={"semibold"}
            p={"5px 20px"}
            bg={"#eeeeee"}
            borderRadius={20}
            color={"#333"}
          >
            {duration}
          </Text>
          <HStack spacing={3}>
            <Heading textAlign={"left"} as="h3" size="lg">
              {course}
            </Heading>
          </HStack>
          <HStack fontSize={23} spacing={3}>
            <Icon as={FaUniversity} />
            <Text fontWeight={"semibold"}>{institute}</Text>
          </HStack>
          <HStack fontSize={23} spacing={3}>
            <Icon as={FaMapMarkerAlt} />
            <Text fontWeight={"semibold"}>{location}</Text>
          </HStack>
        </VStack>
      </HStack>
    </motion.div>
  );
}

export default EducationCard;
