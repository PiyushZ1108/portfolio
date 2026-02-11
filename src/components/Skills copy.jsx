// import React from 'react';
// import { motion } from 'framer-motion';
// import { MY_STACK } from '../utils/data';

// const Skills = () => {
//     return (
//     <section id="skills" className="py-32 px-4 relative z-10">
//       <div className="max-w-7xl mx-auto">
//         <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="mb-20 text-center"
//         >
//             <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">Technical Arsenal</h2>
//             <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
//           {Object.entries(MY_STACK).map(([category, skills], index) => (
//             <motion.div
//               key={category}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.2, duration: 0.6 }}
//               className="bg-white/60 dark:bg-slate-900/40 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50 p-8 rounded-3xl hover:border-primary/30 transition-colors duration-300"
//             >
//               <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3 capitalize">
//                 <span className="w-2 h-8 bg-primary rounded-full"></span>
//                 {category}
//               </h3>
              
//               <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
//                 {skills.map((skill, i) => (
//                   <div key={i} className="flex flex-col items-center justify-center p-4 bg-slate-50/50 dark:bg-slate-800/50 rounded-xl hover:bg-white dark:hover:bg-slate-800 transition-colors border border-slate-100 dark:border-slate-700/50 group">
//                     <div className="w-12 h-12 mb-3 p-2 bg-white dark:bg-slate-900 rounded-lg shadow-sm group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
//                         <img 
//                             src={skill.icon} 
//                             alt={skill.name} 
//                             className="w-full h-full object-contain"
//                             onError={(e) => {
//                                 e.target.style.display = 'none';
//                                 e.target.nextSibling.style.display = 'block';
//                             }} 
//                         />
//                         <span className="text-xs font-bold hidden">{skill.name[0]}</span>
//                     </div>
//                     <span className="text-sm font-semibold text-slate-700 dark:text-slate-300 text-center">{skill.name}</span>
//                   </div>
//                 ))}
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//     );
// };

// export default Skills;











