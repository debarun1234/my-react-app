import React, { useState, useRef } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Badge,
  Progress,
} from '@chakra-ui/react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const MotionBox = motion(Box);
const MotionLine = motion.line;

const edgeLen = (na, nb) =>
  Math.sqrt((nb.x - na.x) ** 2 + (nb.y - na.y) ** 2);

// ── Network nodes ────────────────────────────────────────────────────────────

const NODES = {
  // Hubs
  ai:       { id: 'ai',       label: 'AI & ML',      x: 220, y: 205, r: 46, color: '#9F7AEA', isHub: true },
  dev:      { id: 'dev',      label: 'Development',  x: 780, y: 205, r: 46, color: '#4299E1', isHub: true },
  data:     { id: 'data',     label: 'Data',         x: 780, y: 415, r: 46, color: '#48BB78', isHub: true },
  devops:   { id: 'devops',   label: 'DevOps',       x: 220, y: 415, r: 46, color: '#ED8936', isHub: true },
  // AI skills
  genai:    { id: 'genai',    label: 'Gen AI',       x: 76,  y: 95,  r: 30, color: '#9F7AEA', parent: 'ai',     detail: 'RAG, Prompt Engineering, GAN, VAEs' },
  deepl:    { id: 'deepl',    label: 'Deep\nLearn',  x: 62,  y: 268, r: 30, color: '#9F7AEA', parent: 'ai',     detail: 'PyTorch, TensorFlow, Keras, NNs' },
  python:   { id: 'python',   label: 'Python',       x: 220, y: 58,  r: 30, color: '#9F7AEA', parent: 'ai',     detail: 'Scikit-learn, Pandas, NumPy, Analysis' },
  nlp:      { id: 'nlp',      label: 'NLP / LLMs',  x: 356, y: 90,  r: 30, color: '#9F7AEA', parent: 'ai',     detail: 'LangChain, Transformers, BERT, GPT' },
  // Dev skills
  reactjs:  { id: 'reactjs',  label: 'React.js',    x: 924, y: 95,  r: 30, color: '#4299E1', parent: 'dev',    detail: 'Hooks, Context, Redux, Next.js' },
  jsscript: { id: 'jsscript', label: 'JavaScript',  x: 938, y: 268, r: 30, color: '#4299E1', parent: 'dev',    detail: 'ES6+, TypeScript, Async/Await' },
  htmlcss:  { id: 'htmlcss',  label: 'HTML / CSS',  x: 780, y: 58,  r: 30, color: '#4299E1', parent: 'dev',    detail: 'Responsive, Tailwind, Chakra UI' },
  cpp:      { id: 'cpp',      label: 'C / C++',     x: 644, y: 90,  r: 30, color: '#4299E1', parent: 'dev',    detail: 'Data Structures, OOP, Algorithms' },
  // Data skills
  sql:      { id: 'sql',      label: 'SQL / DB',    x: 924, y: 510, r: 30, color: '#48BB78', parent: 'data',   detail: 'Oracle, MySQL, PostgreSQL, SQLite' },
  dataviz:  { id: 'dataviz',  label: 'Data Viz',    x: 780, y: 542, r: 30, color: '#48BB78', parent: 'data',   detail: 'Power BI, Matplotlib, Seaborn' },
  bigdata:  { id: 'bigdata',  label: 'Big Data',    x: 644, y: 510, r: 30, color: '#48BB78', parent: 'data',   detail: 'Vector DB, Pipeline, Analysis' },
  stats:    { id: 'stats',    label: 'Statistics',  x: 938, y: 335, r: 30, color: '#48BB78', parent: 'data',   detail: 'ROC, Regression, Confusion Matrix' },
  // DevOps skills
  linux:    { id: 'linux',    label: 'Linux',       x: 76,  y: 510, r: 30, color: '#ED8936', parent: 'devops', detail: 'Command Line, Shell Scripting' },
  gitgh:    { id: 'gitgh',    label: 'Git / GitHub',x: 220, y: 542, r: 30, color: '#ED8936', parent: 'devops', detail: 'Version Control, Collaboration' },
  agile:    { id: 'agile',    label: 'Agile',       x: 356, y: 510, r: 30, color: '#ED8936', parent: 'devops', detail: 'Jira, Scrum, Project Management' },
  infra:    { id: 'infra',    label: 'Infra / IaC', x: 62,  y: 335, r: 30, color: '#ED8936', parent: 'devops', detail: 'Terraform, Ansible, Docker' },
};

