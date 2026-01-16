"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { useState, useEffect } from "react";

type Platform = "ios" | "android" | "desktop";

function detectPlatform(): Platform {
    if (typeof window === "undefined") return "desktop";
    const userAgent = navigator.userAgent.toLowerCase();
    if (/iphone|ipad|ipod/.test(userAgent)) return "ios";
    if (/android/.test(userAgent)) return "android";
    return "desktop";
}

export function Hero() {
    const [platform, setPlatform] = useState<Platform>("desktop");

    useEffect(() => {
        setPlatform(detectPlatform());
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
                    <span className="text-sm text-muted-foreground">
                        {platform === "android" ? "Disponible sur Android" : "Disponible sur iOS"}
                    </span>
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
                    className="flex flex-col items-center gap-4"
                >
                    {/* Store buttons */}
                    <div className="flex flex-col sm:flex-row items-center gap-3">
                        {/* App Store - visible sur iOS ou desktop */}
                        {(platform === "ios" || platform === "desktop") && (
                            <Link
                                href="https://apps.apple.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-3 px-8 py-4 bg-foreground text-background rounded-full font-bold text-base hover:opacity-90 transition-all"
                            >
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                                </svg>
                                {platform === "ios" ? "Télécharger" : "App Store"}
                                {platform === "ios" && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                            </Link>
                        )}

                        {/* Play Store - visible sur Android ou desktop */}
                        {(platform === "android" || platform === "desktop") && (
                            <Link
                                href="https://play.google.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-3 px-8 py-4 bg-foreground text-background rounded-full font-bold text-base hover:opacity-90 transition-all"
                            >
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M3.609 1.814L13.792 12 3.609 22.186a.996.996 0 0 1-.109-.402V2.216c.02-.138.056-.273.109-.402zm10.89 9.479l2.5-2.5 4.5 2.6c.75.43.75 1.46 0 1.89l-4.5 2.6-2.5-2.5L12.5 12l1.999-1.707zM4.954.768L14.5 12l-9.546 11.232L3.5 22.5V1.5l1.454-.732z" />
                                </svg>
                                {platform === "android" ? "Télécharger" : "Play Store"}
                                {platform === "android" && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                            </Link>
                        )}
                    </div>

                    <Link
                        href="#features"
                        className="flex items-center gap-2 px-6 py-4 text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <Play className="w-4 h-4" />
                        Voir les fonctionnalités
                    </Link>
                </motion.div>
            </div>

            {/* Phone Mockup */}
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative mt-16 sm:mt-20"
            >
                <div className="relative">
                    {/* Glow behind phone */}
                    <div className="absolute -inset-20 bg-gradient-radial from-foreground/10 to-transparent rounded-full blur-3xl" />

                    {/* Phone */}
                    <div className="relative w-[280px] sm:w-[320px] md:w-[360px]">
                        <div className="relative glass rounded-[48px] p-2 border border-border">
                            <div className="relative aspect-[9/19.5] bg-card rounded-[40px] overflow-hidden">
                                {/* Dynamic Island */}
                                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-8 bg-foreground rounded-full z-10" />

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
