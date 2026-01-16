"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const steps = [
    {
        num: "01",
        title: "Répondez à quelques questions",
        desc: "Objectifs, équipement, disponibilité",
        image: "/assets/app-screens/nutrition-light.png"
    },
    {
        num: "02",
        title: "L'IA génère votre plan",
        desc: "Programme personnalisé en 10 secondes",
        image: "/assets/app-screens/weekly-plan-light.png"
    },
    {
        num: "03",
        title: "Suivez vos progrès",
        desc: "Dashboard complet et motivation",
        image: "/assets/app-screens/home-light.png"
    },
];

export function HowItWorks() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className="py-24 sm:py-32 px-4 sm:px-6 border-t border-border">
            <div ref={ref} className="max-w-5xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    className="text-center mb-16 sm:mb-20"
                >
                    <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">Comment ça marche</p>
                    <h2 className="text-4xl sm:text-5xl font-black tracking-tight">
                        3 étapes simples
                    </h2>
                </motion.div>

                {/* Steps */}
                <div className="space-y-16 sm:space-y-24">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 60 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.2 + index * 0.2, duration: 0.8 }}
                            className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 sm:gap-16`}
                        >
                            {/* Text */}
                            <div className="flex-1 text-center md:text-left">
                                <span className="text-6xl sm:text-8xl font-black text-muted-foreground/20">{step.num}</span>
                                <h3 className="text-2xl sm:text-3xl font-bold -mt-4 mb-3">{step.title}</h3>
                                <p className="text-muted-foreground text-lg">{step.desc}</p>
                            </div>

                            {/* Phone */}
                            <div className="flex-1 flex justify-center">
                                <div className="relative w-48 sm:w-56">
                                    <div className="relative glass rounded-[36px] p-1.5 border border-border">
                                        <div className="relative aspect-[9/19.5] bg-card rounded-[30px] overflow-hidden">
                                            <Image src={step.image} alt={step.title} fill className="object-cover" />
                                        </div>
                                    </div>
                                    {/* Glow */}
                                    <div className="absolute -inset-8 bg-foreground/5 rounded-full blur-3xl -z-10" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
