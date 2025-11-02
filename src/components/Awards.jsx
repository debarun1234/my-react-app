import React from 'react';
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
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaTrophy, FaMedal, FaStar } from 'react-icons/fa';

const awards = [
  {
    title: 'First Runner-up',
    event: 'National Level Project Exhibition at The National Institute of Engineering Mysuru',
    year: '2022',
    icon: FaTrophy,
    color: 'yellow.500',
  },
  {
    title: 'National Creative Aptitude Exam 2022',
    event: 'Holding All India Rank: 79',
    year: '2022',
    icon: FaMedal,
    color: 'purple.500',
  },
  {
    title: 'Winner in Education Week',
    event: 'IEEE Education Society Ad Hoc Young Professionals Committee',
    year: '2023',
    icon: FaStar,
    color: 'accent.500',
  },
];

const MotionCard = motion(Card);

const Awards = () => {
  const cardBg = 'rgba(0, 0, 0, 0.3)';
  const textColor = 'gray.100';

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
              _hover={{ transform: 'scale(1.02)', shadow: '2xl', borderColor: award.color }}
            >
              <CardBody p={8}>
                <Flex direction={{ base: 'column', md: 'row' }} align="center" gap={6}>
                  <Flex
                    flexShrink={0}
                    w={{ base: 'full', md: '120px' }}
                    h="120px"
                    align="center"
                    justify="center"
                    bg="whiteAlpha.100"
                    borderRadius="2xl"
                    position="relative"
                  >
                    <Icon as={award.icon} boxSize={16} color={award.color} />
                    <Box position="absolute" top="-10px" right="-10px">
                      <Badge colorScheme="yellow" fontSize="xs" px={2} py={1} borderRadius="full">
                        {award.year}
                      </Badge>
                    </Box>
                  </Flex>

                  <VStack align="start" flex="1" spacing={3}>
                    <Heading as="h3" size="lg" color={textColor}>
                      {award.title}
                    </Heading>
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
    </Box>
  );
};

export default Awards;
