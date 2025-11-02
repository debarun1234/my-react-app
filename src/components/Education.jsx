import React, { useState } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Image,
  Card,
  CardBody,
  Flex,
  useColorModeValue,
  Icon,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
  Badge,
} from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGraduationCap, FaCalendar, FaUniversity, FaFileAlt } from 'react-icons/fa';
import PurdueLogo from '../assets/purdue_logo.svg';
import RevaLogo from '../assets/reva_logo.png';
import revaCertificate from '../assets/DeabrunGhosh_Btech_Degree.pdf';
import purdueCertificate from '../assets/DebarunGhosh_PGCert.pdf';

const MotionCard = motion(Card);
const MotionBox = motion(Box);

const educationData = [
  {
    institution: 'Purdue University',
    degree: 'Postgraduate Vocational Program',
    specialization: 'Applied Generative AI Specialization',
    date: 'August 2024',
    logo: PurdueLogo,
    color: 'yellow.500',
    certificate: purdueCertificate,
    hasProof: true,
    additionalInfo: 'Professional Post-Graduate Diploma • 6 Months Cohort-Based Learning',
  },
  {
    institution: 'REVA University',
    degree: 'Bachelor of Technology (B.Tech)',
    specialization: 'Electronics and Communications Engineering',
    date: 'July 2024',
    logo: RevaLogo,
    color: 'purple.400',
    certificate: revaCertificate,
    hasProof: true,
  },
];

