import React from 'react';
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
  Flex,
  Image,
  useDisclosure,
} from '@chakra-ui/react';
import PrivacyPolicy from './PrivacyPolicy';
import dgLogo from '../assets/dg_logo.png';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart, FaReact, FaArrowUp } from 'react-icons/fa';
import { SiChakraui, SiVite, SiNetlify } from 'react-icons/si';

const techStack = [
  { name: 'React',     icon: FaReact,    color: '#76E4F7' },
  { name: 'Vite',      icon: SiVite,     color: '#A78BFA' },
  { name: 'Chakra UI', icon: SiChakraui, color: '#4FD1C5' },
  { name: 'Netlify',   icon: SiNetlify,  color: '#67E8F9' },
];

const quickLinks = [
  { name: 'About',        href: '#about'        },
  { name: 'Skills',       href: '#skills'       },
  { name: 'Experience',   href: '#experience'   },
  { name: 'Projects',     href: '#projects'     },
  { name: 'Education',    href: '#education'    },
  { name: 'Publications', href: '#publications' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact',      href: '#contact'      },
];

const NavLink = ({ href, children }) => (
  <Link
    href={href}
    color="whiteAlpha.600"
    fontSize="sm"
    _hover={{ color: 'brand.400', textDecoration: 'none', pl: '4px' }}
    transition="all 0.25s"
  >
    {children}
  </Link>
);

const Footer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const scrollToTop = () => {
    const el = document.getElementById('hero');
    el ? el.scrollIntoView({ behavior: 'smooth', block: 'start' })
       : window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Box as="footer" pt={16} pb={6} bg="transparent" position="relative">
      <Container maxW="container.xl">

        {/* ── Main grid ─────────────────────────────────────────── */}
        <Grid
          templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}
          gap={{ base: 10, lg: 16 }}
          mb={10}
          alignItems="start"
        >
          {/* Col 1 — Brand */}
          <GridItem>
            <VStack align="start" spacing={4}>
              <HStack spacing={4} align="center">
                <Image
                  src={dgLogo}
                  alt="Debarun Ghosh"
                  h="105px"
                  w="auto"
                  objectFit="contain"
                  flexShrink={0}
                  style={{ mixBlendMode: 'screen' }}
                />
                <Text color="whiteAlpha.600" fontSize="medium" lineHeight="1.7" textAlign="left">
                  Gen-AI Engineer & Mentor building production-grade AI systems,
                  RAG pipelines, and intelligent cloud solutions.
                </Text>
              </HStack>
            </VStack>
          </GridItem>

          {/* Col 2 — Quick Links */}
          <GridItem>
            <VStack align="start" spacing={3}>
              <Text fontSize="xs" fontWeight="700" color="whiteAlpha.400"
                textTransform="uppercase" letterSpacing="0.12em" mb={1}>
                Quick Links
              </Text>
              {quickLinks.slice(0, 4).map(l => (
                <NavLink key={l.name} href={l.href}>{l.name}</NavLink>
              ))}
            </VStack>
          </GridItem>

          {/* Col 3 — More */}
          <GridItem>
            <VStack align="start" spacing={3}>
              <Text fontSize="xs" fontWeight="700" color="whiteAlpha.400"
                textTransform="uppercase" letterSpacing="0.12em" mb={1}>
                More
              </Text>
              {quickLinks.slice(4).map(l => (
                <NavLink key={l.name} href={l.href}>{l.name}</NavLink>
              ))}
              <Text
                as="button" onClick={onOpen}
                color="whiteAlpha.600" fontSize="sm"
                _hover={{ color: 'brand.400', pl: '4px' }}
                transition="all 0.25s" cursor="pointer"
                bg="transparent" border="none" textAlign="left" p={0}
              >
                Privacy Policy
              </Text>
            </VStack>
          </GridItem>
        </Grid>

        <Divider borderColor="whiteAlpha.100" />

        {/* ── Bottom bar ────────────────────────────────────────── */}
        <Flex
          direction={{ base: 'column', md: 'row' }}
          justify="space-between"
          align="center"
          gap={4}
          pt={5}
        >
          {/* Copyright */}
          <HStack spacing={1.5} color="whiteAlpha.400" fontSize="xs">
            <Text>&copy; {new Date().getFullYear()} Debarun Ghosh.</Text>
            <Text>All rights reserved.</Text>
            <Icon as={FaHeart} color="red.400" boxSize={2.5} />
          </HStack>

          {/* Built with — small inline icons */}
          <HStack spacing={3} color="whiteAlpha.400" fontSize="xs">
            <Text letterSpacing="0.05em">Built with</Text>
            {techStack.map((t, i) => (
              <HStack key={t.name} spacing={1}>
                <Icon as={t.icon} boxSize={3} color={t.color} />
                <Text color="whiteAlpha.500">{t.name}</Text>
                {i < techStack.length - 1 && (
                  <Text color="whiteAlpha.200">·</Text>
                )}
              </HStack>
            ))}
          </HStack>

          {/* Back to top */}
          <Button
            size="xs"
            variant="ghost"
            color="whiteAlpha.500"
            rightIcon={<FaArrowUp />}
            onClick={scrollToTop}
            _hover={{ color: 'white', bg: 'whiteAlpha.100' }}
            fontSize="xs"
          >
            Back to Top
          </Button>
        </Flex>
      </Container>

      <PrivacyPolicy isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default Footer;
