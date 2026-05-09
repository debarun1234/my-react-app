import React, { useState, useRef } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Image,
  Badge,
  Card,
  CardBody,
  SimpleGrid,
  useColorModeValue,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
  Icon,
  useToast,
} from '@chakra-ui/react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { FaBriefcase, FaCalendar, FaFileAlt } from 'react-icons/fa';
import ANZLogo from '../assets/anz-logo.svg';
import DOM4ULogo from '../assets/dom4u_logo.jpeg';
import MphasisLogo from '../assets/mphasis-logo (1).png';
import dom4uCertificate from '../assets/DOM4U_Internship_Certificate_Debarun.pdf';
import mphasisCertificate from '../assets/Debarun_Ghosh_Internship_Letter.pdf';

// Timeline: May 2023 → Dec 2027 (55 months).
// toExpPct(year, month) = ((year-2023)*12 + (month-5)) / 55 * 100
const EXP_TOTAL_MONTHS = 55;
const toExpPct = (year, month) =>
  Math.max(0, Math.min(100, ((year - 2023) * 12 + (month - 5)) / EXP_TOTAL_MONTHS * 100));

const EXP_YEAR_MARKS = [
  { year: 2024, pct: 14.5 },
  { year: 2025, pct: 36.4 },
  { year: 2026, pct: 58.2 },
  { year: 2027, pct: 80.0 },
];

const buildExpTimelineBars = () => {
  const now = new Date();
  const currentPct = toExpPct(now.getFullYear(), now.getMonth() + 1);
  const anzStart = 21.8; // May 2024
  const anzSolidEnd = Math.min(Math.max(anzStart, currentPct), 100);

  return [
    {
      label: 'Mphasis',
      colorToken: 'accent.500',
      cssVar: 'accent-500',
      startPct: 0,
      solidEndPct: 3.6,   // Jul 2023
      dottedEndPct: null,
      dateRange: 'May – Jul 2023',
      isActive: false,
    },
    {
      label: 'DOM4U',
      colorToken: 'purple.400',
      cssVar: 'purple-400',
      startPct: 12.7,     // Dec 2023
      solidEndPct: 20.0,  // Apr 2024
      dottedEndPct: null,
      dateRange: 'Dec 2023 – Apr 2024',
      isActive: false,
    },
    {
      label: 'ANZ',
      colorToken: 'blue.400',
      cssVar: 'blue-400',
      startPct: anzStart,
      solidEndPct: anzSolidEnd,
      dottedEndPct: 100,
      dateRange: 'May 2024 – Present',
      isActive: true,
    },
  ];
};

const EXP_TIMELINE_BARS = buildExpTimelineBars();

const experiences = [
  {
    title: 'Gen AI Engineer',
    company: 'ANZ Pvt. Ltd., Bengaluru',
    duration: 'May 2024 – Present',
    description: `
      Spearheading initiatives to optimize data workflows and implement machine learning models, 
      contributing to operational efficiency and informed decision-making within the Banking Sector.
    `,
    techStack: 'Python, PostgreSQL, Terraform, Docker, LLMOps, GCP, AlloyDB',
    image: ANZLogo,
    color: 'blue.400',
    hasProof: false,
    isCurrentRole: true,
  },
  {
    title: 'AI/ML Integration Engineer Intern',
    company: 'DOM4U Pvt. Ltd., Bengaluru',
    duration: 'December 2023 – April 2024',
    description: `
      Enhanced legacy industrial applications through AI and ML integration, automating and improving
      efficiency via deep learning and reverse engineering.
    `,
    techStack: 'Python, CUDA, TensorFlow, OpenCV, YOLO',
    image: DOM4ULogo,
    color: 'purple.400',
    certificate: dom4uCertificate,
    hasProof: true,
  },
  {
    title: 'Software Engineer Intern',
    company: 'Mphasis Ltd., Bengaluru',
    duration: 'May 2023 – July 2023',
    description: `
      Developed an automation tool to convert COBOL code to high-level programming languages using
      Machine Learning pre-trained models, enhancing mainframe application efficiency and modernization.
    `,
    techStack: 'Anaconda, TensorFlow, Keras, BERT, LLM, NLP',
    image: MphasisLogo,
    color: 'accent.500',
    certificate: mphasisCertificate,
    hasProof: true,
  },
];

