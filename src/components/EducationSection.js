import React from 'react';
import { BookOpen } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { UcscLogo, SackLogo } from './Logos';

const EducationSection = () => (
  <AnimatedSection id="education">
    <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center"><BookOpen className="mr-3 text-indigo-500" /> Education</h2>
    <div className="max-w-3xl mx-auto space-y-8">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 flex items-center">
        <UcscLogo />
        <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Jun 2023 – Present</p>
            <h3 className="text-xl font-semibold">BSc (Hons) in Software Engineering</h3>
            <p className="text-md text-gray-700 dark:text-gray-300">University of Colombo School of Computing</p>
            <p className="mt-2 text-gray-600 dark:text-gray-400">Current GPA: 3.58 / 4.0</p>
        </div>
      </div>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 flex items-center">
        <SackLogo />
        <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">2019 – 2022</p>
            <h3 className="text-xl font-semibold">Physical Science Stream</h3>
            <p className="text-md text-gray-700 dark:text-gray-300">St. Anthony’s College, Kandy</p>
            <p className="mt-2 text-gray-600 dark:text-gray-400">GCE A/L Results: ABB (Physics, Chemistry, Combined Mathematics)</p>
        </div>
      </div>
    </div>
  </AnimatedSection>
);

export default EducationSection;