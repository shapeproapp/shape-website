"use client";

import { motion, useInView } from "framer-motion";
import { Sparkles, Zap, Infinity } from "lucide-react";
import { useRef } from "react";

const stats = [
    { icon: Sparkles, value: "100%", label: "Personnalisé", desc: "Adapté à vos objectifs" },
    { icon: Zap, value: "24/7", label: "Coach IA", desc: "Toujours disponible" },
    { icon: Infinity, value: "∞", label: "Exercices", desc: "Bibliothèque complète" }
];

export function Stats() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} className="py-24 sm:py-32 border-t border-white/10">
            <div className="max-w-5xl mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: index * 0.15, duration: 0.8 }}
                            className="text-center"
                        >
                            <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white/5 border border-white/10 mb-4">
                                <stat.icon className="w-5 h-5 text-white/70" />
                            </div>
                            <p className="text-4xl sm:text-5xl font-black mb-1">{stat.value}</p>
                            <p className="text-lg font-semibold text-white/80 mb-1">{stat.label}</p>
                            <p className="text-sm text-white/40">{stat.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
