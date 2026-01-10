import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-100 dark:bg-neutral-950 py-8 border-t border-gray-200 dark:border-neutral-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-gray-600 dark:text-gray-500 text-sm">
                    © {new Date().getFullYear()} Avirag P V. All rights reserved.
                </p>

                <div className="flex gap-6">
                    <a href="https://github.com/avirag26" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-black dark:hover:text-white transition-colors">
                        <Github size={20} />
                    </a>
                    <a href="https://linkedin.com/in/avirag26" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        <Linkedin size={20} />
                    </a>
                    <a href="mailto:aviragpv26@gmail.com" className="text-gray-500 hover:text-red-500 dark:hover:text-red-400 transition-colors">
                        <Mail size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
