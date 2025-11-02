import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Card,
  CardBody,
  SimpleGrid,
  Badge,
  Icon,
  Flex,
  useColorModeValue,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaCertificate, FaAward, FaCheckCircle } from 'react-icons/fa';

const certifications = [
  {
    title: 'AGS Advanced Generative AI: Models and Architecture',
    issuer: 'Purdue University – Simplilearn',
    id: 'Certification Id: 6961374',
    category: 'AI/ML',
  },
  {
    title: 'AGS Essentials of Generative AI, Prompt Engineering & ChatGPT',
    issuer: 'Purdue University – Simplilearn',
    id: 'Certification Id: 6835121',
    category: 'AI/ML',
  },
  {
    title: 'PwC Switzerland - Power BI Job Simulation',
    issuer: 'PwC – Forage',
    id: 'Certification Id: QsDKnZa6aJJmmBYKq',
    category: 'Data Analytics',
  },
  {
    title: 'Virtual Experience Participate – Software Engineer',
    issuer: 'JPMC',
    id: 'Certification ID: brNC3Nvi6yTpA5Yh5',
    category: 'Software Engineering',
  },
  {
    title: 'Virtual Experience Participate – Quantitative Research',
    issuer: 'JPMC',
    id: 'Certification ID: cntgfdtikim4jojJH',
    category: 'Research',
  },
  {
    title: 'Python for Data Science, AI & Development',
    issuer: 'IBM',
    id: 'Certification ID: BN8J9CMANXQN',
    category: 'Programming',
  },
  {
    title: 'Virtual Experience Participate – Agile (Scrum)',
    issuer: 'JPMC',
    id: 'Certification ID: hAzifmFJwgwajgDPk',
    category: 'Agile',
  },
  {
    title: 'Microsoft Certified Systems Administrator: Machine Learning',
    issuer: 'Verzeo',
    category: 'AI/ML',
  },
];

const MotionCard = motion(Card);

const Certifications = () => {
  const cardBg = 'rgba(255, 255, 255, 0.05)';
  const textColor = 'white';

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
            <FaCertificate size={32} color="var(--chakra-colors-brand-400)" />
            <Heading
              as="h2"
              size="2xl"
              bgGradient="linear(to-r, brand.400, purple.400)"
              bgClip="text"
              color="transparent"
            >
              Certifications
            </Heading>
          </Flex>
          <Text fontSize="xl" color="whiteAlpha.700" maxW="2xl">
            Professional certifications and training programs
          </Text>
        </VStack>

        {/* Certifications Grid */}
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
          {certifications.map((cert, index) => (
            <MotionCard
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              variant="elevated"
              bg={cardBg}
              backdropFilter="blur(10px)"
              border="1px solid"
              borderColor="whiteAlpha.200"
              borderRadius="xl"
              overflow="hidden"
              _hover={{
                transform: 'translateY(-4px)',
                shadow: 'xl',
                borderColor: 'brand.400',
              }}
            >
              <CardBody p={6}>
                <VStack align="stretch" spacing={4}>
                  {/* Category Badge */}
                  <Flex justify="space-between" align="center">
                    <Badge
                      colorScheme="purple"
                      variant="subtle"
                      px={3}
                      py={1}
                      borderRadius="full"
                      fontSize="xs"
                    >
                      {cert.category}
                    </Badge>
                    <Icon as={FaCheckCircle} color="accent.500" boxSize={5} />
                  </Flex>

                  {/* Certificate Title */}
                  <Heading
                    as="h3"
                    size="sm"
                    color={textColor}
                    lineHeight="tall"
                    minH="60px"
                  >
                    {cert.title}
                  </Heading>

                  {/* Issuer */}
                  <HStack spacing={2}>
                    <Icon as={FaAward} color="accent.500" boxSize={4} />
                    <Text
                      fontSize="sm"
                      fontWeight="600"
                      color="whiteAlpha.800"
                    >
                      {cert.issuer}
                    </Text>
                  </HStack>

                  {/* Certification ID */}
                  {cert.id && (
                    <Text
                      fontSize="xs"
                      color="whiteAlpha.700"
                      fontFamily="mono"
                      mt={2}
                      p={2}
                      bg="whiteAlpha.100"
                      borderRadius="md"
                    >
                      {cert.id}
                    </Text>
                  )}
                </VStack>
              </CardBody>
            </MotionCard>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Certifications;
