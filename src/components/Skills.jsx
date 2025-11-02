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
  Progress,
  Badge,
  SimpleGrid,
  useColorModeValue,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import {
  SiPython,
  SiTensorflow,
  SiReact,
  SiMysql,
  SiDocker,
  SiGit,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiLinux,
} from 'react-icons/si';
import {
  FaDatabase,
  FaChartBar,
  FaCode,
  FaLanguage,
  FaCogs,
  FaBrain,
  FaRocket,
} from 'react-icons/fa';
import loadSvg from '../utils/loadSvg';

const MotionBox = motion(Box);
const MotionCard = motion(Card);

// Enhanced skill data with proficiency levels
const skillCategories = [
  {
    title: 'AI & Machine Learning',
    icon: FaBrain,
    color: 'purple.400',
    skills: [
      { name: 'Generative AI', level: 90, details: 'RAG, Prompt Engineering, GAN, VAEs', icon: FaBrain },
      { name: 'Deep Learning', level: 85, details: 'PyTorch, TensorFlow, Keras, Neural Networks', icon: SiTensorflow },
      { name: 'Python & ML', level: 95, details: 'Scikit-learn, Pandas, NumPy, Analysis', icon: SiPython },
      { name: 'NLP & LLMs', level: 88, details: 'LangChain, Transformers, BERT, GPT', icon: FaLanguage },
    ],
  },
  {
    title: 'Development & Programming',
    icon: FaCode,
    color: 'blue.400',
    skills: [
      { name: 'React.js', level: 85, details: 'Hooks, Context, Redux, Next.js', icon: SiReact },
      { name: 'JavaScript', level: 80, details: 'ES6+, Async/Await, TypeScript', icon: SiJavascript },
      { name: 'HTML/CSS', level: 90, details: 'Responsive Design, Tailwind, Chakra UI', icon: SiHtml5 },
      { name: 'C/C++', level: 75, details: 'Data Structures, Algorithms, OOP', icon: FaCode },
    ],
  },
  {
    title: 'Data & Analytics',
    icon: FaChartBar,
    color: 'green.400',
    skills: [
      { name: 'SQL Databases', level: 85, details: 'Oracle, MySQL, PostgreSQL, SQLite', icon: SiMysql },
      { name: 'Data Visualization', level: 80, details: 'Power BI, Matplotlib, Seaborn', icon: FaChartBar },
      { name: 'Big Data', level: 70, details: 'Vector Databases, Data Analysis', icon: FaDatabase },
      { name: 'Statistical Analysis', level: 75, details: 'ROC, Confusion Matrix, Regression', icon: FaChartBar },
    ],
  },
  {
    title: 'DevOps & Tools',
    icon: FaCogs,
    color: 'orange.400',
    skills: [
      { name: 'Linux/Unix', level: 80, details: 'Command Line, Shell Scripting', icon: SiLinux },
      { name: 'Git/GitHub', level: 85, details: 'Version Control, Collaboration', icon: SiGit },
      { name: 'Agile/Jira', level: 75, details: 'Project Management, Scrum', icon: FaCogs },
      { name: 'Terraform/Ansible', level: 65, details: 'Infrastructure as Code', icon: SiDocker },
    ],
  },
];

