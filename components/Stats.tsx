"use client";

import { motion, useInView } from "framer-motion";
import { Sparkles, Zap, Infinity } from "lucide-react";
import { useRef } from "react";
import { Dictionary } from "@/lib/dictionary";

interface StatsProps {
    dict: Dictionary['stats'];
}

export function Stats({ dict }: StatsProps) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const icons = [Sparkles, Zap, Infinity];

    return (
        <section ref={ref} className="py-24 sm:py-32 border-t border-border">
            <div className="max-w-5xl mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4">
                    {dict.map((stat, index) => {
                        const Icon = icons[index];
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: index * 0.15, duration: 0.8 }}
                                className="text-center"
                            >
                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-secondary border border-border mb-4">
                                    <Icon className="w-5 h-5 text-muted-foreground" />
                                </div>
                                <p className="text-4xl sm:text-5xl font-black mb-1">{stat.value}</p>
                                <p className="text-lg font-semibold mb-1">{stat.label}</p>
                                <p className="text-sm text-muted-foreground">{stat.desc}</p>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}
