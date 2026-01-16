"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { useState, useEffect } from "react";

const screens = [
    { src: "/assets/app-screens/home-light.png", label: "Dashboard" },
    { src: "/assets/app-screens/workout.png", label: "Workout" },
    { src: "/assets/app-screens/nutrition.png", label: "Nutrition" },
];

export function Hero() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % screens.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 overflow-hidden">
            {/* Background gradient - adapts to theme */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-radial from-foreground/5 to-transparent rounded-full blur-3xl" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto text-center">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-border bg-secondary/50 backdrop-blur-sm"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <span className="text-sm text-muted-foreground">Disponible sur iOS</span>
                </motion.div>

                {/* Main headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.9] mb-6"
                >
                    Votre coach
                    <br />
                    <span className="text-gradient">fitness IA</span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto mb-10"
                >
                    Programmes personnalisés. Suivi nutrition intelligent.
                    <br className="hidden sm:block" />
                    Résultats garantis.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Link
                        href="https://apps.apple.com"
                        className="group flex items-center gap-3 px-8 py-4 bg-foreground text-background rounded-full font-bold text-base hover:opacity-90 transition-all"
                    >
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                        </svg>
                        Télécharger gratuitement
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>

                    <Link
                        href="#features"
                        className="flex items-center gap-2 px-6 py-4 text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <Play className="w-4 h-4" />
                        Voir les fonctionnalités
                    </Link>
                </motion.div>
            </div>

            {/* Phone Mockup with rotating carousel */}
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative mt-16 sm:mt-20"
                style={{ perspective: "1200px" }}
            >
                <div className="relative">
                    {/* Glow behind phone */}
                    <div className="absolute -inset-20 bg-gradient-radial from-foreground/10 to-transparent rounded-full blur-3xl" />

                    {/* Phone */}
                    <div className="relative w-[280px] sm:w-[320px] md:w-[360px]">
                        <div className="relative glass rounded-[48px] p-2 border border-border">
                            <div
                                className="relative aspect-[9/19.5] bg-card rounded-[40px] overflow-hidden"
                                style={{ transformStyle: "preserve-3d" }}
                            >
                                {/* Dynamic Island */}
                                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-8 bg-foreground rounded-full z-20" />

                                {/* Animated Screen Carousel */}
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={currentIndex}
                                        initial={{
                                            rotateY: 90,
                                            opacity: 0,
                                            scale: 0.95
                                        }}
                                        animate={{
                                            rotateY: 0,
                                            opacity: 1,
                                            scale: 1
                                        }}
                                        exit={{
                                            rotateY: -90,
                                            opacity: 0,
                                            scale: 0.95
                                        }}
                                        transition={{
                                            duration: 1.2,
                                            ease: [0.25, 0.46, 0.45, 0.94]
                                        }}
                                        className="absolute inset-0"
                                        style={{
                                            transformStyle: "preserve-3d",
                                            backfaceVisibility: "hidden"
                                        }}
                                    >
                                        <Image
                                            src={screens[currentIndex].src}
                                            alt={screens[currentIndex].label}
                                            fill
                                            className="object-cover"
                                            priority
                                        />
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>

                    {/* Screen label */}
                    <motion.div
                        className="absolute -bottom-10 left-1/2 -translate-x-1/2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                    >
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={currentIndex}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.5 }}
                                className="text-sm text-muted-foreground font-medium"
                            >
                                {screens[currentIndex].label}
                            </motion.span>
                        </AnimatePresence>
                    </motion.div>

                    {/* Carousel indicators */}
                    <motion.div
                        className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex gap-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 }}
                    >
                        {screens.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-2 h-2 rounded-full transition-all duration-500 ${index === currentIndex
                                        ? "bg-foreground w-6"
                                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                                    }`}
                            />
                        ))}
                    </motion.div>
                </div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <div className="w-6 h-10 rounded-full border-2 border-border flex justify-center pt-2">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-1 h-2 bg-muted-foreground rounded-full"
                    />
                </div>
            </motion.div>
        </section>
    );
}
