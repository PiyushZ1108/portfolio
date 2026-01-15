import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SpeechBubble = ({ message }) => {
  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 20, x: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20, x: -20 }}
          className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-48 p-3 bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 pointer-events-none"
        >
          <p className="text-sm font-medium text-slate-700 dark:text-slate-200 text-center leading-tight">
            {message}
          </p>
          {/* Triangle Pointer */}
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-white dark:border-t-slate-800"></div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SpeechBubble;
