import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Initialize theme on app load - default to light theme
    const initializeTheme = () => {
      const savedTheme = localStorage.getItem('theme');
      
      if (savedTheme === 'dark') {
        setIsDark(true);
        document.documentElement.classList.add('dark');
      } else {
        // Default to light theme
        setIsDark(false);
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    };

    initializeTheme();

    // Listen for theme changes from other components
    const handleThemeChange = () => {
      const isDarkMode = document.documentElement.classList.contains('dark');
      setIsDark(isDarkMode);
    };

    // Create a MutationObserver to watch for class changes on html element
    const observer = new MutationObserver(handleThemeChange);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-gray-50 dark:bg-neutral-950 min-h-screen text-gray-900 dark:text-white selection:bg-purple-500 selection:text-white transition-colors duration-300 overflow-x-hidden">
      <Navbar />
      <main className="w-full">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
