import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';

const CharacterContext = createContext();

export const CharacterProvider = ({ children }) => {
  const [mood, setMood] = useState('neutral'); // neutral, happy, thinking, excited, sad
  const [action, setAction] = useState('idle'); // idle, wave, point, thumbsUp
  const [message, setMessage] = useState(null);
  const [targetSection, setTargetSection] = useState('hero'); // which section is currently active

  // Helper to reset to idle after a duration
  const triggerAction = useCallback((newAction, duration = 3000) => {
    setAction(newAction);
    if (duration > 0) {
      setTimeout(() => {
        setAction('idle');
      }, duration);
    }
  }, []);

  const triggerMessage = useCallback((text, duration = 4000) => {
    setMessage(text);
    if (duration > 0) {
      setTimeout(() => {
        setMessage(null);
      }, duration);
    }
  }, []);

  const value = {
    mood,
    setMood,
    action,
    setAction,
    triggerAction,
    message,
    setMessage,
    triggerMessage,
    targetSection,
    setTargetSection
  };

  return (
    <CharacterContext.Provider value={value}>
      {children}
    </CharacterContext.Provider>
  );
};

export const useCharacter = () => {
  const context = useContext(CharacterContext);
  if (!context) {
    throw new Error('useCharacter must be used within a CharacterProvider');
  }
  return context;
};
