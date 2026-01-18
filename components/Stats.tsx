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
        <section ref={ref} className="py-12 sm:py-32 border-t border-border">
            <div className="max-w-5xl mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-3 gap-2 sm:gap-4">
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
                                <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-secondary border border-border mb-2 sm:mb-4">
                                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
                                </div>
                                <p className="text-2xl sm:text-5xl font-black mb-1 text-foreground">{stat.value}</p>
                                <p className="text-sm sm:text-lg font-semibold mb-1 text-foreground">{stat.label}</p>
                                <p className="text-[10px] sm:text-sm text-muted-foreground leading-tight px-1">{stat.desc}</p>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}
