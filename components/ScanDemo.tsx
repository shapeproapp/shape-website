"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { Camera, Zap } from "lucide-react";

export function ScanDemo() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section className="py-12 sm:py-16 px-4 sm:px-6">
            <div ref={ref} className="max-w-4xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center">

                    {/* Phone - First on mobile */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        className="flex justify-center order-1"
                    >
                        <div className="relative w-40 sm:w-48 lg:w-56">
                            <div className="relative bg-foreground rounded-[28px] sm:rounded-[36px] p-1.5 shadow-xl">
                                <div className="relative aspect-[9/19.5] bg-card rounded-[24px] sm:rounded-[32px] overflow-hidden">
                                    <Image
                                        src="/assets/app-screens/food-detail-dark.png"
                                        alt="Food Scanner"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Text */}
                    <div className="text-center lg:text-left order-2">
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-accent/10 text-accent rounded-full text-xs font-semibold mb-3"
                        >
                            <Camera className="w-3 h-3" />
                            Food AI
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 15 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.1 }}
                            className="text-2xl sm:text-3xl font-black tracking-tight mb-3"
                        >
                            Scannez vos repas
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 15 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.2 }}
                            className="text-muted-foreground text-sm mb-4"
                        >
                            Prenez en photo et obtenez les calories et macros instantanément.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : {}}
                            transition={{ delay: 0.3 }}
                            className="flex items-center justify-center lg:justify-start gap-1.5 text-xs font-medium"
                        >
                            <Zap className="w-4 h-4 text-accent" />
                            Analyse en 2 secondes
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
