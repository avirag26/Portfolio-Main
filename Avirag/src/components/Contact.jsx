import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

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

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div className="mb-8">
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

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="bg-gradient-to-br from-white to-gray-50 dark:from-neutral-900 dark:to-neutral-800 p-8 rounded-2xl border border-gray-200 dark:border-neutral-700 shadow-xl"
                    >
                        <div className="mb-6">
                            <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Start Your Project</h4>
                            <p className="text-gray-600 dark:text-gray-400">Tell me about your vision and let's make it happen</p>
                        </div>
                        
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Full Name *</label>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        className="w-full bg-white dark:bg-neutral-900 border-2 border-gray-300 dark:border-neutral-700 rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="company" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Company</label>
                                    <input
                                        type="text"
                                        id="company"
                                        className="w-full bg-white dark:bg-neutral-900 border-2 border-gray-300 dark:border-neutral-700 rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                                        placeholder="Your Company"
                                    />
                                </div>
                            </div>
                            
                            <div>
                                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Email Address *</label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    className="w-full bg-white dark:bg-neutral-900 border-2 border-gray-300 dark:border-neutral-700 rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                                    placeholder="john@company.com"
                                />
                            </div>
                            
                            <div>
                                <label htmlFor="project-type" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Project Type</label>
                                <select
                                    id="project-type"
                                    className="w-full bg-white dark:bg-neutral-900 border-2 border-gray-300 dark:border-neutral-700 rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                                >
                                    <option value="">Select project type</option>
                                    <option value="full-time">Full-time Position</option>
                                    <option value="freelance">Freelance Project</option>
                                    <option value="consultation">Technical Consultation</option>
                                    <option value="collaboration">Partnership/Collaboration</option>
                                </select>
                            </div>
                            
                            <div>
                                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Project Details *</label>
                                <textarea
                                    id="message"
                                    rows="5"
                                    required
                                    className="w-full bg-white dark:bg-neutral-900 border-2 border-gray-300 dark:border-neutral-700 rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all resize-none"
                                    placeholder="Tell me about your project, timeline, budget, and specific requirements..."
                                ></textarea>
                            </div>
                            
                            <button
                                type="submit"
                                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 rounded-lg transition-all flex items-center justify-center gap-3 shadow-xl shadow-purple-500/25 hover:shadow-2xl hover:shadow-purple-500/30 transform hover:scale-[1.02]"
                            >
                                <Send size={20} />
                                Send Project Details
                                <span className="text-sm opacity-80">(24h response guaranteed)</span>
                            </button>
                        </form>
                        
                        <div className="mt-6 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-700">
                            <p className="text-sm text-purple-700 dark:text-purple-300 text-center">
                                Your information is secure and will never be shared with third parties
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
