import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './index.css';

function App() {
    return (
        <ThemeProvider>
            <div className="bg-white dark:bg-dark-900 text-dark-900 dark:text-dark-50 transition-colors min-h-screen">
                <div className="max-w-3xl mx-auto px-6 md:px-8">
                    <Navigation />
                    <Hero />
                    <Experience />
                    <Projects />
                    <Skills />
                    <Contact />

                    {/* Footer */}
                    <footer className="py-8 border-t border-dark-200 dark:border-dark-700 text-center text-sm text-dark-400 dark:text-dark-400 mt-10">
                        <p>© 2025 Muhammad Jalil Asyakur. Built with React & Tailwind CSS.</p>
                    </footer>
                </div>
            </div>
        </ThemeProvider>
    );
}

export default App;
