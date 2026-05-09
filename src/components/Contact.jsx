import React, { useRef, useState } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Input,
  Textarea,
  Button,
  Icon,
  Flex,
  useToast,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
  Badge,
  Divider,
  Link,
} from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from 'emailjs-com';
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaDownload,
  FaPaperPlane,
  FaFileAlt,
  FaLinkedin,
  FaGithub,
  FaArrowRight,
} from 'react-icons/fa';

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: 'easeOut' },
});

const Contact = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [focused, setFocused] = useState(null);
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const inputStyle = (name) => ({
    bg: focused === name ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.05)',
    color: 'white',
    border: '1px solid',
    borderColor: focused === name ? 'brand.400' : 'whiteAlpha.200',
    borderRadius: 'xl',
    _placeholder: { color: 'whiteAlpha.500' },
    _focus: { boxShadow: '0 0 0 2px var(--chakra-colors-brand-400)', outline: 'none' },
    transition: 'all 0.2s',
    onFocus: () => setFocused(name),
    onBlur: () => setFocused(null),
  });

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs
      .sendForm('service_a5zs5ji', 'template_t0e4ap4', form.current, 'lW2ZmhmKbSE3i6EyU')
      .then(() => {
        toast({ title: 'Message sent!', description: "I'll get back to you soon.", status: 'success', duration: 5000, isClosable: true });
        form.current.reset();
      })
      .catch(() => {
        toast({ title: 'Error', description: 'Please try again later.', status: 'error', duration: 5000, isClosable: true });
      })
      .finally(() => setIsLoading(false));
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Debarun_Latest_Resume.pdf';
    link.download = 'Debarun_Ghosh_Resume.pdf';
    link.click();
  };

  const contactItems = [
    { icon: FaEnvelope, label: 'Email', value: 'debarunghosh2026@yahoo.com', href: 'mailto:debarunghosh2026@yahoo.com', color: 'brand.400' },
    { icon: FaMapMarkerAlt, label: 'Location', value: 'Bangalore, Karnataka', href: null, color: 'purple.400' },
    { icon: FaLinkedin, label: 'LinkedIn', value: 'linkedin.com/in/debarunghosh2024', href: 'https://linkedin.com/in/debarunghosh2024', color: 'blue.400' },
    { icon: FaGithub, label: 'GitHub', value: 'github.com/debarun1234', href: 'https://github.com/debarun1234', color: 'whiteAlpha.800' },
  ];

  return (
    <Box as="section" py={24} minH="100vh" position="relative" overflow="hidden">
      {/* Background blobs */}
      <Box position="absolute" top="-10%" left="-5%" w="500px" h="500px" borderRadius="full"
        bg="brand.500" opacity={0.06} filter="blur(80px)" pointerEvents="none" />
      <Box position="absolute" bottom="-10%" right="-5%" w="450px" h="450px" borderRadius="full"
        bg="purple.500" opacity={0.07} filter="blur(80px)" pointerEvents="none" />

      <Container maxW="container.xl" position="relative">

        {/* Header */}
        <MotionBox textAlign="center" mb={16} {...fadeUp(0)}>
          <Badge
            colorScheme="brand"
            fontSize="sm"
            px={4}
            py={1.5}
            borderRadius="full"
            letterSpacing="wider"
            textTransform="uppercase"
            mb={4}
            bg="rgba(99,179,237,0.15)"
            color="brand.300"
            border="1px solid"
            borderColor="brand.800"
          >
            Let's Connect
          </Badge>
          <Heading
            as="h2"
            fontSize={{ base: '4xl', md: '5xl', lg: '6xl' }}
            fontWeight="800"
            bgGradient="linear(to-r, brand.300, purple.300, pink.300)"
            bgClip="text"
            color="transparent"
            lineHeight="1.1"
            mb={4}
          >
            Get In Touch
          </Heading>
          <Text fontSize="xl" color="whiteAlpha.600" maxW="lg" mx="auto">
            Open to new opportunities, collaborations, and interesting conversations.
          </Text>
        </MotionBox>

        {/* Main Grid */}
        <Flex
          gap={10}
          direction={{ base: 'column', lg: 'row' }}
          align="stretch"
        >
          {/* Left — Contact Form */}
          <MotionBox flex="1.2" {...fadeUp(0.1)}>
            <Box
              bg="rgba(255,255,255,0.03)"
              border="1px solid"
              borderColor="whiteAlpha.100"
              borderRadius="3xl"
              p={8}
              backdropFilter="blur(16px)"
              position="relative"
              overflow="hidden"
              _before={{
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                h: '2px',
                bgGradient: 'linear(to-r, brand.400, purple.400, pink.400)',
                borderRadius: '3xl 3xl 0 0',
              }}
            >
              <VStack spacing={2} align="start" mb={8}>
                <Heading size="md" color="white" fontWeight="700">Send a Message</Heading>
                <Text fontSize="sm" color="whiteAlpha.500">I typically reply within 24 hours.</Text>
              </VStack>

              <form ref={form} onSubmit={sendEmail}>
                <VStack spacing={4}>
                  <Flex gap={4} w="full" direction={{ base: 'column', sm: 'row' }}>
                    <Input name="from_name" placeholder="Your Name *" size="lg" {...inputStyle('name')} required />
                    <Input name="from_email" type="email" placeholder="Email Address *" size="lg" {...inputStyle('email')} required />
                  </Flex>
                  <Input name="phone" type="tel" placeholder="Phone (Optional)" size="lg" {...inputStyle('phone')} />
                  <Textarea name="message" placeholder="Tell me about your project or opportunity..." rows={6} size="lg" resize="none" {...inputStyle('message')} required />

                  <Button
                    type="submit"
                    size="lg"
                    w="full"
                    bgGradient="linear(to-r, brand.400, purple.500)"
                    color="white"
                    rightIcon={<FaPaperPlane />}
                    isLoading={isLoading}
                    loadingText="Sending..."
                    borderRadius="xl"
                    fontWeight="700"
                    letterSpacing="wide"
                    _hover={{
                      bgGradient: 'linear(to-r, brand.300, purple.400)',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 8px 30px rgba(99,179,237,0.35)',
                    }}
                    _active={{ transform: 'translateY(0)' }}
                    transition="all 0.2s"
                  >
                    Send Message
                  </Button>
                </VStack>
              </form>
            </Box>
          </MotionBox>

          {/* Right — Info Panel */}
          <MotionBox flex="0.8" {...fadeUp(0.2)}>
            <VStack spacing={5} align="stretch" h="full">

              {/* Resume Card */}
              <Box
                bg="linear-gradient(135deg, rgba(99,179,237,0.12) 0%, rgba(159,122,234,0.12) 100%)"
                border="1px solid"
                borderColor="brand.700"
                borderRadius="2xl"
                p={6}
                position="relative"
                overflow="hidden"
              >
                <Box position="absolute" top="-20px" right="-20px" w="100px" h="100px"
                  bg="brand.400" opacity={0.08} borderRadius="full" filter="blur(20px)" />
                <VStack spacing={4} align="start">
                  <HStack spacing={3}>
                    <Flex w="40px" h="40px" bg="brand.400" borderRadius="lg" align="center" justify="center" flexShrink={0}>
                      <Icon as={FaFileAlt} color="white" boxSize={4} />
                    </Flex>
                    <VStack align="start" spacing={0}>
                      <Text fontWeight="700" color="white" fontSize="sm">My Resume</Text>
                      <Text fontSize="xs" color="whiteAlpha.500">PDF · Updated 2025</Text>
                    </VStack>
                  </HStack>
                  <HStack spacing={3} w="full">
                    <Button
                      flex={1}
                      size="sm"
                      variant="outline"
                      borderColor="brand.400"
                      color="brand.300"
                      leftIcon={<FaFileAlt />}
                      onClick={onOpen}
                      borderRadius="lg"
                      _hover={{ bg: 'brand.900', borderColor: 'brand.300' }}
                    >
                      Preview & Download
                    </Button>
                  </HStack>
                </VStack>
              </Box>

              {/* Availability Pill */}
              <HStack
                bg="rgba(72,187,120,0.1)"
                border="1px solid"
                borderColor="green.800"
                borderRadius="xl"
                px={4}
                py={3}
                spacing={3}
              >
                <Box w="8px" h="8px" bg="green.400" borderRadius="full"
                  boxShadow="0 0 8px var(--chakra-colors-green-400)"
                  sx={{ animation: 'pulse 2s infinite' }} />
                <Text fontSize="sm" color="green.300" fontWeight="600">Open to opportunities</Text>
              </HStack>

              {/* Contact Details */}
              <Box
                bg="rgba(255,255,255,0.03)"
                border="1px solid"
                borderColor="whiteAlpha.100"
                borderRadius="2xl"
                overflow="hidden"
                flex={1}
              >
                <Box px={5} py={4} borderBottom="1px solid" borderColor="whiteAlpha.100">
                  <Text fontSize="xs" fontWeight="700" color="whiteAlpha.500" letterSpacing="wider" textTransform="uppercase">
                    Contact Details
                  </Text>
                </Box>
                <VStack spacing={0} align="stretch" divider={<Divider borderColor="whiteAlpha.100" />}>
                  {contactItems.map(({ icon, label, value, href, color }) => (
                    <Box
                      key={label}
                      px={5}
                      py={4}
                      as={href ? Link : Box}
                      href={href}
                      isExternal={!!href}
                      _hover={{ bg: 'whiteAlpha.50', textDecoration: 'none' }}
                      transition="background 0.15s"
                      cursor={href ? 'pointer' : 'default'}
                    >
                      <HStack spacing={4} justify="space-between">
                        <HStack spacing={3}>
                          <Flex w="36px" h="36px" bg="whiteAlpha.100" borderRadius="lg" align="center" justify="center" flexShrink={0}>
                            <Icon as={icon} color={color} boxSize={4} />
                          </Flex>
                          <VStack align="start" spacing={0}>
                            <Text fontSize="xs" color="whiteAlpha.500">{label}</Text>
                            <Text fontSize="sm" color="white" fontWeight="500" noOfLines={1}>{value}</Text>
                          </VStack>
                        </HStack>
                        {href && <Icon as={FaArrowRight} color="whiteAlpha.300" boxSize={3} />}
                      </HStack>
                    </Box>
                  ))}
                </VStack>
              </Box>

            </VStack>
          </MotionBox>
        </Flex>
      </Container>

      {/* Resume Modal */}
      <AnimatePresence>
        {isOpen && (
          <Modal isOpen={isOpen} onClose={onClose} size="full" isCentered motionPreset="scale">
            <ModalOverlay bg="blackAlpha.800" backdropFilter="blur(12px)" />
            <ModalContent
              bg="rgba(15,20,35,0.97)"
              border="1px solid"
              borderColor="whiteAlpha.200"
              borderRadius={{ base: 'none', md: '2xl' }}
              h={{ base: '100vh', md: '95vh' }}
              maxW={{ base: '100vw', md: '90vw', xl: '1200px' }}
              mx={{ base: 0, md: 4 }}
              display="flex"
              flexDirection="column"
            >
              <ModalCloseButton color="white" top={4} right={4} zIndex={10} />
              <ModalBody p={6} display="flex" flexDirection="column" flex={1} overflow="hidden">
                <HStack w="full" justify="space-between" align="center" mb={4} flexShrink={0}>
                  <VStack align="start" spacing={0}>
                    <Heading size="md" color="white">Debarun Ghosh</Heading>
                    <HStack spacing={2} mt={1}>
                      <Badge colorScheme="green" borderRadius="full" fontSize="xs" px={2}>AI/ML Engineer</Badge>
                      <Badge colorScheme="blue" borderRadius="full" fontSize="xs" px={2}>Data Scientist</Badge>
                    </HStack>
                  </VStack>
                  <Button
                    size="sm"
                    bg="brand.400"
                    color="white"
                    leftIcon={<FaDownload />}
                    onClick={downloadResume}
                    borderRadius="lg"
                    _hover={{ bg: 'brand.300' }}
                    mr={8}
                  >
                    Download
                  </Button>
                </HStack>

                <Box
                  flex={1}
                  w="full"
                  borderRadius="xl"
                  overflow="hidden"
                  border="1px solid"
                  borderColor="whiteAlpha.200"
                  bg="white"
                  minH={0}
                >
                  <Box
                    as="iframe"
                    src="/Debarun_Latest_Resume.pdf"
                    w="full"
                    h="full"
                    border="none"
                    title="Debarun Ghosh Resume"
                    display="block"
                  />
                </Box>
              </ModalBody>
            </ModalContent>
          </Modal>
        )}
      </AnimatePresence>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </Box>
  );
};

export default Contact;
