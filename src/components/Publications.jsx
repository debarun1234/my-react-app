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
  Button,
  Badge,
  Link,
  Flex,
  useColorModeValue,
  Icon,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaBook, FaExternalLinkAlt, FaAward } from 'react-icons/fa';

const publications = [
  {
    title: 'Integration of Genetic Algorithms & Particle Swarm Optimization in 5G Networks',
    description: `Orchestrated the integration of Genetic Algorithms & particle swarm optimization in 5G networks, 
      boosting energy efficiency by 30% and enhancing overall network performance.`,
    link: 'https://bit.ly/3UAFrx5',
    conference: 'IEEE NKCON \'23',
    date: 'January 2024',
    impact: '30% Energy Efficiency Improvement',
  },
  {
    title: 'AI-Driven Strategies to Reduce Energy Consumption in 5G Networks',
    description: `Researched and implemented AI-driven strategies to reduce energy consumption in 5G networks, 
      resulting in a 25% decrease in overall energy usage.`,
    link: 'https://bit.ly/47t1FUP',
    conference: 'IEEE ICONAT \'23',
    date: 'April 2023',
    impact: '25% Energy Reduction',
  },
];

const MotionCard = motion(Card);

const Publications = () => {
  const cardBg = 'rgba(255, 255, 255, 0.05)';
  const textColor = 'white';

  return (
    <Box
      as="section"
      py={20}
      minH="100vh"
      position="relative"
    >
      <Container maxW="container.lg">
        {/* Section Header */}
        <VStack spacing={4} mb={16} textAlign="center">
          <Flex align="center" gap={3}>
            <FaBook size={32} color="var(--chakra-colors-brand-400)" />
            <Heading
              as="h2"
              size="2xl"
              bgGradient="linear(to-r, brand.400, purple.400)"
              bgClip="text"
              color="transparent"
            >
              Research Publications
            </Heading>
          </Flex>
          <Text fontSize="xl" color="whiteAlpha.700" maxW="2xl">
            Published research in IEEE conferences
          </Text>
        </VStack>

        {/* Publications Cards */}
        <VStack spacing={8}>
          {publications.map((pub, index) => (
            <MotionCard
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              w="full"
              variant="elevated"
              bg={cardBg}
              backdropFilter="blur(10px)"
              border="1px solid"
              borderColor="whiteAlpha.200"
              borderRadius="2xl"
              overflow="hidden"
              _hover={{
                transform: 'translateY(-4px)',
                shadow: '2xl',
                borderColor: 'brand.400',
              }}
            >
              <CardBody p={8}>
                <VStack align="stretch" spacing={4}>
                  {/* Conference Badge */}
                  <HStack spacing={3} mb={2}>
                    <Icon as={FaAward} color="accent.500" boxSize={5} />
                    <Badge
                      colorScheme="purple"
                      fontSize="sm"
                      px={3}
                      py={1}
                      borderRadius="full"
                    >
                      {pub.conference}
                    </Badge>
                    <Text fontSize="sm" color="whiteAlpha.700">
                      {pub.date}
                    </Text>
                  </HStack>

                  {/* Title */}
                  <Heading
                    as="h3"
                    size="lg"
                    color={textColor}
                    lineHeight="tall"
                  >
                    {pub.title}
                  </Heading>

                  {/* Description */}
                  <Text
                    fontSize="md"
                    color="whiteAlpha.800"
                    lineHeight="tall"
                  >
                    {pub.description.trim()}
                  </Text>

                  {/* Impact Badge */}
                  <Box>
                    <Badge
                      colorScheme="green"
                      variant="subtle"
                      px={4}
                      py={2}
                      borderRadius="lg"
                      fontSize="sm"
                    >
                      🎯 {pub.impact}
                    </Badge>
                  </Box>

                  {/* Read More Button */}
                  <Box pt={4}>
                    <Link href={pub.link} isExternal _hover={{ textDecor: 'none' }}>
                      <Button
                        rightIcon={<FaExternalLinkAlt />}
                        colorScheme="brand"
                        variant="outline"
                        size="lg"
                        _hover={{
                          transform: 'translateX(4px)',
                          bg: 'brand.50',
                          _dark: { bg: 'brand.900' },
                        }}
                      >
                        Read Full Paper
                      </Button>
                    </Link>
                  </Box>
                </VStack>
              </CardBody>
            </MotionCard>
          ))}
        </VStack>
      </Container>
    </Box>
  );
};

export default Publications;

