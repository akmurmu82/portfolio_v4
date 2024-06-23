import { Box, Text, Button } from "@chakra-ui/react";

const CustomToast = ({ title, description, onClose }) => {
  return (
    <Box
      p={3}
      bg="gray.700"
      color="white"
      borderRadius="md"
      boxShadow="lg"
    >
      <Text fontWeight="bold">{title}</Text>
      <Text>{description}</Text>
      <Button size="sm" mt={2} onClick={onClose}>
        Close
      </Button>
    </Box>
  );
};

export default CustomToast;
