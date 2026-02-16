import React from 'react';
import { motion } from 'framer-motion';

import config from '../config.json';
// ... (keep React and motion import, but lines 1-3 are outside this block usually, I'll assume they are there or I'll include them if startline is 1)

const About = () => {
    return (
        <section id="about" className="py-32 px-4 relative z-10">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
                >
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-primary to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                        <div className="relative aspect-square rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700/50">
                             {/* Placeholder for profile image - you can replace src with your actual image */}
                            <img src={config.about.profileImage} alt="Profile" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                        </div>
                    </div>
                    
                    <div className="bg-white/60 dark:bg-slate-900/40 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-slate-200/50 dark:border-slate-700/50 shadow-xl shadow-slate-200/50 dark:shadow-none">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">{config.about.title}</h2>
                        <div className="w-16 h-1 bg-primary rounded-full mb-8"></div>
                        
                        <div className="space-y-6 text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-light">
                            <p dangerouslySetInnerHTML={{ __html: config.about.primaryDescription }} />
                            <p>
                                {config.about.secondaryDescription}
                            </p>
                            <p>
                                {config.about.tertiaryDescription}
                            </p>
                        </div>

                        <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-700/50 flex gap-6">
                            {config.about.stats.map((stat, index) => (
                                <div key={index}>
                                    <h4 className="text-3xl font-bold text-slate-900 dark:text-white">{stat.value}</h4>
                                    <p className="text-sm text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
