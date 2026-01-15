"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const steps = [
    { num: "1", title: "Questions", image: "/assets/app-screens/nutrition-light.png" },
    { num: "2", title: "Plan IA", image: "/assets/app-screens/weekly-plan-light.png" },
    { num: "3", title: "Progrès", image: "/assets/app-screens/home-light.png" },
];

export function HowItWorks() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section className="py-12 sm:py-16 bg-secondary/50 px-4 sm:px-6">
            <div ref={ref} className="max-w-3xl mx-auto">
                {/* Header */}
                <motion.h2
                    initial={{ opacity: 0, y: 15 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    className="text-2xl sm:text-3xl font-black tracking-tight text-center mb-8"
                >
                    Comment ça marche
                </motion.h2>

                {/* Steps */}
                <div className="grid grid-cols-3 gap-3 sm:gap-6">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: index * 0.1 }}
                            className="text-center"
                        >
                            {/* Number */}
                            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-accent text-white font-black text-sm sm:text-base flex items-center justify-center mx-auto mb-3">
                                {step.num}
                            </div>

                            {/* Phone */}
                            <div className="relative mx-auto w-20 sm:w-28 mb-2">
                                <div className="relative bg-foreground rounded-xl sm:rounded-2xl p-0.5 sm:p-1">
                                    <div className="relative aspect-[9/19.5] bg-card rounded-lg sm:rounded-xl overflow-hidden">
                                        <Image src={step.image} alt={step.title} fill className="object-cover" />
                                    </div>
                                </div>
                            </div>

                            <p className="text-xs sm:text-sm font-semibold">{step.title}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
