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
    const ref = useRef<any>(null);

    // Auto-rotate on desktop if not interacting
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveCard((prev) => (prev + 1) % dict.features.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [dict.features.length]);

    const images = [
        "/assets/app-screens/weekly-plan-light.png",
        "/assets/app-screens/food-search-light.png",
        "/assets/app-screens/home-dark.png",
    ];

    return (
        <div className="py-16 sm:py-24 lg:py-32 bg-[#050505] overflow-hidden" id="features" ref={ref}>
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="flex justify-center mb-16 sm:mb-24">
                    <h2 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter text-center max-w-3xl font-[family-name:var(--font-heading)] text-white loading-none">
                        {dict.title.prefix} <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-500 to-neutral-800">
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
                                onClick={() => setActiveCard(index)}
                                className={cn(
                                    "group cursor-pointer p-8 rounded-3xl transition-all duration-300 border hover:bg-white/5",
                                    activeCard === index
                                        ? "bg-white/5 border-white/10 shadow-lg scale-100"
                                        : "bg-transparent border-transparent opacity-50 hover:opacity-100 scale-95"
                                )}
                            >
                                <h3 className={cn(
                                    "text-3xl font-bold mb-3 transition-colors",
                                    activeCard === index ? "text-white" : "text-neutral-400 group-hover:text-white"
                                )}>
                                    {item.title}
                                </h3>
                                <div className={cn(
                                    "overflow-hidden transition-all duration-500",
                                    activeCard === index ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"
                                )}>
                                    <p className="text-lg text-neutral-400 leading-relaxed font-medium">
                                        {item.description}
                                    </p>
                                </div>
                                {/* Progress bar for active state */}
                                {activeCard === index && (
                                    <motion.div
                                        layoutId="active-highlight"
                                        className="h-1 w-20 bg-white rounded-full mt-6"
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
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] -z-10" />

                            {/* Phone Frame */}
                            <div className="relative w-full h-full bg-black rounded-[50px] shadow-2xl border-[8px] border-neutral-900 overflow-hidden ring-1 ring-white/10">
                                {/* Dynamic Island */}
                                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-8 bg-black rounded-full z-20" />

                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeCard}
                                        initial={{ opacity: 0, scale: 1.1 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ duration: 0.5, ease: "circOut" }}
                                        className="absolute inset-0 h-full w-full bg-black"
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


                    {/* Mobile: Same design as desktop but stacked vertically */}
                    <div className="lg:hidden flex flex-col gap-8">
                        {/* Phone Preview (Top) */}
                        <div className="flex items-center justify-center h-[380px] sm:h-[450px] relative">
                            {/* Centered Phone Container */}
                            <div className="relative w-[220px] sm:w-[260px] aspect-[9/19.5] transition-all duration-700 ease-out">
                                {/* Glow */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-white/5 rounded-full blur-[80px] -z-10" />

                                {/* Phone Frame */}
                                <div className="relative w-full h-full bg-black rounded-[40px] sm:rounded-[45px] shadow-2xl border-[6px] sm:border-[7px] border-neutral-900 overflow-hidden ring-1 ring-white/10">
                                    {/* Dynamic Island */}
                                    <div className="absolute top-2 sm:top-3 left-1/2 -translate-x-1/2 w-20 sm:w-24 h-6 sm:h-7 bg-black rounded-full z-20" />

                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={activeCard}
                                            initial={{ opacity: 0, scale: 1.1 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.95 }}
                                            transition={{ duration: 0.5, ease: "circOut" }}
                                            className="absolute inset-0 h-full w-full bg-black"
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

                        {/* Feature List (Bottom) */}
                        <div className="flex flex-col gap-3 px-2">
                            {dict.features.map((item, index) => (
                                <div
                                    key={index}
                                    onClick={() => setActiveCard(index)}
                                    className={cn(
                                        "group cursor-pointer p-5 sm:p-6 rounded-2xl transition-all duration-300 border",
                                        activeCard === index
                                            ? "bg-white/5 border-white/10 shadow-lg"
                                            : "bg-transparent border-transparent opacity-60 active:opacity-100"
                                    )}
                                >
                                    <h3 className={cn(
                                        "text-xl sm:text-2xl font-bold mb-2 transition-colors",
                                        activeCard === index ? "text-white" : "text-neutral-400"
                                    )}>
                                        {item.title}
                                    </h3>
                                    <div className={cn(
                                        "overflow-hidden transition-all duration-500",
                                        activeCard === index ? "max-h-32 opacity-100" : "max-h-0 opacity-0"
                                    )}>
                                        <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                    {/* Progress bar for active state */}
                                    {activeCard === index && (
                                        <motion.div
                                            layoutId="mobile-active-highlight"
                                            className="h-1 w-16 bg-white rounded-full mt-4"
                                            transition={{ duration: 0.3 }}
                                        />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
