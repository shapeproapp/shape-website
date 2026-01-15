"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { Dumbbell, Salad, Brain, Pencil } from "lucide-react";

const features = [
    {
        title: "Entraînement IA",
        description: "Programmes selon vos objectifs",
        image: "/assets/app-screens/workout-detail-dark.png",
        icon: Dumbbell,
    },
    {
        title: "Food AI",
        description: "Scannez vos repas facilement",
        image: "/assets/app-screens/food-detail-dark.png",
        icon: Salad,
    },
    {
        title: "Coach Personnel",
        description: "Assistant disponible 24/7",
        image: "/assets/app-screens/home-light.png",
        icon: Brain,
    },
    {
        title: "Mode Créateur",
        description: "Créez vos propres programmes",
        image: "/assets/app-screens/library-dark.png",
        icon: Pencil,
    },
];

export function Features() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section id="features" className="py-12 sm:py-16 px-4 sm:px-6">
            <div ref={ref} className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8">
                    <motion.h2
                        initial={{ opacity: 0, y: 15 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight mb-2"
                    >
                        Tout ce qu'il vous faut
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.1 }}
                        className="text-muted-foreground text-sm sm:text-base"
                    >
                        Une app complète pour votre transformation
                    </motion.p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.1 + index * 0.05 }}
                            className="bg-secondary rounded-xl sm:rounded-2xl p-3 sm:p-4"
                        >
                            {/* Icon & Title */}
                            <div className="flex items-center gap-2 mb-2">
                                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                                    <feature.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent" />
                                </div>
                                <h3 className="text-xs sm:text-sm font-bold">{feature.title}</h3>
                            </div>

                            {/* Description */}
                            <p className="text-[10px] sm:text-xs text-muted-foreground mb-3">
                                {feature.description}
                            </p>

                            {/* Image */}
                            <div className="relative h-24 sm:h-32 rounded-lg overflow-hidden bg-card">
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
