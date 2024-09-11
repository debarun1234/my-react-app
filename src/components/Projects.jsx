import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Nestle HR AI Assistant',
    description: `
      Enhanced HR Efficiency: AI-driven assistant using LLaMA 3.1 8B for accurate, context-aware HR policy responses.
      User-Friendly Interface: Gradio interface enables easy, natural language access to HR policy information.
    `,
    repoLink: 'http://bit.ly/4fR2pZ3',
  },
  {
    title: 'Monitoring Vision AI',
    description: `
      It uses a TensorFlow/Keras model to monitor machine status, with a Streamlit interface for real-time predictions.
      The system includes motion detection, status logging, and email alerts, enhancing monitoring capabilities.
      The project captures video, preprocesses frames, and determines machine status for efficient management.
    `,
    repoLink: 'https://bit.ly/3MgAG6m',
  },
  {
    title: '5G Network Energy and Channel Optimization',
    description: `
      Engineered a Python-based optimization framework – Genetic Algorithms (GA) and Particle Swarm Optimization (PSO) to reduce energy consumption in 5G networks.
      Conducted iterative solution, fine-tuning parameters to minimize operational energy costs while optimizing channel allocation. Achieved optimal network results through rigorous algorithmic strategies.
    `,
    repoLink: 'https://bit.ly/3FTE5Fd',
  },
  {
    title: 'Neurological Disorder Classification & PoTS Diagnosis',
    description: `
      Engineered a Python-based ML pipeline using logistic regression and CNN for accuracy.
      Enhanced predictive models, achieving high accuracy validated through ROC analysis. Visualized results with confusion matrices.
    `,
    repoLink: 'http://bit.ly/3MAhSPZ',
  },
];

const Projects = () => {
  return (
    <section className="py-20 bg-secondary text-accent">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              href={project.repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block transform hover:scale-105 transition duration-300"
            >
              <div className="bg-primary rounded-lg overflow-hidden shadow-lg">
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="mt-2">{project.description}</p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
