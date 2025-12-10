import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import profileImg from '../assets/profile.png';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 sm:pt-20">
            {/* Background Elements */}
            <div className="absolute top-20 left-4 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-purple-500/20 dark:bg-purple-600/30 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-4 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-blue-500/20 dark:bg-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 lg:gap-12 items-center z-10 w-full">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center md:text-left"
                >
                    <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-400 mb-4">Hello, I'm</h2>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent leading-tight">
                        Avirag P V
                    </h1>
                    <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-purple-600 dark:text-purple-400 mb-4 sm:mb-6">
                        MERN Stack Developer
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg mb-6 sm:mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
                        I build accessible, pixel-perfect, and performant web applications.
                        Passionate about creating seamless user experiences with modern technologies.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <a
                            href="#contact"
                            className="px-6 sm:px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full font-medium transition-all transform hover:scale-105 shadow-lg shadow-purple-500/25 text-center"
                        >
                            Contact Me
                        </a>
                        <a
                            href="/resume.pdf"
                            className="px-6 sm:px-8 py-3 border border-gray-300 dark:border-gray-600 hover:border-purple-600 dark:hover:border-white text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-white rounded-full font-medium transition-all text-center"
                        >
                            Download Resume
                        </a>
                    </div>

                    <div className="flex gap-6 mt-8 sm:mt-10 justify-center md:justify-start">
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors p-2">
                            <Github size={24} />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors p-2">
                            <Linkedin size={24} />
                        </a>
                        <a href="mailto:aviragpv26@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors p-2">
                            <Mail size={24} />
                        </a>
                    </div>
                </motion.div>

                {/* Image Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative flex justify-center mt-8 md:mt-0"
                >
                    <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                        <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 to-blue-600 rounded-full blur-2xl opacity-50 animate-pulse" />
                        <img
                            src={profileImg}
                            alt="Avirag P V"
                            className="relative w-full h-full object-cover rounded-full border-4 border-gray-200 dark:border-neutral-800 shadow-2xl"
                        />
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: "reverse" }}
                className="absolute bottom-8 sm:bottom-10 left-1/2 transform -translate-x-1/2 text-gray-400 dark:text-gray-500"
            >
                <ArrowDown size={28} className="sm:w-8 sm:h-8" />
            </motion.div>
        </section>
    );
};

export default Hero;
