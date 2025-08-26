import React from 'react';
import { motion } from 'framer-motion';
import { Code, Github } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const ProjectsSection = () => {
  const projects = [
    {
      title: "WanderLanka – Travel Planning Platform",
      description: "A comprehensive travel platform with booking, transport, and intelligent route planning features. I developed the Tour Guide module.",
      tools: ["React Native", "Node.js", "Express", "MongoDB", "Microservices"],
      github: "https://github.com/orgs/WanderLanka",
      status: "Ongoing"
    },
    {
      title: "Vistara – Social Media Platform",
      description: "A social media application with posts, comments, and real-time user interactions, built with a mobile-first approach.",
      tools: ["Flutter", "Firebase", "Firestore", "Firebase Auth"],
      github: "https://github.com/praneeshsuren/vistara",
      status: "Ongoing"
    },
    {
      title: "Kamper – Camping Goods & Site Booking",
      description: "A full-stack e-commerce and booking platform for camping enthusiasts to buy gear and book campsites.",
      tools: ["React", "Node.js", "Express", "MongoDB", "MERN"],
      github: "https://github.com/tharindu-dm/Kamper",
      status: "Completed"
    },
    {
      title: "LifeTouch Fitness Gym Management",
      description: "A web-based system for managing gym operations including attendance, schedules, inventory, and member reports.",
      tools: ["PHP", "JavaScript", "MySQL", "HTML/CSS"],
      github: "https://github.com/praneeshsuren/LifeTouch1",
      status: "Completed"
    },
  ];

  return (
    <AnimatedSection id="projects">
      <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center"><Code className="mr-3 text-indigo-500" /> Projects Showcase</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
            className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 p-6 flex flex-col"
          >
            <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${project.status === 'Ongoing' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300' : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'}`}>
                    {project.status}
                </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tools.map(tool => (
                <span key={tool} className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300 text-xs font-medium px-2.5 py-1 rounded-full">{tool}</span>
              ))}
            </div>
            <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-indigo-600 dark:text-indigo-400 hover:underline font-semibold">
                View on GitHub <Github className="ml-2" size={18} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </AnimatedSection>
  );
};

export default ProjectsSection;