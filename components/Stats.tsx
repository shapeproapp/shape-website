"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import { Sparkles, Clock, Zap, Star } from "lucide-react";

const stats = [
    {
        value: 100,
        suffix: "%",
        label: "Personnalisé",
        description: "Chaque plan est unique",
        icon: Sparkles,
        color: "from-blue-500 to-cyan-500"
    },
    {
        value: 24,
        suffix: "/7",
        label: "Disponibilité",
        description: "Coach IA toujours présent",
        icon: Clock,
        color: "from-accent to-orange-400"
    },
    {
        value: 1,
        suffix: "s",
        label: "Analyse",
        description: "Résultats instantanés",
        icon: Zap,
        color: "from-green-500 to-emerald-400"
    },
    {
        value: 4.9,
        suffix: "/5",
        decimals: 1,
        label: "Note App",
        description: "Utilisateurs satisfaits",
        icon: Star,
        color: "from-yellow-500 to-amber-400"
    }
];

function Counter({ value, suffix = "", decimals = 0 }: { value: number; suffix?: string; decimals?: number }) {
    const ref = useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {
        stiffness: 50,
        damping: 20,
        duration: 2000
    });
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [motionValue, isInView, value]);

    useEffect(() => {
        const unsubscribe = springValue.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = latest.toFixed(decimals);
            }
        });
        return () => unsubscribe();
    }, [springValue, decimals]);

    return (
        <span ref={ref} className="tabular-nums">
            0
        </span>
    );
}

export function Stats() {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Subtle gradient line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                delay: index * 0.1,
                                duration: 0.6,
                                ease: [0.16, 1, 0.3, 1]
                            }}
                            whileHover={{ y: -5 }}
                            className="group relative"
                        >
                            <div className="text-center p-6 sm:p-8 rounded-3xl bg-card border border-border hover:border-accent/30 transition-all duration-500">
                                {/* Gradient Glow on Hover */}
                                <motion.div
                                    className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 blur-xl transition-opacity duration-500`}
                                />

                                {/* Icon */}
                                <motion.div
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    className={`w-12 h-12 mx-auto mb-5 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg`}
                                >
                                    <stat.icon className="w-5 h-5 text-white" />
                                </motion.div>

                                {/* Number */}
                                <div className="text-4xl sm:text-5xl font-black mb-2">
                                    <Counter
                                        value={stat.value}
                                        suffix={stat.suffix}
                                        decimals={stat.decimals || 0}
                                    />
                                    <span className="text-accent">{stat.suffix}</span>
                                </div>

                                {/* Label */}
                                <p className="text-sm font-bold text-foreground uppercase tracking-wide mb-1">
                                    {stat.label}
                                </p>
                                <p className="text-xs text-muted-foreground">
                                    {stat.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
