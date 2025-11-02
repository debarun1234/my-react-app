import React from 'react';
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
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendar } from 'react-icons/fa';
import ANZLogo from '../assets/anz-logo.svg';
import DOM4ULogo from '../assets/dom4u_logo.jpeg';
import MphasisLogo from '../assets/mphasis-logo (1).png';

const experiences = [
  {
    title: 'Site Reliability Engineer (SRE)',
    company: 'ANZ Pvt. Ltd., Bengaluru',
    duration: 'May 2024 – Present',
    description: `
      Spearheading initiatives to optimize data workflows and implement machine learning models, 
      contributing to operational efficiency and informed decision-making within the Banking Sector.
    `,
    techStack: 'Python, PostgreSQL, Terraform, Docker, LLMOps',
    image: ANZLogo,
  },
  {
    title: 'AI/ML Integration Engineer',
    company: 'DOM4U Pvt. Ltd., Bengaluru',
    duration: 'August 2023 – April 2024',
    description: `
      Enhanced legacy industrial applications through AI and ML integration, automating and improving
      efficiency via deep learning and reverse engineering.
    `,
    techStack: 'Python, CUDA, TensorFlow, OpenCV, YOLO',
    image: DOM4ULogo,
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
  },
];

const MotionCard = motion(Card);

const Experience = () => {
  const cardBg = 'rgba(255, 255, 255, 0.05)';
  const textColor = 'white';
  
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
          <Text fontSize="xl" color="whiteAlpha.700" maxW="2xl">
            My journey through innovative technology companies
          </Text>
        </VStack>

        {/* Experience Cards */}
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          {experiences.map((exp, index) => (
            <MotionCard
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              variant="elevated"
              bg={cardBg}
              backdropFilter="blur(10px)"
              border="1px solid"
              borderColor="whiteAlpha.200"
              borderRadius="2xl"
              overflow="hidden"
              _hover={{
                transform: 'translateY(-8px)',
                shadow: '2xl',
                borderColor: 'brand.400',
              }}
            >
              <CardBody p={6}>
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
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Experience;
