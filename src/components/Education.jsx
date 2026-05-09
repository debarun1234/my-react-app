import React, { useState, useRef } from 'react';
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
  Icon,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
  Badge,
  Button,
  Grid,
} from '@chakra-ui/react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { FaGraduationCap, FaCalendar, FaFileAlt } from 'react-icons/fa';
import PurdueLogo from '../assets/purdue_logo.svg';
import RevaLogo from '../assets/reva_logo.png';
import IIITLogo from '../assets/iiit_logo.png';
import revaCertificate from '../assets/DeabrunGhosh_Btech_Degree.pdf';
import purdueCertificate from '../assets/DebarunGhosh_PGCert.pdf';

const MotionCard = motion(Card);
const MotionBox = motion(Box);

const educationData = [
  {
    institution: 'Indian Institute of Information Technology, Dharwad (IIITDWD)',
    degree: 'Master of Technology (M.Tech)',
    specialization: 'Data Science and Artificial Intelligence',
    date: 'Feb 2026 – May 2028 (Expected)',
    logo: IIITLogo,
    color: 'blue.400',
    certificate: null,
    hasProof: false,
    isCurrent: true,
  },
  {
    institution: 'Purdue University',
    degree: 'Postgraduate Vocational Program',
    specialization: 'Applied Generative AI Specialization',
    date: 'May 2024 – August 2024',
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
    date: 'Oct 2020 – July 2024',
    logo: RevaLogo,
    color: 'purple.400',
    certificate: revaCertificate,
    hasProof: true,
  },
];

// Timeline spans Oct 2020 → May 2028 (91 months total).
// Static pct values: months_from_Oct2020 / 91 * 100
const TIMELINE_TOTAL_MONTHS = 91;
const toTimelinePct = (year, month) =>
  Math.max(0, Math.min(100, ((year - 2020) * 12 + (month - 10)) / TIMELINE_TOTAL_MONTHS * 100));

const YEAR_MARKS = [
  { year: 2021, pct: 3.3 },
  { year: 2022, pct: 16.5 },
  { year: 2023, pct: 29.7 },
  { year: 2024, pct: 42.9 },
  { year: 2025, pct: 56.0 },
  { year: 2026, pct: 69.2 },
  { year: 2027, pct: 82.4 },
];

const buildTimelineBars = () => {
  const now = new Date();
  const currentPct = toTimelinePct(now.getFullYear(), now.getMonth() + 1);

  const iiitStart = 70.3;   // Feb 2026
  const iiitEnd   = 100;    // May 2028
  // Solid grows from program start up to today, capped at program end
  const iiitSolidEnd = Math.min(Math.max(iiitStart, currentPct), iiitEnd);
  const iiitDone = currentPct >= iiitEnd;

  return [
    {
      label: 'REVA',
      colorToken: 'purple.400',
      cssVar: 'purple-400',
      startPct: 0,
      solidEndPct: 49.5,
      dottedEndPct: null,
      dateRange: 'Oct 2020 – Jul 2024',
    },
    {
      label: 'Purdue',
      colorToken: 'yellow.500',
      cssVar: 'yellow-500',
      startPct: 47.3,
      solidEndPct: 50.5,
      dottedEndPct: null,
      dateRange: 'May – Aug 2024',
    },
    {
      label: 'IIIT',
      colorToken: 'blue.400',
      cssVar: 'blue-400',
      startPct: iiitStart,
      solidEndPct: iiitSolidEnd,
      dottedEndPct: iiitDone ? null : iiitEnd,
      dateRange: 'Feb 2026 – May 2028',
    },
  ];
};

const TIMELINE_BARS = buildTimelineBars();

