"use client";

import { motion, useInView } from "framer-motion";
import { Check, X } from "lucide-react";
import { useRef } from "react";

const features = [
    { name: "Programmes IA personnalisés", shape: true, others: false },
    { name: "Scanner nutrition IA", shape: true, others: false },
    { name: "Coach IA 24/7", shape: true, others: false },
    { name: "Suivi de progression", shape: true, others: true },
    { name: "Mode hors ligne", shape: true, others: true },
];

export function Comparison() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className="py-24 sm:py-32 px-4 sm:px-6 border-t border-border">
            <div ref={ref} className="max-w-2xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    className="text-center mb-16"
                >
                    <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">Comparaison</p>
                    <h2 className="text-4xl sm:text-5xl font-black tracking-tight">
                        Pourquoi SHAPE ?
                    </h2>
                </motion.div>

                {/* Table */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.1 }}
                    className="rounded-3xl border border-border overflow-hidden"
                >
                    {/* Header row */}
                    <div className="grid grid-cols-3 text-center border-b border-border">
                        <div className="p-4 sm:p-6"></div>
                        <div className="p-4 sm:p-6 bg-foreground text-background font-bold">
                            SHAPE
                        </div>
                        <div className="p-4 sm:p-6 text-muted-foreground font-medium">
                            Autres
                        </div>
                    </div>

                    {/* Feature rows */}
                    {features.map((f, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.15 + i * 0.05 }}
                            className={`grid grid-cols-3 text-center items-center ${i !== features.length - 1 ? "border-b border-border" : ""
                                }`}
                        >
                            <div className="p-4 sm:p-5 text-left text-sm sm:text-base font-medium">
                                {f.name}
                            </div>
                            <div className="p-4 sm:p-5 bg-secondary/50">
                                <Check className="w-5 h-5 mx-auto" />
                            </div>
                            <div className="p-4 sm:p-5">
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
