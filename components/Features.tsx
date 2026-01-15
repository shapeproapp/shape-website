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
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <section id="features" className="py-14 sm:py-20 px-4 sm:px-6">
            <div ref={ref} className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="text-center mb-10">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.1, duration: 0.6 }}
                        className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight"
                    >
                        Tout ce qu'il vous faut
                    </motion.h2>
                </div>

                {/* Grid - monochrome */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{
                                delay: 0.15 + index * 0.1,
                                duration: 0.6,
                                ease: [0.16, 1, 0.3, 1]
                            }}
                            whileHover={{ y: -4 }}
                            whileTap={{ scale: 0.98 }}
                            className="bg-secondary rounded-2xl sm:rounded-3xl p-3 sm:p-4 overflow-hidden border border-border/50"
                        >
                            {/* Icon & Title */}
                            <div className="flex items-center gap-2 mb-2">
                                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-foreground text-background flex items-center justify-center">
                                    <feature.icon className="w-4 h-4" />
                                </div>
                                <h3 className="text-xs sm:text-sm font-bold">{feature.title}</h3>
                            </div>

                            {/* Description */}
                            <p className="text-[10px] sm:text-xs text-muted-foreground mb-3">
                                {feature.description}
                            </p>

                            {/* Image */}
                            <motion.div
                                className="relative h-28 sm:h-36 rounded-xl overflow-hidden bg-card"
                                whileHover={{ scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <Image
                                    src={feature.image}
                                    alt={feature.title}
                                    fill
                                    className="object-cover object-top"
                                />
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