const EDGES = [
  // Hub ↔ Hub
  { a: 'ai',     b: 'dev',      t: 'hub' },
  { a: 'ai',     b: 'devops',   t: 'hub' },
  { a: 'dev',    b: 'data',     t: 'hub' },
  { a: 'data',   b: 'devops',   t: 'hub' },
  { a: 'ai',     b: 'data',     t: 'diag' },
  { a: 'dev',    b: 'devops',   t: 'diag' },
  // Parent links
  { a: 'ai',     b: 'genai',    t: 'parent' },
  { a: 'ai',     b: 'deepl',    t: 'parent' },
  { a: 'ai',     b: 'python',   t: 'parent' },
  { a: 'ai',     b: 'nlp',      t: 'parent' },
  { a: 'dev',    b: 'reactjs',  t: 'parent' },
  { a: 'dev',    b: 'jsscript', t: 'parent' },
  { a: 'dev',    b: 'htmlcss',  t: 'parent' },
  { a: 'dev',    b: 'cpp',      t: 'parent' },
  { a: 'data',   b: 'sql',      t: 'parent' },
  { a: 'data',   b: 'dataviz',  t: 'parent' },
  { a: 'data',   b: 'bigdata',  t: 'parent' },
  { a: 'data',   b: 'stats',    t: 'parent' },
  { a: 'devops', b: 'linux',    t: 'parent' },
  { a: 'devops', b: 'gitgh',    t: 'parent' },
  { a: 'devops', b: 'agile',    t: 'parent' },
  { a: 'devops', b: 'infra',    t: 'parent' },
  // Cross-skill correlations
  { a: 'python',   b: 'sql',      t: 'cross' },
  { a: 'python',   b: 'stats',    t: 'cross' },
  { a: 'python',   b: 'bigdata',  t: 'cross' },
  { a: 'nlp',      b: 'dataviz',  t: 'cross' },
  { a: 'deepl',    b: 'bigdata',  t: 'cross' },
  { a: 'deepl',    b: 'stats',    t: 'cross' },
  { a: 'reactjs',  b: 'gitgh',    t: 'cross' },
  { a: 'jsscript', b: 'reactjs',  t: 'cross' },
  { a: 'cpp',      b: 'linux',    t: 'cross' },
  { a: 'infra',    b: 'bigdata',  t: 'cross' },
  { a: 'gitgh',    b: 'agile',    t: 'cross' },
];

const languages = [
  { name: 'English', level: 95, label: 'Fluent' },
  { name: 'Bengali', level: 95, label: 'Native' },
  { name: 'Hindi',   level: 90, label: 'Fluent' },
  { name: 'Kannada', level: 40, label: 'Basic'  },
  { name: 'French',  level: 35, label: 'Basic'  },
];

function getConnected(nodeId) {
  const s = new Set([nodeId]);
  EDGES.forEach(e => {
    if (e.a === nodeId) s.add(e.b);
    if (e.b === nodeId) s.add(e.a);
  });
  return s;
}

// ── Component ────────────────────────────────────────────────────────────────

