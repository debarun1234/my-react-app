import React from 'react';
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
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCalendar, FaUniversity } from 'react-icons/fa';
import PurdueLogo from '../assets/purdue_logo.svg';
import RevaLogo from '../assets/reva_logo.png';

const MotionCard = motion(Card);

const educationData = [
  {
    institution: 'Purdue University',
    degree: 'Postgraduate Vocational Program',
    specialization: 'Applied Generative AI Specialization',
    date: 'August 2024',
    logo: PurdueLogo,
  },
  {
    institution: 'REVA University',
    degree: 'B. Tech',
    specialization: 'Electronics and Communications Engineering',
    date: 'June 2024',
    logo: RevaLogo,
  },
];

const Education = () => {
  const cardBg = 'rgba(255, 255, 255, 0.05)';
  const textColor = 'white';

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
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              w="full"
              variant="elevated"
              bg={cardBg}
              backdropFilter="blur(10px)"
              border="1px solid"
              borderColor="whiteAlpha.200"
              borderRadius="2xl"
              overflow="hidden"
              _hover={{
                transform: 'scale(1.02)',
                shadow: '2xl',
                borderColor: 'brand.400',
              }}
            >
              <CardBody>
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
                      <Icon as={FaUniversity} color="brand.400" />
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
    </Box>
  );
};

export default Education;
