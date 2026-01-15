"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { Camera, Zap, Sparkles } from "lucide-react";

export function ScanDemo() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <section className="py-14 sm:py-20 px-4 sm:px-6 overflow-hidden">
            <div ref={ref} className="max-w-4xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

                    {/* Phone with floating elements */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="relative flex justify-center order-1"
                    >
                        <div className="relative">
                            {/* Floating macro cards */}
                            <motion.div
                                initial={{ opacity: 0, x: 20, y: -20 }}
                                animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
                                transition={{ delay: 0.5, duration: 0.6 }}
                                className="absolute -right-4 top-8 bg-card rounded-xl p-2 shadow-premium-lg border border-border/50 z-20"
                            >
                                <div className="flex items-center gap-2 text-xs">
                                    <div className="w-6 h-6 rounded-lg bg-green-500/20 flex items-center justify-center">
                                        <span className="text-green-600 text-[10px] font-bold">P</span>
                                    </div>
                                    <span className="font-bold">32g</span>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: -20, y: 20 }}
                                animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
                                transition={{ delay: 0.6, duration: 0.6 }}
                                className="absolute -left-4 bottom-16 bg-card rounded-xl p-2 shadow-premium-lg border border-border/50 z-20"
                            >
                                <div className="flex items-center gap-2 text-xs">
                                    <div className="w-6 h-6 rounded-lg bg-orange-500/20 flex items-center justify-center">
                                        <span className="text-orange-600 text-[10px] font-bold">C</span>
                                    </div>
                                    <span className="font-bold">45g</span>
                                </div>
                            </motion.div>

                            {/* Phone */}
                            <motion.div
                                className="relative w-44 sm:w-52 lg:w-56"
                                whileHover={{ y: -5 }}
                            >
                                <div className="relative bg-foreground rounded-[32px] p-1.5 shadow-premium-lg">
                                    <div className="relative aspect-[9/19.5] bg-card rounded-[28px] overflow-hidden">
                                        <Image
                                            src="/assets/app-screens/food-detail-dark.png"
                                            alt="Food Scanner"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                                {/* Glow */}
                                <div className="absolute -inset-6 bg-accent/10 rounded-full blur-2xl -z-10" />
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="text-center lg:text-left order-2"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-accent/10 to-orange-500/10 border border-accent/20 rounded-full text-xs font-semibold mb-4">
                            <Camera className="w-3 h-3 text-accent" />
                            <span className="text-accent">Food AI</span>
                        </div>

                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight mb-3">
                            Scannez vos repas
                        </h2>

                        <p className="text-muted-foreground text-sm sm:text-base mb-6 max-w-sm mx-auto lg:mx-0">
                            Prenez en photo et obtenez les calories et macros instantanément grâce à notre IA.
                        </p>

                        {/* Features */}
                        <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="flex items-center gap-2 px-3 py-2 bg-secondary rounded-xl"
                            >
                                <Zap className="w-4 h-4 text-accent" />
                                <span className="text-xs font-medium">2 secondes</span>
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="flex items-center gap-2 px-3 py-2 bg-secondary rounded-xl"
                            >
                                <Sparkles className="w-4 h-4 text-accent" />
                                <span className="text-xs font-medium">Précision IA</span>
                            </motion.div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
