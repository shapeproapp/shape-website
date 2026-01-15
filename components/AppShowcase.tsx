"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const screenshots = [
    { src: "/assets/app-screens/home-light.png", label: "Dashboard" },
    { src: "/assets/app-screens/workout-detail-dark.png", label: "Entraînement" },
    { src: "/assets/app-screens/food-detail-dark.png", label: "Nutrition" },
];

export function AppShowcase() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className="py-24 lg:py-32 bg-foreground text-background overflow-hidden">
            <div ref={ref} className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-4"
                    >
                        Conçu pour performer
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-background/60 max-w-xl mx-auto"
                    >
                        Une interface épurée pour vous concentrer sur l'essentiel : vos résultats.
                    </motion.p>
                </div>

                {/* Phone Mockups - Clean row */}
                <div className="flex justify-center items-end gap-4 sm:gap-8">
                    {screenshots.map((screen, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 60 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.2 + index * 0.15, duration: 0.6 }}
                            className={`relative ${index === 1 ? "z-10" : "z-0"}`}
                        >
                            {/* Phone Frame */}
                            <div className={`
                                relative bg-black rounded-[32px] sm:rounded-[40px] p-1.5 sm:p-2 shadow-2xl
                                ${index === 1
                                    ? "w-[180px] sm:w-[260px] lg:w-[300px]"
                                    : "w-[140px] sm:w-[200px] lg:w-[240px] opacity-80"
                                }
                            `}>
                                <div className="relative aspect-[9/19.5] bg-card rounded-[28px] sm:rounded-[36px] overflow-hidden">
                                    {/* Dynamic Island */}
                                    <div className="absolute top-1.5 sm:top-2 left-1/2 -translate-x-1/2 w-16 sm:w-20 h-5 sm:h-6 bg-black rounded-full z-10" />

                                    {/* Screen */}
                                    <Image
                                        src={screen.src}
                                        alt={screen.label}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>

                            {/* Label */}
                            <p className={`text-center mt-4 font-medium ${index === 1 ? "text-background text-sm sm:text-base" : "text-background/60 text-xs sm:text-sm"
                                }`}>
                                {screen.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
