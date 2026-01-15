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
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <section ref={ref} className="py-12 sm:py-16 border-y border-border bg-secondary/30">
            <div className="max-w-5xl mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-3 gap-4 sm:gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="text-center"
                        >
                            <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 mx-auto mb-2 text-accent" />
                            <p className="text-2xl sm:text-3xl lg:text-4xl font-black">{stat.value}</p>
                            <p className="text-xs sm:text-sm text-muted-foreground">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
