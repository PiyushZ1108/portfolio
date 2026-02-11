import React, { useEffect } from "react";
import { motion } from "framer-motion";
import projectImg from "../assets/project-dashboard.png";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Dashboard",
      description: "A full-featured admin dashboard for managing products, orders, and users. Includes chart visualizations and dark mode.",
      tech: ["React", "MUI", "Recharts", "Firebase"],
      links: { demo: "#", github: "#" },
      image: projectImg,
    },
    {
      title: "Task Management App",
      description: "Collaborative task manager with real-time updates, drag-and-drop interface, and team workspaces.",
      tech: ["Next.js", "TypeScript", "Tailwind", "Prisma"],
      links: { demo: "#", github: "#" },
      image: projectImg,
    },
    {
      title: "Social Media Clone",
      description: "Full-stack social platform with post creation, likes, comments, and user profiles.",
      tech: ["MERN Stack", "Redux", "AWS S3"],
      links: { demo: "#", github: "#" },
      image: projectImg,
    },
    {
      title: "AI Image Generator",
      description: "Generate images from text prompts using OpenAI's DALL-E API. Includes gallery and sharing features.",
      tech: ["React", "Node.js", "OpenAI API"],
      links: { demo: "#", github: "#" },
      image: projectImg,
    },
  ];

  return (
    <section id="projects" className="py-32 px-4 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20 text-center"
        >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">Featured Projects</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="group relative bg-white/60 dark:bg-slate-900/40 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50 rounded-3xl overflow-hidden hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10"
            >
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex gap-4 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        <a href={project.links.demo} className="flex items-center gap-2 px-4 py-2 bg-primary text-white text-xs font-bold uppercase tracking-wider rounded-full hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
                            Launch
                            <span className="material-symbols-outlined text-[16px]">rocket_launch</span>
                        </a>
                        <a href={project.links.github} className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs font-bold uppercase tracking-wider rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
                            Code
                            <span className="material-symbols-outlined text-[16px]">code</span>
                        </a>
                    </div>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1 bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-light text-xs font-bold uppercase tracking-wide rounded-md border border-primary/10">
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

export default Projects;
