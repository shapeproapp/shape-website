"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Star, Play } from "lucide-react";

export function Hero() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <section className="relative min-h-screen flex items-center pt-20 pb-12 overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* Text Content */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="text-center lg:text-left"
                    >
                        {/* Badge */}
                        <motion.div
                            variants={itemVariants}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full text-sm font-medium mb-6"
                        >
                            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                            Disponible sur iOS
                        </motion.div>

                        {/* Title */}
                        <motion.h1
                            variants={itemVariants}
                            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight leading-[1.1] mb-6"
                        >
                            Sculptez{" "}
                            <span className="text-accent">Votre Corps</span>
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p
                            variants={itemVariants}
                            className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-8 max-w-md mx-auto lg:mx-0"
                        >
                            Le coach IA qui crée vos programmes d'entraînement et suit votre nutrition.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            variants={itemVariants}
                            className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-8"
                        >
                            <Link
                                href="https://apps.apple.com"
                                className="flex items-center justify-center gap-2 px-6 py-4 bg-accent text-white rounded-2xl font-bold text-base hover:brightness-110 transition-all"
                            >
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                                </svg>
                                Télécharger l'App
                                <ArrowRight className="w-4 h-4" />
                            </Link>

                            <Link
                                href="#features"
                                className="flex items-center justify-center gap-2 px-6 py-4 bg-secondary rounded-2xl font-semibold text-base hover:bg-secondary/80 transition-all"
                            >
                                <Play className="w-4 h-4" />
                                Découvrir
                            </Link>
                        </motion.div>

                        {/* Social Proof */}
                        <motion.div
                            variants={itemVariants}
                            className="flex items-center gap-4 justify-center lg:justify-start"
                        >
                            <div className="flex -space-x-2">
                                {["M", "E", "D", "S"].map((letter, i) => (
                                    <div
                                        key={i}
                                        className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white text-xs font-bold border-2 border-background"
                                    >
                                        {letter}
                                    </div>
                                ))}
                            </div>
                            <div className="text-sm">
                                <div className="flex items-center gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-3 h-3 fill-accent text-accent" />
                                    ))}
                                    <span className="font-bold ml-1">4.9</span>
                                </div>
                                <p className="text-muted-foreground">Note moyenne</p>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Phone Mockup */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="relative flex justify-center"
                    >
                        <div className="relative w-[240px] sm:w-[280px] lg:w-[320px]">
                            {/* Phone Frame */}
                            <div className="relative bg-foreground rounded-[40px] p-2 shadow-2xl">
                                <div className="relative aspect-[9/19.5] bg-card rounded-[36px] overflow-hidden">
                                    {/* Dynamic Island */}
                                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-6 bg-foreground rounded-full z-10" />

                                    {/* Screen */}
                                    <Image
                                        src="/assets/app-screens/home-light.png"
                                        alt="SHAPE App"
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                            </div>

                            {/* Glow effect */}
                            <div className="absolute -inset-4 bg-accent/20 rounded-[50px] blur-3xl -z-10" />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
