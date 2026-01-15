"use client";

import { motion, useInView } from "framer-motion";
import { Check, X } from "lucide-react";
import { useRef } from "react";

const features = [
    { name: "Programmes IA personnalisés", shape: true, others: false },
    { name: "Scanner nutrition IA", shape: true, others: false },
    { name: "Suivi de progression", shape: true, others: true },
    { name: "Bibliothèque d'exercices", shape: true, others: true },
    { name: "Coach IA 24/7", shape: true, others: false },
    { name: "Mode créateur", shape: true, others: false },
];

export function Comparison() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <section className="py-16 sm:py-24 bg-secondary/30">
            <div ref={ref} className="max-w-3xl mx-auto px-4 sm:px-6">
                {/* Header */}
                <div className="text-center mb-10">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        className="text-3xl sm:text-4xl font-black tracking-tight mb-3"
                    >
                        Pourquoi SHAPE ?
                    </motion.h2>
                </div>

                {/* Comparison Table */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.1 }}
                    className="bg-background rounded-2xl sm:rounded-3xl overflow-hidden border border-border"
                >
                    {/* Header Row */}
                    <div className="grid grid-cols-3 text-center text-sm font-bold border-b border-border">
                        <div className="p-3 sm:p-4"></div>
                        <div className="p-3 sm:p-4 bg-accent text-white">SHAPE</div>
                        <div className="p-3 sm:p-4 text-muted-foreground">Autres</div>
                    </div>

                    {/* Feature Rows */}
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`grid grid-cols-3 text-center items-center ${index !== features.length - 1 ? "border-b border-border" : ""
                                }`}
                        >
                            <div className="p-3 sm:p-4 text-left text-xs sm:text-sm font-medium">
                                {feature.name}
                            </div>
                            <div className="p-3 sm:p-4 bg-accent/5">
                                <Check className="w-5 h-5 text-accent mx-auto" />
                            </div>
                            <div className="p-3 sm:p-4">
                                {feature.others ? (
                                    <Check className="w-5 h-5 text-muted-foreground mx-auto" />
                                ) : (
                                    <X className="w-5 h-5 text-muted-foreground/50 mx-auto" />
                                )}
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
