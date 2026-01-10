import { motion } from 'framer-motion';
import { Github, ExternalLink, Folder } from 'lucide-react';
import scholaroImg from '../assets/scholaro.png';
import synoroImg from '../assets/synoro.png';
import netflixImg from '../assets/netflix.png';
import olxImg from '../assets/olx.png';
import sandaImg from '../assets/sanda.png';

const Projects = () => {
    const projects = [
        {
            title: "Scholaro",
            subtitle: "E-Learning Platform",
            desc: "A comprehensive e-learning platform built with the MERN stack featuring course management, user enrollment, admin dashboard, real-time chat, and video call functionality for interactive learning.",
            tech: ["Node.js", "Express.js", "MongoDB", "React", "Redux", "Socket.io", "WebRTC", "AWS"],
            github: "https://github.com/avirag26/Scholaro-E-Learning-Main",
            live: "https://scholaro.site",
            featured: true,
            metrics: "MERN Stack • Real-time Chat • Video Calls",
            image: scholaroImg
        },
        {
            title: "Synoro Chat-App",
            subtitle: "Real-time Messaging Application",
            desc: "A real-time chat application supporting private messaging and group chats with instant notifications using Socket.io technology.",
            tech: ["Socket.io", "React", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
            github: "https://github.com/avirag26/Chat_App",
            live: "https://chat-app-mu-wheat.vercel.app",
            featured: true,
            metrics: "Real-time Communication • Socket.io",
            image: synoroImg
        },
        {
            title: "Santa App",
            subtitle: "Interactive Holiday Application",
            desc: "A festive web application built during Vibe Coding featuring interactive Santa-themed functionality with modern UI/UX design and responsive layout.",
            tech: ["React", "JavaScript", "CSS", "HTML", "Responsive Design"],
            github: "https://github.com/avirag26/Santa-App",
            live: "https://sanda-app.vercel.app",
            featured: false,
            metrics: "Interactive UI • Holiday Theme",
            image: sandaImg
        },
        {
            title: "Netflix Clone",
            subtitle: "Streaming Service UI",
            desc: "A pixel-perfect clone of Netflix's user interface with movie browsing, details view, and responsive design implementation.",
            tech: ["React", "Tailwind CSS", "Firebase", "Axios"],
            github: "https://github.com",
            live: "https://example.com",
            metrics: "Responsive Design • API Integration",
            image: netflixImg
        },
        {
            title: "OLX Clone",
            subtitle: "Classifieds Platform",
            desc: "A classifieds platform clone allowing users to post advertisements and browse listings with user authentication.",
            tech: ["React", "Tailwind CSS", "Firebase", "Axios"],
            github: "https://github.com",
            live: "https://example.com",
            metrics: "User Authentication • CRUD Operations",
            image: olxImg
        },
        {
            title: "Portfolio & Mini Projects",
            subtitle: "Web Development Showcase",
            desc: "Collection of mini-projects including personal portfolio with form submission, static website clones, and interactive web elements.",
            tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
            github: "https://github.com",
            live: "https://example.com",
            metrics: "Frontend Skills • Responsive Design",
            image: null
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
                    <div className="inline-flex items-center px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium border border-purple-200 dark:border-purple-700 mb-6">
                        Portfolio Showcase
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                        Production-Ready Applications
                    </h2>
                    <div className="w-20 h-1 bg-purple-600 mx-auto rounded-full"></div>
                    <p className="text-gray-600 dark:text-gray-400 mt-6 max-w-3xl mx-auto text-lg">
                        A collection of web applications built with modern technologies, demonstrating full-stack development capabilities. 
                        <strong className="text-gray-800 dark:text-gray-200"> Each project showcases different aspects of the MERN stack and web development skills.</strong>
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
                            className={`bg-gradient-to-br from-white to-gray-50 dark:from-neutral-900 dark:to-neutral-800 rounded-2xl overflow-hidden border transition-all hover:shadow-2xl group flex flex-col hover:-translate-y-2 ${
                                project.featured 
                                    ? 'border-purple-200 dark:border-purple-700 shadow-lg shadow-purple-500/10' 
                                    : 'border-gray-200 dark:border-neutral-700 hover:border-purple-500/50 hover:shadow-purple-500/10'
                            }`}
                        >
                            {project.featured && (
                                <div className="bg-purple-600 text-white text-xs font-semibold px-4 py-2 text-center">
                                    FEATURED PROJECT
                                </div>
                            )}

                            <div className="h-48 bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900/30 dark:to-purple-800/30 flex items-center justify-center group-hover:from-purple-200 dark:group-hover:from-purple-800/50 group-hover:to-purple-300 dark:group-hover:to-purple-700/50 transition-all relative overflow-hidden">
                                {project.image ? (
                                    <>
                                        <img 
                                            src={project.image} 
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                                    </>
                                ) : (
                                    <>
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                                        <Folder size={48} className="text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform duration-300 z-10" />
                                    </>
                                )}
                                <div className="absolute top-4 right-4 w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                            </div>

                            <div className="p-6 flex-1 flex flex-col">
                                <div className="mb-4">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                                            {project.title}
                                        </h3>
                                        {project.featured && (
                                            <span className="text-xs bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-2 py-1 rounded-full">
                                                LIVE
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-sm text-purple-600 dark:text-purple-400 font-medium mb-2">{project.subtitle}</p>
                                    {project.metrics && (
                                        <p className="text-xs text-purple-600 dark:text-purple-400 font-semibold bg-purple-50 dark:bg-purple-900/20 px-2 py-1 rounded">
                                            {project.metrics}
                                        </p>
                                    )}
                                </div>

                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 flex-1 leading-relaxed">
                                    {project.desc}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="text-xs px-3 py-1 bg-white dark:bg-neutral-900 rounded-full text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-neutral-800 group-hover:border-purple-300 dark:group-hover:border-purple-600 transition-colors">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-200 dark:border-neutral-700">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors text-sm font-medium px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800"
                                    >
                                        <Github size={16} /> View Code
                                    </a>
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-white bg-purple-600 hover:bg-purple-700 transition-all text-sm font-medium px-4 py-2 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105"
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
