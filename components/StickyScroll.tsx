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
        }, 5000);
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


                    {/* Mobile: Premium Tabbed Interface */}
                    <div className="lg:hidden flex flex-col gap-8">

                        {/* 1. Tab Selector (Pills) */}
                        <div className="flex gap-2 overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide snap-x">
                            {dict.features.map((item, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleCardClick(index)}
                                    className={cn(
                                        "snap-center shrink-0 px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 border whitespace-nowrap",
                                        activeCard === index
                                            ? "bg-zinc-900 dark:bg-white text-white dark:text-black border-zinc-900 dark:border-white shadow-md transform scale-105"
                                            : "bg-transparent border-zinc-200 dark:border-white/10 text-zinc-500 dark:text-neutral-400 hover:bg-zinc-100 dark:hover:bg-white/5"
                                    )}
                                >
                                    {item.title}
                                </button>
                            ))}
                        </div>

                        {/* 2. Active Content Area */}
                        <div className="relative min-h-[600px]">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeCard}
                                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: -10, scale: 0.98 }}
                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                    className="flex flex-col gap-6"
                                >
                                    {/* Text Content */}
                                    <div className="px-1">
                                        <h3 className="text-3xl font-bold mb-3 text-zinc-900 dark:text-white">
                                            {dict.features[activeCard].title}
                                        </h3>
                                        <p className="text-lg text-zinc-600 dark:text-neutral-400 leading-relaxed font-medium">
                                            {dict.features[activeCard].description}
                                        </p>
                                    </div>

                                    {/* Image Container - Full Focus */}
                                    <div className="relative w-full aspect-[9/16] rounded-[32px] overflow-hidden bg-black border-[4px] border-zinc-200 dark:border-zinc-800 shadow-2xl">
                                        {/* Glow Effect */}
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/20 dark:bg-white/10 blur-3xl -z-10" />

                                        <Image
                                            src={images[activeCard]}
                                            alt={dict.features[activeCard].title}
                                            fill
                                            className="object-cover"
                                            priority
                                        />

                                        {/* Inner Shine */}
                                        <div className="absolute inset-0 ring-1 ring-inset ring-white/10 pointer-events-none rounded-[32px]" />
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
