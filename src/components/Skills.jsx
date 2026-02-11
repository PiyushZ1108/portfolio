import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MY_STACK } from '../utils/data';

gsap.registerPlugin(ScrollTrigger);

const SectionTitle = ({ title }) => (
    <div className="mb-20 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">{title}</h2>
        <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
    </div>
);

const Skills = () => {
    const containerRef = useRef(null);

    useGSAP(
        () => {
            const categories = gsap.utils.toArray('.skill-category');

            categories.forEach((category) => {
                const items = category.querySelectorAll('.slide-up');
                
                gsap.from(items, {
                    scrollTrigger: {
                        trigger: category,
                        start: "top 85%",
                        toggleActions: "play none none reverse",
                    },
                    y: 40,
                    opacity: 0,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: "power2.out"
                });
            });
        },
        { scope: containerRef }
    );

    useGSAP(
        () => {
            gsap.to(containerRef.current, {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom bottom',
                    end: 'bottom top',
                    scrub: 1,
                },
                y: -50,
                opacity: 0,
                ease: 'none'
            });
        },
        { scope: containerRef }
    );

    return (
        <section id="skills" ref={containerRef} className="py-32 px-4 relative z-10">
            <div className="max-w-7xl mx-auto">
                <SectionTitle title="Technical Arsenal" />

                <div className="space-y-10">
                    {Object.entries(MY_STACK).map(([key, value]) => (
                        <div className="grid sm:grid-cols-12 gap-8 skill-category" key={key}>
                            <div className="sm:col-span-5">
                                <p className="slide-up text-4xl font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                                    {key}
                                </p>
                            </div>

                            <div className="sm:col-span-7 flex gap-x-5 gap-y-4 flex-wrap">
                                {value.map((item) => (
                                    <div
                                        className="slide-up flex gap-3.5 items-center justify-center p-3 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-200/50 dark:border-slate-700/50 hover:bg-white dark:hover:bg-slate-800 transition-colors group"
                                        key={item.name}
                                    >
                                        <div className="w-10 h-10 p-1 flex items-center justify-center">
                                            <img
                                                src={item.icon}
                                                alt={item.name}
                                                className="w-full h-full object-contain filter group-hover:brightness-110 transition-all"
                                                onError={(e) => {
                                                    e.target.style.display = 'none';
                                                }}
                                            />
                                        </div>
                                        <span className="text-lg font-medium text-slate-700 dark:text-slate-300 capitalize">
                                            {item.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
