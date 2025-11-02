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
  SimpleGrid,
  Card,
  CardBody,
  Icon,
  Flex,
  useColorModeValue,
  useToast,
  AspectRatio,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
  Badge,
} from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from 'emailjs-com';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaDownload, FaPaperPlane, FaFileAlt } from 'react-icons/fa';

const MotionBox = motion(Box);

const Contact = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  const cardBg = 'rgba(255, 255, 255, 0.05)';
  const inputBg = 'rgba(255, 255, 255, 0.08)';
  const textColor = 'white';

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    emailjs.sendForm('service_a5zs5ji', 'template_t0e4ap4', form.current, 'lW2ZmhmKbSE3i6EyU')
      .then((result) => {
          toast({
            title: 'Message sent!',
            description: "I'll get back to you soon.",
            status: 'success',
            duration: 5000,
            isClosable: true,
          });
          form.current.reset();
      }, (error) => {
          toast({
            title: 'Error',
            description: 'Please try again later.',
            status: 'error',
            duration: 5000,
            isClosable: true,
          });
      })
      .finally(() => setIsLoading(false));
  };

  const viewResume = () => {
    onOpen();
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Debarun Ghosh_Resume.pdf';
    link.download = 'Debarun_Ghosh_Resume.pdf';
    link.click();
  };

  return (
    <Box
      as="section"
      py={20}
      minH="100vh"
      position="relative"
    >
      <Container maxW="container.xl">
        {/* Section Header */}
        <VStack spacing={4} mb={16} textAlign="center">
          <Flex align="center" gap={3}>
            <FaPaperPlane size={32} color="var(--chakra-colors-brand-400)" />
            <Heading
              as="h2"
              size="2xl"
              bgGradient="linear(to-r, brand.400, purple.400)"
              bgClip="text"
              color="transparent"
            >
              Get In Touch
            </Heading>
          </Flex>
          <Text fontSize="xl" color="whiteAlpha.700" maxW="2xl">
            Let's discuss your next project or opportunity
          </Text>
        </VStack>

        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={10}>
          {/* Contact Form */}
          <Card
            variant="elevated"
            bg={cardBg}
            backdropFilter="blur(10px)"
            border="1px solid"
            borderColor="whiteAlpha.200"
            borderRadius="2xl"
            overflow="hidden"
          >
            <CardBody p={8}>
              <form ref={form} onSubmit={sendEmail}>
                <VStack spacing={6}>
                  <Input
                    name="from_name"
                    placeholder="Your Name *"
                    size="lg"
                    bg={inputBg}
                    color={textColor}
                    border="1px"
                    borderColor="whiteAlpha.200"
                    _placeholder={{ color: 'whiteAlpha.600' }}
                    _focus={{ borderColor: 'brand.400', boxShadow: '0 0 0 1px var(--chakra-colors-brand-400)' }}
                    required
                  />
                  
                  <Input
                    name="from_email"
                    type="email"
                    placeholder="Your Email *"
                    size="lg"
                    bg={inputBg}
                    color={textColor}
                    border="1px"
                    borderColor="whiteAlpha.200"
                    _placeholder={{ color: 'whiteAlpha.600' }}
                    _focus={{ borderColor: 'brand.400', boxShadow: '0 0 0 1px var(--chakra-colors-brand-400)' }}
                    required
                  />
                  
                  <Input
                    name="phone"
                    type="tel"
                    placeholder="Phone Number (Optional)"
                    size="lg"
                    bg={inputBg}
                    color={textColor}
                    border="1px"
                    borderColor="whiteAlpha.200"
                    _placeholder={{ color: 'whiteAlpha.600' }}
                    _focus={{ borderColor: 'brand.400', boxShadow: '0 0 0 1px var(--chakra-colors-brand-400)' }}
                  />
                  
                  <Textarea
                    name="message"
                    placeholder="Your Message *"
                    rows={6}
                    size="lg"
                    bg={inputBg}
                    color={textColor}
                    border="1px"
                    borderColor="whiteAlpha.200"
                    _placeholder={{ color: 'whiteAlpha.600' }}
                    _focus={{ borderColor: 'brand.400', boxShadow: '0 0 0 1px var(--chakra-colors-brand-400)' }}
                    required
                  />
                  
                  <Button
                    type="submit"
                    size="lg"
                    w="full"
                    colorScheme="brand"
                    rightIcon={<FaPaperPlane />}
                    isLoading={isLoading}
                    loadingText="Sending..."
                    _hover={{ transform: 'translateY(-2px)', boxShadow: 'xl' }}
                  >
                    Send Message
                  </Button>
                </VStack>
              </form>
            </CardBody>
          </Card>

          {/* Contact Information */}
          <VStack spacing={6} align="stretch">
            {/* Resume Button */}
            <Button
              size="lg"
              colorScheme="brand"
              leftIcon={<FaFileAlt />}
              onClick={viewResume}
              _hover={{ transform: 'translateY(-2px)', boxShadow: 'xl' }}
            >
              View Resume
            </Button>

            {/* Contact Details Cards */}
            <VStack spacing={4}>
              <Card
                variant="elevated"
                bg={cardBg}
                backdropFilter="blur(10px)"
                border="1px solid"
                borderColor="whiteAlpha.200"
                borderRadius="xl"
                w="full"
              >
              </Card>

              <Card
                variant="elevated"
                bg={cardBg}
                backdropFilter="blur(10px)"
                border="1px solid"
                borderColor="whiteAlpha.200"
                borderRadius="xl"
                w="full"
              >
                <CardBody>
                  <HStack spacing={4}>
                    <Flex
                      w="50px"
                      h="50px"
                      bg="purple.500"
                      borderRadius="lg"
                      align="center"
                      justify="center"
                    >
                      <Icon as={FaEnvelope} color="white" boxSize={5} />
                    </Flex>
                    <VStack align="start" spacing={0}>
                      <Text fontSize="sm" color="whiteAlpha.700">Email</Text>
                      <Text fontWeight="600" fontSize="sm" color={textColor}>debarun.ghosh.2024@gmail.com</Text>
                    </VStack>
                  </HStack>
                </CardBody>
              </Card>

              <Card
                variant="elevated"
                bg={cardBg}
                backdropFilter="blur(10px)"
                border="1px solid"
                borderColor="whiteAlpha.200"
                borderRadius="xl"
                w="full"
              >
                <CardBody>
                  <HStack spacing={4}>
                    <Flex
                      w="50px"
                      h="50px"
                      bg="accent.500"
                      borderRadius="lg"
                      align="center"
                      justify="center"
                    >
                      <Icon as={FaMapMarkerAlt} color="white" boxSize={5} />
                    </Flex>
                    <VStack align="start" spacing={0}>
                      <Text fontSize="sm" color="whiteAlpha.700">Location</Text>
                      <Text fontWeight="600" fontSize="sm" color={textColor}>Avalahalli, Bangalore, Karnataka</Text>
                    </VStack>
                  </HStack>
                </CardBody>
              </Card>
            </VStack>

            {/* Google Map */}
            <Card
              variant="elevated"
              bg={cardBg}
              backdropFilter="blur(10px)"
              border="1px solid"
              borderColor="whiteAlpha.200"
              borderRadius="xl"
              overflow="hidden"
            >
              <AspectRatio ratio={16 / 9}>
                <iframe
                  title="location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.3794562430944!2d77.59079601507363!3d13.070579490828956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae19338dd72573%3A0x2556379e25625569!2sAvalahalli%2C%20Bangalore%2C%20Karnataka%20560064!5e0!3m2!1sen!2sin!4v1695381516546!5m2!1sen!2sin"
                  loading="lazy"
                />
              </AspectRatio>
            </Card>
          </VStack>
        </SimpleGrid>
      </Container>

      {/* Resume Modal */}
      <AnimatePresence>
        {isOpen && (
          <Modal isOpen={isOpen} onClose={onClose} size="6xl" isCentered motionPreset="scale">
            <ModalOverlay bg="blackAlpha.800" backdropFilter="blur(10px)" />
            <ModalContent
              as={motion.div}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              bg="rgba(26, 32, 44, 0.95)"
              backdropFilter="blur(20px)"
              border="1px solid"
              borderColor="whiteAlpha.200"
              borderRadius="2xl"
              maxH="90vh"
              mx={4}
            >
              <ModalCloseButton color="white" />
              <ModalBody p={8}>
                <VStack spacing={6}>
                  <MotionBox
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.4 }}
                  >
                    <VStack spacing={2} textAlign="center">
                      <Heading size="lg" color="white">
                        Resume
                      </Heading>
                      <Text color="brand.300" fontWeight="semibold">
                        Debarun Ghosh
                      </Text>
                      <HStack spacing={2}>
                        <Badge colorScheme="green" fontSize="sm" px={3} py={1} borderRadius="full">
                          AI/ML Engineer
                        </Badge>
                        <Badge colorScheme="blue" fontSize="sm" px={3} py={1} borderRadius="full">
                          Data Scientist
                        </Badge>
                      </HStack>
                    </VStack>
                  </MotionBox>
                  
                  <MotionBox
                    w="full"
                    h="70vh"
                    borderRadius="xl"
                    overflow="hidden"
                    border="2px solid"
                    borderColor="brand.400"
                    boxShadow="0 0 30px var(--chakra-colors-brand-400)"
                    bg="white"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                  >
                    <Box
                      as="iframe"
                      src="/Debarun Ghosh_Resume.pdf"
                      w="full"
                      h="full"
                      border="none"
                      title="Debarun Ghosh Resume"
                    />
                  </MotionBox>
                  
                  <MotionBox
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.4 }}
                    w="full"
                  >
                    <Button
                      w="full"
                      size="lg"
                      colorScheme="green"
                      leftIcon={<FaDownload />}
                      onClick={downloadResume}
                      _hover={{ transform: 'translateY(-2px)', boxShadow: 'xl' }}
                    >
                      Download Resume
                    </Button>
                  </MotionBox>
                </VStack>
              </ModalBody>
            </ModalContent>
          </Modal>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default Contact;
