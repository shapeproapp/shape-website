"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { useScroll, useMotionValueEvent, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Dictionary } from "@/lib/dictionary";

interface StickyScrollProps {
    dict: Dictionary['stickyScroll'];
}

export function StickyScroll({ dict }: StickyScrollProps) {
    const [activeCard, setActiveCard] = useState(0);
    const ref = useRef<any>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"],
    });

    const images = [
        "/assets/screenshots/workout.png",
        "/assets/screenshots/profile.png",
        "/assets/screenshots/dashboard.png",
    ];

    const cardLength = dict.features.length;

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const cardsBreakpoints = dict.features.map((_, index) => index / cardLength);
        const closestBreakpointIndex = cardsBreakpoints.reduce(
            (acc, breakpoint, index) => {
                const distance = Math.abs(latest - breakpoint);
                if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
                    return index;
                }
                return acc;
            },
            0
        );
        setActiveCard(closestBreakpointIndex);
    });

    return (
        <div className="py-12 sm:py-20 lg:py-32 bg-[#050505]" id="features" ref={ref}>
            <div className="flex justify-center mb-10 sm:mb-16 px-4">
                <h2 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tight text-center max-w-2xl font-[family-name:var(--font-heading)] text-white">
                    {dict.title.prefix} <br className="hidden md:block" />
                    <span className="text-gray-500">{dict.title.suffix}</span>
                </h2>
            </div>

            <motion.div
                className="lg:h-[180vh] flex flex-col justify-center relative space-y-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            >
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 h-full">

                    {/* Left Stick Portion (Phone) - Desktop Only */}
                    <div className="hidden lg:block h-[600px] sticky top-32">
                        <div className="relative w-[300px] sm:w-[320px] mx-auto aspect-[9/19.5] transition-transform duration-700 ease-out">
                            <div className="absolute inset-0 bg-black rounded-[48px] shadow-2xl border-[6px] border-zinc-900 overflow-hidden transform-gpu">
                                {/* Dynamic Island */}
                                <div className="absolute top-0 w-full h-7 bg-black z-20 flex justify-center">
                                    <div className="w-20 h-5 bg-black rounded-b-2xl" />
                                </div>
                                {images.map((imgSrc, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: activeCard === index ? 1 : 0 }}
                                        transition={{ duration: 0.5 }}
                                        className="absolute inset-0 h-full w-full"
                                    >
                                        <Image
                                            src={imgSrc}
                                            alt="App Screen"
                                            fill
                                            className="object-cover"
                                            priority={index === 0}
                                        />
                                    </motion.div>
                                ))}
                            </div>
                            {/* Glow behind phone */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[500px] bg-blue-500/10 rounded-full blur-[80px] -z-10" />
                        </div>
                    </div>

                    {/* Right Scroll Portion (Text) */}
                    <div className="flex flex-col justify-center relative pt-4 lg:pt-0">
                        {dict.features.map((item, index) => (
                            <div key={index} className="lg:min-h-[60vh] flex flex-col justify-center my-6 lg:my-10 group">
                                <motion.div
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ margin: "-50px", once: true }} // Changed for better mobile feel
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className={cn(
                                        "p-6 sm:p-10 rounded-3xl border backdrop-blur-sm transition-all duration-300",
                                        // Mobile: always active style. Desktop: controlled by activeCard
                                        "lg:opacity-20 lg:grayscale lg:blur-[1px] lg:scale-95 lg:border-transparent",
                                        "lg:bg-transparent lg:shadow-none",
                                        // Active state overrides for desktop
                                        activeCard === index && "lg:!opacity-100 lg:!grayscale-0 lg:!blur-0 lg:!scale-105 lg:!bg-white/5 lg:!border-white/10 lg:!shadow-xl",
                                        // Mobile base style (always active-ish)
                                        "opacity-100 grayscale-0 blur-0 scale-100 bg-white/5 border-white/10 shadow-xl lg:shadow-none"
                                    )}
                                >
                                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6 font-[family-name:var(--font-heading)]">
                                        {item.title}
                                    </h2>
                                    <p className="text-base sm:text-lg text-gray-400 leading-relaxed font-medium">
                                        {item.description}
                                    </p>

                                    {/* Mobile Only Image */}
                                    <div className="lg:hidden mt-6 relative w-full aspect-[9/16] rounded-2xl overflow-hidden border border-white/10 shadow-sm">
                                        <Image
                                            src={images[index]}
                                            alt={item.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                        {/* Spacer for bottom on desktop only */}
                        <div className="hidden lg:block h-[20vh]" />
                    </div>

                </div>
            </motion.div>
        </div>
    );
}
