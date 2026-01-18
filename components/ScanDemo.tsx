"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { Camera, Zap, Target } from "lucide-react";
import { Dictionary } from "@/lib/dictionary";

interface ScanDemoProps {
    dict: Dictionary['scanDemo'];
}

export function ScanDemo({ dict }: ScanDemoProps) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className="py-12 sm:py-32 px-4 sm:px-6 border-t border-border overflow-hidden">
            <div ref={ref} className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">

                    {/* Text Section (Mobile: First, Desktop: Second) */}
                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="order-1 lg:order-2"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-border bg-secondary/50">
                            <Camera className="w-4 h-4 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">{dict.badge}</span>
                        </div>

                        <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-4">
                            {dict.title}
                        </h2>

                        <p className="text-lg text-muted-foreground mb-8 max-w-md">
                            {dict.description}
                        </p>

                        {/* Desktop Features List */}
                        <div className="space-y-4 hidden lg:block">
                            {dict.features.map((feature, index) => {
                                const icons = [Zap, Target];
                                const Icon = icons[index];
                                return (
                                    <div key={index} className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-secondary border border-border flex items-center justify-center">
                                            <Icon className="w-4 h-4 text-muted-foreground" />
                                        </div>
                                        <div>
                                            <p className="font-semibold">{feature.title}</p>
                                            <p className="text-sm text-muted-foreground">{feature.desc}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </motion.div>

                    {/* Phone Section (Mobile: Second, Desktop: First) */}
                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="flex justify-center order-2 lg:order-1"
                    >
                        <div className="relative">
                            {/* Floating cards */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5, duration: 0.6 }}
                                className="absolute -right-4 sm:-right-8 top-8 sm:top-12 glass rounded-2xl p-2 sm:p-3 z-20 scale-90 sm:scale-100"
                            >
                                <div className="flex items-center gap-2 sm:gap-3">
                                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-xl bg-green-500/20 flex items-center justify-center">
                                        <span className="text-green-500 text-xs font-bold">P</span>
                                    </div>
                                    <div>
                                        <p className="text-[10px] sm:text-xs text-muted-foreground">{dict.cards.protein}</p>
                                        <p className="text-xs sm:text-sm font-bold">32g</p>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.7, duration: 0.6 }}
                                className="absolute -left-4 sm:-left-8 bottom-16 sm:bottom-20 glass rounded-2xl p-2 sm:p-3 z-20 scale-90 sm:scale-100"
                            >
                                <div className="flex items-center gap-2 sm:gap-3">
                                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-xl bg-orange-500/20 flex items-center justify-center">
                                        <span className="text-orange-500 text-xs font-bold">C</span>
                                    </div>
                                    <div>
                                        <p className="text-[10px] sm:text-xs text-muted-foreground">{dict.cards.carbs}</p>
                                        <p className="text-xs sm:text-sm font-bold">45g</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Phone */}
                            <div className="relative w-56 sm:w-64">
                                <div className="relative glass rounded-[40px] p-1.5">
                                    <div className="relative aspect-[9/19.5] bg-card rounded-[34px] overflow-hidden">
                                        <Image
                                            src="/assets/app-screens/food-detail-dark.png"
                                            alt="Food Scanner"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                                <div className="absolute -inset-12 bg-foreground/5 rounded-full blur-3xl -z-10" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Mobile Features List (Order 3) */}
                    <div className="space-y-4 lg:hidden block order-3">
                        {dict.features.map((feature, index) => {
                            const icons = [Zap, Target];
                            const Icon = icons[index];
                            return (
                                <div key={index} className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-secondary border border-border flex items-center justify-center">
                                        <Icon className="w-4 h-4 text-muted-foreground" />
                                    </div>
                                    <div>
                                        <p className="font-semibold">{feature.title}</p>
                                        <p className="text-sm text-muted-foreground">{feature.desc}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                </div>
            </div>
        </section>
    );
}
