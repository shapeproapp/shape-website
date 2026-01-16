"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { Camera, Zap, Target } from "lucide-react";

export function ScanDemo() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className="py-24 sm:py-32 px-4 sm:px-6 border-t border-white/10 overflow-hidden">
            <div ref={ref} className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Phone */}
                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="flex justify-center order-1"
                    >
                        <div className="relative">
                            {/* Floating cards */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.5, duration: 0.6 }}
                                className="absolute -right-8 top-12 bg-white/10 backdrop-blur-xl rounded-2xl p-3 border border-white/20 z-20"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-xl bg-green-500/20 flex items-center justify-center">
                                        <span className="text-green-400 text-xs font-bold">P</span>
                                    </div>
                                    <div>
                                        <p className="text-xs text-white/50">Protéines</p>
                                        <p className="text-sm font-bold">32g</p>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.7, duration: 0.6 }}
                                className="absolute -left-8 bottom-20 bg-white/10 backdrop-blur-xl rounded-2xl p-3 border border-white/20 z-20"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-xl bg-orange-500/20 flex items-center justify-center">
                                        <span className="text-orange-400 text-xs font-bold">C</span>
                                    </div>
                                    <div>
                                        <p className="text-xs text-white/50">Glucides</p>
                                        <p className="text-sm font-bold">45g</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Phone */}
                            <div className="relative w-56 sm:w-64">
                                <div className="relative bg-white/10 backdrop-blur-xl rounded-[40px] p-1.5 border border-white/20">
                                    <div className="relative aspect-[9/19.5] bg-black rounded-[34px] overflow-hidden">
                                        <Image
                                            src="/assets/app-screens/food-detail-dark.png"
                                            alt="Food Scanner"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                                <div className="absolute -inset-12 bg-white/5 rounded-full blur-3xl -z-10" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Text */}
                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="order-2"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-white/10 bg-white/5">
                            <Camera className="w-4 h-4 text-white/70" />
                            <span className="text-sm text-white/70">Food AI</span>
                        </div>

                        <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-4">
                            Scannez vos repas
                        </h2>

                        <p className="text-lg text-white/50 mb-8 max-w-md">
                            Prenez simplement en photo votre repas et obtenez instantanément les calories et macronutriments.
                        </p>

                        {/* Features list */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                                    <Zap className="w-4 h-4 text-white/70" />
                                </div>
                                <div>
                                    <p className="font-semibold">Analyse en 2 secondes</p>
                                    <p className="text-sm text-white/40">IA de reconnaissance visuelle</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                                    <Target className="w-4 h-4 text-white/70" />
                                </div>
                                <div>
                                    <p className="font-semibold">Précision optimale</p>
                                    <p className="text-sm text-white/40">Macros détaillées automatiquement</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
