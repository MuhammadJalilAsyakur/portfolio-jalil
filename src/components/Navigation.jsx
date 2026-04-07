import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';

export default function Navigation() {
    const { isDark, toggleTheme } = useTheme();

    return (
        <nav className="flex justify-between items-center py-6 px-6 border-b border-dark-200 dark:border-dark-700 mb-16">
            <div className="font-syne font-bold text-lg tracking-tight">
                jalil<span className="text-purple-500">.</span>dev
            </div>

            <div className="flex items-center gap-8">
                <div className="hidden md:flex gap-7">
                    <a href="#experience" className="text-sm text-dark-400 dark:text-dark-400 hover:text-dark-900 dark:hover:text-dark-50 transition">experience</a>
                    <a href="#projects" className="text-sm text-dark-400 dark:text-dark-400 hover:text-dark-900 dark:hover:text-dark-50 transition">projects</a>
                    <a href="#skills" className="text-sm text-dark-400 dark:text-dark-400 hover:text-dark-900 dark:hover:text-dark-50 transition">skills</a>
                    <a href="#contact" className="text-sm text-dark-400 dark:text-dark-400 hover:text-dark-900 dark:hover:text-dark-50 transition">contact</a>
                </div>

                <button
                    onClick={toggleTheme}
                    className="p-2 rounded-lg bg-dark-100 dark:bg-dark-700 text-dark-900 dark:text-dark-50 hover:bg-dark-200 dark:hover:bg-dark-600 transition"
                    aria-label="Toggle theme"
                >
                    {isDark ? <Sun size={18} /> : <Moon size={18} />}
                </button>
            </div>
        </nav>
    );
}
