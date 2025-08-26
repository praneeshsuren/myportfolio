import React from 'react';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const AboutSection = () => (
  <AnimatedSection id="about">
    <div className="grid md:grid-cols-3 gap-12 items-center">
      <div className="md:col-span-2">
        <h2 className="text-3xl font-bold mb-6 flex items-center"><Users className="mr-3 text-indigo-500" /> About Me</h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
          Detail-oriented Software Engineer experienced in full-stack development, API testing, and cloud-based solutions. Skilled in React, Node.js, Flutter, Spring Boot, PHP, and MongoDB/MySQL, with certifications in AWS Cloud, Full-Stack Development, and Flutter & Dart. Strong problem-solving, leadership, and teamwork skills demonstrated through professional work, projects, and extracurricular leadership roles.
        </p>
      </div>
      <motion.div 
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="relative w-48 h-48 md:w-64 md:h-64 mx-auto"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full blur-lg"></div>
        <img 
          src={process.env.PUBLIC_URL + '/praneesh.png'}
          alt="Praneesh Surendran" 
          className="relative w-full h-full rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-xl"
          onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x400/cccccc/FFFFFF?text=Image+Error'; }}
        />
      </motion.div>
    </div>
  </AnimatedSection>
);

export default AboutSection;