import React, { useState, useEffect, useMemo } from 'react';
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
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaStar, FaCodeBranch, FaCode } from 'react-icons/fa';

const MotionBox = motion(Box);
const MotionCard = motion(Card);

const GITHUB_USERNAME = import.meta.env.VITE_GITHUB_USERNAME;

// ── Helpers ───────────────────────────────────────────────────────────────────

const relativeTime = (date) => {
  const days = Math.floor((new Date() - date) / (1000 * 60 * 60 * 24));
  if (days === 0) return 'today';
  if (days === 1) return 'yesterday';
  if (days < 7)  return `${days}d ago`;
  if (days < 14) return '1 week ago';
  if (days < 30) return `${Math.floor(days / 7)}w ago`;
  if (days < 60) return '1 month ago';
  return `${Math.floor(days / 30)} months ago`;
};

const GROUP_DEFS = [
  { key: 'latest', label: 'Latest Activity',  sub: 'updated within 10 days', color: '#48BB78' },
  { key: 'month',  label: 'This Month',        sub: 'updated 10–30 days ago', color: '#4299E1' },
  { key: 'older',  label: 'Earlier Projects',  sub: 'older than 30 days',     color: '#9F7AEA' },
];

const groupRepos = (repos) => {
  const now = new Date();
  const buckets = { latest: [], month: [], older: [] };
  repos.forEach(repo => {
    const days = (now - repo.updatedAt) / (1000 * 60 * 60 * 24);
    if (days <= 10)      buckets.latest.push(repo);
    else if (days <= 30) buckets.month.push(repo);
    else                 buckets.older.push(repo);
  });
  return GROUP_DEFS
    .map(def => ({ ...def, repos: buckets[def.key] }))
    .filter(g => g.repos.length > 0);
};

const getLanguageColor = (language) => {
  const colors = {
    JavaScript: 'yellow.400', TypeScript: 'blue.400', Python: 'green.400',
    React: 'cyan.400', HTML: 'orange.400', CSS: 'purple.400',
    Java: 'red.400', 'C++': 'blue.600', C: 'gray.400',
  };
  return colors[language] || 'gray.400';
};

// ── Group header ──────────────────────────────────────────────────────────────

const GroupHeader = ({ group, index }) => (
  <MotionBox
    initial={{ opacity: 0, x: -16 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: false, amount: 0.5 }}
    transition={{ duration: 0.45, delay: index * 0.08 }}
    mb={5}
  >
    <HStack spacing={3} align="center">
      <Box
        w="9px" h="9px" borderRadius="full" flexShrink={0}
        bg={group.color}
        boxShadow={`0 0 8px ${group.color}, 0 0 16px ${group.color}55`}
      />
      <Box>
        <Text fontSize="sm" fontWeight="700" color="white" lineHeight="1.2">
          {group.label}
        </Text>
        <Text fontSize="9px" color="whiteAlpha.400" textTransform="uppercase" letterSpacing="0.1em">
          {group.sub}
        </Text>
      </Box>
      <Box flex={1} h="1px" bg="whiteAlpha.100" />
      <Text fontSize="9px" fontWeight="700" color={group.color} textTransform="uppercase" letterSpacing="0.1em">
        {group.repos.length} {group.repos.length === 1 ? 'project' : 'projects'}
      </Text>
    </HStack>
  </MotionBox>
);

// ── Project card ──────────────────────────────────────────────────────────────

const ProjectCard = ({ repo, index, groupKey, groupColor }) => {
  const activityBadge = (() => {
    if (groupKey === 'older') return null;
    if (repo.isNew) return { label: 'New', scheme: 'green' };
    return { label: 'Updated', scheme: groupKey === 'latest' ? 'yellow' : 'cyan' };
  })();

  return (
    <MotionCard
      variant="elevated"
      bg="rgba(255,255,255,0.05)"
      backdropFilter="blur(10px)"
      border="1px solid"
      borderColor="whiteAlpha.200"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8, boxShadow: `0 16px 36px rgba(0,0,0,0.3), 0 0 0 1px ${groupColor}55` }}
      transition={{ duration: 0.35, delay: index * 0.08 }}
      viewport={{ once: false, amount: 0.2 }}
      overflow="hidden"
      position="relative"
    >
      {/* Top accent stripe in group color */}
      <Box
        position="absolute" top={0} left={0} right={0} h="3px"
        style={{ background: `linear-gradient(to right, ${groupColor}, transparent)` }}
      />

      <CardHeader pb={2} pt={5}>
        <VStack align="start" spacing={1.5}>
          <HStack spacing={2} w="full">
            <Icon as={FaCode} color="whiteAlpha.400" boxSize={3} flexShrink={0} />
            <Text fontWeight="700" color="white" fontSize="sm" noOfLines={1} flex={1}>
              {repo.title}
            </Text>
            {repo.isPrivate && (
              <Badge colorScheme="red" variant="subtle" fontSize="9px" flexShrink={0}>Private</Badge>
            )}
          </HStack>
          <HStack spacing={2} flexWrap="wrap">
            {repo.language && (
              <Badge variant="subtle" fontSize="9px" color={getLanguageColor(repo.language)}>
                {repo.language}
              </Badge>
            )}
            {activityBadge && (
              <Badge colorScheme={activityBadge.scheme} variant="subtle" fontSize="9px">
                {activityBadge.label}
              </Badge>
            )}
          </HStack>
        </VStack>
      </CardHeader>

      <CardBody pt={0}>
        <VStack align="start" spacing={3}>
          <Text color="whiteAlpha.700" fontSize="xs" lineHeight="tall" noOfLines={3} minH="48px">
            {repo.description}
          </Text>

          <HStack spacing={4} w="full">
            <HStack spacing={1}>
              <Icon as={FaStar} color="yellow.400" boxSize={3} />
              <Text fontSize="xs" color="whiteAlpha.600">{repo.stars}</Text>
            </HStack>
            <HStack spacing={1}>
              <Icon as={FaCodeBranch} color="brand.400" boxSize={3} />
              <Text fontSize="xs" color="whiteAlpha.600">{repo.forks}</Text>
            </HStack>
            <Text fontSize="xs" color="whiteAlpha.400" ml="auto">
              {relativeTime(repo.updatedAt)}
            </Text>
          </HStack>

          <HStack spacing={2} w="full">
            <Button
              as={Link}
              href={repo.repoLink}
              target="_blank"
              rel="noopener noreferrer"
              variant="ghost"
              size="xs"
              leftIcon={<FaGithub />}
              color="whiteAlpha.700"
              _hover={{ color: 'white', bg: 'whiteAlpha.200', textDecoration: 'none' }}
              flex={1}
            >
              Code
            </Button>
          </HStack>
        </VStack>
      </CardBody>
    </MotionCard>
  );
};

