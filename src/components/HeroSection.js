import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center text-center -mt-24 relative overflow-hidden bg-gray-50 dark:bg-slate-900">
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute inset-0 dark:hidden bg-white">
                    <div className="absolute inset-0 h-full w-full bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:36px_36px]"></div>
                    <div className="absolute inset-0 mix-blend-multiply">
                        <motion.div
                            className="absolute top-1/4 left-1/4 w-80 h-80 sm:w-96 sm:h-96 bg-indigo-100 rounded-full filter blur-3xl opacity-60"
                            animate={{ x: [-100, 100, -100], y: [-50, 50, -50], scale: [1, 1.2, 1] }}
                            transition={{ duration: 25, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
                        />
                        <motion.div
                            className="absolute bottom-1/4 right-1/4 w-72 h-72 sm:w-80 sm:h-80 bg-purple-100 rounded-full filter blur-3xl opacity-60"
                            animate={{ x: [100, -100, 100], y: [50, -50, 50], scale: [1.2, 1, 1.2] }}
                            transition={{ duration: 30, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
                        />
                    </div>
                </div>
                <div className="absolute inset-0 hidden dark:block">
                     <div
                        className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-slate-900 to-slate-900"
                        style={{
                            maskImage: 'radial-gradient(ellipse 50% 50% at 50% 50%, black 40%, transparent 100%)',
                            WebkitMaskImage: 'radial-gradient(ellipse 50% 50% at 50% 50%, black 40%, transparent 100%)',
                        }}
                    ></div>
                    <motion.div
                        className="absolute inset-0"
                        animate={{
                            backgroundImage: [
                                'radial-gradient(at 20% 25%, hsla(212,90%,50%,0.3) 0px, transparent 50%)',
                                'radial-gradient(at 80% 30%, hsla(280,90%,60%,0.3) 0px, transparent 50%)',
                                'radial-gradient(at 50% 80%, hsla(320,90%,55%,0.3) 0px, transparent 50%)',
                                'radial-gradient(at 20% 25%, hsla(212,90%,50%,0.3) 0px, transparent 50%)',
                            ],
                        }}
                        transition={{
                            duration: 15,
                            ease: "easeInOut",
                            repeat: Infinity,
                            repeatType: "mirror",
                        }}
                    />
                </div>
            </div>
            
            <div className="z-10 relative">
                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 pb-2"
                >
                    Praneesh Surendran
                </motion.h1>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mt-4 text-lg md:text-xl font-medium text-gray-700 dark:text-gray-300"
                >
                    Software Engineer | Full-Stack Developer | Cloud Enthusiast
                </motion.p>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-6 max-w-2xl mx-auto text-md md:text-lg text-gray-500 dark:text-gray-400"
                >
                    "Building scalable web and mobile applications with a passion for cloud, DevOps, and machine learning."
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-8 flex justify-center space-x-4"
                >
                    <a href="#contact" className="bg-indigo-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-indigo-700 transition-transform transform hover:scale-105 shadow-lg">
                        Get in Touch
                    </a>
                    <a href="#projects" className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-semibold px-6 py-3 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-transform transform hover:scale-105 shadow-lg">
                        View My Work
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;
