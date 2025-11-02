import React, { useState, useEffect } from 'react';
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
  CardHeader,
  Icon,
  Button,
  Badge,
  Link,
  Spinner,
  Alert,
  AlertIcon,
  useColorModeValue,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaStar, FaCodeBranch, FaCode } from 'react-icons/fa';

const MotionBox = motion(Box);
const MotionCard = motion(Card);

// Store your GitHub username in environment variables
const GITHUB_USERNAME = import.meta.env.VITE_GITHUB_USERNAME;

console.log('GITHUB_USERNAME:', GITHUB_USERNAME);

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const cardBg = 'rgba(255, 255, 255, 0.05)';
  const textColor = 'white';

  // Enhanced fetch function to get more repo data
  useEffect(() => {
    const fetchRepos = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`
        );
        
        if (!res.ok) {
          throw new Error('Failed to fetch repositories');
        }
        
        const data = await res.json();
        
        // Enhanced repo data with additional GitHub info
        const formattedRepos = data.map(repo => ({
          id: repo.id,
          title: repo.name,
          description: repo.description || 'No description available',
          repoLink: repo.html_url,
          stars: repo.stargazers_count,
          forks: repo.forks_count,
          language: repo.language,
          updatedAt: new Date(repo.updated_at).toLocaleDateString(),
          isPrivate: repo.private,
        }));
        
        setRepos(formattedRepos);
      } catch (err) {
        setRepos([]);
        setError('Failed to fetch projects. Please try again later.');
      }
      setLoading(false);
    };

    if (GITHUB_USERNAME) {
      fetchRepos();
    } else {
      setError('GitHub username not configured');
    }
  }, []);

  const getLanguageColor = (language) => {
    const colors = {
      JavaScript: 'yellow.400',
      TypeScript: 'blue.400',
      Python: 'green.400',
      React: 'cyan.400',
      HTML: 'orange.400',
      CSS: 'purple.400',
      Java: 'red.400',
      'C++': 'blue.600',
      C: 'gray.400',
    };
    return colors[language] || 'gray.400';
  };

  const ProjectCard = ({ repo, index }) => (
    <MotionCard
      key={repo.id}
      variant="elevated"
      bg={cardBg}
      backdropFilter="blur(10px)"
      border="1px solid"
      borderColor="whiteAlpha.200"
      initial={{ opacity: 0, y: 30, rotateY: -10 }}
      whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
      whileHover={{ 
        y: -10, 
        rotateY: 5, 
        boxShadow: '0 20px 40px rgba(0,0,0,0.3)' 
      }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: false, amount: 0.3 }}
      overflow="hidden"
      position="relative"
    >
      {/* Gradient overlay */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        height="4px"
        bgGradient="linear(to-r, brand.400, purple.400, pink.400)"
      />

      <CardHeader pb={2}>
        <HStack justify="space-between" align="start">
          <VStack align="start" spacing={2} flex={1}>
            <HStack>
              <Icon as={FaCode} color="brand.400" />
              <Heading as="h3" size="md" color={textColor} noOfLines={1}>
                {repo.title}
              </Heading>
              {repo.isPrivate && (
                <Badge colorScheme="red" variant="subtle" size="sm">
                  Private
                </Badge>
              )}
            </HStack>
            {repo.language && (
              <Badge 
                colorScheme="brand" 
                variant="subtle"
                color={getLanguageColor(repo.language)}
              >
                {repo.language}
              </Badge>
            )}
          </VStack>
        </HStack>
      </CardHeader>

      <CardBody pt={0}>
        <VStack align="start" spacing={4}>
          <Text 
            color="whiteAlpha.800" 
            fontSize="sm" 
            lineHeight="tall"
            noOfLines={3}
            minH="60px"
          >
            {repo.description}
          </Text>

          {/* Stats */}
          <HStack spacing={4} w="full">
            <HStack spacing={1}>
              <Icon as={FaStar} color="yellow.400" size="sm" />
              <Text fontSize="sm" color="whiteAlpha.700">
                {repo.stars}
              </Text>
            </HStack>
            <HStack spacing={1}>
              <Icon as={FaCodeBranch} color="brand.400" size="sm" />
              <Text fontSize="sm" color="whiteAlpha.700">
                {repo.forks}
              </Text>
            </HStack>
          </HStack>

          <Text fontSize="xs" color="whiteAlpha.600">
            Updated: {repo.updatedAt}
          </Text>

          {/* Action Buttons */}
          <HStack spacing={3} w="full">
            <Button
              as={Link}
              href={repo.repoLink}
              target="_blank"
              rel="noopener noreferrer"
              variant="ghost"
              size="sm"
              leftIcon={<FaGithub />}
              color="whiteAlpha.800"
              _hover={{ 
                color: 'white',
                bg: 'whiteAlpha.200',
                textDecoration: 'none'
              }}
              flex={1}
            >
              View Code
            </Button>
            <Button
              as={Link}
              href={repo.repoLink}
              target="_blank"
              rel="noopener noreferrer"
              variant="ghost"
              size="sm"
              leftIcon={<FaExternalLinkAlt />}
              color="whiteAlpha.800"
              _hover={{ 
                color: 'white',
                bg: 'whiteAlpha.200',
                textDecoration: 'none'
              }}
            >
              Live Demo
            </Button>
          </HStack>
        </VStack>
      </CardBody>
    </MotionCard>
  );

  return (
    <Box
      py={12}
      position="relative"
    >
      <Container maxW="container.xl">
        <VStack spacing={12}>
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
              bgGradient="linear(to-r, brand.400, blue.400, purple.400)"
              bgClip="text"
              color="transparent"
              mb={4}
            >
              Featured Projects
            </Heading>
            <Text fontSize="xl" color="whiteAlpha.700" maxW="2xl" mx="auto">
              A showcase of my latest work from GitHub repositories
            </Text>
          </MotionBox>

          {/* Error State */}
          {error && (
            <Alert status="error" bg="red.900" color="white">
              <AlertIcon />
              {error}
            </Alert>
          )}

          {/* Loading State */}
          {loading && (
            <VStack spacing={4}>
              <Spinner size="xl" color="brand.400" thickness="4px" />
              <Text color="whiteAlpha.700">Loading projects...</Text>
            </VStack>
          )}

          {/* Projects Grid */}
          {!loading && !error && repos.length > 0 && (
            <MotionBox
              w="full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <Grid 
                templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} 
                gap={8}
              >
                {repos.map((repo, index) => (
                  <GridItem key={repo.id}>
                    <ProjectCard repo={repo} index={index} />
                  </GridItem>
                ))}
              </Grid>
            </MotionBox>
          )}

          {/* Empty State */}
          {!loading && !error && repos.length === 0 && (
            <VStack spacing={4}>
              <Icon as={FaGithub} boxSize={16} color="whiteAlpha.400" />
              <Text color="whiteAlpha.700" fontSize="lg">
                No projects found
              </Text>
            </VStack>
          )}

          {/* View More Button */}
          {repos.length > 0 && (
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <Button
                as={Link}
                href={`https://github.com/${GITHUB_USERNAME}`}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                size="lg"
                leftIcon={<FaGithub />}
                color="white"
                borderColor="whiteAlpha.400"
                _hover={{ 
                  textDecoration: 'none',
                  color: 'brand.400',
                  borderColor: 'brand.400',
                  transform: 'translateY(-2px)',
                  boxShadow: 'xl',
                }}
              >
                View All Projects
              </Button>
            </MotionBox>
          )}
        </VStack>
      </Container>
    </Box>
  );
};

export default Projects;
