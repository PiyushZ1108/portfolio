import React, { useState } from 'react';
import useDarkMode from '../hooks/useDarkMode';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [colorTheme, setTheme] = useDarkMode();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleDarkMode = () => {
        setTheme(colorTheme);
    };

    return (
        <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
            <div className="flex items-center p-4 justify-between max-w-7xl mx-auto">
                <div className="flex size-10 shrink-0 items-center justify-center bg-primary rounded-lg text-white cursor-pointer hover:scale-105 transition-transform">
                    <span className="material-symbols-outlined">code</span>
                </div>
                <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-tight ml-3 flex-1">
                    Alex.dev
                </h2>
                
                {/* Desktop Menu */}
                <nav className="hidden md:flex items-center gap-6 mr-6">
                    {['Experience', 'Projects', 'Skills', 'About', 'Contact'].map((item) => (
                         <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors">
                            {item}
                         </a>
                    ))}
                </nav>

                <div className="flex items-center gap-2">
                    <button 
                        onClick={toggleDarkMode} 
                        className="flex size-10 cursor-pointer items-center justify-center rounded-lg bg-transparent text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                        aria-label="Toggle Dark Mode"
                    >
                        <span className="material-symbols-outlined">
                            {colorTheme === 'light' ? 'light_mode' : 'dark_mode'}
                        </span>
                    </button>
                    <button 
                        className="md:hidden flex size-10 cursor-pointer items-center justify-center rounded-lg bg-transparent text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Menu"
                    >
                        <span className="material-symbols-outlined">menu</span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden absolute top-full left-0 w-full bg-background-light dark:bg-background-dark border-b border-slate-200 dark:border-slate-800 p-4 shadow-lg"
                >
                    <nav className="flex flex-col gap-4">
                        {['Experience', 'Projects', 'Skills', 'About', 'Contact'].map((item) => (
                             <a 
                                key={item} 
                                href={`#${item.toLowerCase()}`} 
                                className="text-base font-medium text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item}
                             </a>
                        ))}
                    </nav>
                </motion.div>
            )}
        </header>
    );
};

export default Navbar;
