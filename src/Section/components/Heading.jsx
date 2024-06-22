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
        color={theme.colors.secondary}
        position="relative"
        zIndex={1}
        fontSize={{ base: "4xl", md: "4xl", lg: "6xl" }}
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
        transform="translate(-50%, -15%)"
        zIndex={0}
        w={"100vh"}
        // border={"1px solid"}
        // scale={5}
        // color="transparent"
        textShadow="0 0 2px yellow.400"
        fontSize={{ base: "50px", md: "80px", lg: "80px" }}
      >
        {title}
      </Heading>
    </Box>
  );
}
