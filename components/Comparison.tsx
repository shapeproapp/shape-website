"use client";

import { motion, useInView } from "framer-motion";
import { Check, X, Sparkles } from "lucide-react";
import { useRef } from "react";

const features = [
    { name: "Programmes IA personnalisés", shape: true, others: false },
    { name: "Scanner nutrition IA", shape: true, others: false },
    { name: "Suivi de progression", shape: true, others: true },
    { name: "Coach IA disponible 24/7", shape: true, others: false },
];

export function Comparison() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <section className="py-14 sm:py-20 bg-gradient-to-b from-background to-secondary/30 px-4 sm:px-6">
            <div ref={ref} className="max-w-md mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    className="text-center mb-8"
                >
                    <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
                        Pourquoi SHAPE ?
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.1, duration: 0.6 }}
                    className="bg-card rounded-2xl overflow-hidden border border-border shadow-premium-lg"
                >
                    {/* Header */}
                    <div className="grid grid-cols-3 text-center text-xs font-bold">
                        <div className="p-3"></div>
                        <div className="p-3 bg-gradient-to-r from-accent to-orange-500 text-white flex items-center justify-center gap-1">
                            <Sparkles className="w-3 h-3" />
                            SHAPE
                        </div>
                        <div className="p-3 text-muted-foreground bg-secondary/50">Autres</div>
                    </div>

                    {/* Rows with staggered animation */}
                    {features.map((f, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.2 + i * 0.1 }}
                            className={`grid grid-cols-3 text-center items-center ${i !== features.length - 1 ? "border-b border-border" : ""
                                }`}
                        >
                            <div className="p-3 text-left text-xs font-medium">{f.name}</div>
                            <div className="p-3 bg-accent/5">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={isInView ? { scale: 1 } : {}}
                                    transition={{ delay: 0.4 + i * 0.1, type: "spring" }}
                                >
                                    <Check className="w-5 h-5 text-accent mx-auto" />
                                </motion.div>
                            </div>
                            <div className="p-3 bg-secondary/30">
                                {f.others ? (
                                    <Check className="w-5 h-5 text-muted-foreground mx-auto" />
                                ) : (
                                    <X className="w-5 h-5 text-muted-foreground/30 mx-auto" />
                                )}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
