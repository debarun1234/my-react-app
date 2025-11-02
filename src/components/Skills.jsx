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
  { name: 'English', level: 95, flag: '🇺🇸' },
  { name: 'Hindi', level: 90, flag: '🇮🇳' },
  { name: 'Bengali', level: 95, flag: '🏴󠁩󠁮󠁷󠁢󠁿' },
  { name: 'Kannada', level: 40, flag: '🇮🇳' },
  { name: 'French', level: 35, flag: '🇫🇷' },
];

const Skills = () => {
  const cardBg = 'rgba(255, 255, 255, 0.05)';
  const textColor = 'white';

  const SkillCard = ({ skill, index, categoryColor }) => (
    <MotionCard
      key={index}
      variant="elevated"
      bg={cardBg}
      backdropFilter="blur(10px)"
      border="1px solid"
      borderColor="whiteAlpha.200"
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <CardBody p={6}>
        <VStack align="start" spacing={4}>
          <HStack justify="space-between" w="full">
            <HStack>
              <Icon as={skill.icon} boxSize={6} color={categoryColor} />
              <Heading as="h4" size="md" color={textColor}>
                {skill.name}
              </Heading>
            </HStack>
            <Badge colorScheme="brand" variant="subtle">
              {skill.level}%
            </Badge>
          </HStack>
          
          <Box w="full">
            <Progress
              value={skill.level}
              colorScheme="brand"
              size="md"
              borderRadius="full"
              bg="whiteAlpha.200"
            />
          </Box>
          
          <Text fontSize="sm" color="whiteAlpha.700" lineHeight="tall">
            {skill.details}
          </Text>
        </VStack>
      </CardBody>
    </MotionCard>
  );

  const LanguageCard = ({ language, index }) => (
    <MotionCard
      key={index}
      variant="elevated"
      bg={cardBg}
      backdropFilter="blur(10px)"
      border="1px solid"
      borderColor="whiteAlpha.200"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -5, scale: 1.05 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <CardBody p={6} textAlign="center">
        <VStack spacing={4}>
          <Text fontSize="3xl">{language.flag}</Text>
          <Heading as="h4" size="md" color={textColor}>
            {language.name}
          </Heading>
          <Progress
            value={language.level}
            colorScheme="brand"
            size="sm"
            borderRadius="full"
            bg="whiteAlpha.200"
            w="full"
          />
          <Badge colorScheme="brand" variant="subtle">
            {language.level > 80 ? 'Fluent' : language.level > 50 ? 'Intermediate' : 'Beginner'}
          </Badge>
        </VStack>
      </CardBody>
    </MotionCard>
  );

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
            viewport={{ once: true }}
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

          {/* Skill Categories */}
          {skillCategories.map((category, categoryIndex) => (
            <MotionBox
              key={categoryIndex}
              w="full"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <VStack spacing={8} align="stretch">
                {/* Category Header */}
                <HStack justify="center" spacing={4}>
                  <Icon as={category.icon} boxSize={8} color={category.color} />
                  <Heading as="h3" size="xl" color={textColor}>
                    {category.title}
                  </Heading>
                </HStack>

                {/* Skills Grid */}
                <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
                  {category.skills.map((skill, skillIndex) => (
                    <SkillCard
                      key={skillIndex}
                      skill={skill}
                      index={skillIndex}
                      categoryColor={category.color}
                    />
                  ))}
                </SimpleGrid>
              </VStack>
            </MotionBox>
          ))}

          {/* Languages Section */}
          <MotionBox
            w="full"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <VStack spacing={8} align="stretch">
              <HStack justify="center" spacing={4}>
                <Icon as={FaLanguage} boxSize={8} color="yellow.400" />
                <Heading as="h3" size="xl" color={textColor}>
                  Languages
                </Heading>
              </HStack>

              <SimpleGrid columns={{ base: 2, md: 3, lg: 5 }} spacing={6}>
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
