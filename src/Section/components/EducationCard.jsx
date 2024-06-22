import { Box, HStack, Heading, Icon, Text, VStack } from "@chakra-ui/react";
import { FaGraduationCap, FaMapMarkerAlt, FaUniversity } from "react-icons/fa";

function EducationCard({ duration, course, institute, location }) {
  return (
    <HStack align="start" spacing={2}>
      <VStack spacing={0}>
        <Icon as={FaGraduationCap} boxSize={10} color="yellow.400" />
        <Box h="100px" borderLeft="2px dashed" borderColor="yellow.400" />
      </VStack>
      <VStack align={"start"}>
        <Text p={"0 15px"} bg={"grey"} borderRadius={20}>
          {duration}
        </Text>
        <HStack spacing={3}>
          <Heading textAlign={'left'} as="h3" size="lg">
            {course}
          </Heading>
        </HStack>
        <HStack spacing={3}>
          <Icon as={FaUniversity} />
          <Text>{institute}</Text>
        </HStack>
        <HStack spacing={3}>
          <Icon as={FaMapMarkerAlt} />
          <Text>{location}</Text>
        </HStack>
      </VStack>
    </HStack>
  );
}

export default EducationCard;
