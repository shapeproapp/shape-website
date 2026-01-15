"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const screenshots = [
    { src: "/assets/app-screens/home-light.png", label: "Dashboard" },
    { src: "/assets/app-screens/workout-detail-dark.png", label: "Workout" },
    { src: "/assets/app-screens/food-detail-dark.png", label: "Nutrition" },
];

export function AppShowcase() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <section className="py-16 sm:py-24 bg-foreground text-background overflow-hidden">
            <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6">
                {/* Header */}
                <div className="text-center mb-10 sm:mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-3"
                    >
                        Design premium
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.1 }}
                        className="text-background/60 text-base sm:text-lg"
                    >
                        Une interface épurée pour vous concentrer sur vos résultats
                    </motion.p>
                </div>

                {/* Phone Mockups */}
                <div className="flex justify-center items-end gap-3 sm:gap-6">
                    {screenshots.map((screen, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                            className={index === 1 ? "z-10" : "z-0"}
                        >
                            <div className={`
                                relative bg-black rounded-[20px] sm:rounded-[32px] p-1 sm:p-1.5 shadow-xl
                                ${index === 1
                                    ? "w-[100px] sm:w-[160px] lg:w-[200px]"
                                    : "w-[80px] sm:w-[130px] lg:w-[160px] opacity-70"
                                }
                            `}>
                                <div className="relative aspect-[9/19.5] bg-card rounded-[16px] sm:rounded-[28px] overflow-hidden">
                                    <Image
                                        src={screen.src}
                                        alt={screen.label}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                            <p className={`text-center mt-2 sm:mt-3 text-xs sm:text-sm ${index === 1 ? "text-background" : "text-background/50"
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
