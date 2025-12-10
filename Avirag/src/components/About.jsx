import React from 'react';
import { motion } from 'framer-motion';
import { User, Users, FileText, Clock, Lightbulb, Globe } from 'lucide-react';

const About = () => {
    const softSkills = [
        {
            icon: <Users className="text-blue-400" size={28} />,
            title: "Communication",
            desc: "Strong presentation skills, confident in client meetings and public speaking."
        },
        {
            icon: <User className="text-purple-400" size={28} />,
            title: "Leadership",
            desc: "Experience in guiding teams, decision making, and effective task delegation."
        },
        {
            icon: <FileText className="text-green-400" size={28} />,
            title: "Documentation",
            desc: "Proficient in preparing clear, structured, and professional technical reports."
        },
        {
            icon: <Clock className="text-orange-400" size={28} />,
            title: "Time Management",
            desc: "Ability to prioritize tasks, meet deadlines, and coordinate multiple projects."
        },
        {
            icon: <Lightbulb className="text-yellow-400" size={28} />,
            title: "Creativity",
            desc: "Innovative problem-solving and adaptability to changing requirements."
        },
        {
            icon: <Globe className="text-cyan-400" size={28} />,
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
                        <h3 className="text-2xl font-semibold text-purple-600 dark:text-purple-400">
                            Passionate Full-Stack Developer
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                            I am a Full-Stack Web Developer with 3+ years of experience in freelancing and tutoring.
                            My expertise lies in the MERN stack (MongoDB, Express.js, React, Node.js), and I have a strong foundation in
                            Data Structures & Algorithms.
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                            I have built and deployed multiple static and dynamic web applications, integrated complex APIs,
                            and handled cloud deployments using AWS and Nginx. Beyond coding, I enjoy mentoring upcoming developers
                            and helping them master programming logic.
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                            I am a self-taught fast learner who adapts quickly to new technologies, constantly exploring
                            innovative solutions like AI integration to enhance user experiences.
                        </p>
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
