"use client";

import { motion, useInView } from "framer-motion";
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
    const [activeIndex, setActiveIndex] = useState(1);
    const [isMobile, setIsMobile] = useState(false);

    // Detect mobile screen
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 640);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Auto-rotate carousel every 4 seconds
    useEffect(() => {
        if (!isInView) return;

        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % screens.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [isInView]);

    // Get positions for carousel
    const getPositions = () => {
        const positions: string[] = [];
        for (let i = 0; i < screens.length; i++) {
            const diff = (i - activeIndex + screens.length) % screens.length;
            if (diff === 0) positions[i] = 'center';
            else if (diff === 1) positions[i] = 'right';
            else positions[i] = 'left';
        }
        return positions;
    };

    const positions = getPositions();

    // Responsive transform values
    const getTransformValues = (position: string) => {
        const mobileOffset = 100;
        const desktopOffset = 180;
        const offset = isMobile ? mobileOffset : desktopOffset;

        if (position === 'center') {
            return {
                x: 0,
                rotateY: 0,
                scale: 1,
                zIndex: 10,
                opacity: 1,
            };
        } else if (position === 'left') {
            return {
                x: -offset,
                rotateY: isMobile ? 25 : 35,
                scale: isMobile ? 0.65 : 0.75,
                zIndex: 5,
                opacity: isMobile ? 0.4 : 0.5,
            };
        } else {
            return {
                x: offset,
                rotateY: isMobile ? -25 : -35,
                scale: isMobile ? 0.65 : 0.75,
                zIndex: 5,
                opacity: isMobile ? 0.4 : 0.5,
            };
        }
    };

    return (
        <section className="py-16 sm:py-32 border-t border-border overflow-hidden">
            <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    className="text-center mb-10 sm:mb-20"
                >
                    <p className="text-xs sm:text-sm uppercase tracking-widest text-muted-foreground mb-3 sm:mb-4">Design</p>
                    <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
                        Interface premium
                    </h2>
                </motion.div>

                {/* Phones Carousel */}
                <div
                    className="relative flex justify-center items-center h-[420px] sm:h-[600px]"
                    style={{ perspective: isMobile ? "800px" : "1200px" }}
                >
                    {screens.map((screen, index) => {
                        const position = positions[index];
                        const isCenter = position === 'center';
                        const transform = getTransformValues(position);

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
                                <div className="relative glass rounded-[28px] sm:rounded-[40px] p-1 sm:p-1.5 w-40 sm:w-64 lg:w-72">
                                    <div className="relative aspect-[9/19.5] bg-card rounded-[24px] sm:rounded-[36px] overflow-hidden">
                                        <Image src={screen.src} alt={screen.label} fill className="object-cover" />
                                    </div>
                                </div>

                                <motion.p
                                    animate={{ opacity: isCenter ? 1 : 0.5 }}
                                    transition={{ duration: 0.8 }}
                                    className={`text-center mt-3 sm:mt-4 text-xs sm:text-sm font-medium ${isCenter ? 'text-foreground' : 'text-muted-foreground'}`}
                                >
                                    {screen.label}
                                </motion.p>

                                {/* Center glow effect */}
                                <motion.div
                                    animate={{ opacity: isCenter ? 1 : 0 }}
                                    transition={{ duration: 0.8 }}
                                    className="absolute -inset-8 sm:-inset-16 bg-foreground/5 rounded-full blur-3xl -z-10"
                                />
                            </motion.div>
                        );
                    })}
                </div>

                {/* Progress indicators */}
                <div className="flex justify-center gap-2 mt-4 sm:mt-8">
                    {screens.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={`h-1.5 rounded-full transition-all duration-500 ${index === activeIndex
                                    ? 'w-6 sm:w-8 bg-foreground'
                                    : 'w-2 bg-foreground/20 hover:bg-foreground/40'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
