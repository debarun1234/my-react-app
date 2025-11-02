import React, { useEffect, useRef } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Avatar,
  Icon,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';
import { keyframes } from '@emotion/react';
import { motion } from 'framer-motion';
import Typed from 'typed.js';
import { FaGithub, FaLinkedin, FaChevronDown } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';
import BackgroundImage from '../assets/bagai.webp';
import ProfileImage from '../assets/Debarun Ghosh.jpg';

// Animation keyframes
const float = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-10px) rotate(2deg); }
`;

const sparkle = keyframes`
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(1.2); }
`;

const MotionBox = motion(Box);
const MotionAvatar = motion(Avatar);

const Hero = () => {
  const typedElement = useRef(null);
  
  // Color mode values
  const bgGradient = useColorModeValue(
    'linear(to-br, gray.900, purple.900, blue.900)',
    'linear(to-br, gray.900, purple.900, blue.900)'
  );
  
  const glassBoxBg = useColorModeValue(
    'rgba(255, 255, 255, 0.1)',
    'rgba(255, 255, 255, 0.05)'
  );

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: ['Gen-AI Enthusiast', 'ML Engineer', 'Full-Stack Developer', 'Data Analyst'],
      typeSpeed: 50,
      backSpeed: 25,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('about');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      minH="100vh"
      position="relative"
      overflow="hidden"
      bgImage={`url(${BackgroundImage})`}
      bgSize="cover"
      bgPosition="center"
      bgAttachment="fixed"
    >
      {/* Overlay with gradient */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bgGradient={bgGradient}
        opacity="0.8"
        zIndex="1"
      />
      
      {/* Floating particles effect */}
      <Box position="absolute" top="0" left="0" right="0" bottom="0" zIndex="2">
        {[...Array(20)].map((_, i) => {
          const delay = Math.random() * 2;
          return (
            <Box
              key={i}
              position="absolute"
              top={`${Math.random() * 100}%`}
              left={`${Math.random() * 100}%`}
              w="4px"
              h="4px"
              bg="brand.400"
              borderRadius="full"
              animation={`${sparkle} ${2 + Math.random() * 3}s infinite`}
              sx={{
                animationDelay: `${delay}s`,
              }}
            />
          );
        })}
      </Box>

      {/* Main Content */}
      <Container
        maxW="container.xl"
        h="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        position="relative"
        zIndex="3"
      >
        <VStack spacing={8} textAlign="center">
          {/* Profile Image with glassmorphism */}
          <MotionBox
            initial={{ opacity: 0, y: -50, scale: 0.5 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Box
              p={2}
              bg={glassBoxBg}
              backdropFilter="blur(10px)"
              border="2px solid"
              borderColor="whiteAlpha.300"
              borderRadius="full"
              animation={`${float} 6s ease-in-out infinite`}
            >
              <MotionAvatar
                size="2xl"
                src={ProfileImage}
                name="Debarun Ghosh"
                border="4px solid"
                borderColor="brand.400"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
            </Box>
          </MotionBox>

          {/* Name with gradient text */}
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Heading
              as="h1"
              size="2xl"
              bgGradient="linear(to-r, brand.400, purple.400, pink.400)"
              bgClip="text"
              color="transparent"
              fontWeight="bold"
              mb={2}
            >
              Debarun Ghosh
            </Heading>
          </MotionBox>

          {/* Subtitle */}
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Text
              fontSize="xl"
              color="whiteAlpha.900"
              maxW="600px"
              lineHeight="tall"
              mb={4}
            >
              Software Engineer | Generative AI Developer | Technology Enthusiast
            </Text>
          </MotionBox>

          {/* Typed text */}
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <HStack spacing={2} justify="center" align="center">
              <Icon as={HiSparkles} color="brand.400" />
              <Text
                ref={typedElement}
                fontSize="lg"
                fontFamily="mono"
                color="brand.300"
                minH="28px"
              />
              <Icon as={HiSparkles} color="brand.400" />
            </HStack>
          </MotionBox>

          {/* Social Links */}
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <HStack spacing={6}>
              <Button
                as="a"
                href="https://github.com/debarun1234"
                target="_blank"
                rel="noopener noreferrer"
                variant="glass"
                size="lg"
                leftIcon={<FaGithub />}
                _hover={{
                  transform: 'translateY(-2px)',
                  boxShadow: '0 10px 20px rgba(0,0,0,0.3)',
                }}
              >
                GitHub
              </Button>
              <Button
                as="a"
                href="https://linkedin.com/in/debarunghosh2024"
                target="_blank"
                rel="noopener noreferrer"
                variant="glass"
                size="lg"
                leftIcon={<FaLinkedin />}
                _hover={{
                  transform: 'translateY(-2px)',
                  boxShadow: '0 10px 20px rgba(0,0,0,0.3)',
                }}
              >
                LinkedIn
              </Button>
            </HStack>
          </MotionBox>
        </VStack>
      </Container>

      {/* Scroll Down Indicator */}
      <MotionBox
        position="absolute"
        bottom="8"
        left="50%"
        transform="translateX(-50%)"
        zIndex="4"
        cursor="pointer"
        onClick={scrollToNextSection}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        whileHover={{ y: -5 }}
      >
        <VStack spacing={2}>
          <Text color="whiteAlpha.800" fontSize="sm">
            Scroll Down
          </Text>
          <MotionBox
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <Icon as={FaChevronDown} color="brand.400" boxSize="6" />
          </MotionBox>
        </VStack>
      </MotionBox>
    </Box>
  );
};

export default Hero;
