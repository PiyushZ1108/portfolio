import React, { useState } from 'react';
import useDarkMode from '../hooks/useDarkMode';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [colorTheme, setTheme] = useDarkMode();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleDarkMode = () => {
        setTheme(colorTheme);
    };

    const navItems = ['Experience', 'Projects', 'Skills', 'About', 'Contact'];

    return (
        <>
            {/* Desktop Sidebar */}
            <header className="hidden md:flex flex-col fixed top-0 left-0 h-full w-64 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md z-50 transition-colors duration-300 py-8 px-6">
                
                {/* Logo */}
                <div className="flex items-center gap-3 mb-10">
                    <div className="flex size-10 shrink-0 items-center justify-center bg-primary rounded-lg text-slate-900 cursor-pointer hover:scale-105 transition-transform">
                        <span className="material-symbols-outlined">code</span>
                    </div>
                    <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-tight">
                        Alex.dev
                    </h2>
                </div>

                {/* Navigation */}
                <nav className="flex-1 flex flex-col gap-2">
                    {navItems.map((item) => (
                         <a 
                            key={item} 
                            href={`#${item.toLowerCase()}`} 
                            className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary hover:bg-slate-100 dark:hover:bg-slate-800/50 rounded-xl transition-all group"
                        >
                            <span className="material-symbols-outlined text-[20px] group-hover:scale-110 transition-transform">
                                {item === 'Experience' ? 'work' : 
                                 item === 'Projects' ? 'grid_view' : 
                                 item === 'Skills' ? 'bolt' : 
                                 item === 'About' ? 'person' : 'mail'}
                            </span>
                            {item}
                        </a>
                    ))}
                </nav>

                {/* Footer Actions */}
                <div className="pt-6 ">
                    <button 
                        onClick={toggleDarkMode} 
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                    >
                        <span className="material-symbols-outlined">
                            {colorTheme === 'light' ? 'light_mode' : 'dark_mode'}
                        </span>
                        <span className="text-sm font-medium">
                            {colorTheme === 'light' ? 'Light Mode' : 'Dark Mode'}
                        </span>
                    </button>
                </div>
            </header>

            {/* Mobile Topbar */}
            <header className="md:hidden sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
                <div className="flex items-center p-4 justify-between">
                    <div className="flex items-center gap-3">
                        <div className="flex size-10 shrink-0 items-center justify-center bg-primary rounded-lg text-slate-900 cursor-pointer">
                            <span className="material-symbols-outlined">code</span>
                        </div>
                        <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-tight">
                            Alex.dev
                        </h2>
                    </div>

                    <div className="flex items-center gap-2">
                        <button 
                            onClick={toggleDarkMode} 
                            className="flex size-10 cursor-pointer items-center justify-center rounded-lg bg-transparent text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                        >
                            <span className="material-symbols-outlined">
                                {colorTheme === 'light' ? 'light_mode' : 'dark_mode'}
                            </span>
                        </button>
                        <button 
                            className="flex size-10 cursor-pointer items-center justify-center rounded-lg bg-transparent text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <span className="material-symbols-outlined">
                                {isMenuOpen ? 'close' : 'menu'}
                            </span>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div 
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden bg-background-light dark:bg-background-dark border-b border-slate-200 dark:border-slate-800 shadow-lg"
                        >
                            <nav className="flex flex-col p-4 gap-2">
                                {navItems.map((item) => (
                                     <a 
                                        key={item} 
                                        href={`#${item.toLowerCase()}`} 
                                        className="flex items-center gap-3 p-3 rounded-lg text-base font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-primary dark:hover:text-primary transition-colors"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        <span className="material-symbols-outlined text-[20px]">
                                            {item === 'Experience' ? 'work' : 
                                             item === 'Projects' ? 'grid_view' : 
                                             item === 'Skills' ? 'bolt' : 
                                             item === 'About' ? 'person' : 'mail'}
                                        </span>
                                        {item}
                                     </a>
                                ))}
                            </nav>
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>
        </>
    );
};

export default Navbar;
