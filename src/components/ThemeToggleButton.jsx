import { Box, IconButton, useTheme } from "@chakra-ui/react";
import { IoSunnySharp } from "react-icons/io5";

export default function ThemeToggleButton() {
  const theme = useTheme();
  function handleClick() {}
  return (
    <IconButton
      position="fixed"
      top={{ base: 5, lg: 10 }}
      right={{ base: 5, lg: 4 }}
      //   width={{ base: "100%", lg: "50px" }}
      backgroundColor="transparent"
        // height={{ base: "auto", lg: "50px" }}
      //   padding={{ base: 1, lg: 4 }}
      //   display="flex"
      zIndex={10}
      onClick={handleClick}
      isRound={true}
      _hover={{ bg: theme.colors.secondary }}
      aria-label="Navigate to section"
      fontSize={{ base: "20px", lg: "20px" }}
      icon={
        <Box padding={5} color={"white"}>
          <IoSunnySharp />
        </Box>
      }
      bg={"#333"}
      h={"auto"}
    />
  );
}
