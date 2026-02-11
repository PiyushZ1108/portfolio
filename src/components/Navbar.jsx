import React, { useState } from 'react';
import useDarkMode from '../hooks/useDarkMode';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [colorTheme, setTheme] = useDarkMode();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    const toggleDarkMode = () => {
        setTheme(colorTheme);
    };

    const navItems = ['Experience', 'Projects', 'Skills', 'About', 'Contact'];

    return (
        <>
            {/* Desktop Sidebar - Minimalist & Floating */}
            <aside className="hidden md:flex flex-col fixed top-0 left-0 h-screen w-20 lg:w-24 backdrop-blur-xl border-r border-slate-200/50 dark:border-slate-800/50 z-50 transition-all duration-300 items-center py-8">
                
                {/* Logo */}
                <div className="mb-12">
                     <a href="#" className="flex size-12 items-center justify-center bg-gradient-to-tr from-primary to-cyan-400 rounded-xl text-white shadow-lg shadow-primary/30 hover:scale-110 hover:shadow-primary/50 transition-all duration-300 group">
                        <span className="material-symbols-outlined text-[28px] group-hover:rotate-12 transition-transform">code</span>
                    </a>
                </div>

                {/* Navigation */}
                <nav className="flex-1 flex flex-col gap-6 w-full px-2 items-center">
                    {navItems.map((item) => (
                         <a 
                            key={item} 
                            href={`#${item.toLowerCase()}`} 
                            className="relative flex items-center justify-center size-12 rounded-xl text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-white hover:bg-white dark:hover:bg-slate-800 hover:shadow-lg transition-all duration-300 group"
                            title={item}
                        >
                            <span className="material-symbols-outlined text-[24px] group-hover:scale-110 transition-transform">
                                {item === 'Experience' ? 'work_history' : 
                                 item === 'Projects' ? 'grid_view' : 
                                 item === 'Skills' ? 'bolt' : 
                                 item === 'About' ? 'person' : 'mail'}
                            </span>
                            
                            {/* Tooltip */}
                            <span className="absolute left-14 px-3 py-1 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-bold rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-x-2 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap shadow-xl z-50">
                                {item}
                            </span>
                        </a>
                    ))}
                </nav>

                {/* Theme Toggle */}
                <div className="mt-auto pt-8 border-t border-slate-200/50 dark:border-slate-700/50 w-full flex justify-center">
                    <button 
                        onClick={toggleDarkMode} 
                        className="size-12 flex items-center justify-center rounded-xl text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-orange-500 dark:hover:text-yellow-400 transition-all duration-300"
                        title={colorTheme === 'light' ? "Switch to Light Mode" : "Switch to Dark Mode"}
                    >
                        <span className="material-symbols-outlined text-[24px] transition-transform duration-500 rotate-0 hover:rotate-180">
                            {colorTheme === 'light' ? 'light_mode' : 'dark_mode'}
                        </span>
                    </button>
                </div>
            </aside>

            {/* Mobile Topbar */}
            <header className="md:hidden fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-800/50 transition-colors duration-300">
                <div className="flex items-center px-4 h-16 justify-between">
                     <a href="#" className="flex size-10 items-center justify-center bg-gradient-to-tr from-primary to-cyan-400 rounded-lg text-white shadow-md shadow-primary/20">
                        <span className="material-symbols-outlined text-[20px]">code</span>
                    </a>

                    <div className="flex items-center gap-2">
                        <button 
                            onClick={toggleDarkMode} 
                            className="size-10 flex items-center justify-center rounded-full text-slate-600 dark:text-slate-400 hover:bg-slate-100/50 dark:hover:bg-slate-800/50 transition-colors"
                        >
                            <span className="material-symbols-outlined text-[20px]">
                                {colorTheme === 'light' ? 'light_mode' : 'dark_mode'}
                            </span>
                        </button>
                        <button 
                            className="size-10 flex items-center justify-center rounded-full text-slate-600 dark:text-slate-400 hover:bg-slate-100/50 dark:hover:bg-slate-800/50 transition-colors"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <span className="material-symbols-outlined text-[24px]">
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
                            className="overflow-hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-t border-slate-200/50 dark:border-slate-800/50 shadow-2xl"
                        >
                            <nav className="flex flex-col p-4 gap-2">
                                {navItems.map((item) => (
                                     <a 
                                        key={item} 
                                        href={`#${item.toLowerCase()}`} 
                                        className="flex items-center gap-4 p-4 rounded-xl text-base font-bold text-slate-600 dark:text-slate-400 hover:bg-primary/5 dark:hover:bg-slate-800 hover:text-primary dark:hover:text-primary transition-all active:scale-95"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        <span className="material-symbols-outlined text-[24px] opacity-70">
                                            {item === 'Experience' ? 'work_history' : 
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
