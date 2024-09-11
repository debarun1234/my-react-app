import React from 'react';
import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';

const About = () => {
  return (
    <motion.section className="relative py-20 bg-primary text-white" 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: Parallax * 0.2 }}>
      <Parallax speed={-10}>
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: `url('/path-to-your-background.jpg')` }}></div>
      </Parallax>
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-accent">About Me</h2>
        <p>
          I am a <span className="gradient-3">graduate in Electronics and Communications</span> from <span className="gradient-3">REVA University</span>, with a <span className="gradient-3">Postgraduate Program vocational specialization</span> in <span className="gradient-3">Applied Generative AI</span> from <span className="gradient-3">Purdue University</span>. I have developed a <span className="gradient-5">strong foundation in artificial intelligence (AI) and machine learning (ML)</span>, built through <span className="gradient-5">hands-on projects, internships</span>, and <span className="gradient-5">advanced coursework</span>.
        </p>
        <p>
          <br />Throughout my <span className="gradient-4">academic and professional journey</span>, I have gained <span className="gradient-4">expertise in developing AI-powered solutions</span> aimed at <span className="gradient-4">improving operational efficiency, automating complex tasks</span>, and <span className="gradient-4">enhancing decision-making processes</span>. I have applied <span className="gradient-5">cutting-edge AI technologies</span>, including <span className="gradient-4">natural language processing (NLP)</span>, <span className="gradient-4">computer vision</span>, and <span className="gradient-4">deep learning models</span>, across various <span className="gradient-4">real-world applications</span>.
        </p>
        <p>
          <br />I am particularly <span className="gradient-4">passionate about leveraging AI/ML</span> to create <span className="gradient-5">innovative and scalable solutions</span> for industries such as <span className="gradient-5">banking, research, and technology</span>. In addition to technical skills, I bring <span className="gradient-5">strong problem-solving abilities</span> and a <span className="gradient-5">collaborative mindset</span>, which I have demonstrated through working in <span className="gradient-4">multidisciplinary teams</span> and presenting solutions to <span className="gradient-4">technical and non-technical stakeholders</span>.
        </p>
      </div>
    </motion.section>
  );
};

export default About;

