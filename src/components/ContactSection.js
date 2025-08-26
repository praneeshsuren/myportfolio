import React from 'react';
import { Mail, MapPin } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const ContactSection = () => (
  <AnimatedSection id="contact">
    <h2 className="text-3xl font-bold text-center mb-4 flex items-center justify-center"><Mail className="mr-3 text-indigo-500" /> Get In Touch</h2>
    <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
      I'm currently open to new opportunities and collaborations. Feel free to reach out via email or connect with me on social media.
    </p>
    <div className="max-w-lg mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 text-center">
        <a href="mailto:praneeshsuren@gmail.com" className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow sm:col-span-1">
            <Mail className="mx-auto text-indigo-500 mb-2" size={32}/>
            <h3 className="font-semibold">Email</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 break-words">praneeshsuren@gmail.com</p>
        </a>
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md sm:col-span-1">
            <MapPin className="mx-auto text-indigo-500 mb-2" size={32}/>
            <h3 className="font-semibold">Location</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Colombo, Sri Lanka</p>
        </div>
    </div>
  </AnimatedSection>
);

export default ContactSection;
