import React, { useEffect } from 'react';
import { motion } from 'framer-motion';


const Hero = () => {




    return (
        <section id="hero" className="relative min-h-[calc(100vh-72px)] flex flex-col justify-center overflow-hidden">
            {/* Decoration: Floating Tech Glows */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div 
                    animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3], 
                    }}
                    transition={{ 
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut" 
                    }}
                    className="absolute top-1/4 -left-12 w-64 h-64 bg-primary/20 rounded-full blur-[80px]"
                />
                <motion.div 
                    animate={{ 
                        scale: [1, 1.5, 1],
                        opacity: [0.2, 0.4, 0.2], 
                    }}
                    transition={{ 
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2
                    }}
                    className="absolute bottom-1/4 -right-12 w-80 h-80 bg-cyan-500/20 rounded-full blur-[80px]"
                />
            </div>

            <div className="relative z-10 px-4 py-8 max-w-7xl mx-auto w-full">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-slate-900 dark:text-white tracking-tight text-[40px] md:text-6xl font-extrabold leading-[1.1] text-left pb-4">
                        Building scalable web applications <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent block md:inline">with MERN.</span>
                    </h1>
                     <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl font-normal leading-relaxed pb-8 pt-1 max-w-2xl">
                        I transform complex problems into elegant, high-performance code. Focused on clean architecture and seamless user experiences.
                    </p>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex flex-col sm:flex-row gap-4 w-full max-w-sm sm:max-w-md"
                >
                    <a href="#projects" className="flex-1 flex cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 px-8 bg-primary text-white text-base font-bold leading-normal tracking-wide shadow-lg shadow-primary/20 hover:scale-105 transition-transform no-underline">
                        View Projects
                    </a>
                    <div className="relative flex-1">
                        <a href="#minigame" className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 px-8 bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white text-base font-bold leading-normal tracking-wide hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors no-underline">
                            <span className="material-symbols-outlined mr-2 text-[20px]">videogame_asset</span>
                            Play Mini Game
                        </a>
                        <div className="absolute -top-3 -right-2 bg-emerald-500 text-white text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest shadow-sm animate-pulse">
                            New!
                        </div>
                    </div>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-12 pb-12"
                >
                   <p className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-4">Core Stack</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-2xl">
                        {[
                            { name: 'MongoDB', icon: 'database' },
                            { name: 'Express', icon: 'settings_ethernet' },
                            { name: 'React', icon: 'deployed_code' },
                            { name: 'Node.js', icon: 'javascript' }
                        ].map((tech) => (
                             <div key={tech.name} className="flex gap-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm p-4 items-center hover:border-primary/50 transition-colors cursor-default">
                                <div className="text-primary">
                                    <span className="material-symbols-outlined">{tech.icon}</span>
                                </div>
                                <h2 className="text-slate-900 dark:text-white text-sm font-bold leading-tight">{tech.name}</h2>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
               <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-40 hidden md:block">
                <span className="material-symbols-outlined animate-bounce text-slate-900 dark:text-white">expand_more</span>
            </div>
        </section>
    );
};

export default Hero;
