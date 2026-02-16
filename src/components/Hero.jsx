import React, { useState, useEffect, Suspense, lazy } from 'react';
import DecoderText from './DecoderText';
import VisuallyHidden from './VisuallyHidden';
import useDarkMode from '../hooks/useDarkMode';
import { useInterval } from '../hooks/useInterval';
import { usePrevious } from '../hooks/usePrevious';
import config from '../config.json';
import styles from './Intro.module.css';
import { Transition } from './Transition';
import { cssProps } from '../utils/style';
import { tokens } from './theme-provider/theme';

const ThreeBackground = lazy(() => import('./ThreeBackground'));

const Hero = () => {
    const { disciplines } = config;
    const [disciplineIndex, setDisciplineIndex] = useState(0);
    const [colorTheme] = useDarkMode();
    const theme = colorTheme === 'light' ? 'dark' : 'light'; 
    const prevTheme = usePrevious(theme);
    const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false); 

    const currentDiscipline = disciplines.find((item, index) => index === disciplineIndex);
    const titleId = `intro-title`;

    useInterval(
        () => {
            const index = (disciplineIndex + 1) % disciplines.length;
            setDisciplineIndex(index);
        },
        5000
    );

    useEffect(() => {
        if (prevTheme !== undefined && prevTheme !== theme) {
             setDisciplineIndex(0);
        }
    }, [prevTheme, theme]);

    return (
        <section 
            className={styles.intro}
            aria-label="Introduction"
            id="intro"
            aria-labelledby={titleId}
        >
             <Suspense fallback={null}>
                <ThreeBackground />
             </Suspense>

             <Transition in key={theme} timeout={3000}>
                 {({ visible, status }) => (
                     <>
                        <header className={styles.text}>
                            <h1 className={styles.name} data-visible={visible} id={titleId}>
                                <DecoderText text={config.name} delay={300} />
                            </h1>
                            <h2 className={styles.title}>
                                <span className={styles.row}>
                                    <span
                                        className={styles.word}
                                        data-status={status}
                                        style={cssProps({ delay: tokens.base.durationXS })}
                                    >
                                        {config.role}
                                    </span>
                                    <span className={styles.line} data-status={status} />
                                </span>
 </h2>
                        <h2 className={styles.title}>
    

                                <div className={styles.row}>
                                    {disciplines.map(item => (
                                        <Transition
                                            unmount
                                            in={item === currentDiscipline}
                                            timeout={{ enter: 3000, exit: 2000 }}
                                            key={item}
                                        >
                                            {({ status: itemStatus, nodeRef }) => (
                                                <span
                                                    aria-hidden
                                                    ref={nodeRef}
                                                    className={styles.word}
                                                    data-plus={true}
                                                    data-status={itemStatus}
                                                    style={cssProps({ delay: tokens.base.durationL })}
                                                >
                                                    {item}
                                                </span>
                                            )}
                                        </Transition>
                                    ))}
                                </div>
                            </h2>
                        </header>

                        <a
                            href="#projects"
                            className={styles.scrollIndicator}
                            data-status={status}
                            data-hidden={scrollIndicatorHidden}
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                        >
                            <VisuallyHidden>Scroll to projects</VisuallyHidden>
                        </a>
                        
                        <a
                            href="#projects"
                            className={styles.mobileScrollIndicator}
                            data-status={status}
                            data-hidden={scrollIndicatorHidden}
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                        >
                            <VisuallyHidden>Scroll to projects</VisuallyHidden>
                            <svg
                                aria-hidden
                                stroke="currentColor"
                                width="43"
                                height="15"
                                viewBox="0 0 43 15"
                            >
                                <path d="M1 1l20.5 12L42 1" strokeWidth="2" fill="none" />
                            </svg>
                        </a>
                     </>
                 )}
             </Transition>
        </section>
    );
};

export default Hero;