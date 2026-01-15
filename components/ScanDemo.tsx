"use client";

import { motion, useInView } from "framer-motion";
import { Camera, Sparkles, Zap, CheckCircle } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

const benefits = [
    "Analyse en moins de 2 secondes",
    "Détection automatique des ingrédients",
    "Calcul précis des macros",
    "Historique de tous vos repas"
];

export function ScanDemo() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className="py-32 lg:py-40 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0">
                <div className="absolute top-1/2 right-0 w-[600px] h-[600px] rounded-full bg-accent/10 blur-[150px] translate-x-1/2" />
            </div>

            <div ref={ref} className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">

                    {/* Left: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="pill glass text-foreground inline-flex items-center gap-2 mb-8">
                            <Sparkles className="w-4 h-4 text-accent" />
                            FOOD AI
                        </div>

                        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-6 leading-[0.95]">
                            Photographiez.
                            <br />
                            <span className="text-gradient-accent">On s'occupe du reste.</span>
                        </h2>

                        <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-lg">
                            Notre vision IA identifie instantanément vos aliments et calcule les macros avec une précision professionnelle.
                        </p>

                        {/* Benefits List */}
                        <ul className="space-y-4 mb-10">
                            {benefits.map((benefit, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                                    className="flex items-center gap-3"
                                >
                                    <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                                        <CheckCircle className="w-4 h-4 text-accent" />
                                    </div>
                                    <span className="font-medium">{benefit}</span>
                                </motion.li>
                            ))}
                        </ul>

                        {/* Stats Row */}
                        <div className="flex gap-8">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.6 }}
                                className="text-center"
                            >
                                <div className="text-4xl font-black text-accent">&lt;2s</div>
                                <div className="text-sm text-muted-foreground mt-1">Analyse</div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.7 }}
                                className="text-center"
                            >
                                <div className="text-4xl font-black text-accent">∞</div>
                                <div className="text-sm text-muted-foreground mt-1">Scans illimités</div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right: Phone with Scan Animation */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="relative flex items-center justify-center"
                    >
                        {/* Glow */}
                        <motion.div
                            className="absolute w-[400px] h-[400px] rounded-full bg-accent/20 blur-[100px]"
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

                        {/* Phone */}
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="relative z-10 w-[300px] sm:w-[320px]"
                        >
                            {/* Phone Frame */}
                            <div className="relative aspect-[9/19.5] bg-black rounded-[48px] p-2 shadow-app-lg">
                                <div className="relative w-full h-full bg-card rounded-[40px] overflow-hidden">
                                    {/* Dynamic Island */}
                                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-7 bg-black rounded-full z-20" />

                                    {/* Screenshot */}
                                    <Image
                                        src="/assets/app-screens/food-detail-dark.png"
                                        alt="Food Scanner"
                                        fill
                                        className="object-cover"
                                    />

                                    {/* Scan Line Animation */}
                                    <motion.div
                                        className="absolute left-4 right-4 h-1 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full"
                                        initial={{ top: "15%" }}
                                        animate={{ top: ["15%", "50%", "15%"] }}
                                        transition={{
                                            duration: 2.5,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                        style={{ boxShadow: "0 0 20px var(--color-accent)" }}
                                    />

                                    {/* Corner Markers */}
                                    <div className="absolute top-16 left-4 w-8 h-8 border-l-2 border-t-2 border-accent/60 rounded-tl-lg" />
                                    <div className="absolute top-16 right-4 w-8 h-8 border-r-2 border-t-2 border-accent/60 rounded-tr-lg" />
                                    <div className="absolute top-52 left-4 w-8 h-8 border-l-2 border-b-2 border-accent/60 rounded-bl-lg" />
                                    <div className="absolute top-52 right-4 w-8 h-8 border-r-2 border-b-2 border-accent/60 rounded-br-lg" />

                                    {/* Glare */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
                                </div>
                            </div>

                            {/* Phone Shadow */}
                            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-16 bg-black/20 blur-2xl rounded-full" />
                        </motion.div>

                        {/* Floating Camera Button */}
                        <motion.div
                            className="absolute bottom-20 right-0 sm:right-8"
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <div className="w-16 h-16 rounded-full bg-accent shadow-glow flex items-center justify-center">
                                <Camera className="w-7 h-7 text-white" />
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
