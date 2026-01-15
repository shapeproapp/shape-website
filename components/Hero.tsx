"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Star, Sparkles } from "lucide-react";

export function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col justify-center pt-16 pb-8 px-4 sm:px-6 overflow-hidden">
            {/* Subtle gradient background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-b from-accent/10 via-accent/5 to-transparent rounded-full blur-3xl" />
            </div>

            <div className="max-w-6xl mx-auto w-full relative z-10">
                <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-12 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="text-center lg:text-left mb-10 lg:mb-0"
                    >
                        {/* Premium Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-accent/10 to-orange-500/10 border border-accent/20 rounded-full text-xs font-semibold mb-5"
                        >
                            <Sparkles className="w-3 h-3 text-accent" />
                            <span className="text-accent">Disponible sur iOS</span>
                        </motion.div>

                        {/* Title with gradient */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] mb-4"
                        >
                            <span className="block">Sculptez</span>
                            <span className="block text-gradient-accent">Votre Corps</span>
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="text-sm sm:text-base text-muted-foreground mb-6 max-w-sm mx-auto lg:mx-0"
                        >
                            Le coach IA qui crée vos programmes d'entraînement et suit votre nutrition.
                        </motion.p>

                        {/* CTA Button with glow */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                        >
                            <Link
                                href="https://apps.apple.com"
                                className="group inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-4 bg-gradient-to-r from-accent to-orange-500 text-white rounded-2xl font-bold text-sm shadow-lg glow-accent hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 mb-6"
                            >
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                                </svg>
                                Télécharger Gratuitement
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>

                        {/* Social Proof */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.7, duration: 0.5 }}
                            className="flex items-center justify-center lg:justify-start gap-4"
                        >
                            <div className="flex -space-x-2">
                                {["M", "E", "D"].map((letter, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.8 + i * 0.1 }}
                                        className="w-8 h-8 rounded-full bg-gradient-to-br from-foreground to-muted-foreground text-background flex items-center justify-center text-xs font-bold border-2 border-background shadow-sm"
                                    >
                                        {letter}
                                    </motion.div>
                                ))}
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="flex">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-3.5 h-3.5 fill-accent text-accent" />
                                    ))}
                                </div>
                                <span className="text-sm font-bold">4.9</span>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Phone Mockup with premium shadow */}
                    <motion.div
                        initial={{ opacity: 0, y: 40, rotateX: 10 }}
                        animate={{ opacity: 1, y: 0, rotateX: 0 }}
                        transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="relative flex justify-center"
                        style={{ perspective: "1000px" }}
                    >
                        <motion.div
                            className="relative w-[220px] sm:w-[260px] lg:w-[300px]"
                            whileHover={{ y: -5, rotateY: 5 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                            {/* Phone Frame */}
                            <div className="relative bg-foreground rounded-[36px] sm:rounded-[44px] p-1.5 sm:p-2 shadow-premium-lg">
                                <div className="relative aspect-[9/19.5] bg-card rounded-[32px] sm:rounded-[40px] overflow-hidden">
                                    {/* Dynamic Island */}
                                    <div className="absolute top-2 sm:top-3 left-1/2 -translate-x-1/2 w-20 sm:w-24 h-6 sm:h-7 bg-foreground rounded-full z-10" />

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

                            {/* Glow behind phone */}
                            <div className="absolute -inset-8 bg-accent/15 rounded-full blur-3xl -z-10" />
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
