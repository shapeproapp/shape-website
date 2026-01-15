"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { MessageSquare, Sparkles, Trophy } from "lucide-react";

const steps = [
    {
        number: "01",
        title: "Répondez à quelques questions",
        description: "Parlez-nous de vos objectifs, votre niveau et vos préférences. Notre IA analyse votre profil en profondeur.",
        icon: MessageSquare,
        image: "/assets/app-screens/nutrition-light.png",
        color: "from-blue-500 to-cyan-500"
    },
    {
        number: "02",
        title: "Recevez votre plan personnalisé",
        description: "En quelques secondes, notre IA génère un programme d'entraînement et nutrition 100% adapté à vous.",
        icon: Sparkles,
        image: "/assets/app-screens/weekly-plan-light.png",
        color: "from-accent to-orange-400"
    },
    {
        number: "03",
        title: "Progressez et atteignez vos objectifs",
        description: "Suivez vos séances, scannez vos repas et regardez votre transformation en temps réel.",
        icon: Trophy,
        image: "/assets/app-screens/home-light.png",
        color: "from-green-500 to-emerald-500"
    }
];

function StepCard({ step, index }: { step: typeof steps[0]; index: number }) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
                duration: 0.8,
                delay: index * 0.2,
                ease: [0.16, 1, 0.3, 1]
            }}
            className="relative"
        >
            {/* Connection Line (except for last item) */}
            {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 left-full w-full h-px bg-gradient-to-r from-border to-transparent z-0" />
            )}

            <div className="relative group">
                {/* Card */}
                <div className="relative p-8 rounded-3xl bg-card border border-border hover:border-accent/30 transition-all duration-500 overflow-hidden">

                    {/* Gradient Glow on Hover */}
                    <motion.div
                        className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                    />

                    {/* Step Number */}
                    <div className="flex items-center gap-4 mb-6">
                        <motion.div
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}
                        >
                            <step.icon className="w-6 h-6 text-white" />
                        </motion.div>
                        <span className="text-5xl font-black text-muted-foreground/20">{step.number}</span>
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">
                        {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                        {step.description}
                    </p>

                    {/* Phone Preview */}
                    <motion.div
                        whileHover={{ y: -10, scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                        className="relative mx-auto w-40 aspect-[9/19.5] rounded-3xl overflow-hidden shadow-app-lg"
                    >
                        <div className="absolute inset-0 bg-black rounded-3xl p-1">
                            <div className="relative w-full h-full rounded-[20px] overflow-hidden">
                                <Image
                                    src={step.image}
                                    alt={step.title}
                                    fill
                                    className="object-cover object-top"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}

export function HowItWorks() {
    const headerRef = useRef<HTMLDivElement>(null);
    const isHeaderInView = useInView(headerRef, { once: true });

    return (
        <section className="py-32 lg:py-40 relative overflow-hidden">
            {/* Subtle Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div ref={headerRef} className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="pill glass text-foreground inline-flex items-center gap-2 mb-8"
                    >
                        <span className="w-2 h-2 rounded-full bg-accent" />
                        COMMENT ÇA MARCHE
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-6"
                    >
                        3 étapes vers
                        <br />
                        <span className="text-gradient-accent">votre transformation</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl text-muted-foreground max-w-2xl mx-auto"
                    >
                        Commencer n'a jamais été aussi simple. Notre IA s'occupe de tout.
                    </motion.p>
                </div>

                {/* Steps Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <StepCard key={index} step={step} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
