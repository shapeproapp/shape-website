"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { Dictionary } from "@/lib/dictionary";

interface HowItWorksProps {
    dict: Dictionary['howItWorks'];
}

export function HowItWorks({ dict }: HowItWorksProps) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const images = [
        "/assets/app-screens/nutrition-light.png",
        "/assets/app-screens/weekly-plan-light.png",
        "/assets/app-screens/home-light.png"
    ];

    const [currentStep, setCurrentStep] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    // Auto-scroll effect
    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            const nextStep = (currentStep + 1) % dict.steps.length;
            setCurrentStep(nextStep);

            if (scrollContainerRef.current) {
                const scrollWidth = scrollContainerRef.current.scrollWidth;
                const containerWidth = scrollContainerRef.current.clientWidth;
                // Steps are roughly equal width, find position
                // Assuming child width + gap approximates total / count
                // Actually safer to scroll to child element
                const child = scrollContainerRef.current.children[nextStep] as HTMLElement;
                if (child) {
                    scrollContainerRef.current.scrollTo({
                        left: child.offsetLeft - (window.innerWidth - child.offsetWidth) / 2, // Center it roughly or just offsetLeft
                        behavior: 'smooth'
                    });
                }
            }
        }, 2000);

        return () => clearInterval(interval);
    }, [currentStep, isPaused, dict.steps.length]);

    const handleScroll = () => {
        if (scrollContainerRef.current) {
            const scrollLeft = scrollContainerRef.current.scrollLeft;
            const width = scrollContainerRef.current.offsetWidth;
            // Calculate index based on scroll position + half width for centering
            // This assumes children are essentially pages.
            // But logic for auto-play updates state -> scroll. 
            // Logic for manual scroll updates state -> prevent auto-jump if desynced.
            // Simplified: just update progress based on approximate scroll
            const index = Math.round(scrollLeft / (width * 0.8)); // 0.8 because w-[85vw]
            const safeIndex = Math.min(Math.max(index, 0), dict.steps.length - 1);
            if (safeIndex !== currentStep) {
                setCurrentStep(safeIndex);
            }
        }
    };

    return (
        <section className="py-16 sm:py-32 px-4 sm:px-6 border-t border-border">
            <div ref={ref} className="max-w-5xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    className="text-center mb-12 sm:mb-20"
                >
                    <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">{dict.header.subtitle}</p>
                    <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
                        {dict.header.title}
                    </h2>
                </motion.div>

                {/* Steps */}
                <div
                    className="relative"
                    onTouchStart={() => setIsPaused(true)}
                    onMouseEnter={() => setIsPaused(true)}
                    onTouchEnd={() => setTimeout(() => setIsPaused(false), 5000)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    <div
                        ref={scrollContainerRef}
                        onScroll={handleScroll}
                        className="flex overflow-x-auto snap-x snap-mandatory pb-12 gap-4 -mx-4 px-4 sm:mx-0 sm:px-0 sm:pb-0 sm:block sm:space-y-24 hide-scrollbar"
                    >
                        {dict.steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 60 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 + index * 0.2, duration: 0.8 }}
                                className={`flex-none w-[85vw] sm:w-auto snap-center flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 sm:gap-16`}
                            >
                                {/* Text */}
                                <div className="flex-1 text-center md:text-left">
                                    <span className="text-6xl sm:text-8xl font-black text-muted-foreground/20">{step.num}</span>
                                    <h3 className="text-2xl sm:text-3xl font-bold -mt-4 mb-3">{step.title}</h3>
                                    <p className="text-muted-foreground text-lg">{step.desc}</p>
                                </div>

                                {/* Phone */}
                                <div className="flex-1 flex justify-center">
                                    <div className="relative w-48 sm:w-56">
                                        <div className="relative glass rounded-[36px] p-1.5 border border-border">
                                            <div className="relative aspect-[9/19.5] bg-card rounded-[30px] overflow-hidden">
                                                <Image src={images[index]} alt={step.title} fill className="object-cover" />
                                            </div>
                                        </div>
                                        {/* Glow */}
                                        <div className="absolute -inset-8 bg-foreground/5 rounded-full blur-3xl -z-10" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Progress Bar (Mobile Only) */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-secondary rounded-full overflow-hidden sm:hidden mx-4">
                        <motion.div
                            className="h-full bg-primary"
                            initial={{ width: "33%" }}
                            animate={{ width: `${((currentStep + 1) / dict.steps.length) * 100}%` }}
                            transition={{ duration: 0.3 }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
