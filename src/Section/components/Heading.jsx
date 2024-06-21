import { Heading, useTheme } from "@chakra-ui/react";

export default function MyHeading({ title }) {
  const theme = useTheme();
  return (
    <Heading
      fontFamily={theme.fonts.subheading}
      fontWeight={'bold'}
      as="h2"
      size={{ base: "lg", lg: "xl" }}
      color={theme.colors.secondary}
      // mb={2}
    >
      {title}
    </Heading>
  );
}
