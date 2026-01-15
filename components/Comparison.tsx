"use client";

import { motion, useInView } from "framer-motion";
import { Check, X } from "lucide-react";
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
        <section className="py-14 sm:py-20 bg-secondary/30 px-4 sm:px-6">
            <div ref={ref} className="max-w-md mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    className="text-2xl sm:text-3xl font-black tracking-tight text-center mb-8"
                >
                    Pourquoi SHAPE ?
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.1 }}
                    className="bg-card rounded-2xl overflow-hidden border border-border"
                >
                    {/* Header - BLACK bg for SHAPE column */}
                    <div className="grid grid-cols-3 text-center text-xs font-bold">
                        <div className="p-3"></div>
                        <div className="p-3 bg-foreground text-background">SHAPE</div>
                        <div className="p-3 text-muted-foreground bg-secondary/50">Autres</div>
                    </div>

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
                            <div className="p-3 bg-foreground/5">
                                <Check className="w-5 h-5 text-foreground mx-auto" />
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
