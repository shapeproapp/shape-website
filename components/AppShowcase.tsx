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
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <section className="py-14 sm:py-20 bg-foreground text-background overflow-hidden">
            <div ref={ref} className="max-w-4xl mx-auto px-4 sm:px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    className="text-center mb-10"
                >
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight mb-2">
                        Design premium
                    </h2>
                    <p className="text-background/60 text-sm">
                        Une interface pensée pour vous
                    </p>
                </motion.div>

                {/* Phones with staggered animation */}
                <div className="flex justify-center items-end gap-3 sm:gap-5" style={{ perspective: "1000px" }}>
                    {screens.map((screen, index) => {
                        const isCenter = index === 1;
                        return (
                            <motion.div
                                key={index}
                                initial={{
                                    opacity: 0,
                                    y: 60,
                                    rotateY: index === 0 ? 15 : index === 2 ? -15 : 0
                                }}
                                animate={isInView ? {
                                    opacity: 1,
                                    y: 0,
                                    rotateY: index === 0 ? 8 : index === 2 ? -8 : 0
                                } : {}}
                                transition={{
                                    delay: 0.2 + index * 0.1,
                                    duration: 0.8,
                                    ease: [0.16, 1, 0.3, 1]
                                }}
                                whileHover={{
                                    y: -10,
                                    rotateY: 0,
                                    scale: 1.05,
                                    zIndex: 20
                                }}
                                className={`relative ${isCenter ? "z-10" : "z-0"}`}
                            >
                                <div className={`
                                    relative bg-background/10 rounded-2xl sm:rounded-3xl p-0.5 sm:p-1 backdrop-blur-sm
                                    ${isCenter
                                        ? "w-28 sm:w-40 lg:w-48 shadow-2xl"
                                        : "w-20 sm:w-32 lg:w-36 opacity-70"
                                    }
                                `}>
                                    <div className="relative aspect-[9/19.5] bg-card rounded-xl sm:rounded-2xl overflow-hidden">
                                        <Image src={screen.src} alt={screen.label} fill className="object-cover" />
                                    </div>
                                </div>
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={isInView ? { opacity: 1 } : {}}
                                    transition={{ delay: 0.6 + index * 0.1 }}
                                    className={`text-center mt-3 text-xs sm:text-sm font-medium ${isCenter ? "" : "text-background/50"}`}
                                >
                                    {screen.label}
                                </motion.p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
