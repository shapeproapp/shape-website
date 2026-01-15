"use client";

import { motion, useInView } from "framer-motion";
import { Sparkles, Zap, Target } from "lucide-react";
import { useRef } from "react";

const stats = [
    { icon: Sparkles, value: "100%", label: "Personnalisé" },
    { icon: Zap, value: "24/7", label: "Coach IA" },
    { icon: Target, value: "∞", label: "Exercices" }
];

export function Stats() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section ref={ref} className="py-8 sm:py-12 border-y border-border">
            <div className="max-w-lg mx-auto px-4">
                <div className="grid grid-cols-3 gap-2">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: index * 0.1 }}
                            className="text-center py-2"
                        >
                            <stat.icon className="w-4 h-4 mx-auto mb-1 text-accent" />
                            <p className="text-xl sm:text-2xl font-black">{stat.value}</p>
                            <p className="text-[10px] sm:text-xs text-muted-foreground">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
