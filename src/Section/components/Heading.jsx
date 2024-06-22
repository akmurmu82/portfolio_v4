import { Box, Heading, useTheme } from "@chakra-ui/react";

export default function MyHeading({ title }) {
  const theme = useTheme();
  return (
    // <Heading
    //   // fontFamily={theme.fonts.subheading}
    //   fontWeight={'bold'}
    //   // as="h1"
    //   size={{ base: "lg", lg: "xl" }}
    //   color={theme.colors.secondary}
    //   mb={10}
    // >
    //   {title}
    // </Heading>

    <Box
      position="relative"
      display="inline-block"
      textAlign="center"
      mb={10}
      mt={10}
    >
      <Heading
        fontWeight="bold"
        color="yellow.400"
        position="relative"
        zIndex={1}
        fontSize={{ base: "4xl", md: "6xl", lg: "8xl" }}
      >
        {title}
      </Heading>
      <Heading
        fontWeight="bold"
        color="yellow.400"
        opacity={0.1}
        position="absolute"
        top="0"
        left="50%"
        transform="translate(-50%, -20%)"
        zIndex={0}
        // scale={5}
        // color="transparent"
        textShadow="0 0 2px yellow.400"
        fontSize={{ base: "50px", md: "80px", lg: "100px" }}
      >
        {title}
      </Heading>
    </Box>
  );
}
