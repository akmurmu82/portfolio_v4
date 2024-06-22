import { Box, Text, useTheme } from "@chakra-ui/react";

const MyHeading = ({ title }) => {
  const theme = useTheme();
  return (
    <Box position="relative" display="inline-block" textAlign="center" w="100%">
      <Text
        fontSize={{ base: "3xl", lg: "6xl" }}
        fontWeight="bold"
        color={theme.colors.secondary}
        position="relative"
        zIndex={1}
        p={10}
      >
        {title}
      </Text>
      <Text
        p={10}
        fontSize={{ base: "50px", lg: "100px" }}
        fontWeight="bold"
        w={"100vw"}
        color={theme.colors.secondary}
        fontFamily={theme.fonts.outline}
        opacity={0.1}
        position="absolute"
        top="0"
        left="50%"
        transform={{
          base: "translate(-50%, -8%)",
          lg: "translate(-50%, -15%)",
        }}
        zIndex={0}
      >
        {title}
      </Text>
    </Box>
  );
};

export default MyHeading;
