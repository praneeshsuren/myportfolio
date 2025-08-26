import React from 'react';

import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import EducationSection from './components/EducationSection';
import CertificationsSection from './components/CertificationsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-sans leading-relaxed transition-colors duration-500">
      <Header />
      <HeroSection />
      <main className="container mx-auto px-6">
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <CertificationsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
