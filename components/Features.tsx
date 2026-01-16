"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { Dumbbell, Utensils, Brain, Pencil, ArrowUpRight } from "lucide-react";

const features = [
    {
        title: "Entraînement IA",
        description: "Des programmes créés sur mesure par notre intelligence artificielle, adaptés à votre niveau et objectifs.",
        image: "/assets/app-screens/workout-detail-dark.png",
        icon: Dumbbell,
    },
    {
        title: "Nutrition AI",
        description: "Scannez vos repas et obtenez instantanément les calories et macros grâce à notre technologie de pointe.",
        image: "/assets/app-screens/food-detail-dark.png",
        icon: Utensils,
    },
    {
        title: "Coach Personnel",
        description: "Un assistant intelligent disponible 24/7 pour répondre à toutes vos questions fitness et nutrition.",
        image: "/assets/app-screens/home-light.png",
        icon: Brain,
    },
    {
        title: "Mode Créateur",
        description: "Créez et partagez vos propres programmes d'entraînement avec la communauté SHAPE.",
        image: "/assets/app-screens/library-dark.png",
        icon: Pencil,
    },
];

export function Features() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="features" className="py-24 sm:py-32 px-4 sm:px-6">
            <div ref={ref} className="max-w-6xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    className="text-center mb-16 sm:mb-20"
                >
                    <p className="text-sm uppercase tracking-widest text-white/40 mb-4">Fonctionnalités</p>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight">
                        Tout ce dont vous
                        <br />
                        <span className="text-gradient">avez besoin</span>
                    </h2>
                </motion.div>

                {/* Features grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.1 + index * 0.1, duration: 0.8 }}
                            className="group relative bg-white/[0.02] hover:bg-white/[0.05] border border-white/10 rounded-3xl p-6 sm:p-8 transition-all duration-500 overflow-hidden"
                        >
                            {/* Icon & Title row */}
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                                        <feature.icon className="w-5 h-5 text-white/70" />
                                    </div>
                                    <h3 className="text-xl sm:text-2xl font-bold">{feature.title}</h3>
                                </div>
                                <ArrowUpRight className="w-5 h-5 text-white/20 group-hover:text-white/60 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                            </div>

                            {/* Description */}
                            <p className="text-white/50 text-sm sm:text-base leading-relaxed mb-6">
                                {feature.description}
                            </p>

                            {/* Image */}
                            <div className="relative h-48 sm:h-56 rounded-2xl overflow-hidden bg-black/50">
                                <Image
                                    src={feature.image}
                                    alt={feature.title}
                                    fill
                                    className="object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
