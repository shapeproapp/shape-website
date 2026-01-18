"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { useState, useEffect } from "react";
import { Dictionary } from "@/lib/dictionary";

type Platform = "ios" | "android" | "desktop";

function detectPlatform(): Platform {
    if (typeof window === "undefined") return "desktop";
    const userAgent = navigator.userAgent.toLowerCase();
    if (/iphone|ipad|ipod/.test(userAgent)) return "ios";
    if (/android/.test(userAgent)) return "android";
    return "desktop";
}

interface HeroProps {
    dict: Dictionary['hero'];
}

export function Hero({ dict }: HeroProps) {
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


                {/* Main headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.05] sm:leading-[0.9] mb-6"
                >
                    {dict.title.prefix}
                    <br />
                    <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground/80 to-foreground/50">
                        {dict.title.gradient}
                    </span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-base sm:text-xl text-muted-foreground/80 max-w-lg mx-auto mb-8 font-medium leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: dict.subtitle }}
                />

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="flex flex-col items-center gap-5"
                >
                    {/* Store buttons */}
                    <div className="flex flex-col sm:flex-row items-center gap-3">
                        {/* App Store - visible sur iOS ou desktop */}
                        {(platform === "ios" || platform === "desktop") && (
                            <Link
                                href="https://apps.apple.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center justify-center gap-3 px-8 py-4 bg-foreground text-background rounded-full font-bold text-base hover:opacity-90 transition-all min-w-[200px]"
                            >
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                                </svg>
                                {platform === "ios" ? dict.buttons.download : dict.buttons.appStore}
                            </Link>
                        )}

                        {/* Play Store - visible sur Android ou desktop */}
                        {(platform === "android" || platform === "desktop") && (
                            <Link
                                href="https://play.google.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center justify-center gap-3 px-8 py-4 bg-foreground text-background rounded-full font-bold text-base hover:opacity-90 transition-all min-w-[200px]"
                            >
                                <svg className="w-6 h-6" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M3.22 2.62c-.23.24-.38.58-.38 1v16.76c0 .42.15.76.38 1l.05.05 9.4-9.4v-.06L3.27 2.57l-.05.05z" />
                                    <path fill="currentColor" d="M16.41 15.31l-3.14-3.14v-.06l3.14-3.14.07.04 3.73 2.12c1.06.6 1.06 1.59 0 2.2l-3.73 2.12-.07-.04z" />
                                    <path fill="currentColor" d="M16.48 15.35L13.27 12.14 3.22 22.19c.35.37.93.39 1.59.02l11.67-6.86z" />
                                    <path fill="currentColor" d="M16.48 8.97L4.81 2.11c-.66-.37-1.24-.35-1.59.02l9.4 9.41 3.86-3.57z" />
                                </svg>
                                {platform === "android" ? dict.buttons.download : dict.buttons.playStore}
                            </Link>
                        )}
                    </div>

                    <Link
                        href="#features"
                        className="flex items-center gap-2 px-6 py-4 text-muted-foreground/60 hover:text-foreground transition-colors text-sm font-medium tracking-wide uppercase"
                    >
                        {dict.buttons.features}
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </motion.div>
            </div>

            {/* Phone Mockup */}
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="relative mt-8 sm:mt-12 pb-8"
            >
                <div className="relative">
                    {/* Simplified Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-foreground/8 blur-[120px] rounded-full" />

                    {/* Phone */}
                    <div className="relative w-[260px] sm:w-[300px] md:w-[340px]">
                        <div className="relative aspect-[9/19.5] bg-neutral-900 rounded-[44px] overflow-hidden shadow-2xl ring-1 ring-white/10 p-2">
                            {/* Inner screen with rounded corners */}
                            <div className="relative w-full h-full rounded-[36px] overflow-hidden bg-white">
                                {/* Dynamic Island */}
                                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-7 bg-black rounded-full z-10" />

                                <Image
                                    src="/assets/app-screens/home-light.png"
                                    alt="SHAPE App"
                                    fill
                                    className="object-cover object-top"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Fade to background at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
            </motion.div>

            {/* Scroll indicator - Removed for cleaner look */}
        </section>
    );
}
