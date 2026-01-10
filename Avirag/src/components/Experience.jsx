import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            type: "work",
            title: "Full-Stack Web Developer",
            company: "Freelance",
            period: "01/2024 – Present",
            location: "Remote",
            achievements: "Multiple Projects • Tutoring • Mentoring",
            desc: [
                "Built and deployed multiple static and dynamic web applications using JavaScript, Node.js, Express, MongoDB, and React",
                "Mentored and assisted junior developers in creating mini-projects and preparing for coding interviews",
                "Integrated APIs, implemented authentication, payment gateways, and handled cloud deployments using AWS, Git, and Nginx",
                "Developed optimized, scalable codebases following MVC architecture and clean coding practices",
                "Worked collaboratively with designers and clients in remote settings, ensuring seamless project execution and delivery",
                "Utilized modern frameworks like Tailwind CSS, Bootstrap, and EJS for responsive UI designs"
            ]
        }
    ];

    const education = [
        {
            type: "education",
            title: "MERN Stack Development",
            institution: "Brototype",
            period: "2024 – Present",
            location: "Kochi, Kerala",
            achievements: "Full-Stack Web Development Program",
            highlights: [
                "Comprehensive training in MongoDB, Express.js, React, and Node.js",
                "Hands-on experience with modern web development practices",
                "Project-based learning with real-world applications",
                "Industry-standard coding practices and methodologies"
            ]
        },
        {
            type: "education",
            title: "Plus Two (Computer Science)",
            institution: "GHSS Panjal",
            period: "2023 – Present",
            location: "Thrissur, Kerala",
            achievements: "Computer Science Stream",
            highlights: [
                "Foundation in computer science concepts and programming",
                "Mathematics and analytical thinking skills",
                "Introduction to software development principles"
            ]
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
                    <div className="inline-flex items-center px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium border border-purple-200 dark:border-purple-700 mb-6">
                        Professional Journey
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                        Career Highlights & Education
                    </h2>
                    <div className="w-20 h-1 bg-purple-600 mx-auto rounded-full"></div>
                    <p className="text-gray-600 dark:text-gray-400 mt-6 max-w-3xl mx-auto text-lg">
                        A proven track record of delivering exceptional results and continuous learning. 
                        <strong className="text-gray-800 dark:text-gray-200"> 1+ years of professional excellence</strong> in full-stack development.
                    </p>
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
                                    <div className="bg-gradient-to-br from-white to-purple-50 dark:from-neutral-900 dark:to-purple-900/10 p-6 rounded-xl border border-gray-200 dark:border-neutral-800 hover:border-purple-500/50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                                        <div className="flex flex-wrap justify-between items-start mb-3">
                                            <div>
                                                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{exp.title}</h4>
                                                <p className="text-lg text-purple-600 dark:text-purple-400 font-semibold">{exp.company}</p>
                                                <p className="text-sm text-gray-500 dark:text-gray-400">{exp.location}</p>
                                            </div>
                                            <span className="text-sm text-purple-600 dark:text-purple-400 font-medium px-3 py-1 bg-purple-100 dark:bg-purple-500/10 rounded-full flex items-center gap-2">
                                                <Calendar size={14} /> {exp.period}
                                            </span>
                                        </div>
                                        
                                        {exp.achievements && (
                                            <div className="mb-4 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
                                                <p className="text-sm font-semibold text-purple-700 dark:text-purple-400">
                                                    Key Achievements: {exp.achievements}
                                                </p>
                                            </div>
                                        )}
                                        
                                        <ul className="space-y-3">
                                            {exp.desc.map((item, i) => (
                                                <li key={i} className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed flex items-start gap-3">
                                                    <span className="mt-1 w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex-shrink-0"></span>
                                                    <span>{item}</span>
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
                        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-purple-600 dark:text-purple-400">
                            <GraduationCap size={28} /> Education
                        </h3>
                        <div className="border-l-2 border-purple-500/30 ml-3 space-y-8">
                            {education.map((edu, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="relative pl-8"
                                >
                                    <div className="absolute -left-[9px] top-0 w-4 h-4 bg-purple-500 rounded-full shadow-lg shadow-purple-500/50"></div>
                                    <div className="bg-gradient-to-br from-white to-purple-50 dark:from-neutral-900 dark:to-purple-900/10 p-6 rounded-xl border border-gray-200 dark:border-neutral-800 hover:border-purple-500/50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                                        <div className="flex flex-wrap justify-between items-start mb-3">
                                            <div>
                                                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{edu.title}</h4>
                                                <p className="text-lg text-purple-600 dark:text-purple-400 font-semibold">{edu.institution}</p>
                                                <p className="text-sm text-gray-500 dark:text-gray-400">{edu.location}</p>
                                            </div>
                                            <span className="text-sm text-purple-600 dark:text-purple-400 font-medium px-3 py-1 bg-purple-100 dark:bg-purple-500/10 rounded-full flex items-center gap-2">
                                                <Calendar size={14} /> {edu.period}
                                            </span>
                                        </div>
                                        
                                        {edu.achievements && (
                                            <div className="mb-4 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
                                                <p className="text-sm font-semibold text-purple-700 dark:text-purple-400">
                                                    {edu.achievements}
                                                </p>
                                            </div>
                                        )}
                                        
                                        {edu.highlights && (
                                            <ul className="space-y-2">
                                                {edu.highlights.map((highlight, i) => (
                                                    <li key={i} className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed flex items-start gap-3">
                                                        <span className="mt-1 w-2 h-2 bg-purple-500 rounded-full flex-shrink-0"></span>
                                                        <span>{highlight}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
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
