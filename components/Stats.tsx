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
        <section ref={ref} className="py-10 sm:py-14 border-y border-border/50">
            <div className="max-w-lg mx-auto px-4">
                <div className="grid grid-cols-3 gap-2">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="text-center py-3"
                        >
                            <div className="w-10 h-10 mx-auto mb-2 rounded-xl bg-foreground text-background flex items-center justify-center">
                                <stat.icon className="w-5 h-5" />
                            </div>
                            <p className="text-2xl sm:text-3xl font-black">{stat.value}</p>
                            <p className="text-[11px] text-muted-foreground mt-0.5">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
