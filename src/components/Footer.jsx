import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Container,
  Grid,
  GridItem,
  VStack,
  HStack,
  Heading,
  Text,
  Link,
  Icon,
  Divider,
  Button,
  SimpleGrid,
  Flex,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import PrivacyPolicy from './PrivacyPolicy';
import { motion } from 'framer-motion';
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaHeart,
  FaReact,
  FaPython,
  FaDocker,
  FaAws,
  FaDatabase,
  FaArrowUp,
} from 'react-icons/fa';
import {
  SiTensorflow,
  SiChakraui,
  SiVite,
  SiTailwindcss,
  SiNetlify,
} from 'react-icons/si';

const MotionBox = motion(Box);

const Footer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  const scrollToTop = () => {
    const heroSection = document.getElementById('hero');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Publications', href: '#publications' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  const techStack = [
    { name: 'React', icon: FaReact, color: 'cyan.400' },
    { name: 'Vite', icon: SiVite, color: 'purple.400' },
    { name: 'Chakra UI', icon: SiChakraui, color: 'teal.400' },
    { name: 'Netlify', icon: SiNetlify, color: 'cyan.300' },
  ];

  return (
    <Box
      as="footer"
      position="relative"
      pt={20}
      pb={8}
      bg="transparent"
    >
      <Container maxW="container.xl">
        <Grid
          templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }}
          gap={12}
          mb={12}
        >
          {/* About Section */}
          <GridItem colSpan={{ base: 1, lg: 1 }}>
            <VStack align="start" spacing={4}>
              <Heading
                as="h3"
                size="lg"
                bgGradient="linear(to-r, brand.400, purple.400)"
                bgClip="text"
                color="transparent"
              >
                Debarun Ghosh
              </Heading>
              <Text color="whiteAlpha.700" fontSize="sm" lineHeight="tall">
              Software Engineer & Gen-AI Developer passionate about creating innovative
              solutions using AI/ML technologies.
              </Text>
              <HStack spacing={4} pt={2}>
                <Link href="https://github.com/debarun1234" target="_blank" rel="noopener noreferrer">
                  <Icon
                    as={FaGithub}
                    boxSize={6}
                    color="whiteAlpha.700"
                    _hover={{ color: 'white', transform: 'scale(1.2)' }}
                    transition="all 0.3s"
                  />
                </Link>
                <Link href="https://linkedin.com/in/debarunghosh2024" target="_blank" rel="noopener noreferrer">
                  <Icon
                    as={FaLinkedin}
                    boxSize={6}
                    color="whiteAlpha.700"
                    _hover={{ color: 'brand.400', transform: 'scale(1.2)' }}
                    transition="all 0.3s"
                  />
                </Link>
                <Link href="mailto:debarun.ghosh.2024@gmail.com">
                  <Icon
                    as={FaEnvelope}
                    boxSize={6}
                    color="whiteAlpha.700"
                    _hover={{ color: 'accent.400', transform: 'scale(1.2)' }}
                    transition="all 0.3s"
                  />
                </Link>
              </HStack>
            </VStack>
          </GridItem>

          {/* Quick Links */}
          <GridItem>
            <VStack align="start" spacing={4}>
              <Heading as="h4" size="md" color="white">
                Quick Links
              </Heading>
              <VStack align="start" spacing={2}>
                {quickLinks.slice(0, 4).map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    color="whiteAlpha.700"
                    fontSize="sm"
                    _hover={{ color: 'brand.400', textDecoration: 'none', transform: 'translateX(5px)' }}
                    transition="all 0.3s"
                  >
                    {link.name}
                  </Link>
                ))}
              </VStack>
            </VStack>
          </GridItem>

          {/* More Links */}
          <GridItem>
            <VStack align="start" spacing={4}>
              <Heading as="h4" size="md" color="white">
                More
              </Heading>
              <VStack align="start" spacing={2}>
                {quickLinks.slice(4).map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    color="whiteAlpha.700"
                    fontSize="sm"
                    _hover={{ color: 'brand.400', textDecoration: 'none', transform: 'translateX(5px)' }}
                    transition="all 0.3s"
                  >
                    {link.name}
                  </Link>
                ))}
                <Text
                  as="button"
                  onClick={onOpen}
                  color="whiteAlpha.700"
                  fontSize="sm"
                  _hover={{ color: 'brand.400', transform: 'translateX(5px)' }}
                  transition="all 0.3s"
                  cursor="pointer"
                  bg="transparent"
                  border="none"
                  textAlign="left"
                  p={0}
                >
                  Privacy Policy
                </Text>
              </VStack>
            </VStack>
          </GridItem>
        </Grid>

        <Divider borderColor="whiteAlpha.300" my={8} />

        {/* Tech Stack Section */}
        <VStack spacing={6} mb={8}>
          <Heading as="h4" size="sm" color="whiteAlpha.700" textAlign="center">
            Built With
          </Heading>
          <HStack spacing={12} justify="center" flexWrap="wrap">
            {techStack.map((tech) => (
              <VStack
                key={tech.name}
                spacing={2}
                opacity={0.7}
                _hover={{ opacity: 1, transform: 'translateY(-5px)' }}
                transition="all 0.3s"
                cursor="pointer"
              >
                <Icon as={tech.icon} boxSize={8} color={tech.color} />
                <Text fontSize="xs" color="whiteAlpha.700">
                  {tech.name}
                </Text>
              </VStack>
            ))}
          </HStack>
        </VStack>

        <Divider borderColor="whiteAlpha.300" my={8} />

        {/* Bottom Section */}
        <Flex
          direction={{ base: 'column', md: 'row' }}
          justify="space-between"
          align="center"
          gap={4}
        >
          <HStack spacing={2} fontSize="sm" color="whiteAlpha.700">
            <Text>&copy; {new Date().getFullYear()} Debarun Ghosh.</Text>
            <Text>All rights reserved.</Text>
            <Icon as={FaHeart} color="red.400" boxSize={3} />
          </HStack>

          <Text fontSize="sm" color="whiteAlpha.700" textAlign="center">
            Designed & Developed by <Text as="span" color="brand.400" fontWeight="bold">Debarun Ghosh</Text>
          </Text>

          <Button
            size="sm"
            variant="ghost"
            color="whiteAlpha.700"
            rightIcon={<FaArrowUp />}
            onClick={scrollToTop}
            _hover={{ color: 'white', bg: 'whiteAlpha.200' }}
          >
            Back to Top
          </Button>
        </Flex>
      </Container>

      {/* Privacy Policy Modal */}
      <PrivacyPolicy isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default Footer;