const Skills = () => {
  const [hovered, setHovered] = useState(null);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.1 });

  const connected = hovered ? getConnected(hovered) : null;

  const nodeOpacity = (id) => (!hovered ? 1 : connected.has(id) ? 1 : 0.12);
  const edgeOpacity = (e) => (!hovered ? 1 : connected.has(e.a) && connected.has(e.b) ? 1 : 0.03);
  const edgeColor = (e) => {
    if (!hovered) {
      if (e.t === 'cross')  return 'rgba(255,255,255,0.09)';
      if (e.t === 'diag')   return 'rgba(255,255,255,0.04)';
      if (e.t === 'hub')    return 'rgba(255,255,255,0.07)';
      return 'rgba(255,255,255,0.12)';
    }
    if (e.a === hovered || e.b === hovered) return NODES[hovered].color;
    return 'rgba(255,255,255,0.04)';
  };

  const renderLabel = (node) => {
    const lines = node.label.split('\n');
    const lh = 12;
    const offsetY = -((lines.length - 1) * lh) / 2;
    return lines.map((ln, i) => (
      <text
        key={i}
        x={node.x}
        y={node.y + offsetY + i * lh}
        textAnchor="middle"
        dominantBaseline="middle"
        fill="white"
        fontSize={node.isHub ? 11 : 8.5}
        fontWeight={node.isHub ? '700' : '600'}
        fontFamily="system-ui, -apple-system, sans-serif"
        style={{ pointerEvents: 'none', userSelect: 'none' }}
      >
        {ln}
      </text>
    ));
  };

  return (
    <Box py={16} position="relative">
      <Container maxW="container.xl">
        <VStack spacing={10}>
          {/* Header */}
          <MotionBox
            textAlign="center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            <Heading
              as="h2"
              size="xl"
              bgGradient="linear(to-r, brand.400, purple.400, pink.400)"
              bgClip="text"
              color="transparent"
              mb={2}
            >
              Skills & Expertise
            </Heading>
            <Text fontSize="xs" color="whiteAlpha.400" letterSpacing="0.15em" textTransform="uppercase">
              Hover any node to explore skill connections
            </Text>
          </MotionBox>

          {/* Network Map */}
          <Box ref={containerRef} w="full" position="relative">
            <MotionBox
              initial={{ opacity: 0, scale: 0.97 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.8 }}
              w="full"
              bg="rgba(255,255,255,0.02)"
              border="1px solid"
              borderColor="whiteAlpha.100"
              borderRadius="2xl"
              overflow="hidden"
              backdropFilter="blur(8px)"
              position="relative"
            >
              <svg
                viewBox="0 0 1000 600"
                style={{ width: '100%', height: 'auto', display: 'block' }}
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Base edges */}
                {EDGES.map((e, i) => {
                  const na = NODES[e.a], nb = NODES[e.b];
                  return (
                    <line
                      key={i}
                      x1={na.x} y1={na.y} x2={nb.x} y2={nb.y}
                      stroke={edgeColor(e)}
                      strokeWidth={e.t === 'parent' ? 1.2 : 0.7}
                      strokeOpacity={edgeOpacity(e)}
                      strokeDasharray={
                        e.t === 'cross' ? '6,4' :
                        e.t === 'diag'  ? '3,9' :
                        'none'
                      }
                    />
                  );
                })}

                {/* Animated edge overlays */}
                {hovered && EDGES.map((e, i) => {
                  const isDirectEdge = e.a === hovered || e.b === hovered;
                  if (!isDirectEdge) return null;
                  const na = NODES[e.a], nb = NODES[e.b];
                  const len = edgeLen(na, nb);
                  const col = NODES[hovered].color;

                  if (e.t === 'parent') {
                    // Glowing pulse traveling from hub → child
                    const gap = len + 30;
                    const period = 14 + gap;
                    const dur = len / 220;
                    return (
                      <g key={`anim-${i}`}>
                        {/* wide soft glow */}
                        <MotionLine
                          x1={na.x} y1={na.y} x2={nb.x} y2={nb.y}
                          stroke={col} strokeWidth={7} strokeLinecap="round"
                          strokeDasharray={`14 ${gap}`}
                          initial={{ strokeDashoffset: 0 }}
                          animate={{ strokeDashoffset: -period }}
                          transition={{ duration: dur, repeat: Infinity, ease: 'linear' }}
                          strokeOpacity={0.22}
                        />
                        {/* tight bright core */}
                        <MotionLine
                          x1={na.x} y1={na.y} x2={nb.x} y2={nb.y}
                          stroke={col} strokeWidth={2.5} strokeLinecap="round"
                          strokeDasharray={`14 ${gap}`}
                          initial={{ strokeDashoffset: 0 }}
                          animate={{ strokeDashoffset: -period }}
                          transition={{ duration: dur, repeat: Infinity, ease: 'linear' }}
                          strokeOpacity={0.95}
                        />
                      </g>
                    );
                  }

                  if (e.t === 'cross') {
                    // Flowing dashes (faster, more visible)
                    return (
                      <MotionLine
                        key={`anim-${i}`}
                        x1={na.x} y1={na.y} x2={nb.x} y2={nb.y}
                        stroke={col} strokeWidth={1.8}
                        strokeDasharray="7, 5"
                        initial={{ strokeDashoffset: 0 }}
                        animate={{ strokeDashoffset: -12 }}
                        transition={{ duration: 0.45, repeat: Infinity, ease: 'linear' }}
                        strokeOpacity={0.85}
                      />
                    );
                  }

                  return null;
                })}

                {/* Nodes */}
                {Object.values(NODES).map(node => {
                  const isActive = hovered === node.id;
                  const op = nodeOpacity(node.id);
                  return (
                    <g
                      key={node.id}
                      style={{ cursor: 'pointer', opacity: op, transition: 'opacity 0.22s' }}
                      onMouseEnter={() => setHovered(node.id)}
                      onMouseLeave={() => setHovered(null)}
                    >
                      {/* Outer halo on active */}
                      {isActive && (
                        <circle
                          cx={node.x} cy={node.y} r={node.r + 15}
                          fill="none"
                          stroke={node.color}
                          strokeWidth="1"
                          strokeOpacity="0.3"
                          strokeDasharray="4,5"
                        />
                      )}
                      {/* Soft glow */}
                      <circle
                        cx={node.x} cy={node.y} r={node.r + 5}
                        fill={node.color}
                        opacity={isActive ? 0.2 : 0.06}
                        style={{ transition: 'opacity 0.22s' }}
                      />
                      {/* Main circle */}
                      <circle
                        cx={node.x} cy={node.y} r={node.r}
                        fill={isActive ? node.color : `${node.color}16`}
                        stroke={node.color}
                        strokeWidth={isActive ? 2.5 : node.isHub ? 1.8 : 1.2}
                        style={{ transition: 'fill 0.22s, stroke-width 0.22s' }}
                      />
                      {renderLabel(node)}
                    </g>
                  );
                })}

                {/* Legend */}
                <g opacity="0.3">
                  <line x1="20" y1="590" x2="50" y2="590" stroke="white" strokeWidth="1" />
                  <text x="55" y="594" fill="white" fontSize="8" fontFamily="system-ui">parent</text>
                  <line x1="110" y1="590" x2="140" y2="590" stroke="white" strokeWidth="0.8" strokeDasharray="5,4" />
                  <text x="145" y="594" fill="white" fontSize="8" fontFamily="system-ui">cross-skill correlation</text>
                </g>
              </svg>

              {/* Interaction hint pill */}
              <AnimatePresence>
                {isInView && !hovered && (
                  <MotionBox
                    position="absolute"
                    top="12px"
                    left="50%"
                    initial={{ opacity: 0, y: -8, x: '-50%' }}
                    animate={{ opacity: 1, y: 0,  x: '-50%' }}
                    exit={{ opacity: 0, y: -8, x: '-50%' }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                    pointerEvents="none"
                    zIndex={20}
                  >
                    <MotionBox
                      display="flex"
                      alignItems="center"
                      gap="6px"
                      px="12px"
                      py="6px"
                      borderRadius="full"
                      bg="rgba(255,255,255,0.06)"
                      border="1px solid"
                      borderColor="whiteAlpha.200"
                      backdropFilter="blur(10px)"
                      boxShadow="0 2px 12px rgba(0,0,0,0.3)"
                      animate={{ y: [0, -3, 0] }}
                      transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      {/* pulsing dot */}
                      <MotionBox
                        w="6px" h="6px"
                        borderRadius="full"
                        bg="brand.300"
                        animate={{ opacity: [1, 0.3, 1], scale: [1, 1.4, 1] }}
                        transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
                        flexShrink={0}
                      />
                      <Text fontSize="10px" fontWeight="600" color="whiteAlpha.700" letterSpacing="0.08em" whiteSpace="nowrap">
                        Hover on the network to explore
                      </Text>
                    </MotionBox>
                  </MotionBox>
                )}
              </AnimatePresence>

              {/* Hover tooltip */}
              {hovered && !NODES[hovered].isHub && (
                <Box
                  position="absolute"
                  bottom="14px"
                  right="16px"
                  bg="rgba(8,12,28,0.96)"
                  border="1px solid"
                  borderColor={NODES[hovered].color}
                  borderRadius="lg"
                  px={4}
                  py={2.5}
                  maxW="210px"
                  boxShadow={`0 0 20px ${NODES[hovered].color}44`}
                  backdropFilter="blur(14px)"
                  pointerEvents="none"
                  zIndex={10}
                >
                  <Text fontSize="xs" fontWeight="700" color={NODES[hovered].color} mb={1}>
                    {NODES[hovered].label.replace('\n', ' ')}
                  </Text>
                  <Text fontSize="9px" color="whiteAlpha.600" lineHeight="1.5">
                    {NODES[hovered].detail}
                  </Text>
                </Box>
              )}
            </MotionBox>
          </Box>

          {/* Languages */}
          <MotionBox
            w="full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <HStack spacing={3} mb={4}>
              <Box w="3px" h="18px" bg="yellow.400" borderRadius="full" />
              <Text fontWeight="700" color="white" fontSize="sm" letterSpacing="0.08em" textTransform="uppercase">
                Languages
              </Text>
            </HStack>
            <HStack spacing={3} flexWrap="wrap">
              {languages.map((lang, i) => (
                <Box
                  key={i}
                  flex="1"
                  minW="130px"
                  bg="rgba(255,255,255,0.03)"
                  border="1px solid"
                  borderColor="whiteAlpha.100"
                  borderRadius="xl"
                  p={3.5}
                  _hover={{ borderColor: 'yellow.500', bg: 'rgba(255,255,255,0.06)' }}
                  transition="all 0.2s"
                >
                  <HStack justify="space-between" mb={2}>
                    <Text fontSize="sm" fontWeight="700" color="white">{lang.name}</Text>
                    <Badge
                      fontSize="9px"
                      colorScheme={lang.level > 80 ? 'green' : lang.level > 50 ? 'blue' : 'gray'}
                      borderRadius="full"
                      px={2}
                    >
                      {lang.label}
                    </Badge>
                  </HStack>
                  <Progress
                    value={lang.level}
                    size="xs"
                    borderRadius="full"
                    bg="whiteAlpha.200"
                    sx={{ '& > div': { background: 'linear-gradient(to right, #ECC94B, #ED8936)' } }}
                  />
                </Box>
              ))}
            </HStack>
          </MotionBox>
        </VStack>
      </Container>
    </Box>
  );
};

export default Skills;
