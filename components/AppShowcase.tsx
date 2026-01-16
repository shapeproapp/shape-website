"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const screens = [
    { src: "/assets/app-screens/home-light.png", label: "Dashboard" },
    { src: "/assets/app-screens/workout-detail-dark.png", label: "Workout" },
    { src: "/assets/app-screens/food-detail-dark.png", label: "Nutrition" },
];

export function AppShowcase() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className="py-24 sm:py-32 border-t border-border overflow-hidden">
            <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    className="text-center mb-16 sm:mb-20"
                >
                    <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">Design</p>
                    <h2 className="text-4xl sm:text-5xl font-black tracking-tight">
                        Interface premium
                    </h2>
                </motion.div>

                {/* Phones */}
                <div className="flex justify-center items-end gap-4 sm:gap-8" style={{ perspective: "1000px" }}>
                    {screens.map((screen, index) => {
                        const isCenter = index === 1;
                        const rotation = index === 0 ? 15 : index === 2 ? -15 : 0;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 80, rotateY: rotation }}
                                animate={isInView ? { opacity: 1, y: 0, rotateY: rotation * 0.5 } : {}}
                                transition={{ delay: 0.2 + index * 0.15, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                className={`relative ${isCenter ? 'z-10' : 'z-0'}`}
                                style={{ transformStyle: 'preserve-3d' }}
                            >
                                <div className={`
                                    relative glass rounded-[32px] sm:rounded-[40px] p-1 sm:p-1.5
                                    ${isCenter ? 'w-48 sm:w-64 lg:w-72' : 'w-32 sm:w-44 lg:w-52 opacity-60'}
                                `}>
                                    <div className="relative aspect-[9/19.5] bg-card rounded-[28px] sm:rounded-[36px] overflow-hidden">
                                        <Image src={screen.src} alt={screen.label} fill className="object-cover" />
                                    </div>
                                </div>

                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={isInView ? { opacity: 1 } : {}}
                                    transition={{ delay: 0.8 }}
                                    className={`text-center mt-4 text-sm ${isCenter ? '' : 'text-muted-foreground'}`}
                                >
                                    {screen.label}
                                </motion.p>

                                {isCenter && (
                                    <div className="absolute -inset-16 bg-foreground/5 rounded-full blur-3xl -z-10" />
                                )}
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