const Education = () => {
  const cardBg = 'rgba(255, 255, 255, 0.05)';
  const textColor = 'white';
  const [selectedEducation, setSelectedEducation] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleCardClick = (edu) => {
    if (edu.hasProof) {
      setSelectedEducation(edu);
      onOpen();
    }
  };

  return (
    <Box
      as="section"
      py={12}
      position="relative"
    >
      <Container maxW="container.lg">
        {/* Section Header */}
        <VStack spacing={4} mb={16} textAlign="center">
          <Flex align="center" gap={3}>
            <FaGraduationCap size={32} color="var(--chakra-colors-brand-400)" />
            <Heading
              as="h2"
              size="2xl"
              bgGradient="linear(to-r, brand.400, purple.400)"
              bgClip="text"
              color="transparent"
            >
              Education
            </Heading>
          </Flex>
          <Text fontSize="xl" color="whiteAlpha.700" maxW="2xl">
            Academic journey and qualifications
          </Text>
        </VStack>

        {/* Education Cards */}
        <VStack spacing={8}>
          {educationData.map((edu, index) => (
            <MotionCard
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              w="full"
              variant="elevated"
              bg={cardBg}
              backdropFilter="blur(10px)"
              border="1px solid"
              borderColor="whiteAlpha.200"
              borderRadius="2xl"
              overflow="visible"
              cursor={edu.hasProof ? 'pointer' : 'default'}
              data-clickable={edu.hasProof ? 'true' : 'false'}
              onClick={() => handleCardClick(edu)}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              _hover={{
                transform: edu.hasProof ? 'scale(1.02) translateY(-4px)' : 'scale(1.02)',
                shadow: '2xl',
                borderColor: edu.hasProof ? edu.color : 'brand.400',
              }}
            >
              <CardBody position="relative">
                {/* 3D Click Pointer */}
                {edu.hasProof && hoveredCard === index && (
                  <MotionBox
                    position="absolute"
                    bottom="-10px"
                    right="20px"
                    initial={{ opacity: 0, y: -20, rotateX: -45 }}
                    animate={{ 
                      opacity: 1, 
                      y: 0,
                      rotateX: 0,
                    }}
                    transition={{ 
                      duration: 0.3,
                      type: "spring",
                      stiffness: 200
                    }}
                    style={{ 
                      transformStyle: 'preserve-3d',
                      perspective: '1000px',
                      zIndex: 10,
                    }}
                  >
                    <Flex
                      align="center"
                      gap={2}
                      bg={edu.color}
                      px={4}
                      py={2}
                      borderRadius="full"
                      boxShadow={`0 8px 20px rgba(0,0,0,0.4), 0 0 20px ${edu.color}`}
                      border="2px solid white"
                      style={{
                        transform: 'rotateX(-10deg) rotateY(5deg) translateZ(20px)',
                      }}
                    >
                      <Text 
                        fontSize="sm" 
                        fontWeight="bold" 
                        color="white"
                        textShadow="0 2px 4px rgba(0,0,0,0.5)"
                      >
                        Click to view certificate
                      </Text>
                      <MotionBox
                        animate={{
                          x: [0, 5, 0],
                        }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <Text fontSize="lg">👆</Text>
                      </MotionBox>
                    </Flex>
                  </MotionBox>
                )}
                <Flex
                  direction={{ base: 'column', md: 'row' }}
                  align="center"
                  gap={6}
                >
                  {/* University Logo */}
                  <Box
                    flexShrink={0}
                    w={{ base: 'full', md: '150px' }}
                    h="100px"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    bg={useColorModeValue('gray.50', 'gray.700')}
                    borderRadius="xl"
                    p={4}
                  >
                    <Image
                      src={edu.logo}
                      alt={`${edu.institution} logo`}
                      maxH="80px"
                      maxW="130px"
                      objectFit="contain"
                    />
                  </Box>

                  {/* Education Details */}
                  <VStack align="start" flex="1" spacing={3}>
                    <HStack spacing={2}>
                      <Heading
                        as="h3"
                        size="lg"
                        color={textColor}
                      >
                        {edu.institution}
                      </Heading>
                    </HStack>

                    <VStack align="start" spacing={1}>
                      <Text fontSize="xl" fontWeight="600" color="purple.300">
                        {edu.degree}
                      </Text>
                      <Text
                        fontSize="md"
                        color="whiteAlpha.800"
                      >
                        {edu.specialization}
                      </Text>
                    </VStack>

                    <HStack spacing={2} color="whiteAlpha.700">
                      <Icon as={FaCalendar} />
                      <Text fontSize="sm" fontWeight="500">
                        {edu.date}
                      </Text>
                    </HStack>
                  </VStack>
                </Flex>
              </CardBody>
            </MotionCard>
          ))}
        </VStack>
      </Container>

      {/* Certificate Modal */}
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
                {selectedEducation && (
                  <VStack spacing={6}>
                    <MotionBox
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1, duration: 0.4 }}
                    >
                      <VStack spacing={2} textAlign="center">
                        <Heading size="lg" color="white">
                          {selectedEducation.institution}
                        </Heading>
                        <Text color="brand.300" fontWeight="semibold" fontSize="lg">
                          {selectedEducation.degree}
                        </Text>
                        <Text color="purple.300" fontWeight="medium">
                          {selectedEducation.specialization}
                        </Text>
                        <Badge colorScheme="purple" fontSize="md" px={4} py={2} borderRadius="full">
                          {selectedEducation.date}
                        </Badge>
                        {selectedEducation.additionalInfo && (
                          <Badge colorScheme="green" fontSize="sm" px={4} py={2} borderRadius="full" mt={2}>
                            {selectedEducation.additionalInfo}
                          </Badge>
                        )}
                      </VStack>
                    </MotionBox>
                    
                    <MotionBox
                      w="full"
                      h="70vh"
                      borderRadius="xl"
                      overflow="hidden"
                      border="2px solid"
                      borderColor={selectedEducation.color}
                      boxShadow={`0 0 30px ${selectedEducation.color}`}
                      bg="white"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2, duration: 0.4 }}
                    >
                      <Box
                        as="iframe"
                        src={selectedEducation.certificate}
                        w="full"
                        h="full"
                        border="none"
                        title={`${selectedEducation.institution} Certificate`}
                      />
                    </MotionBox>
                    
                    <MotionBox
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.4 }}
                      w="full"
                    >
                      <Text color="whiteAlpha.800" textAlign="center" lineHeight="tall">
                        Degree Certificate from {selectedEducation.institution}
                      </Text>
                    </MotionBox>
                  </VStack>
                )}
              </ModalBody>
            </ModalContent>
          </Modal>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default Education;
