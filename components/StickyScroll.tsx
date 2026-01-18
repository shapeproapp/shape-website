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
        "/assets/app-screens/weekly-plan-light.png",
        "/assets/app-screens/food-search-light.png",
        "/assets/app-screens/home-dark.png",
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

                <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-start">

                    {/* Desktop Sticky Phone */}
                    <div className="hidden lg:block h-screen sticky top-0 flex items-center justify-center py-10">
                        <div className="relative w-[340px] aspect-[9/19.5] transition-all duration-700 ease-out">
                            {/* Glow */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] -z-10" />

                            {/* Phone Frame */}
                            <div className="relative w-full h-full bg-black rounded-[50px] shadow-2xl border-[8px] border-neutral-900 overflow-hidden ring-1 ring-white/10">
                                {/* Dynamic Island */}
                                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-8 bg-black rounded-full z-20" />

                                {images.map((imgSrc, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 1.1 }}
                                        animate={{
                                            opacity: activeCard === index ? 1 : 0,
                                            scale: activeCard === index ? 1 : 1.1
                                        }}
                                        transition={{ duration: 0.6, ease: "easeInOut" }}
                                        className="absolute inset-0 h-full w-full bg-black"
                                    >
                                        <Image
                                            src={imgSrc}
                                            alt="App Screen"
                                            fill
                                            className="object-cover"
                                            priority={index === 0}
                                        />
                                        {/* Overlay gradient for depth */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="flex flex-col gap-16 lg:gap-0 lg:pt-[20vh] w-full">

                        {/* Mobile: Horizontal Snap Carousel */}
                        <div className="lg:hidden flex overflow-x-auto snap-x snap-mandatory gap-4 px-4 -mx-4 pb-8 no-scrollbar">
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

                        {/* Desktop: Vertical Scroll Text */}
                        <div className="hidden lg:block">
                            {dict.features.map((item, index) => (
                                <div key={index} className="lg:min-h-[80vh] flex flex-col justify-center">
                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ margin: "-20% 0px -20% 0px" }}
                                        transition={{ duration: 0.5 }}
                                        className={cn(
                                            "p-8 rounded-3xl transition-all duration-500",
                                            activeCard === index ? "opacity-100" : "opacity-30 blur-[2px]"
                                        )}
                                    >
                                        <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">
                                            {item.title}
                                        </h3>
                                        <p className="text-xl text-neutral-400 leading-relaxed font-medium">
                                            {item.description}
                                        </p>
                                    </motion.div>
                                </div>
                            ))}
                            {/* Spacer for desktop scrolling */}
                            <div className="h-[10vh]" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
