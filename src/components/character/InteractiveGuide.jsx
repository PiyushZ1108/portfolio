import React, { useEffect, useState } from 'react';
import { useCharacter } from '../../context/CharacterContext';
import DevCharacter from './DevCharacter';
import SpeechBubble from './SpeechBubble';
import { motion } from 'framer-motion';

const InteractiveGuide = () => {
  const { mood, action, message, targetSection } = useCharacter();
  const [lookAt, setLookAt] = useState('center');

  // Logic to look towards the center of the screen based on position
  // or look towards specific elements if needed.
  useEffect(() => {
    if (targetSection === 'skills') {
      setLookAt('right');
    } else if (targetSection === 'about') {
      setLookAt('left');
    } else {
      setLookAt('center');
    }
  }, [targetSection]);

  return (
    <motion.div
      className="fixed bottom-8 right-8 z-[100] flex flex-col items-center"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, type: 'spring' }}
    >
      <div className="relative">
        <SpeechBubble message={message} />
        <DevCharacter mood={mood} action={action} lookAt={lookAt} />
      </div>
    </motion.div>
  );
};

export default InteractiveGuide;
