import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Layout, Server, Cloud, Cpu } from 'lucide-react';

const Skills = () => {
    const skillCategories = [
        {
            title: "Languages",
            icon: <Code className="text-blue-500 dark:text-blue-400" size={32} />,
            skills: ["JavaScript", "C", "C++", "HTML", "CSS", "SQL", "NoSQL"]
        },
        {
            title: "Libraries & Frameworks",
            icon: <Layout className="text-purple-500 dark:text-purple-400" size={32} />,
            skills: ["React", "Redux", "Node.js", "Express.js", "EJS", "Handlebars", "Bootstrap", "Tailwind CSS", "Firebase"]
        },
        {
            title: "Databases",
            icon: <Database className="text-green-500 dark:text-green-400" size={32} />,
            skills: ["MongoDB", "PostgreSQL", "MongoDB Atlas"]
        },
        {
            title: "Cloud & Deployment",
            icon: <Cloud className="text-cyan-500 dark:text-cyan-400" size={32} />,
            skills: ["Azure", "AWS (EC2, S3)", "Nginx", "Vercel", "PM2", "Cloudinary", "Docker"]
        },
        {
            title: "Tools & Platforms",
            icon: <Server className="text-orange-500 dark:text-orange-400" size={32} />,
            skills: ["Git", "GitHub", "API Integration", "Payment Gateway", "Google Auth"]
        },
        {
            title: "Concepts",
            icon: <Cpu className="text-red-500 dark:text-red-400" size={32} />,
            skills: ["MicroServices", "Clean Architecture", "SOLID Principles", "DSA", "REST APIs", "MVC Architecture"]
        }
    ];

    return (
        <section id="skills" className="min-h-screen py-20 bg-gray-50 dark:bg-neutral-950 relative transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Technical Skills</h2>
                    <div className="w-20 h-1 bg-purple-600 mx-auto rounded-full"></div>
                    <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
                        A comprehensive list of technologies and tools I have worked with to build scalable and efficient applications.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white dark:bg-neutral-900 p-8 rounded-2xl border border-gray-200 dark:border-neutral-800 hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-purple-500/10 group"
                        >
                            <div className="mb-6 p-4 bg-gray-100 dark:bg-neutral-800 rounded-xl inline-block group-hover:bg-gray-200 dark:group-hover:bg-neutral-700 transition-colors">
                                {category.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200 group-hover:text-purple-600 dark:group-hover:text-white transition-colors">
                                {category.title}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1 bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-gray-400 text-sm rounded-full border border-gray-200 dark:border-neutral-700 group-hover:border-gray-300 dark:group-hover:border-neutral-600 transition-colors"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
