import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import config from '../config.json';


const Contact = () => {

    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                   // setTargetSection('about');
                }
            },
            { threshold: 0.3 }
        );
        
        const section = document.getElementById('contact');
        if (section) observer.observe(section);
        return () => {
            if (section) observer.unobserve(section);
        };
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };



    const handleSubmit = (e) => {
        e.preventDefault();

        // Handle form submission logic
        setTimeout(() => {
            alert('Message sent! (Demo)');
            setFormData({ name: '', email: '', message: '' });

        }, 1000);
    };

    const { contact } = config;

    return (
        <section id="contact" className="py-32 px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">{contact.heading}</h2>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8"></div>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        {contact.description}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:col-span-2 space-y-8"
                    >
                         <div className="bg-white/60 dark:bg-slate-900/40 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50 p-8 rounded-3xl">
                             <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Contact Info</h3>
                             <div className="space-y-6">
                                <a href={`mailto:${contact.email}`} className="flex items-center gap-4 text-slate-600 dark:text-slate-400 hover:text-primary transition-colors group">
                                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                        <span className="material-symbols-outlined">mail</span>
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-wider opacity-50">Mail</p>
                                        <p className="font-medium">{contact.email}</p>
                                    </div>
                                </a>
                                <a href="#" className="flex items-center gap-4 text-slate-600 dark:text-slate-400 hover:text-primary transition-colors group">
                                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                        <span className="material-symbols-outlined">location_on</span>
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-wider opacity-50">Location</p>
                                        <p className="font-medium">{contact.location}</p>
                                    </div>
                                </a>
                             </div>
                             
                             <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-700/50">
                                <p className="text-sm font-medium text-slate-900 dark:text-white mb-4">Social Profiles</p>
                                <div className="flex gap-4">
                                    {contact.socialIcons.map((icon, i) => (
                                        <a key={i} href="#" className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-primary hover:text-white transition-all duration-300 hover:-translate-y-1">
                                            <span className="material-symbols-outlined text-[20px]">{icon}</span>
                                        </a>
                                    ))}
                                </div>
                             </div>
                         </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="lg:col-span-3"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6 bg-white/60 dark:bg-slate-900/40 backdrop-blur-xl p-8 md:p-10 rounded-3xl border border-slate-200/50 dark:border-slate-700/50 shadow-xl shadow-slate-200/50 dark:shadow-none">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">Name</label>
                                    <input 
                                        type="text" 
                                        name="name" 
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-950/50 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-slate-400"
                                        placeholder="John Doe"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">Email</label>
                                    <input 
                                        type="email" 
                                        name="email" 
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-950/50 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-slate-400"
                                        placeholder="john@example.com"
                                        required
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">Message</label>
                                <textarea 
                                    name="message" 
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="5"
                                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-950/50 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none placeholder:text-slate-400"
                                    placeholder="Tell me about your project..."
                                    required
                                ></textarea>
                            </div>
                             <button type="submit" className="w-full py-4 bg-gradient-to-r from-primary to-cyan-500 text-white font-bold rounded-xl hover:opacity-90 transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-1 active:translate-y-0">
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
