"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
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

    // AI-generated avatar photos
    const avatars = [
        "/assets/avatars/avatar-1.png",
        "/assets/avatars/avatar-2.png",
        "/assets/avatars/avatar-3.png",
        "/assets/avatars/avatar-4.png"
    ];

    return (
        <section className="relative w-full overflow-hidden pt-28 pb-12 lg:pt-0 lg:pb-0 lg:min-h-screen flex flex-col items-center justify-center">

            {/* Animated Background Orbs */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-radial from-foreground/[0.03] to-transparent rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.2, 0.4, 0.2]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-radial from-foreground/[0.02] to-transparent rounded-full blur-3xl"
                />
            </div>

            {/* Subtle Grid Pattern */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.015]"
                style={{
                    backgroundImage: `linear-gradient(var(--color-foreground) 1px, transparent 1px), linear-gradient(90deg, var(--color-foreground) 1px, transparent 1px)`,
                    backgroundSize: '60px 60px'
                }}
            />

            {/* Content Container */}
            <div className="relative z-10 w-full max-w-6xl mx-auto grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-16 items-center">

                {/* Left Column: Text & CTA */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left">

                    {/* Social Proof Badge - Refined */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="mb-8 mobile:mb-6 py-2 px-2 pr-5 bg-foreground/[0.03] backdrop-blur-xl border border-foreground/[0.08] rounded-full inline-flex items-center gap-4 hover:bg-foreground/[0.05] hover:border-foreground/[0.12] transition-all duration-300 transform scale-90 sm:scale-100 origin-center lg:origin-left"
                    >
                        <div className="flex -space-x-2.5">
                            {avatars.map((src, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.2 + i * 0.1 }}
                                    className="relative w-9 h-9 rounded-full ring-2 ring-background overflow-hidden"
                                >
                                    <Image
                                        src={src}
                                        alt={`User ${i + 1}`}
                                        fill
                                        className="object-cover"
                                    />
                                </motion.div>
                            ))}
                        </div>
                        <div className="flex flex-col items-start">
                            <span className="text-sm font-semibold text-foreground/90">1000+ utilisateurs</span>
                            <div className="flex items-center gap-1.5 text-xs text-foreground/50">
                                <span className="text-amber-400">★★★★★</span>
                                <span>5.0</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Main Headline - Premium Typography */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-black tracking-[-0.04em] leading-[1.1] sm:leading-[1.05] mb-6"
                    >
                        <span className="text-foreground">{dict.title.prefix}</span>
                        <br />
                        <span className="relative">
                            <span className="bg-gradient-to-r from-foreground via-foreground/70 to-foreground/40 bg-clip-text text-transparent">
                                {dict.title.gradient}
                            </span>
                        </span>
                    </motion.h1>

                    {/* Subtitle - Clean & Readable */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-base sm:text-lg text-foreground/50 max-w-md mb-8 sm:mb-10 font-medium leading-relaxed tracking-wide"
                        dangerouslySetInnerHTML={{ __html: dict.subtitle }}
                    />

                    {/* CTA Buttons - Premium Style */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex flex-col sm:flex-row items-center gap-4 w-auto"
                    >
                        {/* App Store */}
                        {(platform === "ios" || platform === "desktop") && (
                            <motion.div
                                whileHover={{ scale: 1.02, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-auto"
                            >
                                <Link
                                    href="https://apps.apple.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative flex items-center justify-center gap-3 px-8 py-4 bg-foreground text-background rounded-2xl font-bold text-base overflow-hidden w-auto min-w-[200px] shadow-[0_0_40px_rgba(0,0,0,0.15)] dark:shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_60px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_0_60px_rgba(255,255,255,0.2)] transition-shadow duration-500"
                                >
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                                    </svg>
                                    <span>{platform === "ios" ? dict.buttons.download : dict.buttons.appStore}</span>
                                </Link>
                            </motion.div>
                        )}

                        {/* Play Store */}
                        {(platform === "android" || platform === "desktop") && (
                            <motion.div
                                whileHover={{ scale: 1.02, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-auto"
                            >
                                <Link
                                    href="https://play.google.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative flex items-center justify-center gap-3 px-8 py-4 bg-foreground/[0.08] backdrop-blur-sm border border-foreground/[0.1] text-foreground rounded-2xl font-bold text-base overflow-hidden w-auto min-w-[200px] hover:bg-foreground/[0.12] hover:border-foreground/[0.2] transition-all duration-300"
                                >
                                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M3.22 2.62c-.23.24-.38.58-.38 1v16.76c0 .42.15.76.38 1l.05.05 9.4-9.4v-.06L3.27 2.57l-.05.05z" />
                                        <path fill="currentColor" d="M16.41 15.31l-3.14-3.14v-.06l3.14-3.14.07.04 3.73 2.12c1.06.6 1.06 1.59 0 2.2l-3.73 2.12-.07-.04z" />
                                        <path fill="currentColor" d="M16.48 15.35L13.27 12.14 3.22 22.19c.35.37.93.39 1.59.02l11.67-6.86z" />
                                        <path fill="currentColor" d="M16.48 8.97L4.81 2.11c-.66-.37-1.24-.35-1.59.02l9.4 9.41 3.86-3.57z" />
                                    </svg>
                                    <span>{platform === "android" ? dict.buttons.download : dict.buttons.playStore}</span>
                                </Link>
                            </motion.div>
                        )}
                    </motion.div>
                </div>

                {/* Right Column: Phone Mockup - SMALLER on desktop, hidden on mobile */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="relative hidden lg:flex justify-center"
                >
                    <motion.div
                        animate={{ y: [0, -15, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="relative"
                    >
                        {/* Multi-layer Glow Effect - Smaller */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[400px] bg-gradient-to-b from-foreground/[0.06] via-foreground/[0.02] to-transparent blur-[60px] rounded-full" />

                        {/* Phone Container - SMALLER */}
                        <motion.div
                            whileHover={{ rotate: 0, scale: 1.03 }}
                            className="relative w-[220px] xl:w-[260px] rotate-[-6deg] transition-all duration-700 ease-out"
                        >
                            {/* Phone Frame */}
                            <div className="relative aspect-[9/19.5] bg-neutral-900 rounded-[36px] overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.5)] ring-1 ring-foreground/[0.1] p-2">
                                {/* Inner Screen */}
                                <div className="relative w-full h-full rounded-[30px] overflow-hidden bg-white">
                                    {/* Dynamic Island */}
                                    <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-20 h-6 bg-black rounded-full z-10" />

                                    <Image
                                        src="/assets/app-screens/home-light.png"
                                        alt="SHAPE App"
                                        fill
                                        className="object-cover object-top"
                                        priority
                                    />
                                </div>
                            </div>

                            {/* Reflection Effect */}
                            <div className="absolute inset-0 rounded-[36px] bg-gradient-to-tr from-transparent via-foreground/[0.05] to-transparent pointer-events-none" />
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Mobile: Mini phone preview at bottom */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="lg:hidden w-full flex justify-center mt-10"
            >
                <div className="relative w-[180px] rotate-[-3deg]">
                    {/* Mini Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160px] h-[280px] bg-foreground/[0.08] blur-[50px] rounded-full" />

                    {/* Mini Phone */}
                    <div className="relative aspect-[9/19.5] bg-neutral-900 rounded-[32px] overflow-hidden shadow-2xl ring-1 ring-foreground/[0.1] p-2">
                        <div className="relative w-full h-full rounded-[26px] overflow-hidden bg-white">
                            <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-16 h-5 bg-black rounded-full z-10" />
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
            </motion.div>
        </section>
    );
}
