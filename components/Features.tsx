"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { Sparkles, Brain, TrendingUp, Pencil } from "lucide-react";
import { useRef, MouseEvent } from "react";

const features = [
    {
        title: "Programmes IA",
        description: "Entraînements personnalisés générés par IA selon votre niveau, objectifs et zones à cibler.",
        image: "/assets/app-screens/workout-detail-dark.png",
        pill: "IA AVANCÉE",
        icon: Brain,
        gradient: "from-blue-500 to-cyan-500"
    },
    {
        title: "Food AI",
        description: "Scanner vos repas et calculer automatiquement les calories et macros en moins de 2 secondes.",
        image: "/assets/app-screens/food-detail-dark.png",
        pill: "SCANNER IA",
        icon: Sparkles,
        gradient: "from-accent to-orange-400"
    },
    {
        title: "Mode Créateur",
        description: "Créez vos propres programmes d'entraînement avec une liberté totale sur les exercices et séries.",
        image: "/assets/app-screens/library-dark.png",
        pill: "PERSONNALISATION",
        icon: Pencil,
        gradient: "from-pink-500 to-rose-400"
    },
    {
        title: "Suivi Intelligent",
        description: "Visualisez votre évolution avec des analytics détaillées et des insights personnalisés.",
        image: "/assets/app-screens/home-dark.png",
        pill: "ANALYTICS",
        icon: TrendingUp,
        gradient: "from-green-500 to-emerald-400"
    }
];

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
    const cardRef = useRef<HTMLDivElement>(null);

    // Mouse position for 3D tilt
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), { stiffness: 300, damping: 30 });
    const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), { stiffness: 300, damping: 30 });

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        mouseX.set((e.clientX - centerX) / rect.width);
        mouseY.set((e.clientY - centerY) / rect.height);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d"
            }}
            className="group relative overflow-hidden rounded-3xl bg-card border border-border cursor-pointer"
        >
            {/* Image Section */}
            <div className="relative h-64 sm:h-72 overflow-hidden">
                <motion.div
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.6 }}
                    className="w-full h-full"
                >
                    <Image
                        src={feature.image}
                        alt={feature.title}
                        fill
                        className="object-cover object-top"
                    />
                </motion.div>

                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${feature.gradient} opacity-20 mix-blend-multiply`} />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />

                {/* Pill Tag */}
                <motion.div
                    className="absolute top-5 left-5"
                    whileHover={{ scale: 1.05, y: -2 }}
                >
                    <div className="pill bg-black/60 backdrop-blur-xl text-white flex items-center gap-2 text-xs">
                        <feature.icon className="w-3.5 h-3.5" />
                        {feature.pill}
                    </div>
                </motion.div>

                {/* Shine effect on hover */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100"
                    initial={{ x: "-100%", y: "-100%" }}
                    whileHover={{ x: "100%", y: "100%" }}
                    transition={{ duration: 0.6 }}
                />
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8" style={{ transform: "translateZ(30px)" }}>
                <h3 className="text-2xl sm:text-3xl font-bold mb-3 group-hover:text-accent transition-colors duration-300">
                    {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                </p>
            </div>

            {/* Bottom accent line */}
            <motion.div
                className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient}`}
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.4 }}
                style={{ transformOrigin: "left" }}
            />
        </motion.div>
    );
}

export function Features() {
    return (
        <section id="features" className="py-32 lg:py-40 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="pill glass text-foreground inline-flex items-center gap-2 mb-8"
                    >
                        <span className="w-2 h-2 rounded-full bg-accent" />
                        FONCTIONNALITÉS
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-6"
                    >
                        Le futur du
                        <br />
                        <span className="text-gradient-accent">fitness</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-muted-foreground max-w-2xl mx-auto"
                    >
                        Tout ce dont vous avez besoin pour transformer votre corps, propulsé par l'IA.
                    </motion.p>
                </div>

                {/* Feature Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {features.map((feature, index) => (
                        <FeatureCard key={index} feature={feature} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
