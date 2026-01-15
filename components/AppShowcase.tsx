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
    const isInView = useInView(ref, { once: true });

    return (
        <section className="py-12 sm:py-16 bg-foreground text-background px-4 sm:px-6">
            <div ref={ref} className="max-w-3xl mx-auto">
                {/* Header */}
                <motion.h2
                    initial={{ opacity: 0, y: 15 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    className="text-2xl sm:text-3xl font-black tracking-tight text-center mb-8"
                >
                    Design premium
                </motion.h2>

                {/* Phones */}
                <div className="flex justify-center items-end gap-2 sm:gap-4">
                    {screens.map((screen, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: index * 0.1 }}
                            className={index === 1 ? "z-10" : ""}
                        >
                            <div className={`
                                relative bg-background/20 rounded-xl sm:rounded-2xl p-0.5 sm:p-1
                                ${index === 1 ? "w-24 sm:w-36" : "w-16 sm:w-28 opacity-60"}
                            `}>
                                <div className="relative aspect-[9/19.5] bg-card rounded-lg sm:rounded-xl overflow-hidden">
                                    <Image src={screen.src} alt={screen.label} fill className="object-cover" />
                                </div>
                            </div>
                            <p className={`text-center mt-1.5 text-[10px] sm:text-xs ${index === 1 ? "" : "text-background/50"}`}>
                                {screen.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
