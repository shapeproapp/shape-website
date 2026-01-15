"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, X, Minus } from "lucide-react";

const features = [
    { name: "Programmes générés par IA", shape: true, others: "manual" },
    { name: "Scanner repas intelligent", shape: true, others: "partial" },
    { name: "Mode créateur de plans", shape: true, others: false },
    { name: "Coach IA disponible 24/7", shape: true, others: false },
    { name: "Suivi des macros automatique", shape: true, others: true },
    { name: "Ajustement dynamique", shape: true, others: false },
    { name: "Interface premium", shape: true, others: "partial" },
    { name: "Prix abordable", shape: true, others: false },
];

export function Comparison() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className="py-32 lg:py-40 relative overflow-hidden">
            <div className="max-w-5xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div ref={ref} className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        className="pill glass text-foreground inline-flex items-center gap-2 mb-8"
                    >
                        <span className="w-2 h-2 rounded-full bg-accent" />
                        COMPARAISON
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.1 }}
                        className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-6"
                    >
                        Pourquoi choisir
                        <br />
                        <span className="text-gradient-accent">SHAPE ?</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-muted-foreground max-w-2xl mx-auto"
                    >
                        La différence entre une app fitness ordinaire et un vrai coach personnel IA.
                    </motion.p>
                </div>

                {/* Comparison Table */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="rounded-3xl bg-card border border-border overflow-hidden shadow-app-lg"
                >
                    {/* Table Header */}
                    <div className="grid grid-cols-3 gap-4 p-6 bg-secondary/50 border-b border-border">
                        <div className="font-semibold text-muted-foreground">Fonctionnalité</div>
                        <div className="text-center">
                            <span className="inline-flex items-center gap-2 font-black text-xl">
                                <span className="text-gradient-accent">SHAPE</span>
                            </span>
                        </div>
                        <div className="text-center font-semibold text-muted-foreground">Autres Apps</div>
                    </div>

                    {/* Table Rows */}
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.4 + index * 0.05 }}
                            className={`grid grid-cols-3 gap-4 p-6 items-center ${index !== features.length - 1 ? "border-b border-border" : ""
                                } hover:bg-secondary/30 transition-colors`}
                        >
                            <div className="font-medium">{feature.name}</div>

                            {/* SHAPE Column */}
                            <div className="flex justify-center">
                                <motion.div
                                    whileHover={{ scale: 1.2 }}
                                    className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center"
                                >
                                    <Check className="w-5 h-5 text-green-500" />
                                </motion.div>
                            </div>

                            {/* Others Column */}
                            <div className="flex justify-center">
                                {feature.others === true ? (
                                    <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center">
                                        <Check className="w-5 h-5 text-green-500" />
                                    </div>
                                ) : feature.others === "partial" ? (
                                    <div className="w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center">
                                        <Minus className="w-5 h-5 text-yellow-500" />
                                    </div>
                                ) : feature.others === "manual" ? (
                                    <div className="w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center">
                                        <Minus className="w-5 h-5 text-yellow-500" />
                                    </div>
                                ) : (
                                    <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center">
                                        <X className="w-5 h-5 text-red-500" />
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.8 }}
                    className="text-center mt-12"
                >
                    <p className="text-muted-foreground">
                        Prêt à faire le bon choix ? {" "}
                        <a href="#pricing" className="text-accent font-semibold hover:underline">
                            Voir les tarifs →
                        </a>
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
