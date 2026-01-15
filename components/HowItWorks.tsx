"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const steps = [
    { num: "1", title: "Répondez", sub: "Questions rapides", image: "/assets/app-screens/nutrition-light.png" },
    { num: "2", title: "Générez", sub: "Plan IA en 10s", image: "/assets/app-screens/weekly-plan-light.png" },
    { num: "3", title: "Progressez", sub: "Suivi en temps réel", image: "/assets/app-screens/home-light.png" },
];

export function HowItWorks() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <section className="py-14 sm:py-20 bg-secondary/50 px-4 sm:px-6">
            <div ref={ref} className="max-w-3xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    className="text-2xl sm:text-3xl font-black tracking-tight text-center mb-10"
                >
                    Comment ça marche
                </motion.h2>

                <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.2 + index * 0.15, duration: 0.6 }}
                            className="flex-shrink-0 w-[140px] sm:w-auto sm:flex-1 snap-center text-center"
                        >
                            {/* Number - black */}
                            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-foreground text-background font-black text-lg flex items-center justify-center">
                                {step.num}
                            </div>

                            {/* Phone */}
                            <motion.div
                                className="relative mx-auto w-24 sm:w-28 mb-3"
                                whileHover={{ y: -3 }}
                            >
                                <div className="relative bg-foreground rounded-2xl p-0.5 shadow-lg">
                                    <div className="relative aspect-[9/19.5] bg-card rounded-[14px] overflow-hidden">
                                        <Image src={step.image} alt={step.title} fill className="object-cover" />
                                    </div>
                                </div>
                            </motion.div>

                            <p className="font-bold text-sm">{step.title}</p>
                            <p className="text-[10px] text-muted-foreground">{step.sub}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
