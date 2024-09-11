import React from 'react';
import loadSvg from '../utils/loadSvg'; // Assuming loadSvg is already handling the dynamic import of SVGs

// Core skills from your resume
const coreSkills = [
  { name: 'Generative AI', details: 'RAG, Prompt Engineering, GAN, VAEs', icon: 'genai' },
  { name: 'Deep Learning', details: 'PyTorch, TensorFlow, Keras, NLP, LLMOps, Neural Networks', icon: 'deeplearning' },
  { name: 'Python & Machine Learning', details: 'Python, Regression, Confusion Matrix, ROC, Analysis, Lambda', icon: 'python' },
];

// Additional skills from your resume
const additionalSkills = [
  { name: 'Data Analytics & Visualization', details: 'Data Analysis, Visualization (e.g., Power BI)', icon: 'dataanalytics' },
  { name: 'Programming & Scripting', details: 'C/C++, Linux, React.js, HTML, CSS, Terraform', icon: 'programming' },
  { name: 'Databases', details: 'Oracle SQL, MySQL, PostgreSQL, SQLite, Big Data Analysis, Vector Database', icon: 'databases' },
  { name: 'Development & Operations', details: 'Microsoft Power BI, Jira, Agile Methodology, LangChain, Ansible', icon: 'devops' },
];

// Languages you know (as per your resume)
const languages = [
  { name: 'English (Fluent)', icon: 'english' },
  { name: 'Hindi (Fluent)', icon: 'hindi' },
  { name: 'Bengali (Fluent)', icon: 'bengali' },
  { name: 'Kannada (Beginner)', icon: 'kannada' },
  { name: 'French (Beginner)', icon: 'french' },
];

const Skills = () => {
  return (
    <section className="py-20 bg-secondary text-accent">
      <div className="max-w-4xl mx-auto">
        {/* Core Skills */}
        <h2 className="text-3xl font-bold text-center mb-8">Core Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {coreSkills.map((skill, index) => (
            <div key={index} className="flex items-center space-x-4">
              <div>{loadSvg(skill.icon)}</div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold">{skill.name}</h3>
                <p className="text-sm text-gray-300">{skill.details}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <h2 className="text-3xl font-bold text-center mt-12 mb-8">Additional Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {additionalSkills.map((skill, index) => (
            <div key={index} className="flex items-center space-x-4">
              <div>{loadSvg(skill.icon)}</div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold">{skill.name}</h3>
                <p className="text-sm text-gray-300">{skill.details}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Languages */}
        <h2 className="text-3xl font-bold text-center mt-12 mb-8">Languages</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {languages.map((language, index) => (
            <div key={index} className="flex items-center space-x-4">
              <div>{loadSvg(language.icon)}</div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold">{language.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
