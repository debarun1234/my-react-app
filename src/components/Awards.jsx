import React, { useState } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Card,
  CardBody,
  Icon,
  Flex,
  useColorModeValue,
  Badge,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  Image,
  useDisclosure,
} from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTrophy, FaMedal, FaStar, FaAward, FaCamera } from 'react-icons/fa';
import ieeeCertificate from '../assets/IEEE Winner Blogging certificate.pdf';
import moecertificate from '../assets/Debarun Ghosh_MoE_Certificate.pdf';
import ncaeCertificate from '../assets/Debarun Ghosh_NCAE_Certificate.pdf';
import photoCertificate from '../assets/Debarun Ghosh_PhotoFest_Certificate.pdf';
import nleCertificate from '../assets/Debarun Ghosh_NLE_Certificate.pdf';


const awards = [
  {
    title: 'Evaluator for School Innovation Marathon 2024',
    event: "Ministry of Education's Innovation Cell - Recognized for contributing expert evaluation of high school STEM projects, fostering creativity, design thinking, and scientific innovation among students.",
    organization: 'Ministry of Education, Govt. of India',
    year: 'Mar 2025',
    icon: FaAward,
    color: 'blue.400',
    certificate: moecertificate,
    hasProof: true,
  },
  {
    title: 'INDIA PHOTO FEST 2023 - Exhibition by ICCR',
    event: 'Presented two of my best photos in the category of Black and White Nature and Wildlife Photography in the Rabindranath Tagore Gallery, Kolkata hosted by Indian Council for Cultural Relations (ICCR) Gov. of India.',
    organization: 'COG Art and Gallery, Kolkata',
    year: 'Feb 2024',
    icon: FaCamera,
    color: 'purple.400',
    certificate: photoCertificate,
    hasProof: true,
  },
  {
    title: 'Winner of IEEE Education Week Blog Write Way Competition',
    event: 'Writing Blog competition on topic the lessons I learnt from my life till now.',
    organization: 'IEEE Education Society Ad-Hoc YP Committee',
    year: 'Apr 2023',
    icon: FaStar,
    color: 'accent.500',
    certificate: ieeeCertificate,
    hasProof: true,
  },
  {
    title: 'First Runner-up',
    event: 'National Level Project Exhibition at The National Institute of Engineering Mysuru',
    organization: 'NIE Mysuru',
    year: '2022',
    icon: FaTrophy,
    color: 'yellow.500',
    certificate: nleCertificate,
    hasProof: true,
  },
  {
    title: 'National Creative Aptitude Exam 2022',
    event: 'Holding All India Rank: 79',
    organization: 'National Level Competition',
    year: '2022',
    icon: FaMedal,
    color: 'purple.500',
    certificate: ncaeCertificate,
    hasProof: true,
  },
];

const MotionCard = motion(Card);
const MotionBox = motion(Box);

const Awards = () => {
  const cardBg = 'rgba(255, 255, 255, 0.05)';
  const textColor = 'white';
  const [selectedAward, setSelectedAward] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleCardClick = (award) => {
    if (award.hasProof) {
      setSelectedAward(award);
      onOpen();
    }
  };

  return (
    <Box
      as="section"
      py={20}
      minH="100vh"
      position="relative"
    >
      <Container maxW="container.lg">
        <VStack spacing={4} mb={16} textAlign="center">
          <Flex align="center" gap={3}>
            <FaTrophy size={32} color="var(--chakra-colors-yellow-400)" />
            <Heading as="h2" size="2xl" bgGradient="linear(to-r, yellow.400, orange.400)" bgClip="text" color="transparent">
              Awards & Achievements
            </Heading>
          </Flex>
          <Text fontSize="xl" color="whiteAlpha.700" maxW="2xl">
            Recognition for excellence and innovation
          </Text>
        </VStack>

        <VStack spacing={6}>
          {awards.map((award, index) => (
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
              cursor={award.hasProof ? 'pointer' : 'default'}
              data-clickable={award.hasProof ? 'true' : 'false'}
              onClick={() => handleCardClick(award)}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              _hover={{ 
                transform: award.hasProof ? 'scale(1.02) translateY(-4px)' : 'scale(1.02)', 
                shadow: '2xl', 
                borderColor: award.color 
              }}
            >
              <CardBody p={8} position="relative">
                {/* 3D Click Pointer */}
                {award.hasProof && hoveredCard === index && (
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
                      perspective: '1000px'
                    }}
                  >
                    <Flex
                      align="center"
                      gap={2}
                      bg={award.color}
                      px={4}
                      py={2}
                      borderRadius="full"
                      boxShadow={`0 8px 20px rgba(0,0,0,0.4), 0 0 20px ${award.color}`}
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
                        <Text fontSize="lg">??</Text>
                      </MotionBox>
                    </Flex>
                  </MotionBox>
                )}
                <Flex direction={{ base: 'column', md: 'row' }} align="center" gap={6}>
                  <MotionBox
                    flexShrink={0}
                    w={{ base: 'full', md: '120px' }}
                    h="120px"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    bg="whiteAlpha.100"
                    borderRadius="2xl"
                    position="relative"
                    whileHover={award.hasProof ? { rotate: [0, -10, 10, -10, 0] } : {}}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon as={award.icon} boxSize={16} color={award.color} />
                    <Box position="absolute" top="-10px" right="-10px">
                      <Badge colorScheme="yellow" fontSize="xs" px={2} py={1} borderRadius="full">
                        {award.year}
                      </Badge>
                    </Box>
                  </MotionBox>

                  <VStack align="start" flex="1" spacing={3}>
                    <Heading as="h3" size="lg" color={textColor}>
                      {award.title}
                    </Heading>
                    <Text fontSize="sm" color="brand.300" fontWeight="semibold">
                      {award.organization}
                    </Text>
                    <Text fontSize="md" color="whiteAlpha.800" lineHeight="tall">
                      {award.event}
                    </Text>
                    <Badge colorScheme="purple" variant="subtle" px={4} py={2} borderRadius="full" fontSize="sm">
                      Achievement Unlocked
                    </Badge>
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
                {selectedAward && (
                  <VStack spacing={6}>
                    <MotionBox
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1, duration: 0.4 }}
                    >
                      <VStack spacing={2} textAlign="center">
                        <Heading size="lg" color="white">
                          {selectedAward.title}
                        </Heading>
                        <Text color="brand.300" fontWeight="semibold">
                          {selectedAward.organization}
                        </Text>
                        <Badge colorScheme="yellow" fontSize="md" px={4} py={2} borderRadius="full">
                          {selectedAward.year}
                        </Badge>
                      </VStack>
                    </MotionBox>
                    
                    <MotionBox
                      w="full"
                      h="70vh"
                      borderRadius="xl"
                      overflow="hidden"
                      border="2px solid"
                      borderColor={selectedAward.color}
                      boxShadow={`0 0 30px ${selectedAward.color}`}
                      bg="white"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2, duration: 0.4 }}
                    >
                      <Box
                        as="iframe"
                        src={selectedAward.certificate}
                        w="full"
                        h="full"
                        border="none"
                        title={`${selectedAward.title} Certificate`}
                      />
                    </MotionBox>
                    
                    <MotionBox
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.4 }}
                      w="full"
                    >
                      <Text color="whiteAlpha.800" textAlign="center" lineHeight="tall">
                        {selectedAward.event}
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

export default Awards;
