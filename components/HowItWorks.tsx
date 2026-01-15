"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { MessageSquare, Sparkles, Trophy } from "lucide-react";

const steps = [
    {
        number: "01",
        title: "Répondez aux questions",
        description: "Objectifs, équipement, disponibilité",
        icon: MessageSquare,
        image: "/assets/app-screens/nutrition-light.png"
    },
    {
        number: "02",
        title: "L'IA génère votre plan",
        description: "Programme personnalisé en secondes",
        icon: Sparkles,
        image: "/assets/app-screens/weekly-plan-light.png"
    },
    {
        number: "03",
        title: "Suivez vos progrès",
        description: "Dashboard complet et motivation",
        icon: Trophy,
        image: "/assets/app-screens/home-light.png"
    }
];

export function HowItWorks() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <section className="py-16 sm:py-24 bg-secondary/30">
            <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6">
                {/* Header */}
                <div className="text-center mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4"
                    >
                        3 étapes pour commencer
                    </motion.h2>
                </div>

                {/* Steps */}
                <div className="grid sm:grid-cols-3 gap-6">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: index * 0.15, duration: 0.5 }}
                            className="text-center"
                        >
                            {/* Step Number */}
                            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent text-white font-black text-lg mb-4">
                                {step.number}
                            </div>

                            {/* Phone Preview */}
                            <div className="relative mx-auto w-32 sm:w-40 mb-4">
                                <div className="relative bg-foreground rounded-[24px] p-1 shadow-lg">
                                    <div className="relative aspect-[9/19.5] bg-card rounded-[20px] overflow-hidden">
                                        <Image
                                            src={step.image}
                                            alt={step.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Text */}
                            <h3 className="font-bold text-base sm:text-lg mb-1">{step.title}</h3>
                            <p className="text-sm text-muted-foreground">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
