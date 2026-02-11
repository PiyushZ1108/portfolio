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
    <section id="skills" className="py-32 px-4 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20 text-center"
        >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">Technical Arsenal</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-white/60 dark:bg-slate-900/40 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50 p-8 rounded-3xl hover:border-primary/30 transition-colors duration-300"
            >
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
                <span className="w-2 h-8 bg-primary rounded-full"></span>
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-2">
                        <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">{skill.name}</span>
                        <span className="text-sm font-bold text-primary">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-2 overflow-hidden">
                        <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1.2, delay: 0.4 + (i * 0.1), ease: "easeOut" }}
                            className="bg-primary h-full rounded-full shadow-[0_0_10px_rgba(37,99,235,0.5)]"
                        ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    );
};

export default Skills;
