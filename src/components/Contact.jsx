import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';


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

    return (
        <section id="contact" className="py-20 px-4 bg-slate-50 dark:bg-slate-900/20">
            <div className="max-w-2xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-8 text-center">Get In Touch</h2>
                <form onSubmit={handleSubmit} className="space-y-6 bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
                    <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Name</label>
                        <input 
                            type="text" 
                            name="name" 
                            value={formData.name}
                            onChange={handleChange}

                            className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                            placeholder="Your Name"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email</label>
                        <input 
                            type="email" 
                            name="email" 
                            value={formData.email}
                            onChange={handleChange}

                            className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                            placeholder="you@example.com"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Message</label>
                        <textarea 
                            name="message" 
                            value={formData.message}
                            onChange={handleChange}

                            rows="4"
                            className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                            placeholder="What's on your mind?"
                            required
                        ></textarea>
                    </div>
                     <button type="submit" className="w-full py-4 bg-primary text-white font-bold rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-primary/20">
                        Send Message
                    </button>
                </form>

                 <div className="flex justify-center gap-8 mt-12">
                    <a href="#" className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-primary transition-colors font-medium">
                        <span className="material-symbols-outlined">code</span> GitHub
                    </a>
                    <a href="#" className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-primary transition-colors font-medium">
                        <span className="material-symbols-outlined">work</span> LinkedIn
                    </a>
                    <a href="#" className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-primary transition-colors font-medium">
                         <span className="material-symbols-outlined">mail</span> Email
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
