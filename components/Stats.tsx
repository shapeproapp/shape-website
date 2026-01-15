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
                            initial={{ opacity: 0, y: 20, scale: 0.9 }}
                            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                            transition={{
                                delay: index * 0.1,
                                duration: 0.6,
                                ease: [0.16, 1, 0.3, 1]
                            }}
                            className="relative text-center py-4 px-2 rounded-2xl bg-gradient-to-b from-secondary/50 to-transparent"
                        >
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={isInView ? { scale: 1 } : {}}
                                transition={{ delay: 0.2 + index * 0.1, type: "spring", stiffness: 200 }}
                                className="w-10 h-10 mx-auto mb-2 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center"
                            >
                                <stat.icon className="w-5 h-5 text-accent" />
                            </motion.div>
                            <p className="text-2xl sm:text-3xl font-black">{stat.value}</p>
                            <p className="text-[11px] text-muted-foreground mt-0.5">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
