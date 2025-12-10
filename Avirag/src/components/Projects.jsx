import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Folder } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: "Scholaro",
            subtitle: "E-Learning Platform",
            desc: "A comprehensive e-learning platform with course management, user enrollment, and admin dashboard.",
            tech: ["Node.js", "Express.js", "MongoDB", "React", "Redux", "AWS"],
            github: "https://github.com", // Placeholder
            live: "https://example.com", // Placeholder
        },
        {
            title: "Synoro Chat-App",
            subtitle: "Real-time Messaging App",
            desc: "A real-time chat application supporting private messaging and group chats with instant notifications.",
            tech: ["Socket.io", "React", "Tailwind", "Node.js", "MongoDB"],
            github: "https://github.com",
            live: "https://example.com",
        },
        {
            title: "Netflix Clone",
            subtitle: "Streaming Service UI",
            desc: "A pixel-perfect clone of Netflix's user interface with movie browsing and details view.",
            tech: ["React", "Tailwind CSS", "Firebase", "Axios"],
            github: "https://github.com",
            live: "https://example.com",
        },
        {
            title: "OLX Clone",
            subtitle: "Classifieds Platform",
            desc: "A classifieds platform clone allowing users to post ads and browse listings.",
            tech: ["React", "Tailwind CSS", "Firebase", "Axios"],
            github: "https://github.com",
            live: "https://example.com",
        },
        {
            title: "Mini Projects",
            subtitle: "Portfolio & Clones",
            desc: "Various mini-projects including a personal portfolio with form submission and static website clones.",
            tech: ["HTML", "CSS", "JavaScript"],
            github: "https://github.com",
            live: "https://example.com",
        }
    ];

    return (
        <section id="projects" className="min-h-screen py-20 bg-white dark:bg-neutral-900 relative transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Featured Projects</h2>
                    <div className="w-20 h-1 bg-purple-600 mx-auto rounded-full"></div>
                    <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
                        Here are some of the key projects I've worked on, demonstrating my full-stack capabilities.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-gray-50 dark:bg-neutral-800 rounded-2xl overflow-hidden border border-gray-200 dark:border-neutral-700 hover:border-purple-500/50 transition-all hover:shadow-xl hover:shadow-purple-500/10 group flex flex-col"
                        >
                            <div className="h-48 bg-gray-200 dark:bg-neutral-700/50 flex items-center justify-center group-hover:bg-gray-300 dark:group-hover:bg-neutral-700 transition-colors relative overflow-hidden">
                                <Folder size={48} className="text-gray-400 dark:text-neutral-600 group-hover:text-purple-500 transition-colors duration-300" />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-100 dark:from-neutral-900 to-transparent opacity-60"></div>
                            </div>

                            <div className="p-6 flex-1 flex flex-col">
                                <div className="mb-4">
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">{project.title}</h3>
                                    <p className="text-sm text-purple-600 dark:text-purple-400 font-medium">{project.subtitle}</p>
                                </div>

                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 flex-1">
                                    {project.desc}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="text-xs px-2 py-1 bg-white dark:bg-neutral-900 rounded text-gray-600 dark:text-gray-500 border border-gray-200 dark:border-neutral-800">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-200 dark:border-neutral-700">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors text-sm"
                                    >
                                        <Github size={16} /> Code
                                    </a>
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors text-sm"
                                    >
                                        <ExternalLink size={16} /> Live Demo
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
