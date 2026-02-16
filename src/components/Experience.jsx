import React from 'react';
import { motion } from 'framer-motion';
import config from '../config.json';

const Experience = () => {
    const { experience: experiences } = config;

    return (
        <section id="experience" className="py-32 px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">Professional Journey</h2>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
                </motion.div>

                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            className="relative pl-8 md:pl-0"
                        >
                            {/* Timeline Line (Hidden on mobile for now to simplify) */}
                            {/* <div className="absolute left-0 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-800 md:left-1/2 ml-[-0.5px]"></div> */}

                            <div className="bg-white/60 dark:bg-slate-900/40 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                                <div className="flex flex-col md:flex-row justify-between md:items-start mb-6 gap-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors">{exp.role}</h3>
                                        <div className="flex items-center gap-2 text-primary font-bold tracking-wide uppercase text-sm">
                                            <span className="material-symbols-outlined text-[18px]">business</span>
                                            {exp.company}
                                        </div>
                                    </div>
                                    <div className="px-4 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-sm font-semibold border border-slate-200 dark:border-slate-700 whitespace-nowrap">
                                        {exp.period}
                                    </div>
                                </div>
                                
                                <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed text-lg">
                                    {exp.description}
                                </p>
                                
                                <div className="flex flex-wrap gap-2">
                                    {exp.tech.map((t) => (
                                        <span key={t} className="px-3 py-1 bg-primary/5 dark:bg-primary/10 text-primary dark:text-primary-light border border-primary/10 rounded-lg text-xs font-bold uppercase tracking-wider">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
