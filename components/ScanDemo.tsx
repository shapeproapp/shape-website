"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { Camera, Zap, PieChart } from "lucide-react";

export function ScanDemo() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <section className="py-16 sm:py-24">
            <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

                    {/* Text Content */}
                    <div className="text-center lg:text-left order-2 lg:order-1">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4"
                        >
                            <Camera className="w-4 h-4" />
                            Food AI
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.1 }}
                            className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4"
                        >
                            Scannez. Analysez. Mangez.
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.2 }}
                            className="text-muted-foreground text-base sm:text-lg mb-6 max-w-md mx-auto lg:mx-0"
                        >
                            Prenez en photo votre repas et obtenez instantanément les calories et macros.
                        </motion.p>

                        {/* Benefits */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.3 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                        >
                            <div className="flex items-center gap-2">
                                <Zap className="w-5 h-5 text-accent" />
                                <span className="text-sm font-medium">Analyse en 2 secondes</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <PieChart className="w-5 h-5 text-accent" />
                                <span className="text-sm font-medium">Macros détaillées</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Phone Preview */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="flex justify-center order-1 lg:order-2"
                    >
                        <div className="relative w-48 sm:w-56 lg:w-64">
                            <div className="relative bg-foreground rounded-[36px] p-2 shadow-2xl">
                                <div className="relative aspect-[9/19.5] bg-card rounded-[32px] overflow-hidden">
                                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-5 bg-foreground rounded-full z-10" />
                                    <Image
                                        src="/assets/app-screens/food-detail-dark.png"
                                        alt="Food Scanner"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                            {/* Glow */}
                            <div className="absolute -inset-4 bg-accent/10 rounded-[50px] blur-2xl -z-10" />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
