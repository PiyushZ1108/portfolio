import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import projectImg from '../assets/project-dashboard.png';


const Projects = () => {

    const projects = [
        {
            title: "E-Commerce Dashboard",
            description: "A full-featured admin dashboard for managing products, orders, and users. Includes chart visualizations and dark mode.",
            tech: ["React", "MUI", "Recharts", "Firebase"],
            links: { demo: "#", github: "#" },
            image: projectImg
        },
        {
            title: "Task Management App",
            description: "Collaborative task manager with real-time updates, drag-and-drop interface, and team workspaces.",
            tech: ["Next.js", "TypeScript", "Tailwind", "Prisma"],
            links: { demo: "#", github: "#" },
            image: projectImg
        },
        {
            title: "Social Media Clone",
            description: "Full-stack social platform with post creation, likes, comments, and user profiles.",
            tech: ["MERN Stack", "Redux", "AWS S3"],
            links: { demo: "#", github: "#" },
            image: projectImg
        },
        {
            title: "AI Image Generator",
            description: "Generate images from text prompts using OpenAI's DALL-E API. Includes gallery and sharing features.",
            tech: ["React", "Node.js", "OpenAI API"],
            links: { demo: "#", github: "#" },
            image: projectImg
        }
    ];

    return (
        <section id="projects" className="py-20 px-4 bg-slate-50 dark:bg-slate-900/20">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-12 text-center">Featured Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}

                            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow group"
                        >
                            <div className="h-48 overflow-hidden bg-slate-200 dark:bg-slate-800 relative">
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                                     <a href={project.links.demo} className="p-2 bg-white rounded-full text-slate-900 hover:bg-primary hover:text-white transition-colors">
                                        <span className="material-symbols-outlined">visibility</span>
                                     </a>
                                     <a href={project.links.github} className="p-2 bg-white rounded-full text-slate-900 hover:bg-primary hover:text-white transition-colors">
                                        <span className="material-symbols-outlined">code</span>
                                     </a>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{project.title}</h3>
                                <p className="text-slate-600 dark:text-slate-400 mb-4 h-12 line-clamp-2">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((t) => (
                                        <span key={t} className="px-2 py-1 bg-primary/10 text-primary text-xs font-bold rounded">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-4">
                                    <a href={project.links.demo} className="flex-1 py-2 text-center rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-sm hover:opacity-90 transition-opacity">Live Demo</a>
                                    <a href={project.links.github} className="flex-1 py-2 text-center rounded-lg border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold text-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">GitHub</a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