const MotionCard = motion(Card);
const MotionBox = motion(Box);

const Experience = () => {
  const cardBg = 'rgba(255, 255, 255, 0.05)';
  const textColor = 'white';
  const timelineRef = useRef(null);
  const isTimelineInView = useInView(timelineRef, { once: false, amount: 0.4 });
  const [selectedExperience, setSelectedExperience] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [hoveredCard, setHoveredCard] = useState(null);
  const [flippedCard, setFlippedCard] = useState(null);
  const toast = useToast();

  const handleCardClick = (exp, index) => {
    if (exp.hasProof) {
      setSelectedExperience(exp);
      onOpen();
    } else {
      // Flip the card to show humorous message
      if (flippedCard === index) {
        setFlippedCard(null);
      } else {
        setFlippedCard(index);
        // Auto flip back after 10 seconds
        setTimeout(() => {
          setFlippedCard(null);
        }, 3000);
      }
    }
  };
  
  return (
    <Box
      as="section"
      py={12}
      position="relative"
    >
      <Container maxW="container.xl">
        {/* Section Header */}
        <VStack 
          as={motion.div}
          spacing={4} 
          mb={16} 
          textAlign="center"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <Flex 
            as={motion.div}
            align="center" 
            gap={3}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <FaBriefcase size={32} color="var(--chakra-colors-brand-400)" />
            <Heading
              as="h2"
              size="2xl"
              bgGradient="linear(to-r, brand.400, purple.400)"
              bgClip="text"
              color="transparent"
            >
              Professional Experience
            </Heading>
          </Flex>
          <Text 
            as={motion.p}
            fontSize="xl" 
            color="whiteAlpha.700" 
            maxW="2xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            My journey through innovative technology companies
          </Text>
        </VStack>

        {/* Career Timeline */}
        <Box
          ref={timelineRef}
          mb={12}
          bg="whiteAlpha.50"
          borderRadius="2xl"
          px={6}
          pt={5}
          pb={5}
          border="1px solid"
          borderColor="whiteAlpha.100"
          backdropFilter="blur(10px)"
        >
          <HStack mb={6} spacing={2}>
            <Box w="2px" h="14px" bg="brand.400" borderRadius="full" />
            <Text fontSize="10px" color="whiteAlpha.500" textTransform="uppercase" letterSpacing="widest" fontWeight="600">
              Career Timeline
            </Text>
          </HStack>

          <Box pl="72px" position="relative">
            {/* Glow bars */}
            <VStack spacing={6} align="stretch" mb={4}>
              {EXP_TIMELINE_BARS.map((bar, barIdx) => (
                <Box key={bar.label} position="relative">
                  {/* Date range label above bar */}
                  <Text
                    position="absolute"
                    left={`${(bar.startPct + (bar.dottedEndPct ?? bar.solidEndPct)) / 2}%`}
                    top="-15px"
                    transform="translateX(-50%)"
                    fontSize="9px"
                    color="whiteAlpha.400"
                    whiteSpace="nowrap"
                    userSelect="none"
                  >
                    {bar.dateRange}
                  </Text>

                  {/* Company label on left */}
                  <Text
                    position="absolute"
                    left="-72px"
                    top="50%"
                    transform="translateY(-50%)"
                    fontSize="xs"
                    fontWeight="700"
                    w="64px"
                    textAlign="right"
                    color={bar.colorToken}
                  >
                    {bar.label}
                  </Text>

                  {/* Thin rail track */}
                  <Box
                    w="full"
                    h="2px"
                    bg="whiteAlpha.80"
                    borderRadius="full"
                    position="absolute"
                    top="50%"
                    transform="translateY(-50%)"
                  />

                  {/* Bar area */}
                  <Box h="10px" position="relative" overflow="visible">
                    {/* Animated glow pill */}
                    <MotionBox
                      position="absolute"
                      left={`${bar.startPct}%`}
                      h="full"
                      borderLeftRadius="full"
                      borderRightRadius="0"
                      minW="4px"
                      style={{
                        backgroundImage: `linear-gradient(90deg,
                          var(--chakra-colors-${bar.cssVar}) 0%,
                          var(--chakra-colors-${bar.cssVar}) 55%,
                          rgba(255,255,255,0.45) 78%,
                          var(--chakra-colors-${bar.cssVar}) 100%)`,
                      }}
                      initial={{ width: 0 }}
                      animate={
                        isTimelineInView
                          ? bar.isActive
                            ? {
                                width: `${bar.solidEndPct - bar.startPct}%`,
                                boxShadow: [
                                  `0 0 4px var(--chakra-colors-${bar.cssVar}), 0 0 10px var(--chakra-colors-${bar.cssVar})`,
                                  `0 0 10px var(--chakra-colors-${bar.cssVar}), 0 0 22px var(--chakra-colors-${bar.cssVar})`,
                                  `0 0 4px var(--chakra-colors-${bar.cssVar}), 0 0 10px var(--chakra-colors-${bar.cssVar})`,
                                ],
                              }
                            : {
                                width: `${bar.solidEndPct - bar.startPct}%`,
                                boxShadow: `0 0 5px var(--chakra-colors-${bar.cssVar})`,
                              }
                          : { width: 0 }
                      }
                      transition={
                        bar.isActive
                          ? {
                              width: { duration: 0.85, ease: 'easeOut', delay: barIdx * 0.9 },
                              boxShadow: { duration: 2, repeat: Infinity, ease: 'easeInOut', delay: barIdx * 0.9 + 0.85 },
                            }
                          : { duration: 0.85, ease: 'easeOut', delay: barIdx * 0.9 }
                      }
                    />

                    {/* Dashed future tail */}
                    {bar.dottedEndPct && (
                      <Box
                        position="absolute"
                        left={`${bar.solidEndPct}%`}
                        w={`${bar.dottedEndPct - bar.solidEndPct}%`}
                        h="5px"
                        top="50%"
                        transform="translateY(-50%)"
                        style={{
                          backgroundImage: `repeating-linear-gradient(90deg, var(--chakra-colors-${bar.cssVar}) 0px, var(--chakra-colors-${bar.cssVar}) 7px, transparent 7px, transparent 14px)`,
                          opacity: 0.35,
                        }}
                      />
                    )}

                    {/* Pulsing live dot — positioned right at the flat right edge of the solid bar */}
                    {bar.isActive && (
                      <>
                        <MotionBox
                          position="absolute"
                          left={`${bar.solidEndPct}%`}
                          top="50%"
                          transform="translate(-50%, -50%)"
                          w="14px"
                          h="14px"
                          borderRadius="full"
                          border="1.5px solid"
                          borderColor={bar.colorToken}
                          animate={{ scale: [1, 2.2, 1], opacity: [0.7, 0, 0.7] }}
                          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeOut' }}
                        />
                        <Box
                          position="absolute"
                          left={`${bar.solidEndPct}%`}
                          top="50%"
                          transform="translate(-50%, -50%)"
                          w="7px"
                          h="7px"
                          borderRadius="full"
                          bg={bar.colorToken}
                          border="1.5px solid"
                          borderColor="gray.900"
                          zIndex={2}
                        />
                      </>
                    )}

                    {/* Static endpoint dot for completed roles */}
                    {!bar.isActive && (
                      <Box
                        position="absolute"
                        left={`${bar.solidEndPct}%`}
                        top="50%"
                        transform="translate(-50%, -50%)"
                        w="7px"
                        h="7px"
                        borderRadius="full"
                        bg={bar.colorToken}
                        border="1.5px solid"
                        borderColor="gray.900"
                        zIndex={2}
                      />
                    )}
                  </Box>
                </Box>
              ))}
            </VStack>

            {/* Year marks at bottom with tick lines */}
            {(() => {
              const currentYear = new Date().getFullYear();
              return (
                <Box position="relative" h="22px">
                  {EXP_YEAR_MARKS.map(({ year, pct }) => {
                    const isCurrent = year === currentYear;
                    return (
                      <Box
                        key={year}
                        position="absolute"
                        left={`${pct}%`}
                        transform="translateX(-50%)"
                        textAlign="center"
                      >
                        <Box
                          w={isCurrent ? "1.5px" : "1px"}
                          h={isCurrent ? "8px" : "5px"}
                          bg={isCurrent ? "white" : "whiteAlpha.200"}
                          mx="auto"
                          mb="2px"
                          style={isCurrent ? { boxShadow: '0 0 6px white' } : {}}
                        />
                        <Text
                          fontSize="10px"
                          color={isCurrent ? "white" : "whiteAlpha.300"}
                          fontWeight={isCurrent ? "700" : "400"}
                          letterSpacing="tight"
                          userSelect="none"
                          style={isCurrent ? { textShadow: '0 0 8px white, 0 0 16px rgba(255,255,255,0.5)' } : {}}
                        >
                          {year}
                        </Text>
                      </Box>
                    );
                  })}
                </Box>
              );
            })()}
          </Box>
        </Box>

        {/* Experience Cards */}
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          {experiences.map((exp, index) => (
            <Box
              key={index}
              position="relative"
              style={{ perspective: '1000px' }}
              h="auto"
              minH="500px"
            >
              <MotionBox
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0,
                }}
                viewport={{ once: false, amount: 0.3 }}
                animate={{
                  rotateY: flippedCard === index ? 180 : 0,
                }}
                transition={{ 
                  opacity: { duration: 0.5, delay: index * 0.1 },
                  y: { duration: 0.5, delay: index * 0.1 },
                  rotateY: { duration: 0.6 }
                }}
                cursor="pointer"
                data-clickable="true"
                onClick={() => handleCardClick(exp, index)}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{ 
                  transformStyle: 'preserve-3d',
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                }}
              >
                {/* Front of Card */}
                <MotionCard
                  variant="elevated"
                  bg={cardBg}
                  backdropFilter="blur(10px)"
                  border="1px solid"
                  borderColor="whiteAlpha.200"
                  borderRadius="2xl"
                  overflow="visible"
                  position="absolute"
                  w="full"
                  h="full"
                  style={{ 
                    backfaceVisibility: 'hidden',
                  }}
                  _hover={{
                    shadow: '2xl',
                    borderColor: exp.color,
                  }}
                >
                <CardBody p={6} position="relative" style={{ backfaceVisibility: 'hidden' }}>
                {/* 3D Click Pointer */}
                {hoveredCard === index && (
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
                      bg={exp.color}
                      px={4}
                      py={2}
                      borderRadius="full"
                      boxShadow={`0 8px 20px rgba(0,0,0,0.4), 0 0 20px ${exp.color}`}
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
                        {exp.hasProof ? 'Click to view certificate' : 'Click to View Certificate!'}
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
                        <Text fontSize="lg">{exp.hasProof ? '👆' : '👆'}</Text>
                      </MotionBox>
                    </Flex>
                  </MotionBox>
                )}
                <VStack align="stretch" spacing={4}>
                  {/* Company Logo */}
                  <Flex justify="center" align="center" h="100px" mb={2}>
                    <Image
                      src={exp.image}
                      alt={`${exp.company} logo`}
                      maxH="80px"
                      maxW="200px"
                      objectFit="contain"
                      fallback={<Box w="100px" h="80px" bg="gray.200" borderRadius="md" />}
                    />
                  </Flex>

                  {/* Job Title */}
                  <Heading
                    as="h3"
                    size="md"
                    textAlign="center"
                    color={textColor}
                  >
                    {exp.title}
                  </Heading>

                  {/* Company & Duration */}
                  <VStack spacing={2} align="center">
                    <Text fontWeight="600" fontSize="sm" textAlign="center" color="purple.300">
                      {exp.company}
                    </Text>
                    <HStack spacing={2} color="whiteAlpha.700">
                      <FaCalendar size={14} />
                      <Text fontSize="sm">{exp.duration}</Text>
                    </HStack>
                  </VStack>

                  {/* Description */}
                  <Text
                    fontSize="sm"
                    color="whiteAlpha.800"
                    textAlign="center"
                    lineHeight="tall"
                  >
                    {exp.description.trim()}
                  </Text>

                  {/* Tech Stack */}
                  <Box pt={4} borderTop="1px" borderColor="whiteAlpha.200">
                    <Text
                      fontSize="xs"
                      fontWeight="600"
                      mb={2}
                      color="whiteAlpha.700"
                      textAlign="center"
                    >
                      Tech Stack
                    </Text>
                    <Flex flexWrap="wrap" gap={2} justify="center">
                      {exp.techStack.split(', ').map((tech, i) => (
                        <Badge
                          key={i}
                          colorScheme="brand"
                          variant="subtle"
                          px={3}
                          py={1}
                          borderRadius="full"
                          fontSize="xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </Flex>
                  </Box>
                </VStack>
              </CardBody>

            </MotionCard>

                {/* Back of Card - Humorous Message (Only for ANZ) */}
                {!exp.hasProof && (
                  <Card
                    variant="elevated"
                    position="absolute"
                    top={0}
                    left={0}
                    w="full"
                    h="full"
                    bg={cardBg}
                    backdropFilter="blur(10px)"
                    border="2px solid"
                    borderColor={exp.color}
                    borderRadius="2xl"
                    style={{
                      backfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)',
                    }}
                  >
                    <CardBody display="flex" alignItems="center" justifyContent="center" p={6}>
                      <VStack spacing={4} textAlign="center">
                        <Text fontSize="6xl">🍳</Text>
                        <Heading size="lg" color={exp.color}>
                          Still Cooking!
                        </Heading>
                        <Text color="whiteAlpha.900" fontSize="md" lineHeight="tall" px={4}>
                          I'm currently here making magic happen! The experience letter will be ready when I graduate to my next adventure. Stay tuned! 🚀
                        </Text>
                        <Badge colorScheme="green" fontSize="md" px={4} py={2} borderRadius="full">
                          Current Role
                        </Badge>
                        <Text fontSize="sm" color="whiteAlpha.700" fontStyle="italic">
                          (Auto-flipping back in 3 seconds... ⏰)
                        </Text>
                      </VStack>
                    </CardBody>
                  </Card>
                )}
              </MotionBox>
            </Box>
          ))}
        </SimpleGrid>
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
                {selectedExperience && (
                  <VStack spacing={6}>
                    <MotionBox
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1, duration: 0.4 }}
                    >
                      <VStack spacing={2} textAlign="center">
                        <Heading size="lg" color="white">
                          {selectedExperience.title}
                        </Heading>
                        <Text color="brand.300" fontWeight="semibold">
                          {selectedExperience.company}
                        </Text>
                        <Badge colorScheme="purple" fontSize="md" px={4} py={2} borderRadius="full">
                          {selectedExperience.duration}
                        </Badge>
                      </VStack>
                    </MotionBox>
                    
                    <MotionBox
                      w="full"
                      h="70vh"
                      borderRadius="xl"
                      overflow="hidden"
                      border="2px solid"
                      borderColor={selectedExperience.color}
                      boxShadow={`0 0 30px ${selectedExperience.color}`}
                      bg="white"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2, duration: 0.4 }}
                    >
                      <Box
                        as="iframe"
                        src={selectedExperience.certificate}
                        w="full"
                        h="full"
                        border="none"
                        title={`${selectedExperience.title} Certificate`}
                      />
                    </MotionBox>
                    
                    <MotionBox
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.4 }}
                      w="full"
                    >
                      <Text color="whiteAlpha.800" textAlign="center" lineHeight="tall">
                        {selectedExperience.description.trim()}
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

export default Experience;
