import React from 'react';
import { motion } from 'framer-motion';
import { Code } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const SkillsSection = () => {
  const skills = [
    "Java", "JavaScript", "TypeScript", "Python", "C/C++", "SQL", "PHP", "Scala",
    "React", "Node.js", "Express.js", "Spring Boot", "Flutter",
    "MySQL", "MongoDB", "Firebase",
    "Git", "Docker", "Postman", "Linux", "GitHub"
  ];

  return (
    <AnimatedSection id="skills">
      <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center"><Code className="mr-3 text-indigo-500" /> Technical Skills</h2>
      <div className="flex flex-wrap justify-center gap-3 md:gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-full text-sm md:text-base font-medium shadow-sm"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </AnimatedSection>
  );
};

export default SkillsSection;