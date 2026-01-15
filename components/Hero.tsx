"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

export function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col justify-center pt-16 pb-8 px-4 sm:px-6 overflow-hidden bg-background">
            <div className="max-w-6xl mx-auto w-full">

                {/* Mobile: Stack vertically, Desktop: Grid */}
                <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-12 items-center">

                    {/* Text Content - Always first on mobile */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center lg:text-left mb-8 lg:mb-0"
                    >
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 text-accent rounded-full text-xs font-semibold mb-4">
                            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                            </svg>
                            Disponible sur iOS
                        </div>

                        {/* Title */}
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight leading-tight mb-4">
                            Sculptez{" "}
                            <span className="text-accent">Votre Corps</span>
                        </h1>

                        {/* Subtitle */}
                        <p className="text-sm sm:text-base text-muted-foreground mb-6 max-w-sm mx-auto lg:mx-0">
                            Le coach IA qui crée vos programmes d'entraînement et suit votre nutrition.
                        </p>

                        {/* CTA Button - VISIBLE */}
                        <Link
                            href="https://apps.apple.com"
                            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 bg-accent text-white rounded-xl font-bold text-sm hover:brightness-110 transition-all mb-6"
                        >
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                            </svg>
                            Télécharger Gratuitement
                            <ArrowRight className="w-4 h-4" />
                        </Link>

                        {/* Social Proof */}
                        <div className="flex items-center justify-center lg:justify-start gap-3">
                            <div className="flex -space-x-2">
                                {["M", "E", "D"].map((letter, i) => (
                                    <div
                                        key={i}
                                        className="w-7 h-7 rounded-full bg-foreground text-background flex items-center justify-center text-xs font-bold border-2 border-background"
                                    >
                                        {letter}
                                    </div>
                                ))}
                            </div>
                            <div className="flex items-center gap-1 text-xs">
                                <div className="flex">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-3 h-3 fill-accent text-accent" />
                                    ))}
                                </div>
                                <span className="font-bold">4.9</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Phone Mockup */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="relative flex justify-center"
                    >
                        <div className="relative w-[200px] sm:w-[240px] lg:w-[280px]">
                            {/* Phone Frame */}
                            <div className="relative bg-foreground rounded-[32px] sm:rounded-[40px] p-1.5 sm:p-2 shadow-2xl">
                                <div className="relative aspect-[9/19.5] bg-card rounded-[28px] sm:rounded-[36px] overflow-hidden">
                                    {/* Dynamic Island */}
                                    <div className="absolute top-1.5 sm:top-2 left-1/2 -translate-x-1/2 w-16 sm:w-20 h-5 sm:h-6 bg-foreground rounded-full z-10" />

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
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
