import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="min-h-screen py-20 bg-white dark:bg-neutral-900 relative transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium border border-purple-200 dark:border-purple-700 mb-6">
                        Let's Connect
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                        Ready to Build Something Amazing?
                    </h2>
                    <div className="w-20 h-1 bg-purple-600 mx-auto rounded-full"></div>
                    <p className="text-gray-600 dark:text-gray-400 mt-6 max-w-3xl mx-auto text-lg">
                        I'm actively seeking <strong className="text-gray-800 dark:text-gray-200">Full-Stack Developer</strong> opportunities 
                        and exciting freelance projects. Let's discuss how I can contribute to your team with my MERN stack expertise.
                    </p>
                    
                    <div className="flex flex-wrap justify-center gap-4 mt-8">
                        <div className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 px-4 py-2 rounded-full text-sm font-medium">
                            Available for Full-time Roles
                        </div>
                        <div className="bg-purple-50 dark:bg-purple-800/30 text-purple-600 dark:text-purple-300 px-4 py-2 rounded-full text-sm font-medium">
                            Open for Freelance Projects
                        </div>
                        <div className="bg-purple-200 dark:bg-purple-700/30 text-purple-800 dark:text-purple-200 px-4 py-2 rounded-full text-sm font-medium">
                            Remote & On-site Ready
                        </div>
                    </div>
                </motion.div>

                <div className="flex justify-center">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="max-w-2xl space-y-8"
                    >
                        <div className="mb-8 text-center">
                            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Let's Create Something Extraordinary</h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg mb-6">
                                I respond to all inquiries within <strong className="text-purple-600 dark:text-purple-400">24 hours</strong>. 
                                Whether you need a full-stack web application, want to discuss a freelance project, or are looking for a dedicated developer, 
                                I'm here to help bring your ideas to life.
                            </p>
                            
                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg text-center">
                                    <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">24h</div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400">Response Time</div>
                                </div>
                                <div className="bg-purple-100 dark:bg-purple-800/20 p-4 rounded-lg text-center">
                                    <div className="text-2xl font-bold text-purple-700 dark:text-purple-300">100%</div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400">Client Satisfaction</div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="group p-4 bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-xl border border-purple-200 dark:border-purple-700 hover:shadow-lg transition-all cursor-pointer">
                                <div className="flex items-center gap-4 text-gray-700 dark:text-gray-300">
                                    <div className="w-14 h-14 bg-purple-500 rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                                        <Mail size={24} />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Primary Email</p>
                                        <a href="mailto:aviragpv26@gmail.com" className="text-lg font-semibold hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                                            aviragpv26@gmail.com
                                        </a>
                                        <p className="text-xs text-gray-500">Professional inquiries welcome</p>
                                    </div>
                                </div>
                            </div>

                            <div className="group p-4 bg-gradient-to-r from-purple-100 to-purple-50 dark:from-purple-800/20 dark:to-purple-900/20 rounded-xl border border-purple-200 dark:border-purple-700 hover:shadow-lg transition-all cursor-pointer">
                                <div className="flex items-center gap-4 text-gray-700 dark:text-gray-300">
                                    <div className="w-14 h-14 bg-purple-600 rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                                        <Phone size={24} />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Direct Line</p>
                                        <a href="tel:+917012334610" className="text-lg font-semibold hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                                            +91 7012334610
                                        </a>
                                        <p className="text-xs text-gray-500">Available 9 AM - 9 PM IST</p>
                                    </div>
                                </div>
                            </div>

                            <div className="group p-4 bg-gradient-to-r from-purple-200 to-purple-100 dark:from-purple-700/20 dark:to-purple-800/20 rounded-xl border border-purple-200 dark:border-purple-700 hover:shadow-lg transition-all">
                                <div className="flex items-center gap-4 text-gray-700 dark:text-gray-300">
                                    <div className="w-14 h-14 bg-purple-700 rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                                        <MapPin size={24} />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Location</p>
                                        <p className="text-lg font-semibold">Kerala, India</p>
                                        <p className="text-xs text-gray-500">Open to remote & relocation</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
