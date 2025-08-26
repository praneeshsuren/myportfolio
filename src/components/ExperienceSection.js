import React from 'react';
import { Briefcase } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const ExperienceSection = () => (
  <AnimatedSection id="experience">
    <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center"><Briefcase className="mr-3 text-indigo-500" /> Professional Experience</h2>
    <div className="max-w-3xl mx-auto">
      <div className="relative border-l-2 border-indigo-300 dark:border-indigo-700 pl-8 py-4">
        <div className="absolute w-4 h-4 bg-indigo-600 rounded-full -left-2 top-5 border-4 border-white dark:border-gray-900"></div>
        <p className="text-sm text-gray-500 dark:text-gray-400">Mar 2025 – Aug 2025</p>
        <h3 className="text-xl font-semibold mt-1">Software Engineer</h3>
        <p className="text-md text-gray-700 dark:text-gray-300">AIESEC in Sri Lanka</p>
        <ul className="mt-4 list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
          <li>Developed and maintained a CRM application for tracking partnerships.</li>
          <li>Designed and executed API test cases using Postman to ensure application reliability.</li>
          <li>Assisted in data migration processes, improving data efficiency and accuracy.</li>
        </ul>
      </div>
    </div>
  </AnimatedSection>
);

export default ExperienceSection;
