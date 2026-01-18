"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Dictionary } from "@/lib/dictionary";

interface StickyScrollProps {
    dict: Dictionary['stickyScroll'];
}

export function StickyScroll({ dict }: StickyScrollProps) {
    const [activeCard, setActiveCard] = useState(0);
    const [hasInteracted, setHasInteracted] = useState(false);
    const ref = useRef<any>(null);

    // Auto-rotate on desktop if not interacting
    useEffect(() => {
        if (hasInteracted) return;

        const interval = setInterval(() => {
            setActiveCard((prev) => (prev + 1) % dict.features.length);
        }, 4000); // Set to 4 seconds as requested
        return () => clearInterval(interval);
    }, [dict.features.length, hasInteracted]);

    const handleCardClick = (index: number) => {
        setActiveCard(index);
        setHasInteracted(true);
    };

    const images = [
        "/assets/app-screens/weekly-plan-light.png",
        "/assets/app-screens/food-search-light.png",
        "/assets/app-screens/home-dark.png",
    ];

    return (
        <div className="py-16 sm:py-24 lg:py-32 bg-white dark:bg-[#050505] overflow-hidden transition-colors duration-300" id="features" ref={ref}>
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="flex justify-center mb-16 sm:mb-24">
                    <h2 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter text-center max-w-3xl font-[family-name:var(--font-heading)] text-zinc-900 dark:text-white leading-none">
                        {dict.title.prefix} <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-neutral-500 dark:to-neutral-800">
                            {dict.title.suffix}
                        </span>
                    </h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Desktop: Feature List (Left Side) */}
                    <div className="hidden lg:flex flex-col gap-8 order-1">
                        {dict.features.map((item, index) => (
                            <div
                                key={index}
                                onClick={() => handleCardClick(index)}
                                className={cn(
                                    "group cursor-pointer p-8 rounded-3xl transition-all duration-300 border",
                                    activeCard === index
                                        ? "bg-zinc-100 border-zinc-200 dark:bg-white/5 dark:border-white/10 shadow-lg scale-100"
                                        : "bg-transparent border-transparent opacity-50 hover:opacity-100 scale-95 hover:bg-zinc-50 dark:hover:bg-white/5"
                                )}
                            >
                                <h3 className={cn(
                                    "text-3xl font-bold mb-3 transition-colors",
                                    activeCard === index ? "text-zinc-900 dark:text-white" : "text-zinc-500 dark:text-neutral-400 group-hover:text-zinc-900 dark:group-hover:text-white"
                                )}>
                                    {item.title}
                                </h3>
                                <div className={cn(
                                    "overflow-hidden transition-all duration-500",
                                    activeCard === index ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"
                                )}>
                                    <p className="text-lg text-zinc-600 dark:text-neutral-400 leading-relaxed font-medium">
                                        {item.description}
                                    </p>
                                </div>
                                {/* Progress bar for active state */}
                                {activeCard === index && (
                                    <motion.div
                                        layoutId="active-highlight"
                                        className="h-1 w-20 bg-zinc-900 dark:bg-white rounded-full mt-6"
                                        transition={{ duration: 0.3 }}
                                    />
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Desktop: Phone Preview (Right Side) */}
                    <div className="hidden lg:flex items-center justify-center order-2 h-[600px] relative">
                        {/* Centered Phone Container */}
                        <div className="relative w-[300px] aspect-[9/19.5] transition-all duration-700 ease-out">
                            {/* Glow */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/20 dark:bg-white/5 rounded-full blur-[100px] -z-10" />

                            {/* Phone Frame */}
                            <div className="relative w-full h-full bg-black rounded-[50px] shadow-2xl border-[8px] border-zinc-800 dark:border-neutral-900 overflow-hidden ring-1 ring-black/5 dark:ring-white/10">
                                {/* Dynamic Island */}
                                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-8 bg-black rounded-full z-20" />

                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeCard}
                                        initial={{ opacity: 0, scale: 1.1 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ duration: 0.5, ease: "circOut" }}
                                        className="absolute inset-0 h-full w-full bg-white dark:bg-black"
                                    >
                                        <Image
                                            src={images[activeCard]}
                                            alt="App Screen"
                                            fill
                                            className="object-cover"
                                            priority
                                        />
                                        {/* Overlay gradient for depth */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>

                    {/* Mobile: Premium Swipeable Slider */}
                    <div className="lg:hidden relative">
                        {/* Scrollable Container */}
                        <div
                            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-4 px-4 pb-6 gap-4"
                            onScroll={(e) => {
                                const scrollLeft = e.currentTarget.scrollLeft;
                                const width = e.currentTarget.offsetWidth;
                                const newIndex = Math.round(scrollLeft / width);
                                setActiveCard(newIndex);
                            }}
                        >
                            {dict.features.map((item, index) => (
                                <div
                                    key={index}
                                    className="snap-center shrink-0 w-full"
                                >
                                    <div className="flex flex-col gap-5">
                                        {/* Image Container - Prominent & Full Visibility */}
                                        <div className="relative w-full aspect-[9/16] rounded-[32px] overflow-hidden bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 shadow-2xl">
                                            <Image
                                                src={images[index]}
                                                alt={item.title}
                                                fill
                                                className="object-contain p-2"
                                                sizes="(max-width: 768px) 100vw, 350px"
                                                priority={index === 0}
                                            />
                                            {/* Inner Shine */}
                                            <div className="absolute inset-0 ring-1 ring-inset ring-black/5 dark:ring-white/10 pointer-events-none rounded-[32px]" />
                                        </div>

                                        {/* Text Content */}
                                        <div className="px-2">
                                            <h3 className="text-2xl sm:text-3xl font-bold mb-2 text-zinc-900 dark:text-white">
                                                {item.title}
                                            </h3>
                                            <p className="text-lg text-zinc-600 dark:text-neutral-400 leading-relaxed font-medium">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Pagination Dots */}
                        <div className="flex justify-center gap-2 mt-4 pb-8">
                            {dict.features.map((_, index) => (
                                <div
                                    key={index}
                                    className={cn(
                                        "h-2 rounded-full transition-all duration-300",
                                        activeCard === index
                                            ? "w-8 bg-zinc-900 dark:bg-white"
                                            : "w-2 bg-zinc-300 dark:bg-white/20"
                                    )}
                                />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
