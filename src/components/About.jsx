import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-20 px-4 max-w-4xl mx-auto">
             <div className="text-center mb-12">
                 <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">About Me</h2>
                 <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                    I'm a passionate Full Stack Developer based in San Francisco. My journey started with a simple HTML page, and now I build complex, scalable web applications. I love untangling messy code and optimizing performance. When I'm not coding, you can find me hiking or experimenting with new coffee brews.
                 </p>
             </div>
        </section>
    );
};

export default About;
