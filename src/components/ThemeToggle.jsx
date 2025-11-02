import React from 'react';
import {
  IconButton,
  useColorMode,
  useColorModeValue,
  Box,
  Tooltip,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';

const MotionIconButton = motion(IconButton);

const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  
  const bg = useColorModeValue('whiteAlpha.200', 'whiteAlpha.200');
  const hoverBg = useColorModeValue('whiteAlpha.300', 'whiteAlpha.300');

  return (
    <Tooltip 
      label={`Switch to ${isDark ? 'light' : 'dark'} theme`} 
      placement="left"
      hasArrow
    >
      <Box
        position="fixed"
        top="20px"
        right="20px"
        zIndex="1000"
      >
        <MotionIconButton
          aria-label="Toggle theme"
          icon={
            <motion.div
              key={colorMode}
              initial={{ rotate: -180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 180, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {isDark ? <FaSun /> : <FaMoon />}
            </motion.div>
          }
          onClick={toggleColorMode}
          variant="ghost"
          bg={bg}
          color={isDark ? 'yellow.400' : 'purple.400'}
          backdropFilter="blur(10px)"
          border="1px solid"
          borderColor="whiteAlpha.300"
          borderRadius="full"
          size="lg"
          _hover={{
            bg: hoverBg,
            transform: 'scale(1.1)',
          }}
          _active={{
            transform: 'scale(0.95)',
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        />
      </Box>
    </Tooltip>
  );
};

export default ThemeToggle;