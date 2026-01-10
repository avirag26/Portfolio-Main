import { motion } from 'framer-motion';
import { User, Users, FileText, Clock, Lightbulb, Globe } from 'lucide-react';

const About = () => {
    const softSkills = [
        {
            icon: <Users className="text-purple-500" size={28} />,
            title: "Communication",
            desc: "Strong presentation skills, confident in client meetings and public speaking."
        },
        {
            icon: <User className="text-purple-600" size={28} />,
            title: "Leadership",
            desc: "Experience in guiding teams, decision making, and effective task delegation."
        },
        {
            icon: <FileText className="text-purple-400" size={28} />,
            title: "Documentation",
            desc: "Proficient in preparing clear, structured, and professional technical reports."
        },
        {
            icon: <Clock className="text-purple-700" size={28} />,
            title: "Time Management",
            desc: "Ability to prioritize tasks, meet deadlines, and coordinate multiple projects."
        },
        {
            icon: <Lightbulb className="text-purple-500" size={28} />,
            title: "Creativity",
            desc: "Innovative problem-solving and adaptability to changing requirements."
        },
        {
            icon: <Globe className="text-purple-600" size={28} />,
            title: "Languages",
            desc: "English, Malayalam, Tamil, and basic conversational Hindi."
        }
    ];

    return (
        <section id="about" className="min-h-screen py-20 bg-white dark:bg-neutral-900 relative overflow-hidden transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">About Me</h2>
                    <div className="w-20 h-1 bg-purple-600 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-start">
                    {/* Bio Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <div className="mb-6">
                            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                                MERN Stack Developer
                            </h3>
                            <p className="text-xl text-purple-600 dark:text-purple-400 font-semibold">
                                Building Modern Web Applications
                            </p>
                        </div>
                        
                        <div className="space-y-6">
                            <div className="p-6 bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-xl border-l-4 border-purple-500">
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Technical Skills</h4>
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                    Full-Stack Web Developer with <strong>1+ years of experience</strong> in freelancing and tutoring. 
                                    Proficient in JavaScript, React, Node.js, Express.js, MongoDB, and PostgreSQL. 
                                    Strong foundation in Data Structures & Algorithms with experience in modern web development practices.
                                </p>
                            </div>

                            <div className="p-6 bg-gradient-to-r from-purple-100 to-purple-50 dark:from-purple-800/20 dark:to-purple-900/20 rounded-xl border-l-4 border-purple-600">
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Project Experience</h4>
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                    Built and deployed multiple static and dynamic web applications using the MERN stack. 
                                    Experience with API integration, authentication systems, payment gateways, and cloud deployments using AWS, Vercel, and Nginx. 
                                    Developed responsive, user-friendly interfaces with modern CSS frameworks.
                                </p>
                            </div>

                            <div className="p-6 bg-gradient-to-r from-purple-50 to-purple-200 dark:from-purple-900/20 dark:to-purple-700/20 rounded-xl border-l-4 border-purple-700">
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Learning & Growth</h4>
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                    Currently pursuing advanced MERN Stack development at Brototype. 
                                    Passionate about mentoring junior developers and helping them improve their coding skills. 
                                    Self-taught learner who adapts quickly to new technologies and follows clean coding practices.
                                </p>
                            </div>
                        </div>

                        <div className="mt-8 p-6 bg-purple-50 dark:bg-purple-900/20 rounded-xl border border-purple-200 dark:border-purple-700">
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                                <span className="w-3 h-3 bg-purple-500 rounded-full mr-3 animate-pulse"></span>
                                Currently Available for Opportunities
                            </h4>
                            <p className="text-gray-600 dark:text-gray-400">
                                Seeking opportunities in <strong>Full-Stack Developer</strong>, <strong>MERN Stack Developer</strong>, 
                                or <strong>Frontend/Backend Developer</strong> positions where I can contribute to innovative projects and continue growing my skills.
                            </p>
                        </div>
                    </motion.div>

                    {/* Soft Skills Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {softSkills.map((skill, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-gray-50 dark:bg-neutral-800/50 p-6 rounded-xl border border-gray-200 dark:border-neutral-700 hover:border-purple-500/50 transition-all hover:bg-white dark:hover:bg-neutral-800 shadow-sm hover:shadow-md"
                            >
                                <div className="mb-4">{skill.icon}</div>
                                <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">{skill.title}</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">{skill.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
