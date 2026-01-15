"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { Dumbbell, Salad, Brain, Pencil } from "lucide-react";

const features = [
    {
        title: "Entraînement IA",
        description: "Programmes générés selon vos objectifs et équipement",
        image: "/assets/app-screens/workout-detail-dark.png",
        icon: Dumbbell,
    },
    {
        title: "Food AI",
        description: "Scannez vos repas pour un suivi nutritionnel instantané",
        image: "/assets/app-screens/food-detail-dark.png",
        icon: Salad,
    },
    {
        title: "Coach Personnel",
        description: "Un assistant disponible 24/7 pour vous guider",
        image: "/assets/app-screens/home-light.png",
        icon: Brain,
    },
    {
        title: "Mode Créateur",
        description: "Créez vos propres programmes sur mesure",
        image: "/assets/app-screens/library-dark.png",
        icon: Pencil,
    },
];

export function Features() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <section id="features" className="py-16 sm:py-24">
            <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6">
                {/* Header */}
                <div className="text-center mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4"
                    >
                        Tout ce dont vous avez besoin
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.1 }}
                        className="text-muted-foreground text-base sm:text-lg max-w-md mx-auto"
                    >
                        Une app complète pour transformer votre corps
                    </motion.p>
                </div>

                {/* Features Grid */}
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.1 + index * 0.1, duration: 0.5 }}
                            className="group relative bg-secondary rounded-2xl sm:rounded-3xl p-4 sm:p-6 overflow-hidden"
                        >
                            {/* Icon & Title */}
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                                    <feature.icon className="w-5 h-5 text-accent" />
                                </div>
                                <h3 className="text-lg sm:text-xl font-bold">{feature.title}</h3>
                            </div>

                            {/* Description */}
                            <p className="text-sm sm:text-base text-muted-foreground mb-4">
                                {feature.description}
                            </p>

                            {/* Phone Preview */}
                            <div className="relative h-40 sm:h-48 rounded-xl overflow-hidden bg-card">
                                <Image
                                    src={feature.image}
                                    alt={feature.title}
                                    fill
                                    className="object-cover object-top"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
