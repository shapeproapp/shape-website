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


                    {/* Mobile: Horizontal Snap Carousel (Unchanged) */}
                    <div className="lg:hidden col-span-1 w-full flex overflow-x-auto snap-x snap-mandatory gap-4 px-4 -mx-4 pb-8 no-scrollbar">
                        {dict.features.map((item, index) => (
                            <div key={index} className="flex-none w-[85vw] snap-center">
                                <div className="relative group overflow-hidden rounded-[32px] bg-neutral-900/50 border border-white/5 h-[420px] shadow-2xl">
                                    {/* Image Top Half */}
                                    <div className="relative h-[240px] w-full bg-neutral-950 overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-neutral-900/90 z-10" />
                                        <Image
                                            src={images[index]}
                                            alt={item.title}
                                            fill
                                            className="object-cover object-top opacity-90"
                                        />
                                    </div>

                                    {/* Content Bottom Half */}
                                    <div className="relative p-6 -mt-16 z-20">
                                        <div className="w-10 h-1 bg-white/20 rounded-full mb-5" />
                                        <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm text-neutral-400 leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
}
