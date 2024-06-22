import { Box, IconButton, useTheme } from "@chakra-ui/react";
import { useContext } from "react";
import { IoSunnySharp } from "react-icons/io5";
import { ThemeContext } from "../AllContext";

export default function ThemeToggleButton() {
  const theme = useTheme();
  const { isDark, toggleTheme } = useContext(ThemeContext);
  function handleClick() {
    toggleTheme();
  }
  return (
    <IconButton
      position="fixed"
      top={{ base: 5, lg: 10 }}
      right={{ base: 5, lg: 4 }}
      backgroundColor="transparent"
      zIndex={10}
      onClick={handleClick}
      isRound={true}
      _hover={{ bg: theme.colors.secondary }}
      aria-label="Navigate to section"
      fontSize={{ base: "20px", lg: "20px" }}
      icon={
        <Box padding={3} color={"white"}>
          <IoSunnySharp />
        </Box>
      }
      bg={"#333"}
      h={"auto"}
    />
  );
}
