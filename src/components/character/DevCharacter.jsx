import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

const DevCharacter = ({ mood = 'neutral', action = 'idle', lookAt = 'center' }) => {
  const shouldReduceMotion = useReducedMotion();
  // Blink logic
  const [isBlinking, setIsBlinking] = useState(false);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 200);
    }, Math.random() * 4000 + 3000);
    return () => clearInterval(blinkInterval);
  }, []);

  // Animation Variants
  const bodyVariants = {
    idle: { 
        y: shouldReduceMotion ? 0 : [0, -10, 0], 
        transition: { repeat: Infinity, duration: 3, ease: "easeInOut" } 
    },
    excited: { 
        y: shouldReduceMotion ? 0 : [0, -15, 0], 
        scale: shouldReduceMotion ? 1 : [1, 1.05, 1], 
        transition: { repeat: Infinity, duration: 0.5 } 
    },
  };

  const armLeftVariants = {
    idle: { rotate: 0, x: 0, y: 0 },
    wave: { rotate: shouldReduceMotion ? 20 : [0, 20, -10, 20, 0], transition: { duration: 1.5, loop: Infinity } },
    point: { rotate: -45, x: -5, y: -5 },
  };

  const armRightVariants = {
    idle: { rotate: 0 },
    thumbsUp: { rotate: -100, x: 10, y: -20 },
    point: { rotate: -90, x: 20 },
  };

  // Eye shapes
  const eyes = {
    neutral: (
      <g>
        <circle cx="35" cy="45" r={isBlinking ? 0.5 : 4} fill="#1e293b" />
        <circle cx="65" cy="45" r={isBlinking ? 0.5 : 4} fill="#1e293b" />
      </g>
    ),
    happy: (
      <g>
        <path d="M31 45 Q35 40 39 45" stroke="#1e293b" strokeWidth="3" fill="none" />
        <path d="M61 45 Q65 40 69 45" stroke="#1e293b" strokeWidth="3" fill="none" />
      </g>
    ),
    thinking: (
      <g>
         <circle cx="35" cy="40" r={isBlinking ? 0.5 : 4} fill="#1e293b" />
         <path d="M61 42 l8 0" stroke="#1e293b" strokeWidth="3" />
      </g>
    ),
  };

  const mouths = {
    neutral: <path d="M45 65 Q50 68 55 65" stroke="#1e293b" strokeWidth="2" fill="none" />,
    happy: <path d="M40 62 Q50 72 60 62" stroke="#1e293b" strokeWidth="3" fill="none" />,
    excited: <path d="M40 60 Q50 75 60 60 Z" fill="#1e293b" />,
    thinking: <line x1="45" y1="65" x2="55" y2="65" stroke="#1e293b" strokeWidth="3" />,
  };

  const getCurrentEyes = () => {
    if (mood === 'happy' || mood === 'excited') return eyes.happy;
    if (mood === 'thinking') return eyes.thinking;
    return eyes.neutral;
  };

  const getCurrentMouth = () => {
    if (mood === 'happy') return mouths.happy;
    if (mood === 'excited') return mouths.excited;
    if (mood === 'thinking') return mouths.thinking;
    return mouths.neutral;
  };

  return (
    <motion.svg
      width="120"
      height="120"
      viewBox="0 0 100 100"
      initial="idle"
      animate={mood === 'excited' ? 'excited' : 'idle'}
      variants={bodyVariants}
      className="drop-shadow-xl"
      style={{ overflow: 'visible' }}
    >
      {/* Glow Effect behind */}
      <defs>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="15" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      
      {/* Background Aura */}
      <circle cx="50" cy="50" r="45" fill="rgba(15, 146, 240, 0.1)" filter="url(#glow)" />

      {/* Body / Shirt */}
      <motion.path
        d="M20 75 C20 60, 80 60, 80 75 L80 100 L20 100 Z"
        fill="#0f92f0"
      />
      
      {/* Head */}
      <motion.circle cx="50" cy="50" r="30" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="2" />
      
      {/* Face */}
      <g transform={`translate(${lookAt === 'left' ? -3 : lookAt === 'right' ? 3 : 0}, ${lookAt === 'up' ? -2 : 0})`}>
        {getCurrentEyes()}
        {getCurrentMouth()}
      </g>

      {/* Arm Left */}
      <motion.g
        initial={{ rotate: 0, x: 20, y: 70 }}
        animate={action === 'wave' ? 'wave' : 'idle'}
        variants={armLeftVariants}
        style={{ originX: 0.9, originY: 0.1 }}
      >
        <path d="M20 70 Q10 85 5 80" stroke="#0f92f0" strokeWidth="6" strokeLinecap="round" fill="none"/> 
        {/* Hand */}
        <circle cx="5" cy="80" r="6" fill="#f8fafc" />
      </motion.g>

      {/* Arm Right */}
      <motion.g
         initial={{ rotate: 0, x: 80, y: 70 }}
         animate={action === 'thumbsUp' ? 'thumbsUp' : action === 'point-right' ? 'point' : 'idle'}
         variants={armRightVariants}
         style={{ originX: 0.1, originY: 0.1 }}
      >
         <path d="M80 70 Q90 85 95 80" stroke="#0f92f0" strokeWidth="6" strokeLinecap="round" fill="none" />
         {/* Hand */}
         <circle cx="95" cy="80" r="6" fill="#f8fafc" />
      </motion.g>

      {/* Accessories: Headset? Glasses? */}
      {/* Glasses */}
      {mood === 'thinking' && (
         <g opacity="0.8">
             <circle cx="35" cy="45" r="9" stroke="#334155" strokeWidth="1" fill="rgba(0,0,0,0.1)"/>
             <line x1="44" y1="45" x2="56" y2="45" stroke="#334155" strokeWidth="1"/>
             <circle cx="65" cy="45" r="9" stroke="#334155" strokeWidth="1" fill="rgba(0,0,0,0.1)"/>
         </g>
      )}

    </motion.svg>
  );
};

export default DevCharacter;
