import React, { useRef, useEffect } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Grid,
  Flex,
  Card,
  CardBody,
  Icon,
} from '@chakra-ui/react';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import {
  FaGraduationCap,
  FaBrain,
  FaCode,
  FaUsers,
  FaTrophy,
  FaLightbulb
} from 'react-icons/fa';

const MotionBox = motion(Box);
const MotionCard = motion(Card);
const MotionSpan = motion.span;

const Counter = ({ to, suffix }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, v => Math.round(v));
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.5 });

  useEffect(() => {
    if (inView) {
      const ctrl = animate(count, to, { duration: 1.6, ease: 'easeOut' });
      return ctrl.stop;
    } else {
      count.set(0);
    }
  }, [inView, to, count]);

  return (
    <Box as="span" ref={ref}>
      <MotionSpan>{rounded}</MotionSpan>{suffix}
    </Box>
  );
};

const About = () => {
  const cardBg = 'rgba(255, 255, 255, 0.05)';
  const textColor = 'white';
  const accentColor = 'brand.300';
  // cardBg/accentColor used by highlight cards below

  const stats = [
    { label: 'Years Experience',  to: 3,  suffix: '+', icon: FaTrophy, color: '#ECC94B' },
    { label: 'Projects Completed',to: 15, suffix: '+', icon: FaCode,   color: '#4299E1' },
    { label: 'Technologies',      to: 20, suffix: '+', icon: FaBrain,  color: '#9F7AEA' },
    { label: 'Collaborations',    to: 10, suffix: '+', icon: FaUsers,  color: '#48BB78' },
  ];

  const highlights = [
    {
      title: 'Education & Research',
      description: 'B.Tech in ECE (REVA, 2024) · PG in Applied Generative AI (Purdue, 2024) · Currently pursuing M.Tech in Data Science & AI at IIIT Dharwad — 1 year of academic AI research feeding directly into production work.',
      icon: FaGraduationCap,
      color: 'blue.400',
    },
    {
      title: 'LLMOps & RAG Systems',
      description: 'Architecting production-grade RAG pipelines on GCP Vertex AI with LangChain and LlamaIndex. Deep expertise in LLMOps, agentic workflows, and custom DSL engines that bridge stochastic AI with deterministic business logic.',
      icon: FaBrain,
      color: 'purple.400',
    },
    {
      title: 'Cloud & System Design',
      description: 'End-to-end ownership from Python orchestration to zero-trust, Terraform-provisioned deployments with automated CI/CD. Proven track record delivering high-availability AI solutions for global financial platforms.',
      icon: FaLightbulb,
      color: 'yellow.400',
    },
  ];

  return (
    <Box
      py={20}
      position="relative"
    >
      <Container maxW="container.xl">
        <VStack spacing={16}>
          {/* Header */}
          <MotionBox
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
            textAlign="center"
          >
            <Heading
              as="h2"
              size="2xl"
              bgGradient="linear(to-r, brand.400, purple.400)"
              bgClip="text"
              color="transparent"
              mb={6}
            >
              About Me
            </Heading>
          </MotionBox>

          {/* Stats Strip */}
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            viewport={{ once: false, amount: 0.4 }}
            w="full"
          >
            <Flex
              justify="center"
              align="center"
              flexWrap={{ base: 'wrap', md: 'nowrap' }}
              gap={{ base: 8, md: 0 }}
              mb={14}
              px={4}
            >
              {stats.map((stat, i) => (
                <React.Fragment key={i}>
                  <MotionBox
                    textAlign="center"
                    px={{ base: 6, md: 12 }}
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.2 }}
                    position="relative"
                  >
                    {/* Icon */}
                    <Icon
                      as={stat.icon}
                      boxSize={4}
                      color={stat.color}
                      mb={2}
                      opacity={0.8}
                    />
                    {/* Number */}
                    <Text
                      fontSize={{ base: '4xl', md: '5xl' }}
                      fontWeight="900"
                      lineHeight="1"
                      color={stat.color}
                      mb={2}
                      letterSpacing="-1px"
                    >
                      <Counter to={stat.to} suffix={stat.suffix} />
                    </Text>
                    {/* Accent underline */}
                    <Box
                      h="2px"
                      w="32px"
                      bg={stat.color}
                      borderRadius="full"
                      mx="auto"
                      mb={2}
                      opacity={0.5}
                    />
                    {/* Label */}
                    <Text
                      fontSize="10px"
                      color="whiteAlpha.500"
                      textTransform="uppercase"
                      letterSpacing="0.14em"
                      fontWeight="600"
                    >
                      {stat.label}
                    </Text>
                  </MotionBox>

                  {/* Divider */}
                  {i < stats.length - 1 && (
                    <Box
                      display={{ base: 'none', md: 'block' }}
                      w="1px"
                      h="56px"
                      bg="whiteAlpha.150"
                      flexShrink={0}
                    />
                  )}
                </React.Fragment>
              ))}
            </Flex>
          </MotionBox>

          {/* Main Content */}
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: false, amount: 0.3 }}
            w="full"
          >
            <VStack spacing={8} align="stretch">
              <Text
                fontSize="xl"
                lineHeight="tall"
                color={textColor}
                textAlign="center"
                maxW="4xl"
                mx="auto"
              >
                Generative AI Engineer with{' '}
                <Text as="span" color={accentColor} fontWeight="bold">
                  3+ years of applied AI experience
                </Text>{' '}
                — 2 years of full-time engineering and 1 year of active research — combining deep expertise in{' '}
                <Text as="span" color={accentColor} fontWeight="bold">
                  LLMOps, scalable cloud infrastructure, and agentic workflows
                </Text>
                . Currently pursuing an M.Tech in Data Science & AI at{' '}
                <Text as="span" color={accentColor} fontWeight="bold">
                  IIIT Dharwad
                </Text>{' '}
                while building production-grade AI systems at{' '}
                <Text as="span" color={accentColor} fontWeight="bold">
                  ANZ
                </Text>
                .
              </Text>

              {/* Highlight Cards */}
              <Grid templateColumns={{ base: '1fr', lg: 'repeat(3, 1fr)' }} gap={8}>
                {highlights.map((item, index) => (
                  <MotionCard
                    key={index}
                    variant="elevated"
                    bg={cardBg}
                    backdropFilter="blur(10px)"
                    border="1px solid"
                    borderColor="whiteAlpha.200"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -10, boxShadow: '2xl' }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: false, amount: 0.3 }}
                  >
                    <CardBody p={8}>
                      <VStack align="start" spacing={4}>
                        <HStack>
                          <Icon as={item.icon} boxSize={6} color={item.color} />
                          <Heading as="h3" size="md" color={textColor}>
                            {item.title}
                          </Heading>
                        </HStack>
                        <Text color="whiteAlpha.800" lineHeight="tall">
                          {item.description}
                        </Text>
                      </VStack>
                    </CardBody>
                  </MotionCard>
                ))}
              </Grid>

              {/* Additional Content */}
              <Text
                fontSize="lg"
                lineHeight="tall"
                color="whiteAlpha.900"
                textAlign="center"
                maxW="4xl"
                mx="auto"
                mt={8}
              >
                Proven ability to lead cross-functional technical initiatives and translate complex
                requirements into high-availability systems. Top skills:{' '}
                <Text as="span" color={accentColor} fontWeight="bold">
                  LLMOps
                </Text>
                ,{' '}
                <Text as="span" color={accentColor} fontWeight="bold">
                  Retrieval-Augmented Generation (RAG)
                </Text>
                , and{' '}
                <Text as="span" color={accentColor} fontWeight="bold">
                  Natural Language Processing (NLP)
                </Text>
                {' '}— applied across banking, research, and global financial platforms.
              </Text>
            </VStack>
          </MotionBox>
        </VStack>
      </Container>
    </Box>
  );
};

export default About;

