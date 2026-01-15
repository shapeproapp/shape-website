"use client";

import { motion, useInView } from "framer-motion";
import { Check, X } from "lucide-react";
import { useRef } from "react";

const features = [
    { name: "Programmes IA", shape: true, others: false },
    { name: "Scanner food", shape: true, others: false },
    { name: "Suivi progrès", shape: true, others: true },
    { name: "Coach 24/7", shape: true, others: false },
];

export function Comparison() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section className="py-12 sm:py-16 bg-secondary/50 px-4 sm:px-6">
            <div ref={ref} className="max-w-md mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 15 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    className="text-2xl sm:text-3xl font-black tracking-tight text-center mb-6"
                >
                    Pourquoi SHAPE ?
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.1 }}
                    className="bg-background rounded-xl overflow-hidden border border-border"
                >
                    {/* Header */}
                    <div className="grid grid-cols-3 text-center text-xs font-bold border-b border-border">
                        <div className="p-2"></div>
                        <div className="p-2 bg-accent text-white">SHAPE</div>
                        <div className="p-2 text-muted-foreground">Autres</div>
                    </div>

                    {/* Rows */}
                    {features.map((f, i) => (
                        <div key={i} className={`grid grid-cols-3 text-center items-center ${i !== features.length - 1 ? "border-b border-border" : ""}`}>
                            <div className="p-2.5 text-left text-xs font-medium">{f.name}</div>
                            <div className="p-2.5 bg-accent/5">
                                <Check className="w-4 h-4 text-accent mx-auto" />
                            </div>
                            <div className="p-2.5">
                                {f.others ? <Check className="w-4 h-4 text-muted-foreground mx-auto" /> : <X className="w-4 h-4 text-muted-foreground/40 mx-auto" />}
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
