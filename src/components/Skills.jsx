import React, { useEffect } from 'react';
import { motion } from 'framer-motion';


const Skills = () => {




    const skillCategories = [
        {
            title: "Frontend",
            skills: [
                { name: "React", level: 95 },
                { name: "Redux", level: 85 },
                { name: "Tailwind CSS", level: 90 },
                { name: "Material UI", level: 85 },
                { name: "TypeScript", level: 80 }
            ]
        },
        {
            title: "Backend",
            skills: [
                { name: "Node.js", level: 90 },
                { name: "Express", level: 90 },
                { name: "REST APIs", level: 95 },
                { name: "GraphQL", level: 75 }
            ]
        },
        {
            title: "Database & Tools",
            skills: [
                { name: "MongoDB", level: 90 },
                { name: "PostgreSQL", level: 80 },
                { name: "Docker", level: 75 },
                { name: "AWS", level: 70 },
                { name: "Git", level: 95 }
            ]
        }
    ];

    return (
        <section id="skills" className="py-20 px-4 max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-16 text-center">Technical Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {skillCategories.map((category, index) => (
                    <div key={index}>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 border-l-4 border-primary pl-4">{category.title}</h3>
                        <div className="space-y-6">
                            {category.skills.map((skill, i) => (
                                <div key={i}>
                                    <div className="flex justify-between mb-1">
                                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{skill.name}</span>
                                        <span className="text-sm font-medium text-slate-500">{skill.level}%</span>
                                    </div>
                                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5 overflow-hidden">
                                        <motion.div 
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.level}%` }}
                                            transition={{ duration: 1, delay: 0.2 }}
                                            className="bg-primary h-2.5 rounded-full"
                                        ></motion.div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
