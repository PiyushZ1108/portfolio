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


function App() {
  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen font-display transition-colors duration-300 relative">
      <ThreeBackground />

      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <MiniGame />
        <About />
        <Contact />
      </main>
      <footer className="py-8 text-center text-slate-500 dark:text-slate-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Alex.dev. All rights reserved.</p>
        <p className="mt-2 text-xs">Built with React, Tailwind, and MUI.</p>
      </footer>
    </div>
  );
}

export default App;
