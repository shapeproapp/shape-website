"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

const screens = [
    { src: "/assets/app-screens/home-light.png", label: "Dashboard" },
    { src: "/assets/app-screens/workout-detail-dark.png", label: "Workout" },
    { src: "/assets/app-screens/food-detail-dark.png", label: "Nutrition" },
];

export function AppShowcase() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [activeIndex, setActiveIndex] = useState(1); // Start with middle screen

    // Auto-rotate carousel every 4 seconds
    useEffect(() => {
        if (!isInView) return;

        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % screens.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [isInView]);

    // Get positions for carousel: returns [left, center, right] based on activeIndex
    const getPositions = () => {
        const positions = [];
        for (let i = 0; i < screens.length; i++) {
            const diff = (i - activeIndex + screens.length) % screens.length;
            if (diff === 0) positions[i] = 'center';
            else if (diff === 1) positions[i] = 'right';
            else positions[i] = 'left';
        }
        return positions;
    };

    const positions = getPositions();

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

                {/* Phones Carousel */}
                <div
                    className="relative flex justify-center items-center h-[500px] sm:h-[600px]"
                    style={{ perspective: "1200px" }}
                >
                    {screens.map((screen, index) => {
                        const position = positions[index];
                        const isCenter = position === 'center';
                        const isLeft = position === 'left';
                        const isRight = position === 'right';

                        // Calculate transforms based on position
                        const getTransform = () => {
                            if (isCenter) {
                                return {
                                    x: 0,
                                    rotateY: 0,
                                    scale: 1,
                                    zIndex: 10,
                                    opacity: 1,
                                };
                            } else if (isLeft) {
                                return {
                                    x: -180,
                                    rotateY: 35,
                                    scale: 0.75,
                                    zIndex: 5,
                                    opacity: 0.5,
                                };
                            } else {
                                return {
                                    x: 180,
                                    rotateY: -35,
                                    scale: 0.75,
                                    zIndex: 5,
                                    opacity: 0.5,
                                };
                            }
                        };

                        const transform = getTransform();

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 80 }}
                                animate={isInView ? {
                                    opacity: transform.opacity,
                                    y: 0,
                                    x: transform.x,
                                    rotateY: transform.rotateY,
                                    scale: transform.scale,
                                } : { opacity: 0, y: 80 }}
                                transition={{
                                    duration: 1.2,
                                    ease: [0.25, 0.1, 0.25, 1],
                                    opacity: { duration: 0.8 }
                                }}
                                className="absolute"
                                style={{
                                    transformStyle: 'preserve-3d',
                                    zIndex: transform.zIndex,
                                }}
                            >
                                <div className="relative glass rounded-[32px] sm:rounded-[40px] p-1 sm:p-1.5 w-48 sm:w-64 lg:w-72">
                                    <div className="relative aspect-[9/19.5] bg-card rounded-[28px] sm:rounded-[36px] overflow-hidden">
                                        <Image src={screen.src} alt={screen.label} fill className="object-cover" />
                                    </div>
                                </div>

                                <motion.p
                                    animate={{ opacity: isCenter ? 1 : 0.5 }}
                                    transition={{ duration: 0.8 }}
                                    className={`text-center mt-4 text-sm font-medium ${isCenter ? 'text-foreground' : 'text-muted-foreground'}`}
                                >
                                    {screen.label}
                                </motion.p>

                                {/* Center glow effect */}
                                <motion.div
                                    animate={{ opacity: isCenter ? 1 : 0 }}
                                    transition={{ duration: 0.8 }}
                                    className="absolute -inset-16 bg-foreground/5 rounded-full blur-3xl -z-10"
                                />
                            </motion.div>
                        );
                    })}
                </div>

                {/* Progress indicators */}
                <div className="flex justify-center gap-2 mt-8">
                    {screens.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={`h-1.5 rounded-full transition-all duration-500 ${index === activeIndex
                                    ? 'w-8 bg-foreground'
                                    : 'w-2 bg-foreground/20 hover:bg-foreground/40'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
