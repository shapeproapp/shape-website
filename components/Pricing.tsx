"use client";

import { Check, Crown } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const plans = [
    {
        name: "Mensuel",
        price: "14.99€",
        period: "/mois",
        features: [
            "Programmes d'entraînement IA illimités",
            "Scanner nutritionnel illimité",
            "Suivi de progression avancé",
            "Coach IA disponible 24/7",
            "Annulable à tout moment"
        ],
        popular: false,
    },
    {
        name: "Annuel",
        price: "6.99€",
        period: "/mois",
        billing: "Facturé 83.88€ par an",
        savings: "Économisez 50%",
        features: [
            "Tout ce qui est inclus dans le mensuel",
            "Accès prioritaire aux nouvelles fonctionnalités",
            "Badge membre fondateur",
            "Support prioritaire",
            "Garantie satisfait ou remboursé 30j"
        ],
        popular: true,
    },
];

export function Pricing() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="pricing" className="py-24 lg:py-32 relative overflow-hidden">
            <div ref={ref} className="max-w-5xl mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-4"
                    >
                        Tarifs simples
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-muted-foreground"
                    >
                        Moins cher qu'un café par semaine. Des résultats pour la vie.
                    </motion.p>
                </div>

                {/* Pricing Cards */}
                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                            className={`relative rounded-3xl p-8 ${plan.popular
                                    ? "bg-foreground text-background"
                                    : "bg-secondary"
                                }`}
                        >
                            {/* Popular Badge */}
                            {plan.popular && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                                    <div className="flex items-center gap-1.5 px-4 py-1.5 bg-accent text-white text-xs font-bold rounded-full">
                                        <Crown className="w-3.5 h-3.5" />
                                        POPULAIRE
                                    </div>
                                </div>
                            )}

                            {/* Plan Name */}
                            <p className={`text-sm font-medium mb-4 ${plan.popular ? "text-background/60" : "text-muted-foreground"}`}>
                                {plan.name}
                            </p>

                            {/* Price */}
                            <div className="flex items-baseline gap-1 mb-2">
                                <span className="text-5xl font-black">{plan.price}</span>
                                <span className={`text-lg ${plan.popular ? "text-background/60" : "text-muted-foreground"}`}>{plan.period}</span>
                            </div>

                            {plan.billing && (
                                <p className={`text-sm mb-2 ${plan.popular ? "text-background/60" : "text-muted-foreground"}`}>
                                    {plan.billing}
                                </p>
                            )}

                            {plan.savings && (
                                <span className="inline-block px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full mb-6">
                                    {plan.savings}
                                </span>
                            )}

                            {!plan.savings && <div className="mb-6" />}

                            {/* Features */}
                            <ul className="space-y-3 mb-8">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${plan.popular ? "bg-accent" : "bg-foreground"
                                            }`}>
                                            <Check className="w-3 h-3 text-white" />
                                        </div>
                                        <span className={`text-sm ${plan.popular ? "text-background/80" : "text-foreground/80"}`}>
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            {/* CTA Button */}
                            <button className={`w-full py-4 rounded-2xl font-bold text-lg transition-all ${plan.popular
                                    ? "bg-accent text-white hover:brightness-110"
                                    : "bg-foreground text-background hover:opacity-90"
                                }`}>
                                Commencer gratuitement
                            </button>
                        </motion.div>
                    ))}
                </div>

                {/* Trust Badge */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.5 }}
                    className="text-center text-sm text-muted-foreground mt-8"
                >
                    🔒 Paiement sécurisé via App Store • Annulation facile à tout moment
                </motion.p>
            </div>
        </section>
    );
}
