import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Award, Users, Code, Briefcase } from 'lucide-react';
import profileImg from '../assets/profile.png';

const Hero = () => {
    const stats = [
        { icon: <Code size={20} />, value: "2", label: "Years Experience" },
        { icon: <Briefcase size={20} />, value: "5+", label: "Projects Completed" },
        { icon: <Users size={20} />, value: "MERN", label: "Stack Developer" },
        { icon: <Award size={20} />, value: "2025", label: "Graduate" }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100
            }
        }
    };

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 sm:pt-20">
            {/* Enhanced Background Elements */}
            <div className="absolute top-20 left-4 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-purple-500/20 dark:bg-purple-600/30 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-4 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-purple-400/15 dark:bg-purple-500/25 rounded-full blur-3xl animate-pulse delay-1000" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-48 sm:h-48 bg-purple-300/10 dark:bg-purple-400/20 rounded-full blur-2xl animate-pulse delay-500" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 lg:gap-12 items-center z-10 w-full">
                {/* Enhanced Text Content */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-center md:text-left"
                >
                    <motion.div variants={itemVariants} className="mb-4">
                        <span className="inline-flex items-center px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium border border-purple-200 dark:border-purple-700">
                            Available for Full-time Opportunities
                        </span>
                    </motion.div>

                    <motion.h2 variants={itemVariants} className="text-lg sm:text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-400 mb-4">
                        Hello, I'm
                    </motion.h2>
                    
                    <motion.h1 variants={itemVariants} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-gray-900 to-purple-900 dark:from-white dark:to-purple-300 bg-clip-text text-transparent leading-tight">
                        Avirag P V
                    </motion.h1>
                    
                    <motion.div variants={itemVariants} className="mb-4 sm:mb-6">
                        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-purple-600 dark:text-purple-400 mb-2">
                            MERN Stack Developer
                        </h3>
                        <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 font-medium">
                            Full-Stack Web Developer & Freelancer
                        </p>
                    </motion.div>
                    
                    <motion.p variants={itemVariants} className="text-gray-600 dark:text-gray-400 text-base sm:text-lg mb-6 sm:mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
                        Full-Stack Web Developer with 2 years of experience in freelancing and tutoring. 
                        Skilled in JavaScript, React, Node.js, Express.js, MongoDB, and modern web technologies. 
                        Passionate about creating responsive, user-friendly web applications.
                    </motion.p>

                    {/* Stats Section */}
                    <motion.div variants={itemVariants} className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center p-3 bg-purple-50/80 dark:bg-purple-900/20 rounded-lg backdrop-blur-sm border border-purple-200/50 dark:border-purple-700/50">
                                <div className="flex justify-center text-purple-600 dark:text-purple-400 mb-1">
                                    {stat.icon}
                                </div>
                                <div className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                                    {stat.value}
                                </div>
                                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </motion.div>

                    <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8">
                        <a
                            href="#contact"
                            className="group px-6 sm:px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full font-medium transition-all transform hover:scale-105 shadow-lg shadow-purple-500/25 text-center relative overflow-hidden"
                        >
                            <span className="relative z-10">Let's Work Together</span>
                            <div className="absolute inset-0 bg-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </a>
                        <a
                            href="/resume.pdf"
                            className="px-6 sm:px-8 py-3 border-2 border-purple-600 dark:border-purple-400 hover:bg-purple-600 dark:hover:bg-purple-400 text-purple-600 dark:text-purple-400 hover:text-white dark:hover:text-white rounded-full font-medium transition-all text-center"
                        >
                            Download Resume
                        </a>
                    </motion.div>

                    <motion.div variants={itemVariants} className="flex gap-6 justify-center md:justify-start">
                        <a href="https://github.com/avirag26" target="_blank" rel="noopener noreferrer" className="group p-3 bg-purple-100 dark:bg-purple-900/30 hover:bg-purple-200 dark:hover:bg-purple-800/50 rounded-full transition-all hover:scale-110">
                            <Github size={24} className="text-purple-600 dark:text-purple-400 group-hover:text-purple-800 dark:group-hover:text-purple-200 transition-colors" />
                        </a>
                        <a href="https://linkedin.com/in/avirag26" target="_blank" rel="noopener noreferrer" className="group p-3 bg-purple-100 dark:bg-purple-900/30 hover:bg-purple-200 dark:hover:bg-purple-800/50 rounded-full transition-all hover:scale-110">
                            <Linkedin size={24} className="text-purple-600 dark:text-purple-400 group-hover:text-purple-800 dark:group-hover:text-purple-200 transition-colors" />
                        </a>
                        <a href="mailto:aviragpv26@gmail.com" className="group p-3 bg-purple-100 dark:bg-purple-900/30 hover:bg-purple-200 dark:hover:bg-purple-800/50 rounded-full transition-all hover:scale-110">
                            <Mail size={24} className="text-purple-600 dark:text-purple-400 group-hover:text-purple-800 dark:group-hover:text-purple-200 transition-colors" />
                        </a>
                    </motion.div>
                </motion.div>

                {/* Enhanced Image Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 100 }}
                    className="relative flex justify-center mt-8 md:mt-0"
                >
                    <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                        {/* Multiple animated rings */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 to-purple-400 rounded-full blur-2xl opacity-50 animate-pulse" />
                        <div className="absolute inset-2 bg-gradient-to-bl from-purple-500 to-purple-700 rounded-full blur-xl opacity-30 animate-pulse delay-700" />
                        <div className="absolute inset-4 bg-gradient-to-tr from-purple-400 to-purple-600 rounded-full blur-lg opacity-20 animate-pulse delay-1000" />
                        
                        {/* Profile image with enhanced styling */}
                        <img
                            src={profileImg}
                            alt="Avirag P V - Senior MERN Stack Developer"
                            className="relative w-full h-full object-cover rounded-full border-4 border-white dark:border-neutral-800 shadow-2xl z-10"
                        />
                        
                        {/* Floating elements */}
                        <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-500 rounded-full animate-bounce delay-300"></div>
                        <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-purple-400 rounded-full animate-bounce delay-700"></div>
                        <div className="absolute top-1/4 -left-6 w-4 h-4 bg-purple-600 rounded-full animate-bounce delay-1000"></div>
                    </div>
                </motion.div>
            </div>

            {/* Enhanced Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 1, repeat: Infinity, repeatType: "reverse" }}
                className="absolute bottom-8 sm:bottom-10 left-1/2 transform -translate-x-1/2 text-gray-400 dark:text-gray-500 flex flex-col items-center"
            >
                <span className="text-xs mb-2 font-medium">Scroll to explore</span>
                <ArrowDown size={28} className="sm:w-8 sm:h-8" />
            </motion.div>
        </section>
    );
};

export default Hero;
