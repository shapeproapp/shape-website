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
            "Programmes IA illimités",
            "Scanner nutrition",
            "Suivi de progression",
            "Coach IA 24/7",
        ],
        popular: false,
    },
    {
        name: "Annuel",
        price: "6.99€",
        period: "/mois",
        billing: "83.88€/an",
        savings: "-50%",
        features: [
            "Tout le mensuel",
            "Accès prioritaire",
            "Badge fondateur",
            "Support prioritaire",
        ],
        popular: true,
    },
];

export function Pricing() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <section id="pricing" className="py-16 sm:py-24">
            <div ref={ref} className="max-w-4xl mx-auto px-4 sm:px-6">
                {/* Header */}
                <div className="text-center mb-10">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-3"
                    >
                        Tarifs simples
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.1 }}
                        className="text-muted-foreground text-base"
                    >
                        Moins cher qu'un café par semaine
                    </motion.p>
                </div>

                {/* Cards */}
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.1 + index * 0.1 }}
                            className={`relative rounded-2xl sm:rounded-3xl p-5 sm:p-6 ${plan.popular
                                    ? "bg-foreground text-background"
                                    : "bg-secondary"
                                }`}
                        >
                            {/* Popular Badge */}
                            {plan.popular && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                                    <div className="flex items-center gap-1 px-3 py-1 bg-accent text-white text-xs font-bold rounded-full">
                                        <Crown className="w-3 h-3" />
                                        POPULAIRE
                                    </div>
                                </div>
                            )}

                            {/* Plan Name */}
                            <p className={`text-sm font-medium mb-2 ${plan.popular ? "text-background/60" : "text-muted-foreground"}`}>
                                {plan.name}
                            </p>

                            {/* Price */}
                            <div className="flex items-baseline gap-1 mb-1">
                                <span className="text-3xl sm:text-4xl font-black">{plan.price}</span>
                                <span className={`text-sm ${plan.popular ? "text-background/60" : "text-muted-foreground"}`}>{plan.period}</span>
                                {plan.savings && (
                                    <span className="ml-2 px-2 py-0.5 bg-green-500 text-white text-xs font-bold rounded-full">
                                        {plan.savings}
                                    </span>
                                )}
                            </div>

                            {plan.billing && (
                                <p className={`text-xs mb-4 ${plan.popular ? "text-background/50" : "text-muted-foreground"}`}>
                                    {plan.billing}
                                </p>
                            )}

                            {!plan.billing && <div className="mb-4" />}

                            {/* Features */}
                            <ul className="space-y-2 mb-5">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm">
                                        <Check className={`w-4 h-4 flex-shrink-0 ${plan.popular ? "text-accent" : "text-foreground"}`} />
                                        <span className={plan.popular ? "text-background/80" : "text-foreground/80"}>
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            {/* CTA */}
                            <button className={`w-full py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base transition-all ${plan.popular
                                    ? "bg-accent text-white hover:brightness-110"
                                    : "bg-foreground text-background hover:opacity-90"
                                }`}>
                                Commencer
                            </button>
                        </motion.div>
                    ))}
                </div>

                {/* Trust */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.4 }}
                    className="text-center text-xs sm:text-sm text-muted-foreground mt-6"
                >
                    🔒 Paiement sécurisé • Annulation facile
                </motion.p>
            </div>
        </section>
    );
}
