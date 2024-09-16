import React from 'react';
import { motion } from 'framer-motion';
import PurdueLogo from '../assets/purdue_logo.svg'; // Ensure the logo image paths are correct
import RevaLogo from '../assets/reva_logo.png';

const Education = () => {
  return (
    <section className="py-20 bg-primary text-accent">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Education</h2>
        <motion.div className="space-y-8" initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay:0.2 }}>
          {/* Purdue University */}
          <div className="flex items-center justify-start mb-6">
            <img src={PurdueLogo} alt="Purdue University Logo" className="w-20 h-15 mr-4" />
            <div className="text-left">
              <h3 className="text-xl font-semibold text-accent">Purdue University</h3>
              <p className="text-sm">Postgraduate Vocational Program in Applied Generative AI Specialization, August 2024</p>
            </div>
          </div>

          {/* REVA University */}
          <div className="flex items-center justify-start">
            <img src={RevaLogo} alt="REVA University Logo" className="w-20 h-15 mr-4" />
            <div className="text-left">
              <h3 className="text-xl font-semibold text-accent">REVA University</h3>
              <p className="text-sm">B. Tech in Electronics, and Communications Engineering, June 2024 (Completed)</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
