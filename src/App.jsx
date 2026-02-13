import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import MiniGame from './components/MiniGame';
import About from './components/About';
import Contact from './components/Contact';

import ThreeBackground from './components/ThreeBackground';
import SmoothScroll from './components/SmoothScroll';


function App() {
  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen font-display transition-colors duration-300 relative">
      <SmoothScroll />
      <ThreeBackground />

      <Navbar />
      <main className="md:ml-20 lg:ml-24 relative z-10 transition-all duration-300">
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <MiniGame />
        <About />
        <Contact />
        
        <footer className="py-12 px-4 relative z-10 text-center">
            <div className="max-w-4xl mx-auto bg-white/40 dark:bg-slate-900/40 backdrop-blur-md border border-slate-200/30 dark:border-slate-700/30 rounded-2xl p-6">
                <p className="text-slate-600 dark:text-slate-400 font-medium">&copy; {new Date().getFullYear()} Piyush Tembhurne. All rights reserved.</p>
                <div className="flex justify-center gap-4 mt-4">
                    <span className="text-xs text-slate-500 dark:text-slate-500 uppercase tracking-widest font-bold">Designed & Built with</span>
                </div>
                <div className="flex justify-center gap-2 mt-2 text-primary text-xl">
                    <span className="material-symbols-outlined" title="React">code</span>
                    <span className="material-symbols-outlined" title="Love">favorite</span>
                    <span className="material-symbols-outlined" title="Coffee">coffee</span>
                </div>
            </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
