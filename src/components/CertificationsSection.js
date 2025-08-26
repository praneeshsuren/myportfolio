import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { AwsLogo, UdemyLogo, IbmLogo } from './Logos';

const CertificationsSection = () => {
    const certifications = [
        { name: "AWS Educate: Cloud 101", issuer: "Amazon Web Services", logo: <AwsLogo /> },
        { name: "Full-Stack Web Development Bootcamp", issuer: "Udemy (Angela Yu)", logo: <UdemyLogo /> },
        { name: "Flutter & Dart for Mobile Apps", issuer: "IBM", logo: <IbmLogo /> }
    ];

    return (
        <AnimatedSection id="certifications">
            <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center"><Award className="mr-3 text-indigo-500" /> Certifications</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
                {certifications.map((cert, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ y: -8, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
                        className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 transition-all duration-300"
                    >
                        {cert.logo}
                        <h3 className="font-semibold text-lg text-gray-900 dark:text-white">{cert.name}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{cert.issuer}</p>
                    </motion.div>
                ))}
            </div>
        </AnimatedSection>
    );
};

export default CertificationsSection;