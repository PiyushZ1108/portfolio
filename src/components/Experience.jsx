import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
    const experiences = [
        {
            role: "Senior Full Stack Developer",
            company: "Tech Solutions Inc.",
            period: "2023 - Present",
            description: "Led development of scalable microservices, improved API performance by 40%, and mentored junior developers.",
            tech: ["React", "Node.js", "AWS", "Docker"]
        },
        {
            role: "MERN Stack Developer",
            company: "Startup Hub",
            period: "2021 - 2023",
            description: "Built and deployed 3 major client applications. Implemented secure authentication and real-time features.",
            tech: ["MongoDB", "Express", "React", "Socket.io"]
        }
    ];

    return (
        <section id="experience" className="py-20 px-4 max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-12 text-center">Experience</h2>
            <div className="space-y-8">
                {experiences.map((exp, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl shadow-sm hover:border-primary/50 transition-colors"
                    >
                        <div className="flex flex-col md:flex-row justify-between md:items-center mb-4">
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{exp.role}</h3>
                                <p className="text-primary font-medium">{exp.company}</p>
                            </div>
                            <span className="text-slate-500 dark:text-slate-400 text-sm mt-2 md:mt-0">{exp.period}</span>
                        </div>
                        <p className="text-slate-600 dark:text-slate-400 mb-4">{exp.description}</p>
                        <div className="flex flex-wrap gap-2">
                            {exp.tech.map((t) => (
                                <span key={t} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-full text-xs font-medium">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