const Education = () => {
  const cardBg = 'rgba(255, 255, 255, 0.05)';
  const [selectedEducation, setSelectedEducation] = useState(null);
  const [flippedCard, setFlippedCard] = useState(null);
  const flipTimeoutRef = useRef(null);
  const timelineRef = useRef(null);
  const isTimelineInView = useInView(timelineRef, { once: false, amount: 0.4 });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleCardClick = (edu, index) => {
    if (!edu.isCurrent) return;

    if (flipTimeoutRef.current) {
      clearTimeout(flipTimeoutRef.current);
      flipTimeoutRef.current = null;
    }

    setFlippedCard(flippedCard === index ? null : index);
  };

  const handleMouseEnter = (index) => {
    setHoveredCard(index);
    // Cancel pending flip-back if the mouse returns while card is still flipped
    if (flippedCard === index && flipTimeoutRef.current) {
      clearTimeout(flipTimeoutRef.current);
      flipTimeoutRef.current = null;
    }
  };

  const handleMouseLeave = (index) => {
    setHoveredCard(null);
    // Start 2-second flip-back timer only when leaving a flipped card
    if (flippedCard === index) {
      flipTimeoutRef.current = setTimeout(() => {
        setFlippedCard(null);
        flipTimeoutRef.current = null;
      }, 2000);
    }
  };

  const handleViewCertificate = (edu) => {
    setSelectedEducation(edu);
    onOpen();
  };

  return (
    <Box
      as="section"
      py={12}
      position="relative"
    >
      <Container maxW="container.xl">
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

        {/* Academic Timeline — Gantt style */}
        <Box
          ref={timelineRef}
          mb={10}
          bg="whiteAlpha.50"
          borderRadius="2xl"
          px={6}
          pt={5}
          pb={6}
          border="1px solid"
          borderColor="whiteAlpha.100"
          backdropFilter="blur(10px)"
        >
          <HStack mb={5} spacing={2}>
            <Box w="2px" h="14px" bg="brand.400" borderRadius="full" />
            <Text fontSize="10px" color="whiteAlpha.500" textTransform="uppercase" letterSpacing="widest" fontWeight="600">
              Academic Timeline
            </Text>
          </HStack>

          {/* Gantt chart */}
          <Box pl="64px" position="relative">
            {/* Year labels row */}
            <Box position="relative" h="18px" mb={3}>
              {YEAR_MARKS.map(({ year, pct }) => (
                <Text
                  key={year}
                  position="absolute"
                  left={`${pct}%`}
                  transform="translateX(-50%)"
                  fontSize="10px"
                  color="whiteAlpha.300"
                  userSelect="none"
                  letterSpacing="tight"
                >
                  {year}
                </Text>
              ))}
            </Box>

            {/* Bars area with vertical grid lines */}
            <Box position="relative">
              {/* Vertical grid lines */}
              {YEAR_MARKS.map(({ year, pct }) => (
                <Box
                  key={year}
                  position="absolute"
                  left={`${pct}%`}
                  top={0}
                  bottom={0}
                  w="1px"
                  bg="whiteAlpha.50"
                  zIndex={0}
                />
              ))}

              <VStack spacing={5} align="stretch" position="relative" zIndex={1}>
                {TIMELINE_BARS.map((bar, barIdx) => (
                  <Box key={bar.label} position="relative" h="8px">
                    {/* Institution label */}
                    <Text
                      position="absolute"
                      left="-64px"
                      top="50%"
                      transform="translateY(-50%)"
                      fontSize="xs"
                      fontWeight="700"
                      w="56px"
                      textAlign="right"
                      color={bar.colorToken}
                    >
                      {bar.label}
                    </Text>

                    {/* Track */}
                    <Box w="full" h="full" borderRadius="full" bg="whiteAlpha.100" position="relative" overflow="visible">
                      {/* Animated solid bar */}
                      <MotionBox
                        position="absolute"
                        left={`${bar.startPct}%`}
                        h="full"
                        borderRadius="full"
                        minW="3px"
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
                            ? { width: `${bar.solidEndPct - bar.startPct}%` }
                            : { width: 0 }
                        }
                        transition={{ duration: 0.85, ease: 'easeOut', delay: barIdx * 0.9 }}
                      />

                      {/* Dashed / future bar */}
                      {bar.dottedEndPct && (
                        <Box
                          position="absolute"
                          left={`${bar.solidEndPct}%`}
                          w={`${bar.dottedEndPct - bar.solidEndPct}%`}
                          h="full"
                          borderRadius="full"
                          style={{
                            backgroundImage: `repeating-linear-gradient(90deg, var(--chakra-colors-${bar.cssVar}) 0px, var(--chakra-colors-${bar.cssVar}) 7px, transparent 7px, transparent 14px)`,
                            opacity: 0.55,
                          }}
                        />
                      )}

                      {/* Start dot */}
                      <Box
                        position="absolute"
                        left={`${bar.startPct}%`}
                        top="50%"
                        transform="translate(-50%, -50%)"
                        w="11px"
                        h="11px"
                        borderRadius="full"
                        bg={bar.colorToken}
                        border="2px solid"
                        borderColor="gray.900"
                        zIndex={2}
                      />

                      {/* End dot — hollow circle for future, solid for past */}
                      <Box
                        position="absolute"
                        left={`${bar.dottedEndPct ?? bar.solidEndPct}%`}
                        top="50%"
                        transform="translate(-50%, -50%)"
                        w="11px"
                        h="11px"
                        borderRadius="full"
                        bg={bar.dottedEndPct ? 'gray.900' : bar.colorToken}
                        border="2px solid"
                        borderColor={bar.colorToken}
                        zIndex={2}
                      />

                      {/* Date range label — centred above the bar */}
                      <Text
                        position="absolute"
                        left={`${(bar.startPct + (bar.dottedEndPct ?? bar.solidEndPct)) / 2}%`}
                        top="-16px"
                        transform="translateX(-50%)"
                        fontSize="9px"
                        color="whiteAlpha.400"
                        whiteSpace="nowrap"
                        userSelect="none"
                      >
                        {bar.dateRange}
                      </Text>
                    </Box>
                  </Box>
                ))}
              </VStack>
            </Box>
          </Box>
        </Box>

        {/* Education Cards — 3-column portrait grid */}
        <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={6}>
          {educationData.map((edu, index) => {
            const cardClickable = edu.isCurrent;

            return (
              <Box
                key={index}
                position="relative"
                h="400px"
                style={{ perspective: '1000px' }}
              >
                <Box
                  cursor={cardClickable ? 'pointer' : 'default'}
                  onClick={() => cardClickable && handleCardClick(edu, index)}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={() => handleMouseLeave(index)}
                  style={{
                    transformStyle: 'preserve-3d',
                    width: '100%',
                    height: '100%',
                    position: 'relative',
                    transform: flippedCard === index ? 'rotateY(180deg)' : 'rotateY(0deg)',
                    transition: 'transform 0.6s ease',
                  }}
                >
                  {/* Front face */}
                  <MotionCard
                    position="absolute"
                    top={0}
                    left={0}
                    w="full"
                    h="full"
                    variant="elevated"
                    bg={cardBg}
                    backdropFilter="blur(10px)"
                    border="1px solid"
                    borderColor="whiteAlpha.200"
                    borderRadius="2xl"
                    overflow="hidden"
                    style={{
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                      transformStyle: 'preserve-3d',
                      zIndex: flippedCard === index ? 1 : 2,
                      pointerEvents: flippedCard === index ? 'none' : 'auto',
                    }}
                    _hover={{
                      transform: 'scale(1.03) translateY(-6px)',
                      shadow: '2xl',
                      borderColor: edu.color,
                    }}
                  >
                    <CardBody p={0} display="flex" flexDirection="column" h="full">
                      {/* Colored header with logo */}
                      <Box
                        h="155px"
                        flexShrink={0}
                        position="relative"
                        overflow="hidden"
                        borderTopRadius="2xl"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        bg="blackAlpha.500"
                        borderBottom="1px solid"
                        borderColor={edu.color}
                      >
                        {/* Subtle color wash */}
                        <Box
                          position="absolute"
                          inset={0}
                          bg={edu.color}
                          opacity={0.12}
                        />
                        {/* Decorative circles */}
                        <Box
                          position="absolute"
                          top="-30px"
                          right="-30px"
                          w="100px"
                          h="100px"
                          borderRadius="full"
                          bg={edu.color}
                          opacity={0.1}
                        />
                        <Box
                          position="absolute"
                          bottom="-20px"
                          left="-20px"
                          w="70px"
                          h="70px"
                          borderRadius="full"
                          bg={edu.color}
                          opacity={0.08}
                        />
                        {/* Step badge */}
                        <Badge
                          position="absolute"
                          top={3}
                          left={3}
                          bg={edu.color}
                          color="white"
                          fontSize="10px"
                          fontWeight="bold"
                          px={2}
                          py={1}
                          borderRadius="full"
                        >
                          {String(index + 1).padStart(2, '0')}
                        </Badge>
                        {/* Current badge */}
                        {edu.isCurrent && (
                          <Badge
                            position="absolute"
                            top={3}
                            right={3}
                            colorScheme="green"
                            fontSize="10px"
                            px={2}
                            py={1}
                            borderRadius="full"
                            variant="solid"
                          >
                            Current
                          </Badge>
                        )}
                        {/* Logo container */}
                        <Box
                          bg="whiteAlpha.100"
                          borderRadius="xl"
                          p={3}
                          backdropFilter="blur(4px)"
                          border="1px solid"
                          borderColor="whiteAlpha.200"
                          position="relative"
                          zIndex={1}
                        >
                          {edu.logo ? (
                            <Image
                              src={edu.logo}
                              alt={`${edu.institution} logo`}
                              maxH="70px"
                              maxW="100px"
                              objectFit="contain"
                            />
                          ) : (
                            <Text color="white" fontWeight="bold" textAlign="center" fontSize="xs" px={2}>
                              IIIT Dharwad
                            </Text>
                          )}
                        </Box>
                        {/* Hover pulse for clickable card */}
                        {cardClickable && hoveredCard === index && (
                          <MotionBox
                            position="absolute"
                            bottom={2}
                            right={3}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Text fontSize="xs" color="white" fontWeight="bold" opacity={0.9}>
                              click 👆
                            </Text>
                          </MotionBox>
                        )}
                      </Box>

                      {/* Card body */}
                      <VStack flex={1} align="start" px={5} pt={4} pb={5} spacing={0} justify="space-between">
                        <VStack align="start" spacing={1.5} w="full">
                          <Heading as="h3" size="sm" color="white" lineHeight="1.3">
                            {edu.institution}
                          </Heading>
                          <Text fontSize="sm" fontWeight="600" color="purple.300" lineHeight="1.3">
                            {edu.degree}
                          </Text>
                          <Text fontSize="xs" color="whiteAlpha.700" lineHeight="1.5">
                            {edu.specialization}
                          </Text>
                        </VStack>

                        <VStack align="start" spacing={2} w="full">
                          <HStack spacing={2} color="whiteAlpha.500">
                            <Icon as={FaCalendar} boxSize={3} />
                            <Text fontSize="xs" fontWeight="500">{edu.date}</Text>
                          </HStack>
                          {edu.isCurrent && (
                            <Text fontSize="xs" color="whiteAlpha.400" fontStyle="italic">
                              Flip for progress update
                            </Text>
                          )}
                          {edu.hasProof && (
                            <Button
                              size="xs"
                              colorScheme="purple"
                              w="full"
                              leftIcon={<Icon as={FaFileAlt} boxSize={3} />}
                              onClick={(e) => {
                                e.stopPropagation();
                                handleViewCertificate(edu);
                              }}
                            >
                              View Certificate
                            </Button>
                          )}
                        </VStack>
                      </VStack>
                    </CardBody>
                  </MotionCard>

                  {/* Back face — IIIT DWD only */}
                  {!edu.hasProof && (
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
                      borderColor={edu.color}
                      borderRadius="2xl"
                      style={{
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)',
                        transformStyle: 'preserve-3d',
                        zIndex: flippedCard === index ? 2 : 1,
                      }}
                      cursor="pointer"
                      onClick={() => handleCardClick(edu, index)}
                    >
                      <CardBody display="flex" alignItems="center" justifyContent="center" h="full" p={6}>
                        <VStack spacing={3} textAlign="center">
                          <MotionBox
                            animate={{ rotate: [0, -10, 10, -10, 10, 0] }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                          >
                            <Text fontSize="5xl">🍳</Text>
                          </MotionBox>
                          <Heading size="md" color={edu.color}>
                            Still Cooking...
                          </Heading>
                          <Text color="whiteAlpha.800" fontSize="xs" lineHeight="tall">
                            Warning: This M.Tech is baking at 450°F. Do not open oven until May 2028 or the degree may collapse. Side effects include sleep deprivation, excessive coffee, and random bursts of "why does this model not converge?!" 🤖
                          </Text>
                          <VStack spacing={2} w="full">
                            <HStack spacing={2} justify="center">
                              <Badge colorScheme="orange" fontSize="xs" px={2} py={1} borderRadius="full">
                                🔥 98% Passion
                              </Badge>
                              <Badge colorScheme="blue" fontSize="xs" px={2} py={1} borderRadius="full">
                                ☕ Coffee-Fuelled
                              </Badge>
                            </HStack>
                            <Badge colorScheme="green" fontSize="xs" px={3} py={1} borderRadius="full">
                              🚀 ETA: 2028
                            </Badge>
                          </VStack>
                          <Text fontSize="xs" color="whiteAlpha.500" fontStyle="italic">
                            (Flips back 2s after you leave ⏰)
                          </Text>
                        </VStack>
                      </CardBody>
                    </Card>
                  )}
                </Box>
              </Box>
            );
          })}
        </Grid>
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
                        as="embed"
                        src={`${selectedEducation.certificate}#toolbar=0&navpanes=0&scrollbar=0`}
                        type="application/pdf"
                        w="full"
                        h="full"
                        style={{ border: 'none' }}
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
