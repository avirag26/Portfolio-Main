import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            type: "work",
            title: "Full-Stack Web Developer",
            company: "Freelance",
            period: "01/2021 – Present",
            desc: [
                "Built and deployed multiple static and dynamic web applications using JavaScript, Node.js, Express, MongoDB, and React.",
                "Mentored and assisted junior developers in creating mini-projects and preparing for coding interviews.",
                "Integrated APIs, implemented authentication, payment gateways, and handled cloud deployments using AWS, Git, and Nginx.",
                "Developed optimized, scalable codebases following MVC architecture and clean coding practices."
            ]
        }
    ];

    const education = [
        {
            type: "education",
            title: "MERN STACK",
            institution: "Brototype",
            period: "2024 – 2025",
            location: "Kochi, Kerala"
        },
        {
            type: "education",
            title: "PlusTwo (Computer Science)",
            institution: "GHSS Panjal",
            period: "2023 – 2025",
            location: "Thrissur, Kerala"
        }
    ];

    return (
        <section id="experience" className="min-h-screen py-20 bg-gray-50 dark:bg-neutral-950 relative transition-colors duration-300">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Experience & Education</h2>
                    <div className="w-20 h-1 bg-purple-600 mx-auto rounded-full"></div>
                </motion.div>

                <div className="space-y-12">
                    {/* Work Experience */}
                    <div>
                        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-purple-600 dark:text-purple-400">
                            <Briefcase size={28} /> Work Experience
                        </h3>
                        <div className="border-l-2 border-purple-500/30 ml-3 space-y-8">
                            {experiences.map((exp, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="relative pl-8 pb-8"
                                >
                                    <div className="absolute -left-[9px] top-0 w-4 h-4 bg-purple-500 rounded-full shadow-lg shadow-purple-500/50"></div>
                                    <div className="bg-white dark:bg-neutral-900 p-6 rounded-xl border border-gray-200 dark:border-neutral-800 hover:border-purple-500/30 transition-colors shadow-sm">
                                        <div className="flex flex-wrap justify-between items-start mb-2">
                                            <h4 className="text-xl font-bold text-gray-900 dark:text-white">{exp.title}</h4>
                                            <span className="text-sm text-purple-600 dark:text-purple-400 font-medium px-3 py-1 bg-purple-100 dark:bg-purple-500/10 rounded-full flex items-center gap-2">
                                                <Calendar size={14} /> {exp.period}
                                            </span>
                                        </div>
                                        <p className="text-lg text-gray-700 dark:text-gray-400 mb-4 font-medium">{exp.company}</p>
                                        <ul className="space-y-2">
                                            {exp.desc.map((item, i) => (
                                                <li key={i} className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed flex items-start gap-2">
                                                    <span className="mt-1.5 w-1.5 h-1.5 bg-purple-500 rounded-full flex-shrink-0"></span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Education */}
                    <div>
                        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-blue-600 dark:text-blue-400">
                            <GraduationCap size={28} /> Education
                        </h3>
                        <div className="border-l-2 border-blue-500/30 ml-3 space-y-8">
                            {education.map((edu, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="relative pl-8"
                                >
                                    <div className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-500 rounded-full shadow-lg shadow-blue-500/50"></div>
                                    <div className="bg-white dark:bg-neutral-900 p-6 rounded-xl border border-gray-200 dark:border-neutral-800 hover:border-blue-500/30 transition-colors shadow-sm">
                                        <div className="flex flex-wrap justify-between items-start mb-2">
                                            <h4 className="text-xl font-bold text-gray-900 dark:text-white">{edu.title}</h4>
                                            <span className="text-sm text-blue-600 dark:text-blue-400 font-medium px-3 py-1 bg-blue-100 dark:bg-blue-500/10 rounded-full flex items-center gap-2">
                                                <Calendar size={14} /> {edu.period}
                                            </span>
                                        </div>
                                        <p className="text-lg text-gray-700 dark:text-gray-400 mb-1 font-medium">{edu.institution}</p>
                                        <p className="text-sm text-gray-500">{edu.location}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
