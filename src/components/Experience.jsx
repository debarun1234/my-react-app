import React from 'react';
import { motion } from 'framer-motion';
import ANZLogo from '../assets/anz-logo.svg'; // Example logos
import DOM4ULogo from '../assets/dom4u_logo.jpeg';
import MphasisLogo from '../assets/mphasis-logo (1).png'; // Make sure these paths are correct

const experiences = [
  {
    title: 'Site Reliability Engineer (SRE)',
    company: 'ANZ Pvt. Ltd., Bengaluru',
    duration: 'May 2024 – Present',
    description: `
      Spearheading initiatives to optimize data workflows and implement machine learning models, 
      contributing to operational efficiency and informed decision-making within the Banking Sector.
    `,
    techStack: 'Python, PostgreSQL, Terraform, Docker, LLMOps',
    image: ANZLogo,
  },
  {
    title: 'AI/ML Integration Engineer',
    company: 'DOM4U Pvt. Ltd., Bengaluru',
    duration: 'August 2023 – April 2024',
    description: `
      Enhanced legacy industrial applications through AI and ML integration, automating and improving
      efficiency via deep learning and reverse engineering.
    `,
    techStack: 'Python, CUDA, TensorFlow, OpenCV, YOLO',
    image: DOM4ULogo,
  },
  {
    title: 'Software Engineer Intern',
    company: 'Mphasis Ltd., Bengaluru',
    duration: 'May 2023 – July 2023',
    description: `
      Developed an automation tool to convert COBOL code to high-level programming languages using
      Machine Learning pre-trained models, enhancing mainframe application efficiency and modernization.
    `,
    techStack: 'Anaconda, TensorFlow, Keras, BERT, LLM, NLP',
    image: MphasisLogo,
  },
];

const Experience = () => {
  return (
    <section className="py-20 bg-primary text-accent">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-secondary p-6 rounded-lg shadow-lg"
            >
              <div className="flex items-center justify-center mb-4">
                <img
                  src={exp.image}
                  alt={`${exp.company} logo`}
                  className="w-25 h-20 object-cover square-full"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">{exp.title}</h3>
              <p className="text-sm text-gray-400 text-center">{exp.company} - {exp.duration}</p>
              <p className="mt-4 text-gray-300 text-center">{exp.description}</p>
              <p className="mt-4 text-blue-400 text-sm text-center"><strong>Tech Stack:</strong> {exp.techStack}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
