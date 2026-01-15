import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';


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
        <section id="minigame" className="py-20 px-4 bg-slate-50 dark:bg-slate-900/20">
            <div className="max-w-4xl mx-auto text-center">
                <span className="inline-block py-1 px-3 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-widest mb-4">Interactive</span>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Memory Match</h2>
                <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-lg mx-auto">
                    Take a break! Test your memory with this simple game built using React hooks (useState, useEffect) to manage game state and logic.
                </p>

                <div className="flex justify-between items-center max-w-sm mx-auto mb-6 px-4">
                     <p className="text-slate-700 dark:text-slate-300 font-bold">Turns: {turns}</p>
                     <button onClick={shuffleCards} className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:bg-blue-600 transition-colors">Restart Game</button>
                </div>

                <div className="grid grid-cols-4 gap-3 max-w-[400px] mx-auto perspective-1000">
                    {cards.map(card => (
                        <div key={card.id} className="relative aspect-square cursor-pointer">
                            <motion.div 
                                className={`w-full h-full relative transition-all duration-500 transform-style-3d`}
                                style={{ transformStyle: 'preserve-3d' }}
                                onClick={() => !disabled && !card.matched && card !== choiceOne && handleChoice(card)}
                                animate={{ rotateY: card === choiceOne || card === choiceTwo || card.matched ? 180 : 0 }}
                            >
                                {/* Front (Hidden) */}
                                <div 
                                    className="absolute inset-0 bg-slate-200 dark:bg-slate-700 rounded-xl border-2 border-slate-300 dark:border-slate-600 flex items-center justify-center backface-hidden" 
                                    style={{ backfaceVisibility: 'hidden', transform: "rotateY(0deg)" }}
                                >
                                    <span className="material-symbols-outlined text-3xl text-slate-400 dark:text-slate-500">help</span>
                                </div>

                                {/* Back (Revealed) */}
                                <div 
                                    className={`absolute inset-0 ${card.matched ? 'bg-emerald-500 border-emerald-600' : 'bg-white dark:bg-slate-800 border-primary'} rounded-xl border-2 flex items-center justify-center backface-hidden`}
                                    style={{ backfaceVisibility: 'hidden', transform: "rotateY(180deg)" }}
                                >
                                    <span className={`material-symbols-outlined text-3xl ${card.matched ? 'text-white' : 'text-primary'}`}>
                                        {card.src}
                                    </span>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
                
                 {gameWon && (
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="mt-8 p-4 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-200 rounded-xl inline-block"
                    >
                        <h3 className="font-bold text-lg">🎉 You Won!</h3>
                        <p>Great memory! Finished in {turns} turns.</p>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default MiniGame;
