import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


const cardImages = [
    { src: "videogame_asset", matched: false },
    { src: "code", matched: false },
    { src: "terminal", matched: false },
    { src: "dataset", matched: false },
    { src: "smart_toy", matched: false },
    { src: "rocket_launch", matched: false },
];

const MiniGame = () => {

    const [cards, setCards] = useState([]);
    const [turns, setTurns] = useState(0);
    const [choiceOne, setChoiceOne] = useState(null);
    const [choiceTwo, setChoiceTwo] = useState(null);
    const [disabled, setDisabled] = useState(false);
    const [gameWon, setGameWon] = useState(false);

    // Shuffle cards
    const shuffleCards = () => {
        const shuffledCards = [...cardImages, ...cardImages]
            .sort(() => Math.random() - 0.5)
            .map((card) => ({ ...card, id: Math.random() }));
        
        setChoiceOne(null);
        setChoiceTwo(null);
        setCards(shuffledCards);
        setTurns(0);
        setGameWon(false);

    };

    const handleChoice = (card) => {
        choiceOne ? setChoiceTwo(card) : setChoiceOne(card);

    };

    useEffect(() => {

        shuffleCards();
    }, []);

    useEffect(() => {
        if (choiceOne && choiceTwo) {
            setDisabled(true);
            if (choiceOne.src === choiceTwo.src) {

                setCards(prevCards => {
                    return prevCards.map(card => {
                        if (card.src === choiceOne.src) {
                            return { ...card, matched: true };
                        }
                        return card;
                    });
                });
                resetTurn();
            } else {
                setTimeout(() => {
                    resetTurn();

                }, 1000);
            }
        }
    }, [choiceOne, choiceTwo]);

    useEffect(() => {
         if (cards.length > 0 && cards.every(card => card.matched)) {
             setGameWon(true);

         }
    }, [cards]);

    const resetTurn = () => {
        setChoiceOne(null);
        setChoiceTwo(null);
        setTurns(prevTurns => prevTurns + 1);
        setDisabled(false);
    };

    return (
    <section id="minigame" className="py-32 px-4 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
        >
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-4 border border-primary/20">Interactive</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">Memory Access</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                System optimized. Test your cognitive recall with this memory allocation interface.
            </p>
        </motion.div>

        <div className="bg-white/60 dark:bg-slate-900/40 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50 p-8 rounded-3xl shadow-2xl inline-block w-full max-w-2xl">
            <div className="flex justify-between items-center mb-8 px-4">
                 <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">history</span>
                    <p className="text-slate-700 dark:text-slate-300 font-bold text-lg">Turns: <span className="text-primary">{turns}</span></p>
                 </div>
                 <button 
                    onClick={shuffleCards} 
                    className="flex items-center gap-2 px-6 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl text-sm font-bold hover:scale-105 transition-transform shadow-lg"
                 >
                    <span className="material-symbols-outlined text-[18px]">refresh</span>
                    Reset Buffer
                 </button>
            </div>

            <div className="grid grid-cols-4 gap-4 sm:gap-6 mx-auto perspective-1000 max-w-md">
                {cards.map(card => (
                    <div key={card.id} className="relative aspect-square cursor-pointer">
                        <motion.div 
                            className="w-full h-full relative"
                            initial={false}
                            animate={{ rotateY: card === choiceOne || card === choiceTwo || card.matched ? 180 : 0 }}
                            transition={{ duration: 0.4, type: "spring", stiffness: 260, damping: 20 }}
                            style={{ transformStyle: 'preserve-3d' }}
                            onClick={() => !disabled && !card.matched && card !== choiceOne && handleChoice(card)}
                        >
                            {/* Front (Hidden state, visually showing 'back' of card) */}
                            <div 
                                className="absolute inset-0 bg-slate-200 dark:bg-slate-800/80 rounded-2xl border-2 border-slate-300 dark:border-slate-700 flex items-center justify-center hover:border-primary/50 transition-colors shadow-inner" 
                                style={{ backfaceVisibility: 'hidden' }}
                            >
                                <span className="material-symbols-outlined text-3xl text-slate-400 dark:text-slate-600">memory</span>
                            </div>

                            {/* Back (Revealed state, visually showing 'front' content) */}
                            <div 
                                className={`absolute inset-0 ${card.matched ? 'bg-gradient-to-br from-emerald-500 to-emerald-600 border-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.5)]' : 'bg-white dark:bg-slate-900 border-primary shadow-[0_0_15px_rgba(37,99,235,0.3)]'} rounded-2xl border-2 flex items-center justify-center`}
                                style={{ backfaceVisibility: 'hidden', transform: "rotateY(180deg)" }}
                            >
                                <span className={`material-symbols-outlined text-4xl ${card.matched ? 'text-white' : 'text-primary drop-shadow-md'}`}>
                                    {card.src === 'code' ? 'terminal' : 
                                     card.src === 'videogame_asset' ? 'sports_esports' :
                                     card.src === 'terminal' ? 'dvr' :
                                     card.src === 'dataset' ? 'storage' :
                                     card.src === 'smart_toy' ? 'smart_toy' :
                                     'rocket_launch'} 
                                </span>
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
            
             <AnimatePresence>
                 {gameWon && (
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="mt-8 p-6 bg-emerald-100/50 dark:bg-emerald-900/30 backdrop-blur-sm border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200 rounded-2xl inline-block shadow-xl"
                    >
                        <div className="flex flex-col items-center gap-2">
                             <div className="p-3 bg-emerald-500 text-white rounded-full mb-2 shadow-lg shadow-emerald-500/30">
                                <span className="material-symbols-outlined text-3xl">emoji_events</span>
                             </div>
                            <h3 className="font-bold text-2xl">System Optimized!</h3>
                            <p className="font-medium">Memory cleared in {turns} cycles.</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
      </div>
    </section>
    );
};

export default MiniGame;