// Languages with proficiency levels
const languages = [
  { name: 'English', level: 95, flag: 'En', fontFamily: 'Georgia, serif' },
  { name: 'Hindi', level: 90, flag: 'हिं', fontFamily: '"Noto Sans Devanagari", sans-serif' },
  { name: 'Bengali', level: 95, flag: 'বাং', fontFamily: '"Noto Sans Bengali", sans-serif' },
  { name: 'Kannada', level: 40, flag: 'ಕನ್', fontFamily: '"Noto Sans Kannada", sans-serif' },
  { name: 'French', level: 35, flag: 'Fr', fontFamily: 'Georgia, serif' },
];

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = React.useState(null);
  const textColor = 'white';

  // Modern Skill Bar with Icon
  const SkillBar = ({ skill, index, categoryColor }) => {
    return (
      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.4, delay: index * 0.05 }}
      >
        <Box
          position="relative"
          bg="rgba(255, 255, 255, 0.03)"
          backdropFilter="blur(10px)"
          border="1px solid"
          borderColor="whiteAlpha.200"
          borderRadius="2xl"
          p={6}
          overflow="hidden"
          _hover={{
            borderColor: categoryColor,
            bg: "rgba(255, 255, 255, 0.05)",
          }}
          transition="all 0.3s ease"
          cursor="default"
        >
          {/* Animated Background Progress */}
          <MotionBox
            position="absolute"
            left={0}
            top={0}
            bottom={0}
            bgGradient={`linear(to-r, ${categoryColor} 0%, ${categoryColor} 70%, transparent 100%)`}
            opacity={0.35}
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1.2, delay: index * 0.1, ease: "easeOut" }}
            _after={{
              content: '""',
              position: 'absolute',
              right: 0,
              top: 0,
              bottom: 0,
              width: '4px',
              bg: categoryColor,
              boxShadow: `0 0 20px ${categoryColor}, 0 0 40px ${categoryColor}`,
              opacity: 0.9,
            }}
          />
          
          <HStack spacing={4} position="relative" zIndex={1}>
            {/* Icon */}
            <Box
              bg={categoryColor}
              p={3}
              borderRadius="lg"
              boxShadow={`0 0 20px ${categoryColor}`}
              flexShrink={0}
            >
              <Icon as={skill.icon} boxSize={6} color="white" />
            </Box>
            
            {/* Skill Info */}
            <VStack align="start" flex={1} spacing={1}>
              <HStack justify="space-between" w="full">
                <Text fontSize="lg" fontWeight="bold" color="white">
                  {skill.name}
                </Text>
                <Badge 
                  colorScheme="brand" 
                  fontSize="sm"
                  px={3}
                  py={1}
                  borderRadius="full"
                >
                  {skill.level}%
                </Badge>
              </HStack>
              <Text fontSize="sm" color="whiteAlpha.600">
                {skill.details}
              </Text>
            </VStack>
          </HStack>
        </Box>
      </MotionBox>
    );
  };

  // Language Card with Simple Design
  const LanguageCard = ({ language, index }) => {
    return (
      <MotionBox
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.4, delay: index * 0.05 }}
      >
        <Box
          bg="rgba(255, 255, 255, 0.03)"
          backdropFilter="blur(10px)"
          border="1px solid"
          borderColor="whiteAlpha.200"
          borderRadius="2xl"
          p={6}
          textAlign="center"
          _hover={{
            borderColor: "yellow.400",
            bg: "rgba(255, 255, 255, 0.05)",
          }}
          transition="all 0.3s ease"
          cursor="default"
        >
          <VStack spacing={4}>
            {/* Language Script */}
            <Box
              fontSize="5xl"
              fontWeight="bold"
              fontFamily={language.fontFamily}
              bgGradient="linear(to-r, yellow.400, orange.400)"
              bgClip="text"
            >
              {language.flag}
            </Box>
            
            {/* Language Name */}
            <Text fontSize="xl" fontWeight="bold" color="white">
              {language.name}
            </Text>
            
            {/* Progress Bar */}
            <Box w="full">
              <HStack justify="space-between" mb={2}>
                <Text fontSize="sm" color="whiteAlpha.600">
                  {language.level > 80 ? 'Fluent' : language.level > 50 ? 'Intermediate' : 'Beginner'}
                </Text>
                <Text fontSize="sm" fontWeight="bold" color="yellow.400">
                  {language.level}%
                </Text>
              </HStack>
              <Progress
                value={language.level}
                size="sm"
                borderRadius="full"
                bg="whiteAlpha.200"
                sx={{
                  '& > div': {
                    background: 'linear-gradient(to-r, #facc15, #f97316)',
                  }
                }}
              />
            </Box>
          </VStack>
        </Box>
      </MotionBox>
    );
  };

  return (
    <Box
      py={20}
      position="relative"
    >
      <Container maxW="container.xl">
        <VStack spacing={20}>
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
              bgGradient="linear(to-r, brand.400, purple.400, pink.400)"
              bgClip="text"
              color="transparent"
              mb={4}
            >
              Skills & Expertise
            </Heading>
            <Text fontSize="xl" color="whiteAlpha.700" maxW="2xl" mx="auto">
              A comprehensive overview of my technical skills and proficiency levels
            </Text>
          </MotionBox>

          {/* Skill Categories with Modern Bar Design */}
          {skillCategories.map((category, categoryIndex) => (
            <MotionBox
              key={categoryIndex}
              w="full"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <VStack spacing={8} align="stretch">
                {/* Category Header */}
                <HStack spacing={4} mb={4}>
                  <Box
                    bg={category.color}
                    p={3}
                    borderRadius="lg"
                    boxShadow={`0 0 30px ${category.color}`}
                  >
                    <Icon as={category.icon} boxSize={10} color="white" />
                  </Box>
                  <Heading 
                    as="h3" 
                    size="xl" 
                    bgGradient={`linear(to-r, ${category.color}, brand.400)`}
                    bgClip="text"
                  >
                    {category.title}
                  </Heading>
                </HStack>

                {/* Skills List */}
                <VStack spacing={4} align="stretch">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar
                      key={skillIndex}
                      skill={skill}
                      index={skillIndex}
                      categoryColor={category.color}
                    />
                  ))}
                </VStack>
              </VStack>
            </MotionBox>
          ))}

          {/* Languages Section */}
          <MotionBox
            w="full"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <VStack spacing={8} align="stretch">
              {/* Languages Header */}
              <HStack spacing={4} mb={4}>
                <Box
                  bg="yellow.400"
                  p={3}
                  borderRadius="lg"
                  boxShadow="0 0 30px #facc15"
                >
                  <Icon as={FaLanguage} boxSize={10} color="white" />
                </Box>
                <Heading 
                  as="h3" 
                  size="xl" 
                  bgGradient="linear(to-r, yellow.400, orange.400)"
                  bgClip="text"
                >
                  Languages
                </Heading>
              </HStack>

              {/* Languages Grid */}
              <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 5 }} spacing={6}>
                {languages.map((language, index) => (
                  <LanguageCard key={index} language={language} index={index} />
                ))}
              </SimpleGrid>
            </VStack>
          </MotionBox>
        </VStack>
      </Container>
    </Box>
  );
};

export default Skills;
