import { Box, Text, Button, useTheme, HStack } from "@chakra-ui/react";

const CustomToast = ({ title, description, onClose }) => {
  const theme = useTheme();
  // const { isDark } = useContext(ThemeContext);
  return (
    <Box
      p={3}
      color="white"
      borderRadius="md"
      bg={theme.colors.dark}
      boxShadow="lg"
    >
      <HStack justifyContent={"space-between"}>
        <Text fontWeight="bold">{title}</Text>
        <Button size="sm" mt={2} onClick={onClose}>
          Close
        </Button>
      </HStack>
      <Text>{description}</Text>
    </Box>
  );
};

export default CustomToast;
