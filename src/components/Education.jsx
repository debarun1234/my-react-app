import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  return (
    <motion.section className="py-20 bg-primary text-accent"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay:0.2 }}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Education</h2>
        <div className="space-y-8">
          <div className="p-6 bg-secondary rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold">Purdue University</h3>
            <p className="text-sm text-gray-400">Postgraduate Program in Applied Generative AI Specialization, August 2024</p>
          </div>
          <div className="p-6 bg-secondary rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold">REVA University</h3>
            <p className="text-sm text-gray-400">B. Tech in Electronics, and Communications Engineering, June 2024 (Completed)</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Education;
