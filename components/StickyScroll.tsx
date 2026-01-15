"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { useScroll, useMotionValueEvent, motion } from "framer-motion";
import { cn } from "@/lib/utils";

const features = [
    {
        title: "Programmes IA Personnalisés",
        description:
            "Fini le hasard à la salle. Notre IA analyse votre expérience, votre matériel et vos objectifs pour créer le plan d'entraînement parfait pour vous, semaine après semaine.",
        content: (
            <div className="h-full w-full flex items-center justify-center">
                <Image
                    src="/assets/screenshots/workout.png"
                    alt="AI Workouts"
                    fill
                    className="object-cover"
                    priority
                />
            </div>
        ),
        image: "/assets/screenshots/workout.png",
    },
    {
        title: "Nutrition Intelligente",
        description:
            "La nutrition simplifiée. Prenez simplement une photo de votre repas, et notre IA calcule instantanément les calories et les macros. Plus de prise de tête.",
        content: (
            <div className="h-full w-full flex items-center justify-center">
                <Image
                    src="/assets/screenshots/profile.png"
                    alt="Smart Nutrition"
                    fill
                    className="object-cover"
                />
            </div>
        ),
        image: "/assets/screenshots/profile.png",
    },
    {
        title: "Suivi de Progression",
        description:
            "Visualisez votre transformation avec des analyses détaillées. Suivez vos gains de force, votre poids et vos séries de constance en un coup d'œil.",
        content: (
            <div className="h-full w-full flex items-center justify-center">
                <Image
                    src="/assets/screenshots/dashboard.png"
                    alt="Real-time Progress"
                    fill
                    className="object-cover"
                />
            </div>
        ),
        image: "/assets/screenshots/dashboard.png",
    },
];

export function StickyScroll() {
    const [activeCard, setActiveCard] = useState(0);
    const ref = useRef<any>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"],
    });
    const cardLength = features.length;

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const cardsBreakpoints = features.map((_, index) => index / cardLength);
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
        <div className="py-20 lg:py-32 bg-[#050505]" id="features" ref={ref}>
            <div className="flex justify-center mb-16 px-4">
                <h2 className="text-4xl md:text-6xl font-black tracking-tight text-center max-w-2xl font-[family-name:var(--font-heading)] text-white">
                    Le futur du <br className="hidden md:block" />
                    <span className="text-gray-500">fitness est ici</span>
                </h2>
            </div>

            <motion.div
                className="h-[180vh] flex flex-col justify-center relative space-y-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            >
                <div className="grid lg:grid-cols-2 gap-20 h-full">

                    {/* Left Stick Portion (Phone) */}
                    <div className="hidden lg:block h-[600px] sticky top-32">
                        <div className="relative w-[300px] sm:w-[320px] mx-auto aspect-[9/19.5] transition-transform duration-700 ease-out">
                            <div className="absolute inset-0 bg-black rounded-[48px] shadow-2xl border-[6px] border-zinc-900 overflow-hidden transform-gpu">
                                {/* Dynamic Island */}
                                <div className="absolute top-0 w-full h-7 bg-black z-20 flex justify-center">
                                    <div className="w-20 h-5 bg-black rounded-b-2xl" />
                                </div>
                                {features.map((feature, index) => (
                                    <motion.div
                                        key={feature.title + index}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: activeCard === index ? 1 : 0 }}
                                        transition={{ duration: 0.5 }}
                                        className="absolute inset-0 h-full w-full"
                                    >
                                        <Image
                                            src={feature.image}
                                            alt={feature.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </motion.div>
                                ))}
                            </div>
                            {/* Glow behind phone */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[500px] bg-blue-500/10 rounded-full blur-[80px] -z-10" />
                        </div>
                    </div>

                    {/* Right Scroll Portion (Text) */}
                    <div className="flex flex-col justify-center relative pt-20 lg:pt-0">
                        {features.map((item, index) => (
                            <div key={item.title + index} className="min-h-[60vh] flex flex-col justify-center my-10 group">
                                <motion.div
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ margin: "-100px" }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className={cn(
                                        "p-10 rounded-3xl border backdrop-blur-sm transition-all duration-300",
                                        activeCard === index
                                            ? "bg-white/5 border-white/10 shadow-xl scale-105"
                                            : "opacity-20 grayscale blur-[1px] scale-95 border-transparent"
                                    )}
                                >
                                    <h2 className="text-3xl font-bold text-white mb-6 font-[family-name:var(--font-heading)]">
                                        {item.title}
                                    </h2>
                                    <p className="text-lg text-gray-400 leading-relaxed font-medium">
                                        {item.description}
                                    </p>

                                    {/* Mobile Only Image */}
                                    <div className="lg:hidden mt-8 relative w-full aspect-[9/16] rounded-2xl overflow-hidden border border-white/10 shadow-sm">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                        {/* Spacer for bottom */}
                        <div className="h-[20vh]" />
                    </div>

                </div>
            </motion.div>
        </div>
    );
}