// ── Main component ────────────────────────────────────────────────────────────

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`
        );
        if (!res.ok) throw new Error('Failed to fetch repositories');
        const data = await res.json();
        const now = new Date();
        setRepos(data.map(repo => ({
          id: repo.id,
          title: repo.name,
          description: repo.description || 'No description available',
          repoLink: repo.html_url,
          stars: repo.stargazers_count,
          forks: repo.forks_count,
          language: repo.language,
          updatedAt: new Date(repo.updated_at),
          isPrivate: repo.private,
          isNew: (now - new Date(repo.created_at)) / (1000 * 60 * 60 * 24) <= 30,
        })));
      } catch {
        setRepos([]);
        setError('Failed to fetch projects. Please try again later.');
      }
      setLoading(false);
    };

    if (GITHUB_USERNAME) fetchRepos();
    else setError('GitHub username not configured');
  }, []);

  const grouped = useMemo(() => groupRepos(repos), [repos]);

  return (
    <Box py={12} position="relative">
      <Container maxW="container.xl">
        <VStack spacing={12}>
          {/* Header */}
          <MotionBox
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false, amount: 0.3 }}
            textAlign="center"
          >
            <Heading
              as="h2" size="xl"
              bgGradient="linear(to-r, brand.400, blue.400, purple.400)"
              bgClip="text" color="transparent" mb={2}
            >
              Featured Projects
            </Heading>
            <Text fontSize="xs" color="whiteAlpha.400" letterSpacing="0.14em" textTransform="uppercase">
              Live from GitHub · grouped by latest activity
            </Text>
          </MotionBox>

          {error && (
            <Alert status="error" bg="red.900" color="white" borderRadius="xl">
              <AlertIcon />{error}
            </Alert>
          )}

          {loading && (
            <VStack spacing={4}>
              <Spinner size="xl" color="brand.400" thickness="3px" />
              <Text color="whiteAlpha.500" fontSize="sm">Fetching from GitHub…</Text>
            </VStack>
          )}

          {/* Timeline grouped view */}
          {!loading && !error && grouped.length > 0 && (
            <VStack spacing={10} w="full" align="stretch">
              {grouped.map((group, gi) => (
                <Box key={group.key}>
                  <GroupHeader group={group} index={gi} />
                  <Grid
                    templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
                    gap={5}
                  >
                    {group.repos.map((repo, ri) => (
                      <GridItem key={repo.id}>
                        <ProjectCard
                          repo={repo}
                          index={ri}
                          groupKey={group.key}
                          groupColor={group.color}
                        />
                      </GridItem>
                    ))}
                  </Grid>
                </Box>
              ))}
            </VStack>
          )}

          {!loading && !error && repos.length === 0 && (
            <VStack spacing={4}>
              <Icon as={FaGithub} boxSize={14} color="whiteAlpha.300" />
              <Text color="whiteAlpha.500">No projects found</Text>
            </VStack>
          )}

          {repos.length > 0 && (
            <MotionBox
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              <Button
                as={Link}
                href={`https://github.com/${GITHUB_USERNAME}`}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                size="md"
                leftIcon={<FaGithub />}
                color="white"
                borderColor="whiteAlpha.300"
                _hover={{
                  textDecoration: 'none',
                  color: 'brand.400',
                  borderColor: 'brand.400',
                  transform: 'translateY(-2px)',
                }}
              >
                View All on GitHub
              </Button>
            </MotionBox>
          )}
        </VStack>
      </Container>
    </Box>
  );
};

export default Projects;
