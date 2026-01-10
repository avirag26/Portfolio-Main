import { motion } from 'framer-motion';
import { Code, Database, Layout, Server, Cloud, Cpu } from 'lucide-react';

const Skills = () => {
    const skillCategories = [
        {
            title: "Programming Languages",
            icon: <Code className="text-purple-500 dark:text-purple-400" size={32} />,
            level: "Proficient",
            skills: ["JavaScript", "TypeScript", "C", "C++", "HTML", "CSS", "SQL", "NoSQL"],
            description: "Strong foundation in core programming languages"
        },
        {
            title: "Frontend Development",
            icon: <Layout className="text-purple-600 dark:text-purple-400" size={32} />,
            level: "Proficient", 
            skills: ["React", "Redux", "Bootstrap", "Tailwind CSS", "EJS", "Handlebars", "Responsive Design"],
            description: "Building modern, responsive user interfaces"
        },
        {
            title: "Backend Development",
            icon: <Server className="text-purple-700 dark:text-purple-400" size={32} />,
            level: "Proficient",
            skills: ["Node.js", "Express.js", "REST APIs", "MVC Architecture", "Authentication", "Payment Gateways"],
            description: "Server-side development and API integration"
        },
        {
            title: "Databases",
            icon: <Database className="text-purple-500 dark:text-purple-400" size={32} />,
            level: "Proficient",
            skills: ["MongoDB", "PostgreSQL", "MongoDB Atlas", "Database Design"],
            description: "Data storage and management solutions"
        },
        {
            title: "Cloud & Deployment",
            icon: <Cloud className="text-purple-600 dark:text-purple-400" size={32} />,
            level: "Intermediate",
            skills: ["AWS (EC2, S3)", "Nginx", "Vercel", "PM2", "Cloudinary", "GitHub Hosting", "Docker"],
            description: "Cloud deployment and hosting solutions"
        },
        {
            title: "Tools & Concepts",
            icon: <Cpu className="text-purple-700 dark:text-purple-400" size={32} />,
            level: "Proficient",
            skills: ["Git/GitHub", "API Integration", "DSA", "Clean Architecture", "SOLID Principles", "Responsive Design"],
            description: "Development tools and software engineering principles"
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
                    <div className="inline-flex items-center px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium border border-purple-200 dark:border-purple-700 mb-6">
                        Technical Expertise
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                        Enterprise-Grade Technology Stack
                    </h2>
                    <div className="w-20 h-1 bg-purple-600 mx-auto rounded-full"></div>
                    <p className="text-gray-600 dark:text-gray-400 mt-6 max-w-3xl mx-auto text-lg">
                        Mastery of modern technologies and frameworks used by Fortune 500 companies. 
                        <strong className="text-gray-800 dark:text-gray-200"> 3+ years of production experience</strong> building scalable, 
                        high-performance applications that serve millions of users.
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
                            className="bg-white dark:bg-neutral-900 p-8 rounded-2xl border border-gray-200 dark:border-neutral-800 hover:border-purple-500/50 transition-all hover:shadow-xl hover:shadow-purple-500/10 group hover:-translate-y-2"
                        >
                            <div className="flex items-center justify-between mb-6">
                                <div className="p-4 bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900/30 dark:to-purple-800/30 rounded-xl group-hover:from-purple-200 dark:group-hover:from-purple-800/50 group-hover:to-purple-300 dark:group-hover:to-purple-700/50 transition-all duration-300">
                                    {category.icon}
                                </div>
                                <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                                    category.level === 'Proficient' 
                                        ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400' 
                                        : 'bg-purple-50 text-purple-600 dark:bg-purple-900/20 dark:text-purple-300'
                                }`}>
                                    {category.level}
                                </span>
                            </div>
                            
                            <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-200 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                                {category.title}
                            </h3>
                            
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                                {category.description}
                            </p>
                            
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1 bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-gray-400 text-sm rounded-full border border-gray-200 dark:border-neutral-700 group-hover:border-purple-300 dark:group-hover:border-purple-600 group-hover:bg-purple-50 dark:group-hover:bg-purple-900/20 transition-all duration-200"
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
