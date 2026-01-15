"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight, Star, Play, ChevronDown } from "lucide-react";
import { useRef, useEffect, useState } from "react";

export function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    // Parallax effects
    const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

    // Mouse position for gradient follow
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
    const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    // Stagger animation for text
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                duration: 0.8,
                ease: "easeOut" as const
            }
        }
    };

    return (
        <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">

            {/* Animated gradient mesh background */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Primary gradient orb - follows mouse */}
                <motion.div
                    className="absolute w-[800px] h-[800px] rounded-full opacity-30"
                    style={{
                        background: "radial-gradient(circle, rgba(255,107,53,0.4) 0%, transparent 70%)",
                        x: springX,
                        y: springY,
                        translateX: "-50%",
                        translateY: "-50%"
                    }}
                />

                {/* Secondary ambient orbs */}
                <motion.div
                    className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full"
                    style={{
                        background: "radial-gradient(circle, rgba(255,107,53,0.15) 0%, transparent 70%)",
                        y: y1
                    }}
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full"
                    style={{
                        background: "radial-gradient(circle, rgba(255,159,107,0.1) 0%, transparent 70%)"
                    }}
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.2, 0.4, 0.2]
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2
                    }}
                />

                {/* Subtle grid pattern */}
                <div
                    className="absolute inset-0 opacity-[0.02]"
                    style={{
                        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                                          linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                        backgroundSize: "100px 100px"
                    }}
                />
            </div>

            <motion.div
                style={{ opacity, scale }}
                className="max-w-7xl mx-auto px-6 relative z-10 pt-20"
            >
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">

                    {/* Left: Text Content */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-col items-start"
                    >
                        {/* Premium Badge */}
                        <motion.div
                            variants={itemVariants}
                            whileHover={{ scale: 1.05 }}
                            className="pill glass text-foreground flex items-center gap-3 mb-10"
                        >
                            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                            Disponible sur iOS
                        </motion.div>

                        {/* MASSIVE Title */}
                        <motion.h1
                            variants={itemVariants}
                            className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tighter leading-[0.9] mb-8"
                        >
                            <span className="block">Sculptez</span>
                            <span className="block text-gradient-accent">Votre Corps</span>
                        </motion.h1>

                        <motion.p
                            variants={itemVariants}
                            className="text-xl sm:text-2xl text-muted-foreground mb-12 max-w-lg leading-relaxed"
                        >
                            Le seul coach IA dont vous avez besoin. Programmes personnalisés, nutrition intelligente et suivi en temps réel.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            variants={itemVariants}
                            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-12"
                        >
                            <Link
                                href="https://apps.apple.com"
                                className="group relative flex items-center justify-center gap-3 px-12 py-8 bg-gradient-to-r from-[#FF6B35] to-[#FF3E00] text-white rounded-3xl font-black text-2xl shadow-[0_10px_40px_rgba(255,107,53,0.6)] hover:shadow-[0_20px_60px_rgba(255,107,53,0.8)] hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                            >
                                <motion.div
                                    className="absolute inset-0 bg-white/20"
                                    initial={{ x: "-100%" }}
                                    animate={{ x: "100%" }}
                                    transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1, ease: "linear" }}
                                />
                                <svg className="w-8 h-8 relative drop-shadow-md" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                                </svg>
                                <span className="relative drop-shadow-md">TÉLÉCHARGER L'APP</span>
                                <ArrowRight className="w-8 h-8 relative group-hover:translate-x-2 transition-transform drop-shadow-md" />
                            </Link>

                            <Link
                                href="#features"
                                className="flex items-center justify-center gap-3 px-10 py-8 bg-white/10 backdrop-blur-md rounded-3xl font-bold text-xl hover:bg-white/20 transition-all border border-white/20"
                            >
                                <Play className="w-6 h-6" />
                                Voir la démo
                            </Link>
                        </motion.div>

                        {/* Social Proof */}
                        <motion.div
                            variants={itemVariants}
                            className="flex items-center gap-6"
                        >
                            {/* Avatar Stack */}
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ scale: 0, x: -10 * i }}
                                        animate={{ scale: 1, x: 0 }}
                                        transition={{ delay: 1 + i * 0.1, type: "spring", stiffness: 200 }}
                                        className="w-10 h-10 rounded-full bg-gradient-to-br from-accent/60 to-accent border-2 border-background"
                                    />
                                ))}
                            </div>

                            <div className="flex flex-col">
                                <div className="flex items-center gap-1">
                                    {[1, 2, 3, 4, 5].map((i) => (
                                        <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                                    ))}
                                </div>
                                <p className="text-sm text-muted-foreground font-medium mt-1">
                                    Note moyenne <span className="text-foreground font-bold">4.9/5</span>
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right: App Preview */}
                    <motion.div
                        style={{ y: y2 }}
                        initial={{ opacity: 0, y: 60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="relative flex items-center justify-center"
                    >
                        {/* Glow behind phone */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <motion.div
                                className="w-[400px] h-[400px] rounded-full bg-accent/20 blur-[100px]"
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.3, 0.5, 0.3]
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />
                        </div>

                        {/* Main Phone */}
                        <motion.div
                            whileHover={{ scale: 1.02, rotateY: 5 }}
                            transition={{ type: "spring", stiffness: 200, damping: 20 }}
                            className="relative z-10 w-[300px] sm:w-[340px]"
                            style={{ perspective: "1000px" }}
                        >
                            {/* Phone Frame */}
                            <div className="relative aspect-[9/19.5] bg-black rounded-[48px] p-2 shadow-app-lg">
                                {/* Screen */}
                                <div className="relative w-full h-full bg-card rounded-[40px] overflow-hidden">
                                    {/* Dynamic Island */}
                                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-7 bg-black rounded-full z-20" />

                                    {/* App Screenshot */}
                                    <Image
                                        src="/assets/app-screens/home-light.png"
                                        alt="SHAPE App"
                                        fill
                                        className="object-cover"
                                        priority
                                    />

                                    {/* Subtle screen glare */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
                                </div>
                            </div>

                            {/* Phone shadow */}
                            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-16 bg-black/20 blur-2xl rounded-full" />
                        </motion.div>

                        {/* Secondary Phone (blurred, in back) */}
                        <motion.div
                            initial={{ opacity: 0, x: 60 }}
                            animate={{ opacity: 0.4, x: 80 }}
                            transition={{ duration: 1, delay: 0.8 }}
                            className="absolute z-0 w-[260px] blur-[2px] grayscale-[50%]"
                            style={{ transform: "rotate(-8deg)" }}
                        >
                            <div className="relative aspect-[9/19.5] bg-black/80 rounded-[44px] p-2">
                                <div className="relative w-full h-full bg-card rounded-[36px] overflow-hidden">
                                    <Image
                                        src="/assets/app-screens/workout-detail-dark.png"
                                        alt="Workout"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-xs text-muted-foreground uppercase tracking-widest">Découvrir</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                    <ChevronDown className="w-5 h-5 text-muted-foreground" />
                </motion.div>
            </motion.div>
        </section>
    );
}
