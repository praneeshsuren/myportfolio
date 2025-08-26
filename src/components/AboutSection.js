import React from 'react';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const AboutSection = () => (
  <AnimatedSection id="about">
    <h2 className="text-3xl font-bold mb-12 flex items-center justify-center md:justify-start">
        <Users className="mr-3 text-indigo-500" /> About Me
    </h2>
    <div className="flex flex-col md:flex-row gap-12 items-center">
      {/* Image Div: Order 1 on mobile, Order 2 on desktop */}
      <motion.div 
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="relative w-48 h-48 md:w-64 md:h-64 mx-auto order-1 md:order-2 flex-shrink-0"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full blur-lg"></div>
        <img 
          src={process.env.PUBLIC_URL + '/praneesh.png'}
          alt="Praneesh Surendran" 
          className="relative w-full h-full rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-xl"
          onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x400/cccccc/FFFFFF?text=Image+Error'; }}
        />
      </motion.div>
      {/* Description Div: Order 2 on mobile, Order 1 on desktop */}
      <div className="order-2 md:order-1">
        <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed text-center md:text-left">
          Detail-oriented Software Engineer experienced in full-stack development, API testing, and cloud-based solutions. Skilled in React, Node.js, Flutter, Spring Boot, PHP, and MongoDB/MySQL, with certifications in AWS Cloud, Full-Stack Development, and Flutter & Dart. Strong problem-solving, leadership, and teamwork skills demonstrated through professional work, projects, and extracurricular leadership roles.
        </p>
      </div>
    </div>
  </AnimatedSection>
);

export default AboutSection;