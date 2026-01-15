"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { Camera, Zap } from "lucide-react";

export function ScanDemo() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <section className="py-14 sm:py-20 px-4 sm:px-6 overflow-hidden">
            <div ref={ref} className="max-w-4xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

                    {/* Phone */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="flex justify-center order-1"
                    >
                        <motion.div
                            className="relative w-44 sm:w-52 lg:w-56"
                            whileHover={{ y: -5 }}
                        >
                            <div className="relative bg-foreground rounded-[32px] p-1.5 shadow-2xl">
                                <div className="relative aspect-[9/19.5] bg-card rounded-[28px] overflow-hidden">
                                    <Image
                                        src="/assets/app-screens/food-detail-dark.png"
                                        alt="Food Scanner"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Text */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="text-center lg:text-left order-2"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-foreground text-background rounded-full text-xs font-semibold mb-4">
                            <Camera className="w-3 h-3" />
                            Food AI
                        </div>

                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight mb-3">
                            Scannez vos repas
                        </h2>

                        <p className="text-muted-foreground text-sm sm:text-base mb-6 max-w-sm mx-auto lg:mx-0">
                            Prenez en photo et obtenez les calories et macros instantanément.
                        </p>

                        <div className="flex items-center justify-center lg:justify-start gap-2 text-xs font-medium">
                            <Zap className="w-4 h-4" />
                            Analyse en 2 secondes
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
