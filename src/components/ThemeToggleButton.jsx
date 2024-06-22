import { Box, IconButton, useTheme } from "@chakra-ui/react";
import { useContext } from "react";
import { IoMoonSharp, IoSunnySharp } from "react-icons/io5";
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
      right={{ base: 5, lg: 6 }}
      backgroundColor="transparent"
      boxShadow={"rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"}
      zIndex={10}
      onClick={handleClick}
      isRound={true}
      _hover={{ bg: theme.colors.secondary }}
      aria-label="Navigate to section"
      fontSize={{ base: "20px", lg: "20px" }}
      icon={
        <Box padding={3} color={isDark ? "#333" : "#f3f3f3"}>
          {isDark ? <IoSunnySharp /> : <IoMoonSharp />}
        </Box>
      }
      bg={isDark ? "#f3f3f3" : "#333"}
      h={"auto"}
    />
  );
}
