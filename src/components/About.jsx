import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Grid,
  GridItem,
  Card,
  CardBody,
  Icon,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
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

const About = () => {
  const cardBg = 'rgba(255, 255, 255, 0.05)';
  const textColor = 'white';
  const accentColor = 'brand.300';

  const stats = [
    { label: 'Years Experience', number: '2+', icon: FaTrophy },
    { label: 'Projects Completed', number: '15+', icon: FaCode },
    { label: 'Technologies', number: '20+', icon: FaBrain },
    { label: 'Collaborations', number: '10+', icon: FaUsers },
  ];

  const highlights = [
    {
      title: 'Education Excellence',
      description: 'Graduate in Electronics & Communications (2024) with Postgraduate specialization in Applied Generative AI from Purdue University',
      icon: FaGraduationCap,
      color: 'blue.400',
    },
    {
      title: 'AI/ML Expertise',
      description: 'Strong foundation in AI and ML through hands-on projects, internships, and advanced coursework in cutting-edge technologies',
      icon: FaBrain,
      color: 'purple.400',
    },
    {
      title: 'Innovation Focus',
      description: 'Passionate about leveraging AI/ML to create scalable solutions for banking, research, and technology industries',
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
            viewport={{ once: true }}
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

          {/* Stats Grid */}
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            w="full"
          >
            <Grid templateColumns={{ base: '1fr 1fr', md: 'repeat(4, 1fr)' }} gap={6} mb={16}>
              {stats.map((stat, index) => (
                <GridItem key={index}>
                  <MotionCard
                    variant="elevated"
                    bg={cardBg}
                    backdropFilter="blur(10px)"
                    border="1px solid"
                    borderColor="whiteAlpha.200"
                    whileHover={{ y: -5, scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CardBody textAlign="center" py={8}>
                      <Icon as={stat.icon} boxSize={8} color={accentColor} mb={4} />
                      <Stat>
                        <StatNumber 
                          fontSize="2xl" 
                          fontWeight="bold" 
                          color={textColor}
                        >
                          {stat.number}
                        </StatNumber>
                        <StatLabel color="whiteAlpha.700" fontSize="sm">
                          {stat.label}
                        </StatLabel>
                      </Stat>
                    </CardBody>
                  </MotionCard>
                </GridItem>
              ))}
            </Grid>
          </MotionBox>

          {/* Main Content */}
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
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
                I am a graduate in{' '}
                <Text as="span" color={accentColor} fontWeight="bold">
                  Electronics and Communications
                </Text>{' '}
                (2024), with a{' '}
                <Text as="span" color={accentColor} fontWeight="bold">
                  Postgraduate Program specialization in Applied Generative AI
                </Text>{' '}
                from{' '}
                <Text as="span" color={accentColor} fontWeight="bold">
                  Purdue University
                </Text>
                . I have developed a strong foundation in artificial intelligence and machine learning 
                through hands-on projects, internships, and advanced coursework.
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
                    viewport={{ once: true }}
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
                Throughout my academic and professional journey, I have gained expertise in developing 
                AI-powered solutions for improving operational efficiency, automating complex tasks, 
                and enhancing decision-making processes. I specialize in{' '}
                <Text as="span" color={accentColor} fontWeight="bold">
                  NLP, Computer Vision, and Deep Learning
                </Text>{' '}
                across various real-world applications in banking, research, and technology.
              </Text>
            </VStack>
          </MotionBox>
        </VStack>
      </Container>
    </Box>
  );
};

export default About;

